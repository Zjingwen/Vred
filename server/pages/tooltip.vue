
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
    .v-popover{
        display: inline-block;
    }
    .tooltip {
        display: block !important;
        z-index: 10000;
    }
    .tooltip .tooltip-inner {
        background: black;
        color: white;
        padding: 5px 10px 4px;
        font-size: 12px;
    }
    .tooltip .tooltip-arrow {
        width: 0;
        height: 0;
        border-style: solid;
        position: absolute;
        margin: 5px;
        border-color: black;
        z-index: 1;
    }
    .tooltip[x-placement^="top"] {
        margin-bottom: 5px;
    }
    .tooltip[x-placement^="top"] .tooltip-arrow {
        border-width: 5px 5px 0 5px;
        border-left-color: transparent !important;
        border-right-color: transparent !important;
        border-bottom-color: transparent !important;
        bottom: -5px;
        left: calc(50% - 5px);
        margin-top: 0;
        margin-bottom: 0;
    }
    .tooltip[x-placement^="bottom"] {
        margin-top: 5px;
    }
    .tooltip[x-placement^="bottom"] .tooltip-arrow {
        border-width: 0 5px 5px 5px;
        border-left-color: transparent !important;
        border-right-color: transparent !important;
        border-top-color: transparent !important;
        top: -5px;
        left: calc(50% - 5px);
        margin-top: 0;
        margin-bottom: 0;
    }
    .tooltip[x-placement^="right"] {
        margin-left: 5px;
    }
    .tooltip[x-placement^="right"] .tooltip-arrow {
        border-width: 5px 5px 5px 0;
        border-left-color: transparent !important;
        border-top-color: transparent !important;
        border-bottom-color: transparent !important;
        left: -5px;
        top: calc(50% - 5px);
        margin-left: 0;
        margin-right: 0;
    }
    .tooltip[x-placement^="left"] {
        margin-right: 5px;
    }
    .tooltip[x-placement^="left"] .tooltip-arrow {
        border-width: 5px 0 5px 5px;
        border-top-color: transparent !important;
        border-right-color: transparent !important;
        border-bottom-color: transparent !important;
        right: -5px;
        top: calc(50% - 5px);
        margin-left: 0;
        margin-right: 0;
    }
    .tooltip[aria-hidden='true'] {
        visibility: hidden;
        opacity: 0;
        transition: opacity 0.15s, visibility 0.15s;
    }
    .tooltip[aria-hidden='false'] {
        visibility: visible;
        opacity: 1;
        transition: opacity 0.15s;
    }




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
