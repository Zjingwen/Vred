<template>
  <label :class="classs">
    <input
      type="checkbox"
      :true-value="trueLabel"
      :false-value="falseLabel"
      v-model="model"
      :disabled='disabled'
      @change="handleChange"
    >
    <span class="t-switch-frome"></span>
  </label>
</template>
<style src='./switch.less' lang="less"></style>
<script>
const prefixCls = 't-switch';
export default {
  name: prefixCls,
  props: {
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
  computed: {
    classs: function() {
      let classs = [
        `${prefixCls}`,
      ];

      if (this.disabled) {
        classs.push(`${prefixCls}-disabled`);
      }

      return classs;
    },
  },
  methods: {
    handleChange: function() {
      this.$emit('on-change', this.model);
      this.$emit('input', this.model);
    },
  },
};
</script>
