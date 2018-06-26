<template>
  <label class="t-radio">
    <span class="t-radio_box" :class="{'isDisabled': disabled,'isChecked': model === label}">
        <input
                type="radio"
                class="t-radio_ori"
                :name="name"
                :disabled="disabled"
                :value="label"
                v-model="model"
        >
        <span class="t-radio_input"></span>
    </span>

    <span class="t-radio_label" v-if="$slots.default || label">
        <slot></slot>
        <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>
<style src='./radio.less' lang="less"></style>
<script>
/**
 * <t-radio :disabled="false" v-model="radio" label="1">哈哈</t-radio>
 * <t-radio :disabled="false" v-model="radio" label="2">hello</t-radio>
 */
export default {
  props: {
    label: '',
    value: '',
    name: String,
    disabled: Boolean,
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
  },
}
</script>

