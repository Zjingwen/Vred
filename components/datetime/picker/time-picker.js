let Picker = require('../picker.js');
let Clock = require('../src/clock.js');

module.exports = {
  mixins: [Picker],
  created: function() {
    this.panel = Clock;
  },
};
