<template>
    <div>
        <headers></headers>
        <contents>
            <h1>size</h1>
            <hr>
            <p>tiny 小</p>
            <t-button size='tiny' @click="handleClick('tiny')" :disabled="true">tiny 小</t-button>
            <br>
            <br>
            <p>default 默认</p>
            <t-button size='default' @click="handleClick('default')">default</t-button>
            <br>
            <br>
            <p>large 大</p>
            <t-button size='large' :htmlType="type" @click="handleClick('large')">large</t-button>
            <br>
            <br>
            <p>long 长度自适应</p>
            <t-button size='long' @click="handleClick('long')">long</t-button>
            <br>
            <br>
            <p>auto 长宽自适应</p>
            <t-button size='auto' :width='120' :height='50' @click="handleClick('auto')">auto</t-button>
        </contents>
        <footers></footers>
    </div>
</template>
<style lang="css"></style>
<script>
    export default{
        data:function(){
            return {
                type:'submit'
            }
        },
        methods:{
            handleClick:function(val){
                console.log(val);
            }
        }
    }
</script>