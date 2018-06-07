<template>
  <div>
    <headers></headers>
    <contents :linkName='linkName'>
      <h1>placement方向</h1>
      <t-exapmple mode='vertical'>
          <div slot="view">
              <t-row type='flex' justify='center' class='mb10-ce'>
                  <t-col :span='7'>
                      <t-poptip content='top-start' placement='top-start' isOpen transfer>
                          <t-button size='tiny'>上左</t-button>
                          <div slot="content">content</div>
                      </t-poptip>
                  </t-col>
                  <t-col :span='7'>
                      <t-poptip content='top' placement='top' always transfer>
                          <t-button size='tiny'>上中</t-button>
                          <div slot="content">content</div>
                      </t-poptip>
                  </t-col>
                  <t-col :span='7'>
                      <t-poptip content='top-end' placement='top-end' disabled transfer>
                          <t-button size='tiny'>上右</t-button>
                          <div slot="content">content</div>
                      </t-poptip>
                  </t-col>
              </t-row>
              <t-row type='flex' justify='space-between' class='mb10-ce'>
                  <t-col :span='5'>
                      <t-poptip content='left-start' placement='left-start' trigger='click' transfer>
                          <t-button size='tiny'>左上</t-button>
                          <div slot="content">content</div>
                      </t-poptip>
                  </t-col>
                  <t-col :span='5'>
                      <t-poptip content='right-start' placement='right-start' trigger='click' isOpen transfer>
                          <t-button size='tiny'>右上</t-button>
                          <div slot="content">content</div>
                      </t-poptip>
                  </t-col>
              </t-row>
              <t-row type='flex' justify='space-between' class='mb10-ce'>
                  <t-col :span='5'>
                      <t-poptip content='left' placement='left' trigger='click' always transfer>
                          <t-button size='tiny'>右上</t-button>
                          <div slot="content">content</div>
                      </t-poptip>
                  </t-col>
                  <t-col :span='5'>
                      <t-poptip content='right' placement='right' trigger='click' disabled transfer>
                          <t-button size='tiny'>右中</t-button>
                          <div slot="content">content</div>
                      </t-poptip>
                  </t-col>
              </t-row>
              <t-row type='flex' justify='space-between' class='mb10-ce'>
                  <t-col :span='5'>
                      <t-poptip content='left-end' placement='left-end' transfer>
                          <t-button size='tiny'>左下</t-button>
                          <div slot="content">content</div>
                      </t-poptip>
                  </t-col>
                  <t-col :span='5'>
                      <t-poptip content='right-end' placement='right-end' transfer>
                          <t-button size='tiny'>右下</t-button>
                          <div slot="content">content</div>
                      </t-poptip>
                  </t-col>
              </t-row>
              <t-row type='flex' justify='center' class='mb10-ce'>
                  <t-col :span='7'>
                      <t-poptip content='bottom-start' placement='bottom-start' transfer>
                          <t-button size='tiny'>下左</t-button>
                          <div slot="content">content</div>
                      </t-poptip>
                  </t-col>
                  <t-col :span='7'>
                      <t-poptip content='bottom' placement='bottom' transfer>
                          <t-button size='tiny'>下中</t-button>
                          <div slot="content">content</div>
                      </t-poptip>
                  </t-col>
                  <t-col :span='7'>
                      <t-poptip content='bottom-end' placement='bottom-end' transfer>
                          <t-button size='tiny'>下右</t-button>
                          <div slot="content">content</div>
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

