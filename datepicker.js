/**
 * 组件安装
 */

var Clock = require("./datetime/picker/time-picker.js");
var Date = require("./datetime/picker/date-picker.js");

function install(Vue){

    Vue.component('t-clock-picker', Clock);
    Vue.component('t-date-picker', Date);
}

if(window.Vue){
    install(window.Vue)
}
