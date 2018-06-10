<template>
  <div>
    <headers></headers>
    <contents :linkName='linkName'>
      <h1>placement方向</h1>
      <t-exapmple mode='vertical'>
          <div slot="view">
              <t-row type='flex' justify='start' class='mb10-ce'>
                  <t-col :span='7'>
                      <t-poptip content='top-start' placement='top-start'>
                          <t-button size='tiny'>上左</t-button>
                          <div slot="content">上左</div>
                      </t-poptip>
                  </t-col>
              </t-row>
          </div>
          <div slot="markdown"></div>
          <textarea slot="code"></textarea>
      </t-exapmple>
    </contents>
    <footers></footers>
  </div>
</template>
<style lang='css' scoped></style>
<script>
export default {
  data:function(){
    return {
      linkName: '模块提示',
    }
  },
}
</script>

