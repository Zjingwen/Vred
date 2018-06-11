<template>
  <div>
    <headers></headers>
    <contents :linkName='linkName'>
      <h1>placement方向</h1>
      <t-exapmple mode='vertical'>
          <div slot="view">
              <t-row type='flex' justify='center' class='mb10-ce'>
                  <t-col :span='7'>
                      <t-poptip placement='bottom'>
                          <t-button size='tiny'>bottom</t-button>
                          <div slot="content">bottom</div>
                      </t-poptip>
                  </t-col>
              </t-row>
          </div>
          <div slot="markdown"></div>
          <textarea slot="code"></textarea>
      </t-exapmple>
      <br>
      <h1>trigger事件</h1>
      <t-exapmple mode='vertical'>
          <div slot="view">
              <t-row type='flex' justify='center' class='mb10-ce'>
                  <t-col :span='7'>
                      <t-poptip trigger='hover' placement='bottom'>
                          <t-button size='tiny'>hover</t-button>
                          <div slot="content">hover</div>
                      </t-poptip>
                  </t-col>
                  <t-col :span='7'>
                      <t-poptip trigger='click' placement='bottom'>
                          <t-button size='tiny'>click</t-button>
                          <div slot="content">click</div>
                      </t-poptip>
                  </t-col>
              </t-row>
          </div>
          <div slot="markdown"></div>
          <textarea slot="code"></textarea>
      </t-exapmple>
      <br>
      <h1>width宽度自定义</h1>
      <t-exapmple mode='vertical'>
          <div slot="view">
              <t-row type='flex' justify='center' class='mb10-ce'>
                  <t-col :span='7'>
                      <t-poptip trigger='hover' :width='300' placement='bottom'>
                          <t-button size='tiny'>width</t-button>
                          <div slot="content">width</div>
                      </t-poptip>
                  </t-col>
              </t-row>
          </div>
          <div slot="markdown"></div>
          <textarea slot="code"></textarea>
      </t-exapmple>
      <br>
      <h1>minHeight最小高度自定义</h1>
      <t-exapmple mode='vertical'>
          <div slot="view">
              <t-row type='flex' justify='center' class='mb10-ce'>
                  <t-col :span='7'>
                      <t-poptip trigger='hover' :minHeight='300' placement='bottom'>
                          <t-button size='tiny'>minHeight</t-button>
                          <div slot="content">minHeight</div>
                      </t-poptip>
                  </t-col>
              </t-row>
          </div>
          <div slot="markdown"></div>
          <textarea slot="code"></textarea>
      </t-exapmple>
      <br>
      <h1>transfer在body出插入dom</h1>
      <t-exapmple mode='vertical'>
          <div slot="view">
              <t-row type='flex' justify='center' class='mb10-ce'>
                  <t-col :span='7'>
                      <t-poptip placement='bottom' transfer>
                          <t-button size='tiny'>transfer</t-button>
                          <div slot="content">transfer</div>
                      </t-poptip>
                  </t-col>
              </t-row>
          </div>
          <div slot="markdown"></div>
          <textarea slot="code"></textarea>
      </t-exapmple>
      <br>
      <h1>isOpen默认显示</h1>
      <t-exapmple mode='vertical'>
          <div slot="view">
              <t-row type='flex' justify='center' class='mb10-ce'>
                  <t-col :span='7'>
                      <t-poptip placement='left' isOpen transfer>
                          <t-button size='tiny'>isOpen</t-button>
                          <div slot="content">isOpen</div>
                      </t-poptip>
                  </t-col>
              </t-row>
          </div>
          <div slot="markdown"></div>
          <textarea slot="code"></textarea>
      </t-exapmple>
      <br>
      <h1>always默认显示禁止隐藏</h1>
      <t-exapmple mode='vertical'>
          <div slot="view">
              <t-row type='flex' justify='center' class='mb10-ce'>
                  <t-col :span='7'>
                      <t-poptip placement='right' always transfer>
                          <t-button size='tiny'>always</t-button>
                          <div slot="content">always</div>
                      </t-poptip>
                  </t-col>
              </t-row>
          </div>
          <div slot="markdown"></div>
          <textarea slot="code"></textarea>
      </t-exapmple>
      <br>
      <h1>disabled禁止显示</h1>
      <t-exapmple mode='vertical'>
          <div slot="view">
              <t-row type='flex' justify='center' class='mb10-ce'>
                  <t-col :span='7'>
                      <t-poptip placement='bottom' disabled>
                          <t-button size='tiny'>disabled</t-button>
                          <div slot="content">disabled</div>
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
<style>
    .t-poptip-poper{
        background: #EEEEEE;
    }
</style>
<script>
export default {
  data:function(){
    return {
      linkName: '模块提示',
    }
  },
}
</script>

