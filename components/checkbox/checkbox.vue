<template>
  <label class="t-checkbox">
    <span class="t-checkbox_input">
        <input
          v-if="trueLabel || falseLabel"
          class="t-checkbox_ori"
          type="checkbox"
          :name="name"
          :disabled="disabled"
          :true-value="trueLabel"
          :false-value="falseLabel"
          v-model="model"
          @change="$emit('change', $event)"
        >
        <input
            v-else
            class="t-checkbox_ori"
            type="checkbox"
            :name="name"
            :disabled="disabled"
            :value="label"
            v-model="model"
            @change="$emit('change', $event)"
        >
        <span
          class="t-checkbox_fake"
          :class="{'checked': isChecked,'disabled':disabled}"
        ></span>
    </span>
    <span class="t-checkbox_label" v-if="$slots.default || label">
        <slot></slot>
        <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>
<style src="./checkbox.less" lang="less"></style>
<script>
const prefixCls = 't-checkbox';

export default {
  name: prefixCls,
  props: {
    name: String,
    label: '', // 只有在checkbox-group或者绑定对象类型为array时有效
    value: '',
    disabled: Boolean,
    checked: Boolean,
    trueLabel: [String, Number],
    falseLabel: [String, Number],
  },
  data: function() {
    return {
      localValue: false,
    };
  },
  computed: {
    model: {
      get: function() {
        return this.value !== undefined ? this.value : this.localValue;
      },
      set: function(val) {
        if (this.value !== undefined) {
          // v-model语法糖 v-bind:value="something" v-on:input="something = arguments[0]"
          this.$emit('input', val);
        } else {
          this.localValue = val;
        }
      },
    },
    isChecked: function() {
      if ({}.toString.call(this.model) === '[object Boolean]') {
        return this.model;
      } else if (this.model !== null && this.model !== undefined) {
        return this.model === this.trueLabel;
      }
    },
  },
  methods: {

    doChecked: function() {
      this.model = this.trueLabel || true;
    },
  },

  created: function() {
    this.checked && this.doChecked();
  },

};
</script>
