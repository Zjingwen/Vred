
var Picker = require("../picker.js");
var Date = require("../src/date.js");

module.exports = {

    mixins: [Picker],

    created: function() {
        this.panel = Date
    }
};