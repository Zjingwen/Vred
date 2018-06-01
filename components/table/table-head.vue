<template>
    <thead :class="classs"><slot></slot></thead>
</template>

<style src='./table.css' lang="css"></style>

<script>
const prefixCls = 'v-table-head';
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
