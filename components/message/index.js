
//import { PopupManager } from 'element-ui/src/utils/popup';
var MessageConstructor = Vue.extend(require('./message.js'));

var instance;
var instances = [];
var seed = 1;

var Message = function(options) {

    if (Vue.prototype.$isServer) return;

    options = options || {};

    if (typeof options === 'string') {
        options = {
            message: options
        };
    }
    var userOnClose = options.onClose;
    var id = 'message_' + seed++;

    options.onClose = function() {
        Message.close(id, userOnClose);
    };

    instance = new MessageConstructor({
        data: options
    });
    instance.id = id;
    instance.vm = instance.$mount();
    document.body.appendChild(instance.vm.$el);
    instance.vm.visible = true;
    instance.dom = instance.vm.$el;
    //instance.dom.style.zIndex = PopupManager.nextZIndex();
    instances.push(instance);
    return instance.vm;
};

['success', 'warning', 'info', 'error','custom'].forEach(function (type) {
    Message[type] = function (options) {
        if (typeof options === 'string') {
            options = {
                message: options
            };
        }
        options.type = type;
        return Message(options);
    };
});

Message.close = function(id, userOnClose) {
    for (var i = 0, len = instances.length; i < len; i++) {
        if (id === instances[i].id) {
            if (typeof userOnClose === 'function') {
                userOnClose(instances[i]);
            }
            instances.splice(i, 1);
            break;
        }
    }
};

module.exports = Message;