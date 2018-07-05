<template>
    <ul :class="classs">
        <li>{{title}}</li>
        <slot />
    </ul>
</template>
<style src='./index.less' lang="less"></style>
<script>
const profixCls = 'v-menu-item-group';

export default{
  name: profixCls,
  props: {
    title: {
      type: String | Number,
      default: '',
    },
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
