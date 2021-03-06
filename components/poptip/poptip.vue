<template>
  <div :class='classs'
    @mouseenter="handleMouseenter"
    @mouseleave="handleMouseleave"
    @click='handleClick'
    v-clickout-side='handleClickoutSide'
  >
    <div ref="referenceElement"><slot /></div>
    <div ref="onPopper"
      v-show='show'
      :class="[`${this.name}-poper`]"
      :style='style'
      :data-transfer='transfer'
      v-transfer-dom>
      <slot name='content' />
    </div>
  </div>
</template>
<style src='./poptip.less' lang='less'></style>
<script>
import {oneOf} from '@util/assist.js';
import popper from '@mixins/popper.js';
import TransferDom from '@directives/transfer-dom';
import ClickoutSide from '@directives/clickoutside';

const profixCls = 't-poptip';

export default {
  name: profixCls,
  directives: {
    TransferDom,
    ClickoutSide,
  },
  mixins: [popper],
  props: {
    trigger: {
      type: String,
      default: 'hover',
      validator: function(val) {
        return oneOf(val, ['hover', 'click']);
      },
    },
    placement: {
      type: String,
      default: 'top',
      validator: function(val) {
        const defalut = [
          'top',
          'top-start',
          'top-end',
          'right',
          'right-start',
          'right-end',
          'left',
          'left-start',
          'left-end',
          'bottom',
          'bottom-start',
          'bottom-end',
        ];
        return oneOf(val, defalut);
      },
    },
    width: {
      type: Number,
      default: 200,
    },
    maxHeight: {
      type: Number,
      default: 0,
    },
    transfer: {
      type: Boolean,
      defalut: true,
    },
    isOpen: {
      type: Boolean,
      defalut: false,
    },
    always: {
      type: Boolean,
      defalut: false,
    },
    disabled: {
      type: Boolean,
      defalut: false,
    },
    offset: {
      type: Array,
      defalut: [0, 0],
      validator: function(val) {
        return val.length === 2 ? true : false;
      },
    },
  },
  computed: {
    classs: function() {
      let classs = [
        `${profixCls}`,
      ];

      return classs;
    },
    eventType: function() {
      if (this.trigger === 'hover') {
        return false;
      } else {
        return true;
      }
    },
    style: function() {
      let style = {
        'width': `${this.width}px`,
        'height': `${this.height}px`,
      };

      if (this.maxHeight) {
        style.maxHeight= `${this.maxHeight}px`;
        style.overflowY= 'scroll';
      }

      return style;
    },
  },
  data: function() {
    return {
      name: profixCls,
      show: this.isOpen,
      height: 'auto',
    };
  },
  mounted: function() {
    this.handleVisible();
  },
  methods: {
    handleVisible: function() {
      if (this.disabled) {
        this.show = false;

        return true;
      };

      if (this.always) {
        this.show = true;

        return true;
      };

      if (this.eventType) {
        return true;
      };

      return false;
    },
    handleMouseenter: function() {
      if (this.handleVisible()) {
        return false;
      };

      this.show = true;
    },
    handleMouseleave: function() {
      if (this.handleVisible()) {
        return false;
      }

      this.show = false;
    },
    handleClick: function() {
      if (!this.eventType) {
        return false;
      }

      if (this.always) {
        return false;
      }

      if (this.disabled) {
        return false;
      }

      this.show = true;
    },
    handleClickoutSide: function() {
      if (this.trigger === 'hover') {
        return false;
      };

      if (this.always) {
        return false;
      };

      if (this.disabled) {
        return false;
      };

      if (this.show) {
        this.show = false;
      };
    },
  },
};
</script>
