const DEFAULT_URL = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
const LOADING_URL = 'http://oss2.lanlanlife.com/77dcc7918b7ecdc1f841709c38f1546b_28x28.gif';
const DEFAULT_EVENTS = ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend', 'touchmove'];

let _ = {
  on: function(el, type, func) {
    el.addEventListener(type, func);
  },
  off: function(el, type, func) {
    el.removeEventListener(type, func);
  },
};

function find(arr, el) {
  let item;
  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i].el === el) {
      item = arr[i];
      break;
    }
  }
  return item;
}
function remove(arr, item) {
  if (!arr.length) return;
  let index = arr.indexOf(item);
  if (index > -1) return arr.splice(index, 1);
}

function throttle(action, delay) {
  let timeout = null;
  let lastRun = 0;
  return function() {
    if (timeout) return;
    let elapsed = Date.now() - lastRun;
    let context = this;
    let args = arguments;
    let runCallback = function() {
      lastRun = Date.now();
      timeout = false;
      action.apply(context, args);
    };
    if (elapsed >= delay) {
      runCallback();
    } else {
      timeout = setTimeout(runCallback, delay);
    }
  };
}
let style = function(el, prop) {
  return typeof getComputedStyle !== 'undefined'
    ? getComputedStyle(el, null).getPropertyValue(prop)
    : el.style[prop];
};

let overflow = function(el) {
  return style(el, 'overflow') + style(el, 'overflow-y') + style(el, 'overflow-x');
};
let scrollParent = function(el) {
  if (!(el instanceof HTMLElement)) return window;
  let parent = el;

  while (parent) {
    if (parent === document.body || parent === document.documentElement) break;

    if (!parent.parentNode) break;

    if (/(scroll|auto)/.test(overflow(parent))) return parent;

    parent = parent.parentNode;
  }
  return window;
};

let isIE = function(ver) {
  let b = document.createElement('b');
  b.innerHTML = '<!--[if IE ' + ver + ']><i></i><![endif]-->';
  return b.getElementsByTagName('i').length === 1;
};

function Listeners(options) {
  this.el = options.el;
  this.src = options.src;
  this.error = options.error;
  this.loading = options.loading;
  this.bindType = options.bindType;
  this.preLoad = options.preLoad;
  this.$parent = options.$parent;
  this.elRenderer = options.elRenderer;

  this.rect = options.el.getBoundingClientRect();

  this.state = {
    error: false,
    loaded: false,
    rendered: false,
  };
}

Listeners.prototype.getRect = function() {
  this.rect = this.el.getBoundingClientRect();
};

Listeners.prototype.checkInView = function() {
  this.getRect();
  let inView;

  if (this.$parent !== window) {
    let pRect = this.$parent.getBoundingClientRect();
    let _top = this.rect.top > pRect.top && pRect.bottom > this.rect.top;
    let _left = this.rect.left > pRect.left && pRect.right > this.rect.left;
    inView = _top && _left;
  } else {
    let topBottom = this.rect.top < window.innerHeight * this.preLoad && this.rect.bottom > 0;
    let leftRight = this.rect.left < window.innerWidth * this.preLoad && this.rect.right > 0;
    inView = topBottom && leftRight;
  }
  return inView;
};

Listeners.prototype.render = function(state, notify) {
  this.elRenderer(this, state, notify);
};

Listeners.prototype.update = function(value) {
  this.src = value.src;
  this.loading = value.loading;
  this.error = value.error;
  this.state = {
    error: false,
    loaded: false,
    rendered: false,
  };
};
Listeners.prototype.destroy = function() {
  this.el = null;
  this.src = null;
  this.error = null;
  this.loading = null;
  this.bindType = null;
};

Listeners.prototype.loadImage = function() {
  this.render('loading', true);

  let image = new Image();
  image.src = this.src;

  image.onload = function() {
    this.src = image.src;
    this.naturalHeight = image.naturalHeight;
    this.naturalWidth = image.naturalWidth;
    this.state.loaded = true;
    this.state.error = false;
    this.render('loaded', true);
  }.bind(this);

  image.onerror = function(e) {
    this.state.error = true;
    this.state.loaded = false;
    this.render('error', true);
  }.bind(this);
};

let Lazy = (function() {
  let ListenerQueue = [];

  let options = {
    preLoad: 1.3,
    error: DEFAULT_URL,
    loading: LOADING_URL,
    ListenEvents: DEFAULT_EVENTS,
  };

  let lazyLoadHandler = throttle(function() {
    let catIn = false;
    for (let i = 0; i < ListenerQueue.length; i++) {
      let listener = ListenerQueue[i];
      if (!listener.state.loaded) {
        catIn = listener.checkInView();
        catIn && listener.loadImage();
      }
    }
  }, 200);

  function elRenderer(listener, state, notify) {
    if (!listener.el) return;

    let src;
    switch (state) {
    case 'loading':
      src = listener.loading;
      break;
    case 'error':
      src = listener.error;
      break;
    default:
      src = listener.src;
      break;
    }

    if (listener.bindType) {
      listener.el.style[listener.bindType] = 'url(' + src + ')';
    } else if (listener.el.getAttribute('src') !== src) {
      listener.el.setAttribute('src', src);
    }

    listener.el.setAttribute('lazy', state);

    if (!notify) return;
    // this.$emit(state, listener)
  }

  function handleValue(value) {
    let src = value;
    let loading = options.loading;
    let error = options.error;

    if (Vue.util.isObject(value)) {
      src = value.src;
      loading = value.loading || options.loading;
      error = value.error || options.error;
    }
    return {
      src: src,
      loading: loading,
      error: error,
    };
  }

  let bind = function(el, binding, vnode) {
    let value = handleValue(binding.value);

    Vue.nextTick(function() {
      let container = Object.keys(binding.modifiers)[0];
      let $parent; // 支持 指定的 ref, id 来标记夫节点

      if (container) {
        $parent = vnode.context.$refs[container];
        $parent = $parent ? $parent.$el || $parent : document.getElementById(container);
      }

      if (!$parent) $parent = scrollParent(el);

      let op = {
        bindType: binding.arg,
        $parent: $parent,
        el: el,
        loading: value.loading,
        error: value.error,
        src: value.src,
        preLoad: options.preLoad,
        elRenderer: elRenderer,
      };
      ListenerQueue.push(new Listeners(op));

      if (!ListenerQueue.length) return;

      initListen(window, true);
      $parent && initListen($parent, true);
      lazyLoadHandler();
    });
  };

  let update = function(el, binding) {
    let value = handleValue(binding.value);

    let existListener = find(ListenerQueue, el);
    existListener && existListener.src !== value.src && existListener.update(value);
    Vue.nextTick(function() {
      lazyLoadHandler();
    });
  };

  let unbind = function(el) {
    if (!el) return;
    let existItem = find(ListenerQueue, el);
    existItem && remove(ListenerQueue, existItem) && existItem.destroy();
    !ListenerQueue.length && initListen(window, false);
  };

  function initListen(el, start) {
    for (let i = 0; i < options.ListenEvents.length; i++) {
      let event = options.ListenEvents[i];
      _[start ? 'on' : 'off'](el, event, lazyLoadHandler);
    }
    // ie9 下 不支持transitionend事件,
    // 只能手动触发滚动事件,来触发加载图片
    if (isIE(9)) {
      _[start ? 'on' : 'off'](el, 'scroll', function() {
        lazyLoadHandler();
      });
    }
  }

  return {
    bind: bind,
    update: update,
    unbind: unbind,
  };
})();

module.exports = {
  bind: Lazy.bind,
  update: Lazy.update,
  unbind: Lazy.unbind,
};
