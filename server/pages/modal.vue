<template>
  <div>
    <headers></headers>
    <contents :linkName='linkName'>
      <h1>setting</h1>
      <t-modal width='600' height='600' top='10' v-model='settingShow' />
      <t-modal v-model='sizeShow' :size='size'/>
      <t-button @click='handleSetting'>settingShow</t-button>
      <br>
      <h1>size</h1>
      <t-radioGroup v-model="size">
        <t-radio label='tiny'>tiny</t-radio>
        <t-radio label='default'>default</t-radio>
        <t-radio label='large'>large</t-radio>
      </t-radioGroup>
      <br>
      <t-button @click='handleSize'>sizeShow</t-button>
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
        settingShow: false,
        sizeShow: false,
        size: 'default'
      }
    },
    methods:{
      handleSetting: function() {
        this.settingShow = !this.settingShow;
      },
      handleSize: function(){
        this.sizeShow = !this.sizeShow;
      }
    }
  }
</script>
