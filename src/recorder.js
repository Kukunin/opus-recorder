"use strict";

var AudioContext = global.AudioContext || global.webkitAudioContext;


// Constructor
var Recorder = function( config ){

  if ( !Recorder.isRecordingSupported() ) {
    throw new Error("Recording is not supported in this browser");
  }

  this.state = "inactive";
  this.config = Object.assign({
    bufferLength: 4096,
    encoderApplication: 2049,
    encoderFrameSize: 20,
    encoderPath: 'encoderWorker.min.js',
    encoderSampleRate: 48000,
    maxBuffersPerPage: 40,
    mediaTrackConstraints: true,
    monitorGain: 0,
    numberOfChannels: 1,
    recordingGain: 1,
    resampleQuality: 3,
    streamPages: false,
    wavBitDepth: 16,
    fastSound: {}
  }, config );
};


// Static Methods
Recorder.isRecordingSupported = function(){
  return AudioContext && global.navigator && global.navigator.mediaDevices && global.navigator.mediaDevices.getUserMedia && global.WebAssembly;
};


// Instance Methods
Recorder.prototype.clearStream = function(){
  if ( this.stream ){

    if ( this.stream.getTracks ) {
      this.stream.getTracks().forEach( function( track ){
        track.stop();
      });
    }

    else {
      this.stream.stop();
    }

    delete this.stream;
  }

  if ( this.audioContext && this.closeAudioContext ){
    this.audioContext.close();
    delete this.audioContext;
  }
};

Recorder.prototype.encodeBuffers = function( inputBuffer ){
  if ( this.state === "recording" ) {
    var buffers = [];
    for ( var i = 0; i < inputBuffer.numberOfChannels; i++ ) {
      buffers[i] = inputBuffer.getChannelData(i);
    }

    this.encoder.postMessage({
      command: "encode",
      buffers: buffers
    });
  }
};

Recorder.prototype.initAudioContext = function( sourceNode ){
  if (sourceNode && sourceNode.context) {
    this.audioContext = sourceNode.context;
    this.closeAudioContext = false;
  }

  else {
    this.audioContext = new AudioContext();
    this.closeAudioContext = true;
  }

  return this.audioContext;
};

Recorder.prototype.initAudioGraph = function(){
  var self = this;

  // First buffer can contain old data. Don't encode it.
  this.encodeBuffers = function(){
    delete this.encodeBuffers;
  };

  this.scriptProcessorNode = this.audioContext.createScriptProcessor( this.config.bufferLength, this.config.numberOfChannels, this.config.numberOfChannels );
  this.scriptProcessorNode.connect( this.audioContext.destination );
  this.scriptProcessorNode.onaudioprocess = function( e ) {
    self.encodeBuffers( e.inputBuffer );
  };

  this.monitorGainNode = this.audioContext.createGain();
  this.setMonitorGain( this.config.monitorGain );
  this.monitorGainNode.connect( this.audioContext.destination );

  this.recordingGainNode = this.audioContext.createGain();
  this.setRecordingGain( this.config.recordingGain );
  this.recordingGainNode.connect( this.scriptProcessorNode );
};

Recorder.prototype.initSourceNode = function( sourceNode ){
  var self = this;

  if ( sourceNode && sourceNode.context ) {
    return global.Promise.resolve( sourceNode );
  }

  return global.navigator.mediaDevices.getUserMedia({ audio : this.config.mediaTrackConstraints }).then( function( stream ){
    self.stream = stream;
    return self.audioContext.createMediaStreamSource( stream );
  });
};

Recorder.prototype.initWorker = function(){
  var self = this;
  var onPage = (this.config.streamPages ? this.streamPage : this.storePage).bind(this);

  this.recordedPages = [];
  this.totalLength = 0;
  this.encoder = new global.Worker( this.config.encoderPath );
  return new Promise((resolve, reject) => {
    this.encoder.addEventListener( "message", function(e) {
      switch( e['data']['message'] ){
        case 'ready':
          resolve();
          break;
        case 'page':
          onPage(e['data']['page']);
          break;
      }
    });
    this.encoder.postMessage( Object.assign({
      command: 'init',
      originalSampleRate: this.audioContext.sampleRate,
      wavSampleRate: this.audioContext.sampleRate
    }, this.config));
  });
};

Recorder.prototype.pause = function(){
  if ( this.state === "recording" ){
    this.state = "paused";
    this.onpause();
  }
};

Recorder.prototype.resume = function() {
  if ( this.state === "paused" ) {
    this.state = "recording";
    this.onresume();
  }
};

Recorder.prototype.setRecordingGain = function( gain ){
  this.config.recordingGain = gain;

  if ( this.recordingGainNode && this.audioContext ) {
    this.recordingGainNode.gain.setTargetAtTime(gain, this.audioContext.currentTime, 0.01);
  }
};

Recorder.prototype.setMonitorGain = function( gain ){
  this.config.monitorGain = gain;

  if ( this.monitorGainNode && this.audioContext ) {
    this.monitorGainNode.gain.setTargetAtTime(gain, this.audioContext.currentTime, 0.01);
  }
};

Recorder.prototype.start = function( sourceNode ){
  if ( this.state === "inactive" ) {
    this.initAudioContext( sourceNode );
    this.initAudioGraph();

    return this.initSourceNode( sourceNode ).then( ( sourceNode ) => {
      this.sourceNode = sourceNode;

      return this.initWorker().then(() => {
        this.state = "recording";
        this.sourceNode.connect( this.monitorGainNode );
        this.sourceNode.connect( this.recordingGainNode );
        this.onstart();
      });
    });
  }
};

Recorder.prototype.stop = function(){
  if ( this.state !== "inactive" ) {
    this.state = "inactive";
    this.monitorGainNode.disconnect();
    this.scriptProcessorNode.disconnect();
    this.recordingGainNode.disconnect();
    this.sourceNode.disconnect();
    this.clearStream();
    this.encoder.postMessage({ command: "done" });
  }
};

Recorder.prototype.storePage = function( page ) {
  if ( page === null ) {
    var outputData = new Uint8Array( this.totalLength );
    this.recordedPages.reduce( function( offset, page ){
      outputData.set( page, offset );
      return offset + page.length;
    }, 0);

    this.ondataavailable( outputData );
    this.onstop();
  }

  else {
    this.recordedPages.push( page );
    this.totalLength += page.length;
  }
};

Recorder.prototype.streamPage = function( page ) {
  if ( page === null ) {
    this.onstop();
  }

  else {
    this.ondataavailable( page );
  }
};


// Callback Handlers
Recorder.prototype.ondataavailable = function(){};
Recorder.prototype.onpause = function(){};
Recorder.prototype.onresume = function(){};
Recorder.prototype.onstart = function(){};
Recorder.prototype.onstop = function(){};


module.exports = Recorder;
