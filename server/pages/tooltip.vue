
<template>
    <!--'auto'
    'auto-start'
    'auto-end'
    'top'
    'top-start'
    'top-end'
    'right'
    'right-start'
    'right-end'
    'bottom'
    'bottom-start'
    'bottom-end'
    'left'
    'left-start'
    'left-end'-->
    <div>
        <headers></headers>
        <contents :linkName='linkName'>
            <t-row style='text-align: center;margin-bottom: 10px;'>
                <t-col :span='2'>
                    &nbsp;
                </t-col>
                <t-col :span='2'>
                    <t-button size='tiny' v-tooltip.top-start="msg">上左</t-button>
                </t-col>
                <t-col :span='2'>
                    <t-button size='tiny' v-tooltip.top="msg">上中</t-button>
                </t-col>
                <t-col :span='2'>
                    <t-button size='tiny' v-tooltip.top-end="msg">上右</t-button>
                </t-col>
                <t-col :span='2'>
                    &nbsp;
                </t-col>
            </t-row>
            <t-row style='text-align: center;margin-bottom: 10px;'>
                <t-col :span='2'>
                    <t-button size='tiny' v-tooltip.left-start="msg">左上</t-button>
                </t-col>
                <t-col :span='2'>
                    &nbsp;
                </t-col>
                <t-col :span='2'>
                    &nbsp;
                </t-col>
                <t-col :span='2'>
                    &nbsp;
                </t-col>
                <t-col :span='2'>
                    <t-button size='tiny' v-tooltip.right-start="msg">右上</t-button>
                </t-col>
            </t-row>
            <t-row style='text-align: center;margin-bottom: 10px;'>
                <t-col :span='2'>
                    <t-button size='tiny' v-tooltip.left="msg">左中</t-button>
                </t-col>
                <t-col :span='2'>
                    &nbsp;
                </t-col>
                <t-col :span='2'>
                    &nbsp;
                </t-col>
                <t-col :span='2'>
                    &nbsp;
                </t-col>
                <t-col :span='2'>
                    <t-button size='tiny' v-tooltip.right="msg">右中</t-button>
                </t-col>
            </t-row>
            <t-row style='text-align: center;margin-bottom: 10px;'>
                <t-col :span='2'>
                    <t-button size='tiny' v-tooltip.left-end="msg">左下</t-button>
                </t-col>
                <t-col :span='2'>
                    &nbsp;
                </t-col>
                <t-col :span='2'>
                    &nbsp;
                </t-col>
                <t-col :span='2'>
                    &nbsp;
                </t-col>
                <t-col :span='2'>
                    <t-button size='tiny' v-tooltip.right-end="msg">右下</t-button>
                </t-col>
            </t-row>
            <t-row style='text-align: center;margin-bottom: 10px;'>
                <t-col :span='2'>
                    &nbsp;
                </t-col>
                <t-col :span='2'>
                    <t-button size='tiny' v-tooltip.bottom-start="msg">下左</t-button>
                </t-col>
                <t-col :span='2'>
                    <t-button size='tiny' v-tooltip.bottom="msg">下中</t-button>
                </t-col>
                <t-col :span='2'>
                    <t-button size='tiny' v-tooltip.bottom-end="msg">下右</t-button>
                </t-col>
                <t-col :span='2'>
                    &nbsp;
                </t-col>
            </t-row>
        </contents>
        <footers></footers>
    </div>
</template>
<style lang="css">
</style>
<script>
    export default{
        data:function(){
            return {
                linkName: '气泡提示',
                msg:'气泡提示，气泡提示，气泡提示，<br>气泡提示，气泡提示。',
                isOpen: true
            }
        }
    }


</script>
