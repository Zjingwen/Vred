<template>
    <div :style='style' :class='classs'><slot></slot></div>
</template>
<style src='./index.css' lang='css'></style>
<script>
const profixCls = 'v-menu-item';

export default{
  name: profixCls,
  data: function() {
    return {
      style: {},
    };
  },
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
