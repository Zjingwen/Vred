<template>
  <div>
      <headers></headers>
      <contents :linkName='linkName'>
        <t-select v-model="val1" placeholder="model 有值" @on-change='handleChange'>
          <t-option v-for="(st,index) in agentList" :label="st.name" :value="st.id" :key="index"></t-option>
        </t-select>
        <t-select v-model="val2" placeholder="model 为空">
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
        val1: '333',
        val2: '',
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
        this.$message(`watch-val1:${value}`);
      },
      agentId2: function(value) {
        this.$message(`watch-val2:${value}`);
      },
    },
    methods:{
      handleChange:function(val){
        this.$message(`methods-val1:${val}`)
      }
    },
  }
</script>
