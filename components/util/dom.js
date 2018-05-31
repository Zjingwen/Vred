
module.exports = {
  on: (function() {
    if (document.addEventListener) {
      return function(element, event, handler) {
        if (element && event && handler) {
          element.addEventListener(event, handler, false);
        }
      };
    } else {
      return function(element, event, handler) {
        if (element && event && handler) {
          element.attachEvent('on' + event, handler);
        }
      };
    }
  })(),

  off: (function() {
    if (document.removeEventListener) {
      return function(element, event, handler) {
        if (element && event) {
          element.removeEventListener(event, handler, false);
        }
      };
    } else {
      return function(element, event, handler) {
        if (element && event) {
          element.detachEvent('on' + event, handler);
        }
      };
    }
  })(),

  once: function(el, event, fn) {
    var listener = function() {
      if (fn) {
        fn.apply(this, arguments);
      }
      this.off(el, event, listener);
    }.bind(this);
    this.on(el, event, listener);
  },
};
