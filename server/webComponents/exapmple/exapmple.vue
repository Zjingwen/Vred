<template>
    <div :class='classs' :style='style'>
        <div v-if='mode == "horizontal"'>
            <div ref="view" :class="[`${prefixCls}-view`]">
                <slot name="view"></slot>
            </div>
            <pre ref="markdown" :class="[`${prefixCls}-markdown`]">
                <slot name="markdown"></slot>
            </pre>
            <div :class="[`${prefixCls}-split`]"></div>
            <pre :class="[`${prefixCls}-code`]" v-highligh><slot name="code"></slot></pre>
        </div>
        <div :class="[`${prefixCls}-frome`]" v-else>
            <div class="row">
                <div ref="view" :class="[`${prefixCls}-view`]">
                    <slot name="view"></slot>
                </div>
                <pre ref="markdown" :class="[`${prefixCls}-markdown`]"><slot name="markdown"></slot></pre>
            </div><div class="row">
                <pre :class="[`${prefixCls}-code`]" v-highligh>
                    <slot name="code"></slot>
                </pre>
            </div>
        </div>
        <div v-if='more' class="more" @click='moreHandle'>↑</div>
    </div>
</template>
<style src='./exapmple.css' lang='css'></style>
<script>
import {highlight} from 'highlight.js';
import 'highlight.js/styles/solarized-light.css';

let prefixCls = 't-exapmple';

export default {
  name: prefixCls,
  directives: {
    highligh: {
      inserted: function(el, binding, vnode, oldVnode) {
        let block = highlight('html', el.querySelectorAll('textarea')[0].value);
        el.innerHTML = block.value;
      },
    },
  },
  data: function() {
    return {
      prefixCls: prefixCls,
      staticHeight: '',
      styleHeigiht: '',
    };
  },
  props: {
    mode: {// horizontal（水平） 和 vertical（垂直）
      type: String,
      default: 'horizontal',
    },
    more: {
      type: Boolean,
      default: false,
    },
  },
  mounted: function() {
    if (this.more) {
      const viewHeight = this.$refs['view'].offsetHeight + 40;
      const markdownHeight = this.$refs['markdown'].offsetHeight;

      if (this.mode === 'horizontal') {
        this.styleHeigiht = viewHeight + markdownHeight + 34;
        this.staticHeight = viewHeight + markdownHeight + 34;
      } else {
        this.styleHeigiht = viewHeight + markdownHeight;
        this.staticHeight = viewHeight + markdownHeight;
      }
    }
  },
  computed: {
    classs: function() {
      let classs = [`${prefixCls}`, `${prefixCls}-${this.mode}`];

      return classs;
    },
    style: function() {
      if (!this.more) return {};

      let style = {};

      style.overflow = 'hidden';
      style.paddingBottom = '40px';

      style.height =
        typeof this.staticHeight === 'number'
          ? `${this.staticHeight}px`
          : this.staticHeight;

      return style;
    },
  },
  methods: {
    moreHandle: function() {
      if (this.staticHeight === 'auto') {
        this.staticHeight = this.styleHeigiht;
      } else {
        this.staticHeight = 'auto';
      }
    },
  },
};
</script>
