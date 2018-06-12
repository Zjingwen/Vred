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
          <div slot="markdown" v-html='placementMd'></div>
          <textarea slot="code" v-html='placementHtml'></textarea>
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
          <div slot="markdown" v-html='triggerMd'></div>
          <textarea slot="code" v-html='triggerHtml'></textarea>
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
          <div slot="markdown" v-html='widthMd'></div>
          <textarea slot="code" v-html='widthHtml'></textarea>
      </t-exapmple>
      <br>
      <h1>minHeight最小高度自定义</h1>
      <t-exapmple mode='vertical'>
          <div slot="view">
              <t-row type='flex' justify='center' class='mb10-ce'>
                  <t-col :span='7'>
                      <t-poptip trigger='hover' :maxHeight='300' placement='bottom'>
                          <t-button size='tiny'>maxHeight</t-button>
                          <div slot="content">
                            maxHeight<br/>
                            maxHeight<br/>
                            maxHeight<br/>
                            maxHeight<br/>
                            maxHeight<br/>
                            maxHeight<br/>
                            maxHeight<br/>
                            maxHeight<br/>
                            maxHeight<br/>
                            maxHeight<br/>
                            maxHeight<br/>
                            maxHeight<br/>
                            maxHeight<br/>
                            maxHeight<br/>
                            maxHeight<br/>
                            maxHeight<br/>
                            maxHeight<br/>
                            maxHeight<br/>
                            maxHeight<br/>
                            maxHeight<br/>
                            maxHeight<br/>
                          </div>
                      </t-poptip>
                  </t-col>
              </t-row>
          </div>
          <div slot="markdown" v-html="maxHeightMd"></div>
          <textarea slot="code" v-html="maxHeightHtml"></textarea>
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
          <div slot="markdown" v-html="transferMd"></div>
          <textarea slot="code" v-html="transferHtml"></textarea>
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
          <div slot="markdown" v-html="isOpenMd"></div>
          <textarea slot="code" v-html="isOpenHtml"></textarea>
      </t-exapmple>
      <br>
      <h1>always默认显示禁止隐藏</h1>
      <t-exapmple mode='vertical'>
          <div slot="view">
              <t-row type='flex' justify='center' class='mb10-ce'>
                  <t-col :span='7'>
                      <t-poptip placement='left' always transfer>
                          <t-button size='tiny'>always</t-button>
                          <div slot="content">always</div>
                      </t-poptip>
                  </t-col>
              </t-row>
          </div>
          <div slot="markdown" v-html="alwaysMd"></div>
          <textarea slot="code" v-html="alwaysHtml"></textarea>
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
          <div slot="markdown" v-html="disabledMd"></div>
          <textarea slot="code" v-html="disabledHtml"></textarea>
      </t-exapmple>
    </contents>
    <footers></footers>
  </div>
</template>
<style>
.t-poptip-poper {
  background: #eeeeee;
}
</style>
<script>
import placementHtml from "../doc/poptip/placement.html";
import placementMd from "../doc/poptip/placement.md";

import triggerHtml from "../doc/poptip/trigger.html";
import triggerMd from "../doc/poptip/trigger.md";

import widthHtml from "../doc/poptip/width.html";
import widthMd from "../doc/poptip/width.md";

import maxHeightHtml from "../doc/poptip/maxHeight.html";
import maxHeightMd from "../doc/poptip/maxHeight.md";

import transferHtml from "../doc/poptip/transfer.html";
import transferMd from "../doc/poptip/transfer.md";

import isOpenHtml from "../doc/poptip/isOpen.html";
import isOpenMd from "../doc/poptip/isOpen.md";

import alwaysHtml from "../doc/poptip/always.html";
import alwaysMd from "../doc/poptip/always.md";

import disabledHtml from "../doc/poptip/disabled.html";
import disabledMd from "../doc/poptip/disabled.md";

export default {
  data: function() {
    return {
      linkName: "模块提示",
      placementHtml: placementHtml,
      placementMd: placementMd,
      triggerHtml: triggerHtml,
      triggerMd: triggerMd,
      widthHtml: widthHtml,
      widthMd: widthMd,
      maxHeightHtml: maxHeightHtml,
      maxHeightMd: maxHeightMd,
      transferHtml: transferHtml,
      transferMd: transferMd,
      isOpenHtml: isOpenHtml,
      isOpenMd: isOpenMd,
      alwaysHtml: alwaysHtml,
      alwaysMd: alwaysMd,
      disabledHtml: disabledHtml,
      disabledMd: disabledMd,
    };
  }
};
</script>

