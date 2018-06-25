<template>
    <div>
        <headers></headers>
        <contents :linkName='linkName'>
            <t-button @click='base'>base</t-button>
            <t-button @click='success'>success</t-button>
            <t-button @click='error'>error</t-button>
            <t-button @click='info'>info</t-button>
            <t-button @click='warning'>warning</t-button>
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
          base: function(){
            this.$message('base');
          },
          success:function(){
            this.$message.success('success');
          },
          error: function(){
            this.$message.error('error');
          },
          info: function(){
            this.$message.info('info');
          },
          warning: function(){
              this.$message.warning('warning');
          }
      }
    }
</script>
