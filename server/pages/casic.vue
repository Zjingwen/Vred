<template>
<div>
  <headers></headers>
  <contents :linkName='linkName'>
    <t-row>
      <t-col class="main">字号和行号</t-col>
    </t-row>
    <br>
    <t-row>
      <t-col class="font-size-1">字号 hello world 1234567890</t-col>
      <t-col class="font-size-2">字号 hello world 1234567890</t-col>
      <t-col class="font-size-3">字号 hello world 1234567890</t-col>
      <t-col class="font-size-4">字号 hello world 1234567890</t-col>
      <t-col class="font-size-5">字号 hello world 1234567890</t-col>
      <t-col class="font-size-6">字号 hello world 1234567890</t-col>
      <t-col class="font-size-7">字号 hello world 1234567890</t-col>
      <t-col class="font-size-8">字号 hello world 1234567890</t-col>
      <t-col class="font-size-9">字号 hello world 1234567890</t-col>
      <t-col class="font-size-10">字号 hello world 1234567890</t-col>
    </t-row>
    <br>
    <t-row>
      <t-col class="main">根据功能区分文字样式</t-col>
    </t-row>
    <br>
    <t-row>
      <t-col class="main" :span='3'>主标题</t-col>
      <t-col class="sub-head" :span='3'>次级标题</t-col>
      <t-col class="small-head" :span='3'>小标题</t-col>
      <t-col class="text" :span='3'>正文</t-col>
      <t-col class="help" :span='3'>辅助文字</t-col>
      <t-col class="disabled" :span='3'>失效文字</t-col>
      <t-col class="link" :span='3'>链接</t-col>
    </t-row>
    <br>
    <t-row class="main">组件功能区分样式</t-row>
    <br>
    <t-row>
      <t-col :span='4'>
        <span class="base sub-head cpt-base">基础颜色</span>
      </t-col>
      <t-col :span='4'>
        <span class="base sub-head cpt-succes">成功</span>
      </t-col>
      <t-col :span='4'>
        <span class="base sub-head cpt-warning">警告</span>
      </t-col>
      <t-col :span='4'>
        <span class="base sub-head cpt-error">失败</span>
      </t-col>
      <t-col :span='4'>
        <span class="base sub-head cpt-info">说明</span>
      </t-col>
    </t-row>
  </contents>
  <footers></footers>
</div>
</template>
<style lang="css" scoped>
.base{
    display: inline-block;
    padding: 8px 15px;
}
</style>
<script>
    export default{
        data:function(){
            return {
                linkName: '基础'
            }
        }
    }
</script>