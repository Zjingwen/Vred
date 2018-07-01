<template>
  <li class="t-select_item" @mouseenter="hoverItem" @click="optionClick" :class="{selected:isSelected,hover:isHover}">
    <slot>
      <span>{{currentLabel}}</span>
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
      index: -1,
      visible: true,
    };
  },

  computed: {
    currentLabel: function() {
      return this.label || ((typeof this.value === 'string' || typeof this.value === 'number') ? this.value : '');
    },

    currentValue: function() {
      return this.value || this.label || '';
    },

    isSelected: function() {
      if (!this.parent().multiple) {
        return this.parent().currentValue === this.value;
      } else {

      }
    },

    isHover: function() {
      return this.parent().hoverIndex === this.index;
    },
  },
  methods: {

    optionClick: function() {
      if (!this.disabled) {
        findComponentUpward(this, 't-select').handleOptionClick(this.value);
      }
    },

    parent: function() {
      let parent = this.$parent;
      while (parent.$options.name !== 't-select') {
        parent = parent.$parent;
      }
      return parent;
    },

    hoverItem: function() {
      if (!this.disabled) {
        this.parent().hoverIndex = this.parent().options.indexOf(this);
      }
    },

    resetIndex: function() {
      this.$nextTick(function() {
        this.index = this.parent.options.indexOf(this);
      }.bind(this));
    },

  },
  created: function() {
    this.parent().options.push(this);
    this.index = this.parent().options.indexOf(this);
  },
};
</script>
