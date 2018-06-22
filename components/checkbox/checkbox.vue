<template>
  <label :class="classs">
    <span class="t-checkbox-input">
        <input
          class="t-checkbox-ori"
          type="checkbox"
          :disabled="disabled"
          :true-value="trueLabel"
          :false-value="falseLabel"
          :value="value"
          v-model="model"
          @change="handleChange"
        >
        <span
          class="t-checkbox-fake"
          :class="{'checked': model,'disabled': disabled}"
        ></span>
    </span>
    <span class="t-checkbox-label">
        <slot></slot>
    </span>
  </label>
</template>
<style src="./checkbox.less" lang="less"></style>
<script>
import {findComponentUpward} from '@util/assist.js';
const prefixCls = 't-checkbox';

export default {
  name: prefixCls,
  props: {
    label: {
      type: String,
      default: '',
    },
    value: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classs: function() {
      let classs = [
        `${prefixCls}`,
      ];

      return classs;
    },
  },
  data: function() {
    return {
      trueLabel: true,
      falseLabel: false,
      model: this.value,
    };
  },
  methods: {
    handleChange: function() {
      let _emit = {
        model: this.model,
        value: this.model,
        key: this.label,
      };

      this.$emit('input', _emit.model);

      if (findComponentUpward(this, 'v-checkbox-group')) {
        findComponentUpward(this, 'v-checkbox-group').updateModel();
      }

      switch (this.label) {
      case '':
        delete _emit.model;
        delete _emit.key;
        this.$emit('change', _emit);
        break;
      default:
        delete _emit.model;
        this.$emit('change', _emit);
      };
    },
  },
};
</script>
