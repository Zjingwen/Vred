<template>
    <t-layout class='v-contents'>
        <t-sider>
            <t-menu :width='180' :height='45' mode='vertical' :active-name='linkName' @on:select='routerHandle'>
                <t-menuSub v-for="(item,index) in routes" :key='index' :name='item.name'>
                    {{item.name}}
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

        font-size: 14px;
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
        },
        methods:{
            routerHandle:function(name){
                this.routes.forEach(function(val){
                    if(name == val.name){
                        this.$router.push({
                            path: val.path
                        });
                    }
                }.bind(this));
            
            }
        }
    }
</script>