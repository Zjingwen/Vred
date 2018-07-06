<template>
  <ul :class="classs" v-show='show'>
    <li v-if='title' :class="[`${profixCls}-title`]">{{title}}</li>
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
  data: function() {
    return {
      profixCls: profixCls,
      show: true,
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
