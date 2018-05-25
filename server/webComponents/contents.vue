<template>
    <t-layout class='v-contents'>
        <t-sider>
            <t-menu :width='180' mode='vertical' :active-name='linkName'>
                <t-menuSub v-for="(item,index) in routes" :key='index' :name='item.name'>
                    <router-link class='link' :key='index' :to="item.path">{{item.name}}</router-link>
                </t-menuSub>
            </t-menu>
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
        min-height: 800px;
    }
    .link{
        display: block;
    }
</style>
<script>
    import routes from '../routes.js';
    
    export default{
        props:{
            linkName: {
                type: String,
                default: '首页'
            }
        },
        data:function(){
            return {
                routes: routes
            }
        }
    }
</script>