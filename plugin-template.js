/* ============================================
Vanilla JS Plugin

Author: Isaac Vazquez
Version: 1.0

Notes:

Supported Browsers:
Chrome, ...
============================================ */

(function() {
  "use strict";

  Object.prototype.plugin = function() {
    var _ = this; // 'this' is the element which invoked the Object.prototype.plugin function. (ex: element.plugin();)
    _.options = arguments[0];

    // Default options
    var options = {
      option1: 'Test',
      option2: true
    }

    var methods = {
      init: function() {
        _.initialized = true;
        _.style.color = 'red';
        console.log(options);
        // methods._createPluginElements();
      },
      _createPluginElements: function() {
        // console.log(_.children);
      },
      publicMethod: function() {
        console.log('Public Method.');
      },
      publicMethod2: function() {
        console.log('Public Method2.');
      }
    }

    // Either apply the options, or run a public Method
    // Deny all requests to run a private Method.
    // (i.e. if the arguments[0] begin with '_')
    // =================================================
    if(typeof _.options === 'object') {
      // Override Default Options
      options = Object.assign(options, _.options);
    }else if (_.options.charAt(0) !== '_' && typeof _.options !== 'object' && typeof _.options === 'string' && methods[_.options]) {
      methods[_.options]();
    }

    // Initialize Plugin if it hasn't been already
    // ===========================================
    if(_.initialized !== true) {
      methods.init();
    }

  }
})();
