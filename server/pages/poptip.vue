<template>
  <div>
    <headers></headers>
    <contents :linkName='linkName'>
      <t-poptip>
        <t-button size='tiny'>poptip</t-button>
        <div slot="content">content</div>
      </t-poptip>
    </contents>
    <footers></footers>
  </div>
</template>
<style lang='css' scoped></style>
<script>
export default {
  data:function(){
    return {
      linkName: '模块提示',
    }
  },
}
</script>

