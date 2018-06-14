<template>
    <div :class='classs'>
        <slot></slot>
    </div>
</template>
<style src='./index.css' lang="css"></style>
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
