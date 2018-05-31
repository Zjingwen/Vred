<template>
    <div :style="style" :class="classs"><slot></slot></div>
</template>
<style lang='css' scoped>
    .v-sider{

    }
</style>
<script>
const prefixCls = 'v-sider';
export default{
  name: prefixCls,
  props: {
    width: {
      type: [Number, String],
      default: 200,
    },
  },
  computed: {
    classs: function() {
      return [
        `${prefixCls}`,
      ];
    },
    style: function() {
      return {
        width: `${this.width}px`,
        minWidth: `${this.width}px`,
        maxWidth: `${this.width}px`,
      };
    },
  },
};
</script>
