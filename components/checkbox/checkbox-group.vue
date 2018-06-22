<template>
  <div :class="classs"><slot/></div>
</template>
<style src="./checkbox.less" lang="less"></style>
<script>
import {findComponentsDownward} from '@util/assist';
let prefixCls = 'v-checkbox-group';

export default {
  name: prefixCls,
  props: {
    value: {
      type: Array,
      default: ()=>{
        return [];
      },
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
  methods: {
    updateModel: function(type) {
      const _emit = [];

      findComponentsDownward(this, 't-checkbox').forEach((child, index) => {
        _emit.push({
          value: child.label,
          key: child.model,
        });
      });
      if (type !== 'mounted') this.$emit('change', _emit);
      this.$emit('input', _emit);
    },
  },
  mounted: function() {
    this.updateModel('mounted');
  },
};
</script>

