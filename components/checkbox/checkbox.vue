<template>
  <label class="t-checkbox">
    <span class="t-checkbox-input">
        <input
          class="t-checkbox-ori"
          type="checkbox"
          :disabled="disabled"
          :true-value="trueLabel"
          :false-value="falseLabel"
          :value="value"
          v-model="model"
          @change="$emit('change', $event)"
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
  data: function() {
    return {
      trueLabel: true,
      falseLabel: false,
      model: this.value,
    };
  },
};
</script>
