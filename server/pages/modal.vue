<template>
  <div>
    <headers></headers>
    <contents :linkName='linkName'>
      <t-modal v-model='show'>
        123
      </t-modal>
      <t-button @click='handleShow'>handleShow</t-button>
    </contents>
    <footers></footers>
  </div>
</template>
<style lang="css"></style>
<script>
  export default{
    data:function(){
      return {
        linkName:'弹出窗',
        show: false,
      }
    },
    methods:{
      handleShow: function() {
        this.show = true;        
      },     
    }
  }
</script>
