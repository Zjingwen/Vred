<template>
    <div>
        <headers></headers>
        <contents :linkName='linkName'>
            <t-button @click='success'>success</t-button>
            <t-button @click='error'>error</t-button>
            <t-button @click='info'>info</t-button>
        </contents>
        <footers></footers>
    </div>
</template>
<style lang="css"></style>
<script>
    export default{
      data:function(){
          return {
              linkName:'消息提示',
          }
      },
      methods:{
          success:function(){
            this.$message('success');
          },
          error: function(){
            this.$message('error');
          },
          info: function(){
            this.$message('info');
          }
      }
    }
</script>
