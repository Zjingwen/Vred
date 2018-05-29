<template>
    <div>
        <headers></headers>
        <contents :linkName='linkName'>
            <h1>按钮-size</h1>
            <t-exapmple mode='vertical'>
                <div slot="view">
                    <t-button size='tiny'>tiny 小</t-button>
                    <br>
                    <br>
                    <t-button size='default' @click="handleClick('default')">default</t-button>
                    <br>
                    <br>
                    <t-button size='large' :htmlType="type" @click="handleClick('large')">large</t-button>
                    <br>
                    <br>
                    <t-button size='auto' :width='120' :height='50' @click="handleClick('auto')">auto</t-button>
                    <br>
                    <br>
                    <t-button size='default' long @click="handleClick('auto')">long</t-button>
                </div>
                <textarea slot="markdown" v-html="sizeMd"></textarea>
                <textarea slot="code" v-html="sizeHtml"></textarea>
            </t-exapmple>
            <br>
            <h1>按钮-disabled</h1>
            <t-exapmple mode='vertical'>
                <div slot="view">
                    <t-button>default</t-button>
                    <br><br>
                    <t-button type='text'>text</t-button>
                    <br><br>
                    <t-button type='warning'>warning</t-button>
                    <br><br>
                    <t-button type='error'>error</t-button>
                </div>
                <textarea slot="markdown" v-html="typeMd"></textarea>
                <textarea slot="code" v-html="typeHtml"></textarea>
            </t-exapmple>
            <br>
            <h1>按钮-click</h1>
            <t-exapmple mode='vertical'>
                <div slot="view">
                    <t-button size='default' @click="handleClick('default')">click</t-button>
                </div>
                <textarea slot="markdown" v-html="clickMd"></textarea>
                <textarea slot="code" v-html="clickHtml"></textarea>
            </t-exapmple>
        </contents>
        <footers></footers>
    </div>
</template>
<style lang="css"></style>
<script>
    import sizeHtml from '../doc/button/size.html';
    import sizeMd from '../doc/button/size.md';

    import disabledHtml from '../doc/button/disabled.html';
    import disabledMd from '../doc/button/disabled.md';

    import typeHtml from '../doc/button/type.html';
    import typeMd from '../doc/button/type.md';

    import clickHtml from '../doc/button/click.html';
    import clickMd from '../doc/button/click.md';

    export default{
        data:function(){
            return {
                type:'submit',
                linkName: '按钮',
                sizeHtml: sizeHtml,
                sizeMd: sizeMd,
                disabledHtml: disabledHtml,
                disabledMd: disabledMd,
                typeHtml: typeHtml,
                typeMd: typeMd,
                clickHtml: clickHtml,
                clickMd: clickMd,
            }
        },
        methods:{
            handleClick:function(val){
                alert(val);
            }
        }
    }
</script>