<template>
  <t-poptip
    trigger='click'
    placement='bottom-start'
    :class="classs"
    always
  >
    <t-input
      :disabled="disabled"
      :readonly="readonly"
      :size="size"
      :placeholder="placeholder"
      v-model="displayValue"
    />
    <t-date slot="content" v-model="displayValue" @pick='handlePick'/>
  </t-poptip>
</template>
<style src='./date-picker.less' lang='less'></style>
<script>
import {oneOf} from '@util/assist';
import input from '@components/input/index';
import date from '@components/datetime/date.vue';
import poptip from '@components/poptip/index';

const profixCls = 't-date-picker';

export default {
  props: {
    size: {
      type: String,
      default: 'default',
      validator: function(val) {
        return oneOf(val, ['default', 'tiny', 'large']);
      },
    },
    readonly: {
      type: Boolean,
      default: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String | Number,
      default: '',
    },
  },
  data: function() {
    return {
      currentValue: this.value,
      dateProps: {
        value: '',
      },
    };
  },
  watch: {
    currentValue: function(val) {
      this.$emit('input', val);
    },
  },
  computed: {
    displayValue: {
      get: function() {
        return this.currentValue;
      },
      set: function(value) {
        if (value.indexOf(':') > 0) {
          this.dateProps.value = value.split(':');
        } else {
          this.dateProps.value = value;
        }
      },
    },
    classs: function() {
      let classs = [
        `${profixCls}`,
      ];

      return classs;
    },
  },
  methods: {
    handlePick: function(val) {
      this.currentValue = val;
    },
  },
  components: {
    't-input': input,
    't-date': date,
    't-poptip': poptip,
  },
};
</script>
