<template>
    <div>
        <headers></headers>
        <contents :linkName='linkName'>
            <p>常用模式</p>
            <t-radio v-model="radioDefault">radio</t-radio>
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
                radioDefault: true,
            }
        },
        methods:{
            handleChange:function(){

            },
        }
    }
</script>
