let throttle = require('./throttle.js');

module.exports = function( delay, atBegin, callback ) {
  return !function() {
    if ( callback === undefined ) {
      throttle(delay, atBegin, false);
    } else {
      throttle(delay, callback, atBegin !== false);
    };
  };
};
