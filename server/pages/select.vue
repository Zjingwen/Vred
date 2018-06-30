<template>
  <div>
      <headers></headers>
      <contents :linkName='linkName'>
        <t-select v-model="agentId" placeholder="代理帐号" :remote-method="getAgent" remote filterable>
          <t-option v-for="(st,index) in agentList" :label="st.name" :value="st.id" :key="index"></t-option>
        </t-select>
      </contents>
      <footers></footers>
  </div>
</template>
<style lang="css"></style>
<script>
    export default{
        data:function(){
            return {
                linkName:'下拉选择',
                agentId:'333',
                agentList:[
                  {name:'aaa',id:'111'},
                  {name:'bbb',id:'222'},
                  {name:'ccc',id:'333'},
                  {name:'ddd',id:'444'},
                  {name:'eee',id:'555'},
                  {name:'fff',id:'666'},
                  {name:'ggg',id:'777'},
                ]
            }
        },
        methods:{
          getAgent:function(){
            console.log(this.agentId)
          }
        }
    }
</script>
