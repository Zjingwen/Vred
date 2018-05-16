
var Picker = require("../picker.js");
var Clock = require("../src/clock.js");

module.exports = {

    mixins: [Picker],

    created: function() {
        this.panel = Clock
    }
};