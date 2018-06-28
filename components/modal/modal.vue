<template>
  <div class="t-modal_container"
    v-show="visible"
    :class="[modalClass]"
    @click.self="modalClickClose">

    <div class="t-modal"
      ref="modal"
      :class="[sizeClass, customClass, scrollClass]"
      :style="style">

      <div class="t-modal_header" v-if="title">
        <span class="t-modal_title">{{title}}</span>
        <i class="t-modal_close" @click="close">✕</i>
      </div>
      <div class="t-modal_body">
        <slot>自定义内容</slot>
      </div>
      <div class="t-modal_footer">
        <slot name="footer"></slot>
      </div>

    </div>

  </div>
</template>
<style src='./modal.less' lang="less"></style>
<script>
const prefixCla = 't-modal';

export default {
  name: prefixCla,
  props: {
    value: Boolean,
    title: String,
    customClass: String,
    top: String,
    width: String,
    height: String,
    innerScroll: {
      type: Boolean,
      default: false,
    },
    lockScroll: {
      type: Boolean,
      default: true,
    },
    modal: {
      type: Boolean,
      default: true,
    },
    modalClose: {
      type: Boolean,
      default: true,
    },
    size: {
      type: String,
      default: 'small',
    },
  },
  data: function() {
    return {
      visible: false,
    };
  },
  mounted: function() {
    // document.body.appendChild(this.$el);
  },
  watch: {
    value: function(val) {
      this.visible = val;
    },
    visible: function(val) {
      this.$emit('input', val);

      if (val) {
        this.$emit('open');

        this.lockScroll?document.body.style.overflow = 'hidden':'';

        this.$nextTick(function() {
          this.$refs.modal.scrollTop = 0;
        }.bind(this));
      } else {
        this.$emit('close');
        this.lockScroll?document.body.style.overflow = '':'';
      }
    },
  },
  computed: {
    'sizeClass': function() {
      return 't-' + this.size;
    },
    'modalClass': function() {
      return this.modal?'t-mask':'';
    },
    'scrollClass': function() {
      return this.innerScroll?'t-scroll':'';
    },
    'style': function() {
      let style = {};
      if (this.width) {
        style['width'] = this.width;
      }
      if (this.height) {
        style['height'] = this.height;
      }
      if (this.top) {
        style['top'] = this.top;
      }
      return style;
    },
  },
  methods: {
    // ok: function(){
    //    this.visible = false;
    // },
    close: function() {
      this.visible = false;
    },
    modalClickClose: function() {
      if (this.modalClose) {
        this.visible = false;
      }
    },
  },
};
</script>
