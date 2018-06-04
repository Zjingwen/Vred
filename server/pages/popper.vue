<template>
    <div>
        <headers></headers>
        <contents :linkName='linkName'>
            <h1>tooltip提示基础用用法</h1>
            <t-exapmple mode='vertical' more>
                <div slot="view">
                    <t-row type='flex' justify='center' class='mb10-ce'>
                        <t-col :span='5'>
                            <t-popper content='top-start' placement='top-start' :isOpen='true' trigger='click'>
                                <t-button size='tiny'>上左-click</t-button>
                            </t-popper>
                        </t-col>
                        <t-col :span='5'>
                            <t-popper content='top' placement='top' trigger='click'>
                                <t-button size='tiny'>上中-click</t-button>
                            </t-popper>
                        </t-col>
                        <t-col :span='5'>
                            <t-popper content='top-end' placement='top-end'>
                                <t-button size='tiny'>上右</t-button>
                            </t-popper>
                        </t-col>
                    </t-row>
                    <t-row type='flex' justify='space-between' class='mb10-ce'>
                        <t-col :span='5'>
                            <t-popper content='left-start' placement='left-start'>
                                <t-button size='tiny'>左上</t-button>
                            </t-popper>
                        </t-col>
                        <t-col :span='5'>
                            <t-popper content='right-start' placement='right-start'>
                                <t-button size='tiny'>右上</t-button>
                            </t-popper>
                        </t-col>
                    </t-row>
                    <t-row type='flex' justify='space-between' class='mb10-ce'>
                        <t-col :span='5'>
                            <t-popper content='left' placement='left'>
                                <t-button size='tiny'>右上</t-button>
                            </t-popper>
                        </t-col>
                        <t-col :span='5'>
                            <t-popper content='right' placement='right'>
                                <t-button size='tiny'>右中</t-button>
                            </t-popper>
                        </t-col>
                    </t-row>
                    <t-row type='flex' justify='space-between' class='mb10-ce'>
                        <t-col :span='5'>
                            <t-popper content='left-end' placement='left-end'>
                                <t-button size='tiny'>左下</t-button>
                            </t-popper>
                        </t-col>
                        <t-col :span='5'>
                            <t-popper content='right-end' placement='right-end'>
                                <t-button size='tiny'>右下</t-button>
                            </t-popper>
                        </t-col>
                    </t-row>
                    <t-row type='flex' justify='center' class='mb10-ce'>
                        <t-col :span='5'>
                            <t-popper content='bottom-start' placement='bottom-start'>
                                <t-button size='tiny'>下左</t-button>
                            </t-popper>
                        </t-col>
                        <t-col :span='5'>
                            <t-popper content='bottom' placement='bottom'>
                                <t-button size='tiny'>下中</t-button>
                            </t-popper>
                        </t-col>
                        <t-col :span='5'>
                            <t-popper content='bottom-end' placement='bottom-end'>
                                <t-button size='tiny'>下右</t-button>
                            </t-popper>
                        </t-col>
                    </t-row>
                </div>
                <div slot="markdown" v-html="tooltipMd"></div>
                <textarea slot="code" v-html="tooltipHtml"></textarea>
            </t-exapmple>
            <!-- <t-tooltip content='tooltip-test'>
                <t-button size='tiny'>test</t-button>
            </t-tooltip> -->
        </contents>
        <footers></footers>
    </div>
</template>
<style lang="css">
    .mb10-ce{
        margin-bottom: 10px;
        text-align: center;
    }
</style>
<script>
import tooltipHtml from '../doc/tooltip/tooltip.html';
import tooltipMd from '../doc/tooltip/tooltip.md';

export default {
  data: function() {
    return {
      linkName: "气泡提示",
      msg: "气泡提示，气泡提示，气泡提示，<br>气泡提示，气泡提示。",
      loading:{
          content: 'asyncContent',
          loadingContent: '<i>Loading...</i>',
      },
      isOpen: false,
      tooltipHtml: tooltipHtml,
      tooltipMd: tooltipMd
    };
  }
};
</script>
