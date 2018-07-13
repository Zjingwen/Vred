<template>
  <div>
    <headers></headers>
    <contents :linkName='linkName'>
      <h1>首页</h1>        
    </contents>
    <footers></footers>
  </div>
</template>
<style lang="css" scoped>
</style>
<script>
  export default{
    data:function(){
      return {
        linkName: '首页',
      }
    }
  }
</script>