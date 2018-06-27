<template>
    <div>
        <headers></headers>
        <contents :linkName='linkName'>
          <h1>开关</h1>
          <h2>常用模式</h2>
          <t-Switch v-model="switchBase" @on-change='change'></t-Switch>
          <p>switch：{{switchBase}}</p>
          <h2>disabled</h2>
          <t-Switch v-model="switchDisabled" disabled></t-Switch>
          <p>switch：{{switchDisabled}}</p>
        </contents>
        <footers></footers>
    </div>
</template>
<style lang="css"></style>
<script>
    export default{
        data:function(){
            return {
                linkName:'开关',
                switchBase: true,
                switchDisabled: true,
            }
        },
        methods:{
            change:function(val){
                this.$message(`switch emit : ${val}`)
            }
        }
    }
</script>
