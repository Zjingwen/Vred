<template>
    <th><div><span :class='classs'><slot></slot></span></div></th>
</template>

<style src='./table.css' lang="css"></style>

<script>
const prefixCls = 'v-table-th';
export default {
  name: prefixCls,
  computed: {
    classs: function() {
      let classs = [
        `${prefixCls}`,
      ];

      return classs;
    },
  },
};
</script>
