<template>
    <div>
        <headers></headers>
        <contents :linkName='linkName'>
          <h1>开关</h1>
          <p>常用模式</p>
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
            }
        },
        methods:{
        }
    }
</script>
