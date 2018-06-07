<template>
  <div :class="classs"
    @mouseenter="handleMouseenter"
    @mouseleave="handleMouseleave"
  >
    <div ref='referenceElement'><slot /></div>
    <div
      ref="onPopper"
      class="t-tooltip-main"
      v-show='show'
      :data-transfer='transfer'
      v-transfer-dom>
      <div class="t-tooltip-arrow"></div>
      <div class="t-tooltip-inner">{{content}}</div>
    </div>
  </div>
</template>

<style src='./tooltip.css' lang="css"></style>
<script>
const profixCls = 't-tooltip';

import TransferDom from '@directives/transfer-dom';
import popper from '@mixins/popper.js';
import {oneOf} from '@util/assist';

export default {
  mixins: [popper],
  directives: {
    TransferDom,
  },
  name: profixCls,
  props: {
    content: {
      type: [String, Number],
      default: '',
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
    isOpen: {
      type: Boolean,
      default: false,
    },
    always: {
      type: Boolean,
      defalut: false,
    },
    disabled: {
      type: Boolean,
      defalut: false,
    },
    transfer: {
      type: Boolean,
      defalut: true,
    },
  },
  computed: {
    classs: function() {
      let classs=[
        `${profixCls}`,
      ];

      return classs;
    },
  },
  data: function() {
    return {
      show: this.isOpen,
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
      };

      this.show = false;
    },
  },
};
</script>
