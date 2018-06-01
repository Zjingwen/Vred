<template>
    <div :style="style" :class="classs"><slot></slot></div>
</template>
<style lang='css'>
    .v-layout{
        display: flex;
        flex-direction: column;
        flex: auto;
    }
    .v-layout-has-sider{
        flex-direction: row;
    }
</style>
<script>
const prefixCls = 'v-layout';
export default{
  name: prefixCls,
  data: function() {
    return {
      hasSider: false,
    };
  },
  props: {
    top: {
      type: Number,
      default: 0,
    },
    bottom: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    style: function() {
      let style = {
        overflow: 'hidden',
      };

      if (this.top) {
        style.paddingTop= this.top+'px';
      }

      if (this.bottom) {
        style.paddingBottom= this.bottom+'px';
      }

      return style;
    },
    classs: function() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-has-sider`]: this.hasSider,
        },
      ];
    },
  },
  methods: {
    findSider: function() {
      return this.$children.some((child)=>{
        return child.$options.name === 'v-sider';
      });
    },
  },
  mounted: function() {
    this.hasSider = this.findSider();
  },
};
</script>
