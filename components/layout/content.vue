<template>
    <div  :class="classs" :style="style"><slot></slot></div>
</template>
<style lang='css' scoped>
    .v-content{
        flex: auto;
    }
</style>
<script>
const prefixCls = 'v-content';

export default{
  name: prefixCls,
  computed: {
    style: function() {
      let style = {
        overflow: 'hidden',
      };

      return style;
    },
    classs: function() {
      return [
        `${prefixCls}`,
      ];
    },
  },
};
</script>
