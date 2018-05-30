<template>
    <div>
        <headers></headers>
        <contents :linkName='linkName' class='demo-content'>
            <h1>基础用法栅栏系统</h1>
            <t-exapmple mode='vertical' more>
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
                <textarea slot="markdown" v-text="staticMd"></textarea>
                <textarea slot="code" v-text="staticHtml"></textarea>
            </t-exapmple>
            <br>
            <h1>基础模式下的offset</h1>
            <t-exapmple mode='vertical'>
                <div slot="view"></div>
                <textarea slot="markdown"></textarea>
                <textarea slot="code"></textarea>
            </t-exapmple>
            <br>
            <h1>基础模式下的gutter</h1>
            <t-exapmple mode='vertical'>
                <div slot="view">
                    <t-row :gutter="10">
                        <t-col :offset='1' :span="4" style="background:none;"><div style="background:rgba(0,153,229,.7)">col</div></t-col>
                        <t-col :offset='2' :span="4" style="background:none;"><div style="background:rgba(0, 117, 175, 0.9)">col</div></t-col>
                        <t-col :offset='3' :span="4" style="background:none;"><div style="background:rgba(0, 117, 175, 0.9)">col</div></t-col>
                        <t-col :offset='4' :span="4" style="background:none;"><div style="background:rgba(0, 117, 175, 0.9)">col</div></t-col>
                        <t-col :offset='5' :span="4" style="background:none;"><div style="background:rgba(0, 117, 175, 0.9)">col</div></t-col>
                        <t-col :offset='6' :span="4" style="background:none;"><div style="background:rgba(0, 117, 175, 0.9)">col</div></t-col>
                    </t-row>
                </div>
                <textarea slot="markdown" v-text="offsetMd"></textarea>
                <textarea slot="code" v-text="offsetHtml"></textarea>
            </t-exapmple>
            <br>
            <t-exapmple mode='vertical' more>
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
                <textarea slot="markdown" v-text="flexMd"></textarea>
                <textarea slot="code" v-text="flexHtml"></textarea>
            </t-exapmple>
            <br>
            <h1>flex模式——justify用法</h1>
            <t-exapmple mode='vertical' more>
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
                <textarea slot="markdown" v-text="justifyMd"></textarea>
                <textarea slot="code" v-text="justifyHtml"></textarea>
            </t-exapmple>
            <br>
            <h1>flex模式——align用法</h1>
            <t-exapmple mode='vertical'>
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
                <textarea slot="markdown" v-text="alignMd"></textarea>
                <textarea slot="code" v-text="alignHtml"></textarea>
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
</style>
<script>
    import staticHtml from "../doc/row/static.html";
    import staticMd from "../doc/row/static.md";

    import flexHtml from "../doc/row/flex.html";
    import flexMd from "../doc/row/flex.md";

    import justifyHtml from "../doc/row/justify.html";
    import justifyMd from "../doc/row/justify.md";

    import alignHtml from "../doc/row/align.html";
    import alignMd from "../doc/row/align.md";

    import gutterHtml from "../doc/row/gutter.html";
    import gutterMd from "../doc/row/gutter.md";

    import offsetHtml from "../doc/row/offset.html";
    import offsetMd from "../doc/row/offset.md";
    

    export default{
        data:function(){
            return {
                linkName: '栅栏',
                staticHtml: staticHtml,
                staticMd: staticMd,
                flexHtml: flexHtml,
                flexMd: flexMd,
                justifyHtml: justifyHtml,
                justifyMd: justifyMd,
                alignHtml: alignHtml,
                alignMd: alignMd,
                gutterHtml: gutterHtml,
                gutterMd: gutterMd,
                offsetHtml: offsetHtml,
                offsetMd: offsetMd,
            }
        }
    }
</script>