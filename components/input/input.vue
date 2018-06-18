<template>
  <div class="t-input" :class="[size?('t-input_'+size):'',{disabled:disabled}]">
    <i class="material-icons t-input_icon" v-if="icon" @click="handleIconClick">{{icon}}</i>
    <i class="t-input_icon image" v-if="imageIcon" @click="handleIconClick"></i>
    <input
        class="t-input_ori"
        :class="[customClass]"
        :type="type"
        :placeholder="placeholder"
        :name="name"
        :disabled="disabled"
        :readonly="readonly"
        :autocomplete="autoComplete"
        :autofocus="autofocus"
        :value="value"
        :form="form"
        ref="input"
        @input="updateValue($event.target.value)"
        @focus="handleFocus"
        @blur="handleBlur"
    >
  </div>
</template>
<style src='./input.less' lang="less"></style>
<script>
const prefixCls = 'v-input';

export default {
  name: prefixCls,
  data: function() {
    return {
      currentValue: this.value,
    };
  },
  props: {
    type: {
      type: String,
      default: 'text',
    },
    value: [String, Number],
    name: String,
    customClass: '',
    placeholder: String,
    disabled: Boolean,
    readonly: Boolean,
    autofocus: Boolean,
    autoComplete: {
      type: String,
      default: 'off',
    },
    size: {
      type: String,
      default: 'small',
    },
    form: String,
    icon: String,
    imageIcon: Boolean,
  },
  methods: {

    updateValue: function(value) {
      this.currentValue = value.trim();
    },

    handleBlur: function(event) {
      this.$emit('blur', event);
      this.$emit('input', this.$refs.input.value);
    },

    handleFocus: function(event) {
      this.$emit('focus', event);
    },

    handleIconClick: function() {
      this.$emit('icon-click', event);
    },

    inputSelect: function() {
      this.$refs.input.select();
    },
  },
  created: function() {
    this.$on('inputSelect', this.inputSelect);
  },
  watch: {
    currentValue: function(newV) {
      this.$emit('input', newV);
      this.$emit('change', newV);
    },
  },
};
</script>
