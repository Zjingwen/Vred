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
      <t-radio v-model="disabledValue" :disabled='disabled'>radio-disabled</t-radio>
      <p>radio-disabled：{{disabledValue}}</p>
      <br>
      <t-radio v-model="labelValue">指定label</t-radio>
      <p>radio-disabled：{{labelValue}}</p>
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
            disabledValue: true,
            disabled: true,
            labelValue: false,
        }
    },
    methods:{
        handleChange:function(){

        },
    },
    watch:{
      radioFalse:function(val){
        console.log(val)
      }
    }
  }
</script>
