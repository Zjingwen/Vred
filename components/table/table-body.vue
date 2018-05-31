<template>
    <tbody :class="classs"><slot></slot></tbody>
</template>

<style src='./table.css' lang="css" scoped></style>

<script>
const prefixCls = 'v-table-body';
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
