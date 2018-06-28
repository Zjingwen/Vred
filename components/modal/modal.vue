<template>
  <div :class="`${prefixCls}-container`"
    v-show="visible"
    @click.self="handleClickoutSide"
    data-transfer='true'
    v-transfer-dom>

    <div
      :class="classs"
      :style="style">

      <div :class="`${prefixCls}-header`">
        <span :class="`${prefixCls}-title`">{{title}}</span>
        <span :class="`${prefixCls}-close`" @click="handleClose">✕</span>
      </div>

      <div :class="`${prefixCls}-body`">
        <div slot="body">自定义内容body</div>
      </div>

      <div :class="`${prefixCls}-footer`">
        <slot name="footer">自定义footer</slot>
      </div>

    </div>

  </div>
</template>
<style src='./modal.less' lang="less"></style>
<script>
import TransferDom from '@directives/transfer-dom';
import {oneOf} from '@util/assist';
const prefixCls = 't-modal';

export default {
  name: prefixCls,
  directives: {
    TransferDom,
  },
  props: {
    title: {
      type: String,
      default: '自定义title',
    },
    value: {
      type: Boolean,
      default: false,
    },
    customClass: {
      type: String,
      default: '',
    },
    top: {
      type: String,
      default: '',
    },
    width: {
      type: String,
      default: '',
    },
    height: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'default',
      validator: function(val) {
        return oneOf(val, ['tiny', 'default', 'large']);
      },
    },
  },
  data: function() {
    return {
      prefixCls: prefixCls,
      visible: !function() {
        if (this.disabled) return false;
        return this.value;
      },
    };
  },
  watch: {
    value: function(val) {
      if (this.disabled) return false;

      this.visible = val;
    },
    visible: function(val) {
      this.$emit('input', val);

      if (val) {
        document.body.style.overflow = 'hidden';
        this.$emit('on-open');
        return false;
      }

      document.body.style.overflow = '';
      this.$emit('on-close');
    },
  },
  computed: {
    classs: function() {
      let classs = [
        `${prefixCls}`,
        `${prefixCls}-${this.size}`,
      ];

      if (this.customClass) {
        classs.push(this.customClass);
      }

      return classs;
    },
    style: function() {
      let style = {
        width: this.width ? `${this.width}px` : null,
        height: this.height ? `${this.height}px` : null,
        top: this.top ? `${this.top}px` : null,
      };

      return style;
    },
  },
  methods: {
    handleClose: function() {
      if (this.disabled) return false;

      this.visible = false;
    },
    handleClickoutSide: function() {
      if (this.disabled) return false;

      this.visible = false;
    },
  },
};
</script>
