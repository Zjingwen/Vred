<template>
    <div :class='classs'>
        <slot></slot>
    </div>
</template>
<style src='./index.less' lang="less"></style>
<script>
const profixCls = 'v-menu-item-group';

export default{
  name: profixCls,
  computed: {
    classs: function() {
      let classs = [
        `${profixCls}`,
      ];

      return classs;
    },
  },
};
</script>
