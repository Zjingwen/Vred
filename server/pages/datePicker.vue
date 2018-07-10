<template>
  <div>
    <headers></headers>
    <contents :linkName='linkName'>
      <div style="width:244px;">
        <t-datePicker v-model='dateValue' />
      </div>
    </contents>
    <footers></footers>
  </div>
</template>
<style lang="css"></style>
<script>
  export default{
    data:function(){
      return {
        linkName:'日期选择',
        dateValue: ''
      }
    },
  }
</script>
