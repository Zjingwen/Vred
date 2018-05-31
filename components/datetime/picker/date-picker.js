
let Picker = require('../picker.js');
let Date = require('../src/date.js');

module.exports = {

    mixins: [Picker],

    created: function() {
        this.panel = Date;
    },
};
