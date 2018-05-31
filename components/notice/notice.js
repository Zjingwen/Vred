/**
 * 通知组件
 */

require('./notice.css');
let html = require('./notice.html');

module.exports = Vue.extend({
  template: html,
  data: function() {
    return {
      visible: false,
      title: '',
      message: '',
      duration: 4000,
      top: null,
      timer: null,
      closed: false,
      onClose: null,
    };
  },
  watch: {
    closed: function(newVal) {
      if (newVal) {
        this.visible = false;
        this.$el.addEventListener('transitionend', this.destroyEl);
      }
    },
  },
  methods: {
    destroyEl: function() {
      this.$el.removeEventListener('transitionend', this.destroyEl);
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },
    close: function() {
      this.closed = true;
      if (typeof this.onClose === 'function') {
        this.onClose();
      }
    },
    startTimer: function() {
      let that = this;
      if (this.duration > 0) {
        this.timer = setTimeout(function() {
          that.close();
        }, this.duration);
      }
    },
    clearTimer: function() {
      clearTimeout(this.timer);
    },
  },
  mounted: function() {
    let that = this;
    if (this.duration > 0) {
      this.timer = setTimeout(function() {
        that.close();
      }, this.duration);
    }
  },
});
