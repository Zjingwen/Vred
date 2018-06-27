<template>
  <div :class="classs">
    switch
  </div>
</template>
<style src='./switch.less' lang="less"></style>
<script>
const prefixCls = 't-switch';
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
