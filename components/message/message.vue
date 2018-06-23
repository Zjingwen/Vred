<template>
  <transition name="t-message-fade">
    <div
      class="t-message"
      :class="customClass"
      v-show="visible"
      @mouseenter="clearTimer"
      @mouseleave="startTimer">

      <template>
          <div class="t-message-group">
              <p>{{message}}</p>
          </div>
      </template>

    </div>
  </transition>
</template>

<style src='./message.less' lang='less'></style>

<script>
const prefixCls = 't-message';

export default {
  name: prefixCls,
  data: function() {
    return {
      visible: false,
      message: '',
      duration: 2000,
      type: 'info',
      customClass: '',
      onClose: null,
      closed: false,
      timer: null,
    };
  },
  watch: {
    closed: function(newVal) {
      if (newVal) {
        this.visible = false;
        this.$el.addEventListener('transitionend', this.destroyElement);
      }
    },
  },
  methods: {
    destroyElement: function() {
      this.$el.removeEventListener('transitionend', this.destroyElement);
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },
    close: function() {
      this.closed = true;
      if (typeof this.onClose === 'function') {
        this.onClose(this);
      }
    },
    clearTimer: function() {
      clearTimeout(this.timer);
    },
    startTimer: function() {
      if (this.duration > 0) {
        this.timer = setTimeout(function() {
          if (!this.closed) {
            this.close();
          }
        }.bind(this), this.duration);
      }
    },
  },
  mounted: function() {
    this.startTimer();
  },
};
</script>
