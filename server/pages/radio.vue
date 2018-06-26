<template>
  <div>
    <headers></headers>
    <contents :linkName='linkName'>
      <p>常用模式</p>
      <t-radio v-model="radioFalse">radio-change</t-radio>
      <p>radio-change：{{radioFalse}}</p>
      <br>
      <t-radio v-model="radioTrue">radio-true</t-radio>
      <p>radio-true：{{radioTrue}}</p>
      <br>
      <t-radio v-model="disabledTrue" :disabled='disabled'>radio-disabled-true</t-radio>
      <p>radio-disabled-true：{{disabledTrue}}</p>
      <br>
      <t-radio v-model="disabledFalse" :disabled='disabled'>radio-disabled-false</t-radio>
      <p>radio-disabled-true：{{disabledFalse}}</p>
      <br>
      <p>group模式</p>
      <t-radioGroup v-model="phone">
        <t-radio label='apple' disabled>apple</t-radio>
        <t-radio label='andorid'>andorid</t-radio>
        <t-radio label='window'>window</t-radio>
      </t-radioGroup>
      <p>phone：{{phone}}</p>
    </contents>
    <footers></footers>
  </div>
</template>
<style lang="css"></style>
<script>
  export default{
    data:function(){
        return {
          linkName:'单选框',
          radioFalse: false,
          radioTrue: true,
          disabledTrue: true,
          disabledFalse: false,
          disabled: true,
          labelValue: false,
          phone: 'apple'
        }
    },
  }
</script>
