<template>
    <div>
        <headers></headers>
        <contents :linkName='linkName'>
            <t-checkbox v-model="checkbox1">checkbox1</t-checkbox>
            <t-checkbox v-model="checkbox1" disabled>checkbox1</t-checkbox>
            <t-checkbox v-model="checkbox1" disabled>checkbox1</t-checkbox>
            <t-checkbox v-model="checkbox1" @change='func'>checkbox1</t-checkbox>
        </contents>
        <footers></footers>
    </div>
</template>
<style lang="css"></style>
<script>
    export default{
        data:function(){
            return {
                linkName:'多选框',
                checkbox1: true
            }
        },
        methods:{
          func:function(){
            console.log('true');
          }
        }
    }
</script>
