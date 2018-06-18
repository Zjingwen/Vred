<template>
    <div>
        <headers></headers>
        <contents :linkName='linkName'>
            <p>默认</p>
            <t-input v-model='inputValue'></t-input>
            <p>tiny 小</p>
            <t-input v-model='inputValue' size='tiny' placeholder='size is tiny'></t-input>
            <p>default 中</p>
            <t-input v-model='inputValue' size='default'></t-input>
            <p>large 大</p>
            <t-input v-model='inputValue' size='large'></t-input>
            <p>disabled</p>
            <t-input v-model='inputValue' size='default' disabled></t-input>
            <h1>model:{{inputValue}}</h1>
        </contents>
        <footers></footers>
    </div>
</template>
<style lang="css"></style>
<script>
    export default{
        data:function(){
            return {
                inputValue:'test',
                linkName:'输入框'
            }
        },
    }
</script>