<template>
    <div>
        <headers></headers>
        <contents :linkName='linkName'>
            <h1>input</h1>
            <h2>size</h2>
            <p>defalut</p>
            <t-input v-model='inputValue'></t-input>
            <p>large</p>
            <t-input v-model='inputValue' size='large'></t-input>
            <p>small</p>
            <t-input v-model='inputValue' size='small'></t-input>
            <p>tiny</p>
            <t-input v-model='inputValue' size='tiny'></t-input>
        </contents>
        <footers></footers>
    </div>
</template>
<style lang="css"></style>
<script>
    export default{
        data:function(){
            return {
                inputValue:'',
                linkName:'输入框'
            }
        },
        watch:{
            inputValue(value){
                console.log(value)
            }
        }
    }
</script>