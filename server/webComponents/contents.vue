<template>
    <t-layout>
        <t-sider>
            <div v-for="(item,index) in routes">
                <router-link :key='index' :to="item.path">{{item.name}}</router-link>
            </div>
        </t-sider>
        <t-content><slot></slot></t-content>
    </t-layout>
</template>
<style lang="css"></style>
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