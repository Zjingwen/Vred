<template>
  <div :class="classs"><slot/></div>
</template>
<style src='./radio.less' lang="less"></style>
<script>
import {findComponentsDownward} from '@util/assist';
const prefixCls = 't-radio-group';

export default {
  name: prefixCls,
  props: {
    value: {
      type: String,
      default: '',
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
  mounted: function() {
    this.updateModel(this.value);
  },
  methods: {
    updateModel: function(val) {
      let childrens = findComponentsDownward(this, 't-radio');

      childrens.forEach( (el)=>{
        if (el.label === val) {
          el.currentValue = true;
        } else {
          el.currentValue = false;
        }
      });

      this.$emit('input', val);
    },
  },
};
</script>
