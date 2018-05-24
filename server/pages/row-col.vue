<template>
    <div>
        <headers></headers>
        <contents class='demo-content'>
            <h1>基础用法</h1>
            <t-row>
                <t-col :span='24'>col</t-col>
            </t-row>
            <br>
            <t-row>
                    <t-col :span='5'>col</t-col>
                    <t-col :span='5'>col</t-col>
                    <t-col :span='5'>col</t-col>
                    <t-col :span='5'>col</t-col>
                    <t-col :span='5'>col</t-col>
            </t-row>
            <br>
            <t-row>
                <t-col :span='4'>col</t-col>
                <t-col :span='4'>col</t-col>
                <t-col :span='4'>col</t-col>
                <t-col :span='4'>col</t-col>
                <t-col :span='4'>col</t-col>
                <t-col :span='4'>col</t-col>
            </t-row>
            <br>
            <t-row>
                <t-col :span='3'>col</t-col>
                <t-col :span='3'>col</t-col>
                <t-col :span='3'>col</t-col>
                <t-col :span='3'>col</t-col>
                <t-col :span='3'>col</t-col>
                <t-col :span='3'>col</t-col>
                <t-col :span='3'>col</t-col>
                <t-col :span='3'>col</t-col>
            </t-row>
            <br>
            <t-row>
                <t-col :span='2'>col</t-col>
                <t-col :span='2'>col</t-col>
                <t-col :span='2'>col</t-col>
                <t-col :span='2'>col</t-col>
                <t-col :span='2'>col</t-col>
                <t-col :span='2'>col</t-col>
                <t-col :span='2'>col</t-col>
                <t-col :span='2'>col</t-col>
                <t-col :span='2'>col</t-col>
                <t-col :span='2'>col</t-col>
                <t-col :span='2'>col</t-col>
                <t-col :span='2'>col</t-col>
            </t-row>
            <br>
            <t-row>
                <t-col :span='1'>col</t-col>
                <t-col :span='1'>col</t-col>
                <t-col :span='1'>col</t-col>
                <t-col :span='1'>col</t-col>
                <t-col :span='1'>col</t-col>
                <t-col :span='1'>col</t-col>
                <t-col :span='1'>col</t-col>
                <t-col :span='1'>col</t-col>
                <t-col :span='1'>col</t-col>
                <t-col :span='1'>col</t-col>
                <t-col :span='1'>col</t-col>
                <t-col :span='1'>col</t-col>
                <t-col :span='1'>col</t-col>
                <t-col :span='1'>col</t-col>
                <t-col :span='1'>col</t-col>
                <t-col :span='1'>col</t-col>
                <t-col :span='1'>col</t-col>
                <t-col :span='1'>col</t-col>
                <t-col :span='1'>col</t-col>
                <t-col :span='1'>col</t-col>
                <t-col :span='1'>col</t-col>
                <t-col :span='1'>col</t-col>
                <t-col :span='1'>col</t-col>
                <t-col :span='1'>col</t-col>
            </t-row>
            <h1>gutter用法</h1>
            <t-row :gutter='60'>
                <t-col :span='12'>
                    <div>col</div>
                </t-col>
                <t-col :span='12'>
                    <div>col</div>
                </t-col>
            </t-row>
            <br>
            <t-row :gutter='60'>
                <t-col :span='8'>
                    <div>col</div>
                </t-col>
                <t-col :span='8'>
                    <div>col</div>
                </t-col>
                <t-col :span='8'>
                    <div>col</div>
                </t-col>
            </t-row>
            <h1>offset用法</h1>
            <t-row>
                <t-col :offset='1' :span='5'>col</t-col>
                <t-col :offset='1' :span='5'>col</t-col>
                <t-col :offset='1' :span='5'>col</t-col>
                <t-col :offset='1' :span='5'>col</t-col>
            </t-row>
            <h1>fiex用法</h1>
            <t-row type='flex'>
                <t-col :span='24'>col</t-col>
            </t-row>
            <br>
            <t-row type='flex'>
                    <t-col :span='5'>col</t-col>
                    <t-col :span='5'>col</t-col>
                    <t-col :span='5'>col</t-col>
                    <t-col :span='5'>col</t-col>
                    <t-col :span='5'>col</t-col>
            </t-row>
            <br>
            <t-row type='flex'>
                <t-col :span='4'>col</t-col>
                <t-col :span='4'>col</t-col>
                <t-col :span='4'>col</t-col>
                <t-col :span='4'>col</t-col>
                <t-col :span='4'>col</t-col>
                <t-col :span='4'>col</t-col>
            </t-row>
            <br>
            <t-row type='flex'>
                <t-col :span='3'>col</t-col>
                <t-col :span='3'>col</t-col>
                <t-col :span='3'>col</t-col>
                <t-col :span='3'>col</t-col>
                <t-col :span='3'>col</t-col>
                <t-col :span='3'>col</t-col>
                <t-col :span='3'>col</t-col>
                <t-col :span='3'>col</t-col>
            </t-row>
            <br>
            <t-row type='flex'>
                <t-col :span='2'>col</t-col>
                <t-col :span='2'>col</t-col>
                <t-col :span='2'>col</t-col>
                <t-col :span='2'>col</t-col>
                <t-col :span='2'>col</t-col>
                <t-col :span='2'>col</t-col>
                <t-col :span='2'>col</t-col>
                <t-col :span='2'>col</t-col>
                <t-col :span='2'>col</t-col>
                <t-col :span='2'>col</t-col>
                <t-col :span='2'>col</t-col>
                <t-col :span='2'>col</t-col>
            </t-row>
            <br>
            <t-row type='flex'>
                <t-col :span='1'>col</t-col>
                <t-col :span='1'>col</t-col>
                <t-col :span='1'>col</t-col>
                <t-col :span='1'>col</t-col>
                <t-col :span='1'>col</t-col>
                <t-col :span='1'>col</t-col>
                <t-col :span='1'>col</t-col>
                <t-col :span='1'>col</t-col>
                <t-col :span='1'>col</t-col>
                <t-col :span='1'>col</t-col>
                <t-col :span='1'>col</t-col>
                <t-col :span='1'>col</t-col>
                <t-col :span='1'>col</t-col>
                <t-col :span='1'>col</t-col>
                <t-col :span='1'>col</t-col>
                <t-col :span='1'>col</t-col>
                <t-col :span='1'>col</t-col>
                <t-col :span='1'>col</t-col>
                <t-col :span='1'>col</t-col>
                <t-col :span='1'>col</t-col>
                <t-col :span='1'>col</t-col>
                <t-col :span='1'>col</t-col>
                <t-col :span='1'>col</t-col>
                <t-col :span='1'>col</t-col>
            </t-row>
            <h1>justify用法</h1>
            <t-row type='flex' justify='start'>
                <t-col :span='5'>col</t-col>
                <t-col :span='5'>col</t-col>
                <t-col :span='5'>col</t-col>
                <t-col :span='5'>col</t-col>
            </t-row>
            <br>
            <t-row type='flex' justify='end'>
                <t-col :span='5'>col</t-col>
                <t-col :span='5'>col</t-col>
                <t-col :span='5'>col</t-col>
                <t-col :span='5'>col</t-col>
            </t-row>
            <br>
            <t-row type='flex' justify='center'>
                <t-col :span='5'>col</t-col>
                <t-col :span='5'>col</t-col>
                <t-col :span='5'>col</t-col>
                <t-col :span='5'>col</t-col>
            </t-row>
            <br>
            <t-row type='flex' justify='space-around'>
                <t-col :span='5'>col</t-col>
                <t-col :span='5'>col</t-col>
                <t-col :span='5'>col</t-col>
                <t-col :span='5'>col</t-col>
            </t-row>
            <br>
            <t-row type='flex' justify='space-between'>
                <t-col :span='5'>col</t-col>
                <t-col :span='5'>col</t-col>
                <t-col :span='5'>col</t-col>
                <t-col :span='5'>col</t-col>
            </t-row>
            <h1>align用法</h1>
            <t-row type='flex' align='top'>
                <t-col :span='6'><div style="height: 140px;">col</div></t-col>
                <t-col :span='6'><div style="height: 100px;">col</div></t-col>
                <t-col :span='6'><div>col</div></t-col>
                <t-col :span='6'><div style="height: 80px;">col</div></t-col>
            </t-row>
            <br>
            <t-row type='flex' justify='center' align='middle'>
                <t-col :span='6'><div style="height: 140px;">col</div></t-col>
                <t-col :span='6'><div style="height: 100px;">col</div></t-col>
                <t-col :span='6'><div>col</div></t-col>
                <t-col :span='6'><div style="height: 80px;">col</div></t-col>
            </t-row>
            <br>
            <t-row type='flex' justify='center' align='bottom'>
                <t-col :span='6'><div style="height: 140px;">col</div></t-col>
                <t-col :span='6'><div style="height: 100px;">col</div></t-col>
                <t-col :span='6'><div>col</div></t-col>
                <t-col :span='6'><div style="height: 80px;">col</div></t-col>
            </t-row>
        </contents>
        <footers></footers>
    </div>
</template>
<style lang="css" scoped>
    .demo-content .v-col,.v-col div{
        font-size: 12px;
        line-height: 3;
        text-align: center;
        color: #FFF;
        background: rgba(0,153,229,.7);
    }
    .demo-content .v-col:nth-child(odd),.v-col:nth-child(odd) div{
        background: rgba(0, 117, 175, 0.9);
    }
    .v-sider{
        background: #FF00FF;
    }
</style>
<script>
    export default{
        
    }
</script>