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
              linkName:'通知提醒',
          }
      },
      methods:{
          base: function(){
            this.$notice({
                title:'base',
                message:'base'
            });
          },
          success:function(){
            this.$notice.success({
                title:'success',
                message:'success'
            });
          },
          error: function(){
            this.$notice.error({
                title:'error',
                message:'error'
            });
          },
          info: function(){
            this.$notice.info({
                title:'info',
                message:'info'
            });
          },
          warning: function(){
            this.$notice.warning({
                title:'warning',
                message:'warning'
            });
          }
      }
    }
</script>
