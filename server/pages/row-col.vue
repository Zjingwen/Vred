<template>
    <div>
        <headers></headers>
        <contents :linkName='linkName' class='demo-content'>
            <h1>基础用法栅栏系统</h1>
            <br>
            <t-exapmple>
                <div slot="view">
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
                </div>
                <textarea slot="markdown" v-text="code1Md"></textarea>
                <textarea slot="code" v-text="code1Html"></textarea>
            </t-exapmple>
            <br>
            <h1>flex模式</h1>
            <br>
            <t-exapmple>
                <div slot="view">
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
                </div>
                <textarea slot="markdown" v-text="code2Md"></textarea>
                <textarea slot="code" v-text="code2Html"></textarea>
            </t-exapmple>
            <br>
            <h1>flex模式——justify用法</h1>
            <br>
            <t-exapmple>
                <div slot="view">
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
                </div>
                <textarea slot="markdown" v-text="code3Md"></textarea>
                <textarea slot="code" v-text="code3Html"></textarea>
            </t-exapmple>
            <br>
            <h1>flex模式——align用法</h1>
            <br>
            <t-exapmple>
                <div slot="view">
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
                </div>
                <textarea slot="markdown" v-text="code4Md"></textarea>
                <textarea slot="code" v-text="code4Html"></textarea>
            </t-exapmple>
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
    import code1Html from "../doc/row/code1.html";
    import code1Md from "../doc/row/code1.md";

    import code2Html from "../doc/row/code2.html";
    import code2Md from "../doc/row/code2.md";

    import code3Html from "../doc/row/code3.html";
    import code3Md from "../doc/row/code3.md";

    import code4Html from "../doc/row/code4.html";
    import code4Md from "../doc/row/code4.md";
    

    export default{
        data:function(){
            return {
                linkName: '栅栏',
                code1Html: code1Html,
                code1Md: code1Md,
                code2Html: code2Html,
                code2Md: code2Md,
                code3Html: code3Html,
                code3Md: code3Md,
                code4Html: code4Html,
                code4Md: code4Md
            }
        }
    }
</script>