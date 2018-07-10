<template>
  <div :class="classs" v-clickoutside="handleClose">
    <t-input
      ref="reference"
      :disabled="disabled"
      :readonly="readonly"
      :size="size"
      :placeholder="placeholder"
      :value="displayValue"
      @on-focus="handleFocus"
    />
    <t-date :value="displayValue" @pick='handlePick'/>
  </div>
</template>
<style src='./date-picker.less' lang='less'></style>
<script>
import Clickoutside from '@directives/clickoutside.js';
import {oneOf} from '@util/assist';
import input from '@components/input/index';
import date from '@components/datetime/date.vue';

const profixCls = 't-date-picker';

export default {
  directives: {
    clickoutside: Clickoutside,
  },
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
    autoClose: {
      type: Boolean,
      default: true,
    },
  },
  data: function() {
    return {
      visible: false,
      currentValue: this.value,
      dateProps: {
        value: '',
      },
    };
  },
  created: function() {
    // this.panel = date;
  },
  watch: {
    visible: function(val) {
      if (this.disabled) return;
      val ? this.showPicker() : this.hidePicker();
    },
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
          this.picker.value = value.split(':');
        } else {
          this.picker.value = value;
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
    hidePicker: function() {
      if (this.picker) {
        // this.picker.visible = false;
        this.destroyPopper();
      }
    },
    showPicker: function() {
      if (!this.picker) {
        // this.picker = new Vue(this.panel).$mount(document.createElement('div'));

        // this.popperEl = this.picker.$el;
        // this.referenceEl = this.$refs.reference.$el;

        // this.$el.appendChild(this.picker.$el);
        // this.visible = this.picker.visible = true;

        // this.picker.$on('dodestroy', this.handleClose);
        // this.picker.$on('pick', function(date) {
        //   this.$emit('input', date);
        // }.bind(this));
      } else {
        // this.visible = this.picker.visible = true;
      }

      // this.updatePopper();
      this.dateProps.value = this.currentValue;
    },
    handleFocus: function() {
      this.visible = true;
      this.$emit('focus', this);
    },
    handleClose: function() {
      this.visible = false;
    },
    handlePick: function(val) {
      this.currentValue = val;
    },
  },
  components: {
    't-input': input,
    't-date': date,
  },
};
</script>
