/**
 *  import { PopupManager } from 'element-ui/src/utils/popup';
 */
let MessageConstructor = Vue.extend(require('./message.js'));

let instance;
let instances = [];
let seed = 1;

let message = function(options) {
  if (Vue.prototype.$isServer) return;

  options = options || {};

  if (typeof options === 'string') {
    options = {
      message: options,
    };
  }
  let userOnClose = options.onClose;
  let id = 'message_' + seed++;

  options.onClose = function() {
    message.close(id, userOnClose);
  };

  instance = new MessageConstructor({
    data: options,
  });
  instance.id = id;
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  instance.vm.visible = true;
  instance.dom = instance.vm.$el;
  // instance.dom.style.zIndex = PopupManager.nextZIndex();
  instances.push(instance);
  return instance.vm;
};

['success', 'warning', 'info', 'error', 'custom'].forEach(function(type) {
  message[type] = function(options) {
    if (typeof options === 'string') {
      options = {
        message: options,
      };
    }
    options.type = type;
    return message(options);
  };
});

message.close = function(id, userOnClose) {
  for (let i = 0, len = instances.length; i < len; i++) {
    if (id === instances[i].id) {
      if (typeof userOnClose === 'function') {
        userOnClose(instances[i]);
      }
      instances.splice(i, 1);
      break;
    }
  }
};

module.exports = message;
