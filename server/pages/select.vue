<template>
  <div>
      <headers></headers>
      <contents :linkName='linkName'>
        <t-select v-model="agentId" placeholder="代理帐号">
          <t-option v-for="(st,index) in agentList" :label="st.name" :value="st.id" :key="index"></t-option>
        </t-select>
        <t-select v-model="agentId2" placeholder="代理帐号">
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
        linkName: '下拉选择',
        agentId: '333',
        agentId2: '',
        agentList: [
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
    watch:{
      agentId: function(value) {
        this.$message(`agentId:${value}`);
      },
      agentId2: function(value) {
        this.$message(`agentId2:${value}`);
      },
    },
    methods:{
      getAgent:function(){
        console.log(this.agentId)
      }
    },
  }
</script>
