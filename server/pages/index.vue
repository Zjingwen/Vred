<template>
    <div>
        <headers></headers>
        <contents :linkName='linkName'>index</contents>
        <footers></footers>
    </div>
</template>
<style lang="css" scoped></style>
<script>
    export default{
        data:function(){
            return {
                linkName: '首页'
            }
        }
    }
</script>