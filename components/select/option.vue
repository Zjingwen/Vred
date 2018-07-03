<template>
  <li class="t-select-item" @click="optionClick" :class="{selected:isSelected}">
    <slot>
      <span>{{label}}</span>
    </slot>
  </li>
</template>
<script>
import {findComponentUpward} from '@util/assist';
const profixCls = 't-option';

export default {
  name: profixCls,
  props: {
    value: {
      type: String | Number,
      default: '',
    },
    label: {
      type: String | Number,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data: function() {
    return {
      visible: true,
    };
  },
  computed: {
    isSelected: function() {
      return findComponentUpward(this, 't-select').currentValue === this.value;
    },
  },
  methods: {
    optionClick: function() {
      if (!this.disabled) {
        findComponentUpward(this, 't-select').handleOptionClick(this.value);
      }
    },
  },
};
</script>
