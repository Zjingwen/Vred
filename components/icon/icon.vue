<template>
  <i :class="classs"></i>
</template>
<style src='./icon.less' lang='less'></style>
<script>
import {oneOf} from '../util/assist';

const profixCls = 't-icon';

export default {
  props: {
    type: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'default',
      validator: function(val) {
        return oneOf(val, ['default', 'tiny', 'large']);
      },
    },
  },
  computed: {
    classs: function() {
      let classs = [
        `${profixCls}`,
        'iconfont',
        `icon-${this.type}`,
        `${profixCls}-${this.size}`,
      ];

      return classs;
    },
  },
};
</script>
