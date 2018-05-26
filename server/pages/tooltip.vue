<template>
    <div>
        <headers></headers>
        <contents :linkName='linkName'>
            <t-popover
                offset="16"
                >
                <t-button>Click me</t-button>
                <template slot="popover">
                    test
                </template>
            </t-popover>
            
            <t-popover
                offset="16"
                >
                <t-button>Click me2</t-button>
                <template slot="popover">
                    test2
                </template>
            </t-popover>
        </contents>
        <footers></footers>
    </div>
</template>
<style lang="css" scoped>

</style>
<script>
    export default{
        data:function(){
            return {
                linkName: '气泡提示'
            }
        }
    }
</script>