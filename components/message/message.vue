<template>
  <transition name="t-message-fade">
    <div
      class="t-message"
      :class="customClass"
      v-show="visible"
      @mouseenter="clearTimer"
      @mouseleave="startTimer">

      <template v-if="type == 'custom'">
          <div v-html="message"></div>
      </template>

      <template v-else>
          <img class="t-message__img" :src="typeImg" alt="" v-if="!iconClass && typeImg">

          <div class="t-message__group" :class="{ 'is-with-icon': iconClass }">
              <p><i class="t-message__icon" :class="iconClass" v-if="iconClass"></i>{{message}}</p>
              <div v-if="showClose" class="t-message__closeBtn t-icon-close" @click="close"></div>
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
      iconClass: '',
      customClass: '',
      onClose: null,
      showClose: false,
      closed: false,
      timer: null,
      typeMap: {
        'info': 'http://oss2.lanlanlife.com/71ec91851cdc1e40107776f83dd0c6ce_40x40.png',
        'success': 'http://oss.lanlanlife.com/2cc6b5e4a60478193ed3e6bdaa0f1cec_30x30.png',
        'warning': 'http://oss2.lanlanlife.com/3a2c3aa58e30dae123d372bb99245621_40x40.png',
        'error': 'http://oss2.lanlanlife.com/53a6ff00efbd70fc7d8884b7dc8e1850_40x40.png',
      },
    };
  },

  computed: {
    typeImg: function() {
      // 暂时 不显示其他 img
      if (this.type !== 'success') return '';
      return this.typeMap[this.type];
    },
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
