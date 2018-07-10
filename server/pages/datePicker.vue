<template>
  <div>
    <headers></headers>
    <contents :linkName='linkName'>
      <div>
        <t-datePicker v-model='dateValue1' />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <t-datePicker v-model='dateValue2' />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <t-timePicker v-model='timeValue1' />
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
        dateValue1: '',
        dateValue2: '2018-6-27',
        timeValue1: '',
      }
    },
  }
</script>
