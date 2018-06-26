<template>
  <transition name="notice-fade">
    <div :class="classs" v-show="visible" :style="{ top: top ? top + 'px' : 'auto' }" @mouseenter="clearTimer" @mouseleave="startTimer">
        <div class="box">
            <h1>{{title}}</h1>
            <p v-if='message'>{{message}}</p>
        </div>
    </div>
  </transition>
</template>

<style src='./notice.less' lang="less"></style>

<script>
const prefixCls = 't-notice';

export default {
  name: prefixCls,
  data: function() {
    return {
      visible: false,
      title: '',
      message: '',
      duration: 4000,
      type: 'base',
      top: null,
      onClose: null,
      closed: false,
      timer: null,
    };
  },
  computed: {
    classs: function() {
      let classs = [
        `${prefixCls}`,
        `${prefixCls}-${this.type}`,
      ];

      return classs;
    },
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
};
</script>


