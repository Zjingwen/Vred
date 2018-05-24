<template>
    <div>
        <headers></headers>
        <contents>
            <h1>无sider</h1>
            <t-header>header</t-header>
            <t-layout class='demo-content'>
                <t-content>
                    <p v-for="i in 10" :key='i' v-text='i'></p>
                </t-content>
            </t-layout>
            <t-footer>footer</t-footer>
            <br>
            <h1>左sider</h1>
            <t-header>header</t-header>
            <t-layout class='demo-content'>
                <t-sider>sider</t-sider>
                <t-content>
                    <p v-for="i in 10" :key='i' v-text='i'></p>
                </t-content>
            </t-layout>
            <t-footer>footer</t-footer>
            <br>
            <h1>左sider</h1>
            <t-layout>
                <t-sider>sider</t-sider>
                <t-layout class='demo-content'>
                    <t-header>header</t-header>    
                    <t-content>
                        <p v-for="i in 10" :key='i' v-text='i'></p>
                    </t-content>
                    <t-footer>footer</t-footer>
                </t-layout>
            </t-layout>
            <br>
            <h1>右sider</h1>
            <t-header>header</t-header>
            <t-layout class='demo-content'>
                <t-content>
                    <p v-for="i in 10" :key='i' v-text='i'></p>
                </t-content>
                <t-sider width="400">sider</t-sider>
            </t-layout>
            <t-footer>footer</t-footer>
        </contents>
        <footers></footers>
    </div>
</template>
<style lang="css" scoped>
    .v-header,.v-footer{
        text-align: center;
        height: 36px;
        line-height: 36px;
        background: #000;
        color: #FFF;
        font-size: 12px;
    }
    .v-sider{
        background: rgba(0,153,229,.7);
    }
    .v-content{
        background: rgba(0, 117, 175, 0.9);
    }
</style>
<script>
    export default{
        
    }
</script>