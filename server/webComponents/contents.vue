<template>
    <t-layout class='v-contents'>
        <t-sider>
            <div v-for="(item,index) in routes">
                <router-link :key='index' :to="item.path">{{item.name}}</router-link>
            </div>
        </t-sider>
        <t-content><slot></slot></t-content>
        <t-sider>
            留用
        </t-sider>
    </t-layout>
</template>
<style lang="css">
    .v-contents{
        margin: 0 auto;
        background: #FFF;
        padding-bottom: 20px;
        padding-top : 20px;
        margin-bottom: 20px;
    }
</style>
<script>
    import routes from '../routes.js';
    
    export default{
        data:function(){
            return {
                routes: routes
            }
        },
    }
</script>