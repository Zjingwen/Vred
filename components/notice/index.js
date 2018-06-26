import NoticeComponent from './notice.vue';

let NoticeConstructor = Vue.extend(NoticeComponent);
let instance = null;
let instances = [];
let index = 1;

let notice = function(options) {
  options = options || {};

  let userOnClose = options.onClose;
  let id = 'notice_' + index++;

  options.onClose = function() {
    notice.close(id, userOnClose);
  };

  instance = new NoticeConstructor({
    data: options,
  });

  instance.id = id;
  instance.vm = instance.$mount(); // 返回实例自身

  instance.vm.visible = true;
  instance.dom = instance.vm.$el;

  document.body.appendChild(instance.vm.$el);

  let topDist = 0;
  for (let i = 0, len = instances.length; i < len; i++) {
    topDist += instances[i].$el.offsetHeight + 16;
  }
  topDist += 16;
  instance.top = topDist;

  instances.push(instance);

  return instance.vm;
};

['success', 'warning', 'info', 'error'].forEach(function(type) {
  notice[type] = function(options) {
    if (typeof options === 'string') {
      options = {
        notice: options,
      };
    }
    options.type = type;
    return notice(options);
  };
});

notice.close = function(id, userOnClose) {
  let index;
  let removedHeight;
  let len = instances.length;
  for (let i = 0; i < len; i++) {
    if (id === instances[i].id) {
      if (typeof userOnClose === 'function') {
        userOnClose(instances[i]);
      }
      index = i;
      removedHeight = instances[i].dom.offsetHeight;
      instances.splice(i, 1);
      break;
    }
  }

  if (len > 1) {
    for (let i = index; i < len - 1; i++) {
      instances[i].dom.style.top = parseInt(instances[i].dom.style.top, 10) - removedHeight - 16 + 'px';
    }
  }
};

export default notice;
