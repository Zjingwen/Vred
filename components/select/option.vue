<template>
  <li :class="classs" @click="optionClick">
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
  computed: {
    classs: function() {
      let classs = [
        `${profixCls}`,
        this.isSelected ? 'selected':'',
      ];

      return classs;
    },
  },
  data: function() {
    return {
      visible: true,
      isSelected: false,
    };
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
