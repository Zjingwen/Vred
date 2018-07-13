<template>
<t-layout class='v-contents'>
  <t-sider>
    <t-menu :width='180' :height='45' mode='vertical' :active-name="activeName" @on-select='routerHandle'>
        <t-menuItem v-for="(item,index) in indexRouter" :name='item.path' :key="index">{{item.name}}</t-menuItem>
        <t-menuSub name='/casics'>
          <template slot="title">基础说明</template>
          <t-menuGroup>
            <t-menuItem v-for="(item,index) in casicRouter" :name='item.path' :key="index">{{item.name}}</t-menuItem>
          </t-menuGroup>
        </t-menuSub>
        <t-menuSub name='/components'>
            <template slot="title">组件说明</template>
            <t-menuGroup>
              <t-menuItem v-for="(item,index) in componentRouter" :name='item.path' :key="index">{{item.name}}</t-menuItem>
            </t-menuGroup>
        </t-menuSub>
    </t-menu>
  </t-sider>
  <t-content><slot /></t-content>
  <t-sider />
</t-layout>
</template>
<style lang="css" scoped>
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
import {casicRouter, componentRouter, indexRouter} from '../routes.js';
    
export default{
  props:{
    linkName: {
      type: String,
      default: '首页',
    }
  },
  data:function(){
    return {
      casicRouter: casicRouter,
      componentRouter: componentRouter,
      indexRouter: indexRouter,
      activeName: '/',
    };
  },
  mounted(){
    this.$nextTick(()=>{
      this.activeName = this.$route.path;
    })
  },
  methods:{
    routerHandle:function(name){
      const routes = [
        ...casicRouter,
        ...componentRouter,
        ...indexRouter,
      ];

      routes.forEach((val)=>{
        if(name == val.path) this.$router.push({path: val.path});
      });
    },
  },
};
</script>
