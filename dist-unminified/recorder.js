(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Recorder"] = factory();
	else
		root["Recorder"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/recorder.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || Function(\"return this\")() || (1, eval)(\"this\");\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL2dsb2JhbC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL1JlY29yZGVyLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcz9jZDAwIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLCBldmFsKShcInRoaXNcIik7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/webpack/buildin/global.js\n");

/***/ }),

/***/ "./src/recorder.js":
/*!*************************!*\
  !*** ./src/recorder.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {\n\nvar AudioContext = global.AudioContext || global.webkitAudioContext;\n\n\n// Constructor\nvar Recorder = function( config ){\n\n  if ( !Recorder.isRecordingSupported() ) {\n    throw new Error(\"Recording is not supported in this browser\");\n  }\n\n  this.state = \"inactive\";\n  this.config = Object.assign({\n    bufferLength: 4096,\n    encoderApplication: 2049,\n    encoderFrameSize: 20,\n    encoderPath: 'encoderWorker.min.js',\n    encoderSampleRate: 48000,\n    maxBuffersPerPage: 40,\n    mediaTrackConstraints: true,\n    monitorGain: 0,\n    numberOfChannels: 1,\n    recordingGain: 1,\n    resampleQuality: 3,\n    streamPages: false,\n    wavBitDepth: 16,\n    fastSound: {}\n  }, config );\n};\n\n\n// Static Methods\nRecorder.isRecordingSupported = function(){\n  return AudioContext && global.navigator && global.navigator.mediaDevices && global.navigator.mediaDevices.getUserMedia && global.WebAssembly;\n};\n\n\n// Instance Methods\nRecorder.prototype.clearStream = function(){\n  if ( this.stream ){\n\n    if ( this.stream.getTracks ) {\n      this.stream.getTracks().forEach( function( track ){\n        track.stop();\n      });\n    }\n\n    else {\n      this.stream.stop();\n    }\n\n    delete this.stream;\n  }\n\n  if ( this.audioContext && this.closeAudioContext ){\n    this.audioContext.close();\n    delete this.audioContext;\n  }\n};\n\nRecorder.prototype.encodeBuffers = function( inputBuffer ){\n  if ( this.state === \"recording\" ) {\n    var buffers = [];\n    for ( var i = 0; i < inputBuffer.numberOfChannels; i++ ) {\n      buffers[i] = inputBuffer.getChannelData(i);\n    }\n\n    this.encoder.postMessage({\n      command: \"encode\",\n      buffers: buffers\n    });\n  }\n};\n\nRecorder.prototype.initAudioContext = function( sourceNode ){\n  if (sourceNode && sourceNode.context) {\n    this.audioContext = sourceNode.context;\n    this.closeAudioContext = false;\n  }\n\n  else {\n    this.audioContext = new AudioContext();\n    this.closeAudioContext = true;\n  }\n\n  return this.audioContext;\n};\n\nRecorder.prototype.initAudioGraph = function(){\n  var self = this;\n\n  // First buffer can contain old data. Don't encode it.\n  this.encodeBuffers = function(){\n    delete this.encodeBuffers;\n  };\n\n  this.scriptProcessorNode = this.audioContext.createScriptProcessor( this.config.bufferLength, this.config.numberOfChannels, this.config.numberOfChannels );\n  this.scriptProcessorNode.connect( this.audioContext.destination );\n  this.scriptProcessorNode.onaudioprocess = function( e ) {\n    self.encodeBuffers( e.inputBuffer );\n  };\n\n  this.monitorGainNode = this.audioContext.createGain();\n  this.setMonitorGain( this.config.monitorGain );\n  this.monitorGainNode.connect( this.audioContext.destination );\n\n  this.recordingGainNode = this.audioContext.createGain();\n  this.setRecordingGain( this.config.recordingGain );\n  this.recordingGainNode.connect( this.scriptProcessorNode );\n};\n\nRecorder.prototype.initSourceNode = function( sourceNode ){\n  var self = this;\n\n  if ( sourceNode && sourceNode.context ) {\n    return global.Promise.resolve( sourceNode );\n  }\n\n  return global.navigator.mediaDevices.getUserMedia({ audio : this.config.mediaTrackConstraints }).then( function( stream ){\n    self.stream = stream;\n    return self.audioContext.createMediaStreamSource( stream );\n  });\n};\n\nRecorder.prototype.initWorker = function(){\n  var self = this;\n  var onPage = (this.config.streamPages ? this.streamPage : this.storePage).bind(this);\n\n  this.recordedPages = [];\n  this.totalLength = 0;\n  this.encoder = new global.Worker( this.config.encoderPath );\n  return new Promise((resolve, reject) => {\n    this.encoder.addEventListener( \"message\", function(e) {\n      switch( e['data']['message'] ){\n        case 'ready':\n          resolve();\n          break;\n        case 'page':\n          onPage(e['data']['page']);\n          break;\n      }\n    });\n    this.encoder.postMessage( Object.assign({\n      command: 'init',\n      originalSampleRate: this.audioContext.sampleRate,\n      wavSampleRate: this.audioContext.sampleRate\n    }, this.config));\n  });\n};\n\nRecorder.prototype.pause = function(){\n  if ( this.state === \"recording\" ){\n    this.state = \"paused\";\n    this.onpause();\n  }\n};\n\nRecorder.prototype.resume = function() {\n  if ( this.state === \"paused\" ) {\n    this.state = \"recording\";\n    this.onresume();\n  }\n};\n\nRecorder.prototype.setRecordingGain = function( gain ){\n  this.config.recordingGain = gain;\n\n  if ( this.recordingGainNode && this.audioContext ) {\n    this.recordingGainNode.gain.setTargetAtTime(gain, this.audioContext.currentTime, 0.01);\n  }\n};\n\nRecorder.prototype.setMonitorGain = function( gain ){\n  this.config.monitorGain = gain;\n\n  if ( this.monitorGainNode && this.audioContext ) {\n    this.monitorGainNode.gain.setTargetAtTime(gain, this.audioContext.currentTime, 0.01);\n  }\n};\n\nRecorder.prototype.start = function( sourceNode ){\n  if ( this.state === \"inactive\" ) {\n    this.initAudioContext( sourceNode );\n    this.initAudioGraph();\n\n    return this.initSourceNode( sourceNode ).then( ( sourceNode ) => {\n      this.sourceNode = sourceNode;\n\n      return this.initWorker().then(() => {\n        this.state = \"recording\";\n        this.sourceNode.connect( this.monitorGainNode );\n        this.sourceNode.connect( this.recordingGainNode );\n        this.onstart();\n      });\n    });\n  }\n};\n\nRecorder.prototype.stop = function(){\n  if ( this.state !== \"inactive\" ) {\n    this.state = \"inactive\";\n    this.monitorGainNode.disconnect();\n    this.scriptProcessorNode.disconnect();\n    this.recordingGainNode.disconnect();\n    this.sourceNode.disconnect();\n    this.clearStream();\n    this.encoder.postMessage({ command: \"done\" });\n  }\n};\n\nRecorder.prototype.storePage = function( page ) {\n  if ( page === null ) {\n    var outputData = new Uint8Array( this.totalLength );\n    this.recordedPages.reduce( function( offset, page ){\n      outputData.set( page, offset );\n      return offset + page.length;\n    }, 0);\n\n    this.ondataavailable( outputData );\n    this.onstop();\n  }\n\n  else {\n    this.recordedPages.push( page );\n    this.totalLength += page.length;\n  }\n};\n\nRecorder.prototype.streamPage = function( page ) {\n  if ( page === null ) {\n    this.onstop();\n  }\n\n  else {\n    this.ondataavailable( page );\n  }\n};\n\n\n// Callback Handlers\nRecorder.prototype.ondataavailable = function(){};\nRecorder.prototype.onpause = function(){};\nRecorder.prototype.onresume = function(){};\nRecorder.prototype.onstart = function(){};\nRecorder.prototype.onstop = function(){};\n\n\nmodule.exports = Recorder;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVjb3JkZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SZWNvcmRlci8uL3NyYy9yZWNvcmRlci5qcz8wNTZmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgQXVkaW9Db250ZXh0ID0gZ2xvYmFsLkF1ZGlvQ29udGV4dCB8fCBnbG9iYWwud2Via2l0QXVkaW9Db250ZXh0O1xuXG5cbi8vIENvbnN0cnVjdG9yXG52YXIgUmVjb3JkZXIgPSBmdW5jdGlvbiggY29uZmlnICl7XG5cbiAgaWYgKCAhUmVjb3JkZXIuaXNSZWNvcmRpbmdTdXBwb3J0ZWQoKSApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZWNvcmRpbmcgaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG4gIH1cblxuICB0aGlzLnN0YXRlID0gXCJpbmFjdGl2ZVwiO1xuICB0aGlzLmNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIGJ1ZmZlckxlbmd0aDogNDA5NixcbiAgICBlbmNvZGVyQXBwbGljYXRpb246IDIwNDksXG4gICAgZW5jb2RlckZyYW1lU2l6ZTogMjAsXG4gICAgZW5jb2RlclBhdGg6ICdlbmNvZGVyV29ya2VyLm1pbi5qcycsXG4gICAgZW5jb2RlclNhbXBsZVJhdGU6IDQ4MDAwLFxuICAgIG1heEJ1ZmZlcnNQZXJQYWdlOiA0MCxcbiAgICBtZWRpYVRyYWNrQ29uc3RyYWludHM6IHRydWUsXG4gICAgbW9uaXRvckdhaW46IDAsXG4gICAgbnVtYmVyT2ZDaGFubmVsczogMSxcbiAgICByZWNvcmRpbmdHYWluOiAxLFxuICAgIHJlc2FtcGxlUXVhbGl0eTogMyxcbiAgICBzdHJlYW1QYWdlczogZmFsc2UsXG4gICAgd2F2Qml0RGVwdGg6IDE2LFxuICAgIGZhc3RTb3VuZDoge31cbiAgfSwgY29uZmlnICk7XG59O1xuXG5cbi8vIFN0YXRpYyBNZXRob2RzXG5SZWNvcmRlci5pc1JlY29yZGluZ1N1cHBvcnRlZCA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiBBdWRpb0NvbnRleHQgJiYgZ2xvYmFsLm5hdmlnYXRvciAmJiBnbG9iYWwubmF2aWdhdG9yLm1lZGlhRGV2aWNlcyAmJiBnbG9iYWwubmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEgJiYgZ2xvYmFsLldlYkFzc2VtYmx5O1xufTtcblxuXG4vLyBJbnN0YW5jZSBNZXRob2RzXG5SZWNvcmRlci5wcm90b3R5cGUuY2xlYXJTdHJlYW0gPSBmdW5jdGlvbigpe1xuICBpZiAoIHRoaXMuc3RyZWFtICl7XG5cbiAgICBpZiAoIHRoaXMuc3RyZWFtLmdldFRyYWNrcyApIHtcbiAgICAgIHRoaXMuc3RyZWFtLmdldFRyYWNrcygpLmZvckVhY2goIGZ1bmN0aW9uKCB0cmFjayApe1xuICAgICAgICB0cmFjay5zdG9wKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuc3RyZWFtLnN0b3AoKTtcbiAgICB9XG5cbiAgICBkZWxldGUgdGhpcy5zdHJlYW07XG4gIH1cblxuICBpZiAoIHRoaXMuYXVkaW9Db250ZXh0ICYmIHRoaXMuY2xvc2VBdWRpb0NvbnRleHQgKXtcbiAgICB0aGlzLmF1ZGlvQ29udGV4dC5jbG9zZSgpO1xuICAgIGRlbGV0ZSB0aGlzLmF1ZGlvQ29udGV4dDtcbiAgfVxufTtcblxuUmVjb3JkZXIucHJvdG90eXBlLmVuY29kZUJ1ZmZlcnMgPSBmdW5jdGlvbiggaW5wdXRCdWZmZXIgKXtcbiAgaWYgKCB0aGlzLnN0YXRlID09PSBcInJlY29yZGluZ1wiICkge1xuICAgIHZhciBidWZmZXJzID0gW107XG4gICAgZm9yICggdmFyIGkgPSAwOyBpIDwgaW5wdXRCdWZmZXIubnVtYmVyT2ZDaGFubmVsczsgaSsrICkge1xuICAgICAgYnVmZmVyc1tpXSA9IGlucHV0QnVmZmVyLmdldENoYW5uZWxEYXRhKGkpO1xuICAgIH1cblxuICAgIHRoaXMuZW5jb2Rlci5wb3N0TWVzc2FnZSh7XG4gICAgICBjb21tYW5kOiBcImVuY29kZVwiLFxuICAgICAgYnVmZmVyczogYnVmZmVyc1xuICAgIH0pO1xuICB9XG59O1xuXG5SZWNvcmRlci5wcm90b3R5cGUuaW5pdEF1ZGlvQ29udGV4dCA9IGZ1bmN0aW9uKCBzb3VyY2VOb2RlICl7XG4gIGlmIChzb3VyY2VOb2RlICYmIHNvdXJjZU5vZGUuY29udGV4dCkge1xuICAgIHRoaXMuYXVkaW9Db250ZXh0ID0gc291cmNlTm9kZS5jb250ZXh0O1xuICAgIHRoaXMuY2xvc2VBdWRpb0NvbnRleHQgPSBmYWxzZTtcbiAgfVxuXG4gIGVsc2Uge1xuICAgIHRoaXMuYXVkaW9Db250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuICAgIHRoaXMuY2xvc2VBdWRpb0NvbnRleHQgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuYXVkaW9Db250ZXh0O1xufTtcblxuUmVjb3JkZXIucHJvdG90eXBlLmluaXRBdWRpb0dyYXBoID0gZnVuY3Rpb24oKXtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIC8vIEZpcnN0IGJ1ZmZlciBjYW4gY29udGFpbiBvbGQgZGF0YS4gRG9uJ3QgZW5jb2RlIGl0LlxuICB0aGlzLmVuY29kZUJ1ZmZlcnMgPSBmdW5jdGlvbigpe1xuICAgIGRlbGV0ZSB0aGlzLmVuY29kZUJ1ZmZlcnM7XG4gIH07XG5cbiAgdGhpcy5zY3JpcHRQcm9jZXNzb3JOb2RlID0gdGhpcy5hdWRpb0NvbnRleHQuY3JlYXRlU2NyaXB0UHJvY2Vzc29yKCB0aGlzLmNvbmZpZy5idWZmZXJMZW5ndGgsIHRoaXMuY29uZmlnLm51bWJlck9mQ2hhbm5lbHMsIHRoaXMuY29uZmlnLm51bWJlck9mQ2hhbm5lbHMgKTtcbiAgdGhpcy5zY3JpcHRQcm9jZXNzb3JOb2RlLmNvbm5lY3QoIHRoaXMuYXVkaW9Db250ZXh0LmRlc3RpbmF0aW9uICk7XG4gIHRoaXMuc2NyaXB0UHJvY2Vzc29yTm9kZS5vbmF1ZGlvcHJvY2VzcyA9IGZ1bmN0aW9uKCBlICkge1xuICAgIHNlbGYuZW5jb2RlQnVmZmVycyggZS5pbnB1dEJ1ZmZlciApO1xuICB9O1xuXG4gIHRoaXMubW9uaXRvckdhaW5Ob2RlID0gdGhpcy5hdWRpb0NvbnRleHQuY3JlYXRlR2FpbigpO1xuICB0aGlzLnNldE1vbml0b3JHYWluKCB0aGlzLmNvbmZpZy5tb25pdG9yR2FpbiApO1xuICB0aGlzLm1vbml0b3JHYWluTm9kZS5jb25uZWN0KCB0aGlzLmF1ZGlvQ29udGV4dC5kZXN0aW5hdGlvbiApO1xuXG4gIHRoaXMucmVjb3JkaW5nR2Fpbk5vZGUgPSB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVHYWluKCk7XG4gIHRoaXMuc2V0UmVjb3JkaW5nR2FpbiggdGhpcy5jb25maWcucmVjb3JkaW5nR2FpbiApO1xuICB0aGlzLnJlY29yZGluZ0dhaW5Ob2RlLmNvbm5lY3QoIHRoaXMuc2NyaXB0UHJvY2Vzc29yTm9kZSApO1xufTtcblxuUmVjb3JkZXIucHJvdG90eXBlLmluaXRTb3VyY2VOb2RlID0gZnVuY3Rpb24oIHNvdXJjZU5vZGUgKXtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIGlmICggc291cmNlTm9kZSAmJiBzb3VyY2VOb2RlLmNvbnRleHQgKSB7XG4gICAgcmV0dXJuIGdsb2JhbC5Qcm9taXNlLnJlc29sdmUoIHNvdXJjZU5vZGUgKTtcbiAgfVxuXG4gIHJldHVybiBnbG9iYWwubmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoeyBhdWRpbyA6IHRoaXMuY29uZmlnLm1lZGlhVHJhY2tDb25zdHJhaW50cyB9KS50aGVuKCBmdW5jdGlvbiggc3RyZWFtICl7XG4gICAgc2VsZi5zdHJlYW0gPSBzdHJlYW07XG4gICAgcmV0dXJuIHNlbGYuYXVkaW9Db250ZXh0LmNyZWF0ZU1lZGlhU3RyZWFtU291cmNlKCBzdHJlYW0gKTtcbiAgfSk7XG59O1xuXG5SZWNvcmRlci5wcm90b3R5cGUuaW5pdFdvcmtlciA9IGZ1bmN0aW9uKCl7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIG9uUGFnZSA9ICh0aGlzLmNvbmZpZy5zdHJlYW1QYWdlcyA/IHRoaXMuc3RyZWFtUGFnZSA6IHRoaXMuc3RvcmVQYWdlKS5iaW5kKHRoaXMpO1xuXG4gIHRoaXMucmVjb3JkZWRQYWdlcyA9IFtdO1xuICB0aGlzLnRvdGFsTGVuZ3RoID0gMDtcbiAgdGhpcy5lbmNvZGVyID0gbmV3IGdsb2JhbC5Xb3JrZXIoIHRoaXMuY29uZmlnLmVuY29kZXJQYXRoICk7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgdGhpcy5lbmNvZGVyLmFkZEV2ZW50TGlzdGVuZXIoIFwibWVzc2FnZVwiLCBmdW5jdGlvbihlKSB7XG4gICAgICBzd2l0Y2goIGVbJ2RhdGEnXVsnbWVzc2FnZSddICl7XG4gICAgICAgIGNhc2UgJ3JlYWR5JzpcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3BhZ2UnOlxuICAgICAgICAgIG9uUGFnZShlWydkYXRhJ11bJ3BhZ2UnXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5lbmNvZGVyLnBvc3RNZXNzYWdlKCBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNvbW1hbmQ6ICdpbml0JyxcbiAgICAgIG9yaWdpbmFsU2FtcGxlUmF0ZTogdGhpcy5hdWRpb0NvbnRleHQuc2FtcGxlUmF0ZSxcbiAgICAgIHdhdlNhbXBsZVJhdGU6IHRoaXMuYXVkaW9Db250ZXh0LnNhbXBsZVJhdGVcbiAgICB9LCB0aGlzLmNvbmZpZykpO1xuICB9KTtcbn07XG5cblJlY29yZGVyLnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uKCl7XG4gIGlmICggdGhpcy5zdGF0ZSA9PT0gXCJyZWNvcmRpbmdcIiApe1xuICAgIHRoaXMuc3RhdGUgPSBcInBhdXNlZFwiO1xuICAgIHRoaXMub25wYXVzZSgpO1xuICB9XG59O1xuXG5SZWNvcmRlci5wcm90b3R5cGUucmVzdW1lID0gZnVuY3Rpb24oKSB7XG4gIGlmICggdGhpcy5zdGF0ZSA9PT0gXCJwYXVzZWRcIiApIHtcbiAgICB0aGlzLnN0YXRlID0gXCJyZWNvcmRpbmdcIjtcbiAgICB0aGlzLm9ucmVzdW1lKCk7XG4gIH1cbn07XG5cblJlY29yZGVyLnByb3RvdHlwZS5zZXRSZWNvcmRpbmdHYWluID0gZnVuY3Rpb24oIGdhaW4gKXtcbiAgdGhpcy5jb25maWcucmVjb3JkaW5nR2FpbiA9IGdhaW47XG5cbiAgaWYgKCB0aGlzLnJlY29yZGluZ0dhaW5Ob2RlICYmIHRoaXMuYXVkaW9Db250ZXh0ICkge1xuICAgIHRoaXMucmVjb3JkaW5nR2Fpbk5vZGUuZ2Fpbi5zZXRUYXJnZXRBdFRpbWUoZ2FpbiwgdGhpcy5hdWRpb0NvbnRleHQuY3VycmVudFRpbWUsIDAuMDEpO1xuICB9XG59O1xuXG5SZWNvcmRlci5wcm90b3R5cGUuc2V0TW9uaXRvckdhaW4gPSBmdW5jdGlvbiggZ2FpbiApe1xuICB0aGlzLmNvbmZpZy5tb25pdG9yR2FpbiA9IGdhaW47XG5cbiAgaWYgKCB0aGlzLm1vbml0b3JHYWluTm9kZSAmJiB0aGlzLmF1ZGlvQ29udGV4dCApIHtcbiAgICB0aGlzLm1vbml0b3JHYWluTm9kZS5nYWluLnNldFRhcmdldEF0VGltZShnYWluLCB0aGlzLmF1ZGlvQ29udGV4dC5jdXJyZW50VGltZSwgMC4wMSk7XG4gIH1cbn07XG5cblJlY29yZGVyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uKCBzb3VyY2VOb2RlICl7XG4gIGlmICggdGhpcy5zdGF0ZSA9PT0gXCJpbmFjdGl2ZVwiICkge1xuICAgIHRoaXMuaW5pdEF1ZGlvQ29udGV4dCggc291cmNlTm9kZSApO1xuICAgIHRoaXMuaW5pdEF1ZGlvR3JhcGgoKTtcblxuICAgIHJldHVybiB0aGlzLmluaXRTb3VyY2VOb2RlKCBzb3VyY2VOb2RlICkudGhlbiggKCBzb3VyY2VOb2RlICkgPT4ge1xuICAgICAgdGhpcy5zb3VyY2VOb2RlID0gc291cmNlTm9kZTtcblxuICAgICAgcmV0dXJuIHRoaXMuaW5pdFdvcmtlcigpLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnN0YXRlID0gXCJyZWNvcmRpbmdcIjtcbiAgICAgICAgdGhpcy5zb3VyY2VOb2RlLmNvbm5lY3QoIHRoaXMubW9uaXRvckdhaW5Ob2RlICk7XG4gICAgICAgIHRoaXMuc291cmNlTm9kZS5jb25uZWN0KCB0aGlzLnJlY29yZGluZ0dhaW5Ob2RlICk7XG4gICAgICAgIHRoaXMub25zdGFydCgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn07XG5cblJlY29yZGVyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24oKXtcbiAgaWYgKCB0aGlzLnN0YXRlICE9PSBcImluYWN0aXZlXCIgKSB7XG4gICAgdGhpcy5zdGF0ZSA9IFwiaW5hY3RpdmVcIjtcbiAgICB0aGlzLm1vbml0b3JHYWluTm9kZS5kaXNjb25uZWN0KCk7XG4gICAgdGhpcy5zY3JpcHRQcm9jZXNzb3JOb2RlLmRpc2Nvbm5lY3QoKTtcbiAgICB0aGlzLnJlY29yZGluZ0dhaW5Ob2RlLmRpc2Nvbm5lY3QoKTtcbiAgICB0aGlzLnNvdXJjZU5vZGUuZGlzY29ubmVjdCgpO1xuICAgIHRoaXMuY2xlYXJTdHJlYW0oKTtcbiAgICB0aGlzLmVuY29kZXIucG9zdE1lc3NhZ2UoeyBjb21tYW5kOiBcImRvbmVcIiB9KTtcbiAgfVxufTtcblxuUmVjb3JkZXIucHJvdG90eXBlLnN0b3JlUGFnZSA9IGZ1bmN0aW9uKCBwYWdlICkge1xuICBpZiAoIHBhZ2UgPT09IG51bGwgKSB7XG4gICAgdmFyIG91dHB1dERhdGEgPSBuZXcgVWludDhBcnJheSggdGhpcy50b3RhbExlbmd0aCApO1xuICAgIHRoaXMucmVjb3JkZWRQYWdlcy5yZWR1Y2UoIGZ1bmN0aW9uKCBvZmZzZXQsIHBhZ2UgKXtcbiAgICAgIG91dHB1dERhdGEuc2V0KCBwYWdlLCBvZmZzZXQgKTtcbiAgICAgIHJldHVybiBvZmZzZXQgKyBwYWdlLmxlbmd0aDtcbiAgICB9LCAwKTtcblxuICAgIHRoaXMub25kYXRhYXZhaWxhYmxlKCBvdXRwdXREYXRhICk7XG4gICAgdGhpcy5vbnN0b3AoKTtcbiAgfVxuXG4gIGVsc2Uge1xuICAgIHRoaXMucmVjb3JkZWRQYWdlcy5wdXNoKCBwYWdlICk7XG4gICAgdGhpcy50b3RhbExlbmd0aCArPSBwYWdlLmxlbmd0aDtcbiAgfVxufTtcblxuUmVjb3JkZXIucHJvdG90eXBlLnN0cmVhbVBhZ2UgPSBmdW5jdGlvbiggcGFnZSApIHtcbiAgaWYgKCBwYWdlID09PSBudWxsICkge1xuICAgIHRoaXMub25zdG9wKCk7XG4gIH1cblxuICBlbHNlIHtcbiAgICB0aGlzLm9uZGF0YWF2YWlsYWJsZSggcGFnZSApO1xuICB9XG59O1xuXG5cbi8vIENhbGxiYWNrIEhhbmRsZXJzXG5SZWNvcmRlci5wcm90b3R5cGUub25kYXRhYXZhaWxhYmxlID0gZnVuY3Rpb24oKXt9O1xuUmVjb3JkZXIucHJvdG90eXBlLm9ucGF1c2UgPSBmdW5jdGlvbigpe307XG5SZWNvcmRlci5wcm90b3R5cGUub25yZXN1bWUgPSBmdW5jdGlvbigpe307XG5SZWNvcmRlci5wcm90b3R5cGUub25zdGFydCA9IGZ1bmN0aW9uKCl7fTtcblJlY29yZGVyLnByb3RvdHlwZS5vbnN0b3AgPSBmdW5jdGlvbigpe307XG5cblxubW9kdWxlLmV4cG9ydHMgPSBSZWNvcmRlcjtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/recorder.js\n");

/***/ })

/******/ });
});