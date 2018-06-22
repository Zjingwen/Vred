<template>
    <div>
        <headers></headers>
        <contents :linkName='linkName'>
            <p>常用模式</p>
            <t-checkbox v-model="checkbox">checkbox</t-checkbox>
            <p>{{checkbox}}</p>
            <br>
            <p>禁用模式</p>
            <t-checkbox v-model="disabled" disabled>disabled</t-checkbox>
            <p>{{disabled}}</p>
            <br>
            <p>change模式，指定label</p>
            <t-checkbox v-model="change" label='change' @change='handleChange'>change</t-checkbox>
            <p>{{changeObj}}</p>
            <br>
            <p>change模式，不指定label</p>
            <t-checkbox v-model="changeNotLabel" @change='handleChangeNotLabel'>changeNotLabel</t-checkbox>
            <p>{{changeNotLabelObj}}</p>
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
                checkbox: true,
                disabled: true,
                change: true,
                changeObj:{},
                changeNotLabel:true,
                changeNotLabelObj:{},
            }
        },
        methods:{
            handleChange:function(val){
                this.changeObj = val;
            },
            handleChangeNotLabel:function(val){
                this.changeNotLabelObj = val;
            }
        }
    }
</script>
