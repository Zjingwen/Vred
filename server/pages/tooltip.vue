<template>
    <div>
        <headers></headers>
        <contents :linkName='linkName'>
            <h1>tooltip提示基础用用法</h1>
            <t-exapmple mode='vertical'>
                <div slot="view">
                    <t-row type='flex' justify='center' class='mb10-ce'>
                        <t-col :span='7'>
                            <t-tooltip content='top-start' placement='top-start' transfer>
                                <t-button size='tiny'>上左</t-button>
                            </t-tooltip>
                        </t-col>
                        <t-col :span='7'>
                            <t-tooltip content='top' placement='top' transfer>
                                <t-button size='tiny'>上中</t-button>
                            </t-tooltip>
                        </t-col>
                        <t-col :span='7'>
                            <t-tooltip content='top-end' placement='top-end' transfer>
                                <t-button size='tiny'>上右</t-button>
                            </t-tooltip>
                        </t-col>
                    </t-row>
                    <t-row type='flex' justify='space-between' class='mb10-ce'>
                        <t-col :span='5'>
                            <t-tooltip content='left-start' placement='left-start' transfer>
                                <t-button size='tiny'>左上</t-button>
                            </t-tooltip>
                        </t-col>
                        <t-col :span='5'>
                            <t-tooltip content='right-start' placement='right-start' transfer>
                                <t-button size='tiny'>右上</t-button>
                            </t-tooltip>
                        </t-col>
                    </t-row>
                    <t-row type='flex' justify='space-between' class='mb10-ce'>
                        <t-col :span='5'>
                            <t-tooltip content='left' placement='left' transfer>
                                <t-button size='tiny'>右上</t-button>
                            </t-tooltip>
                        </t-col>
                        <t-col :span='5'>
                            <t-tooltip content='right' placement='right' transfer>
                                <t-button size='tiny'>右中</t-button>
                            </t-tooltip>
                        </t-col>
                    </t-row>
                    <t-row type='flex' justify='space-between' class='mb10-ce'>
                        <t-col :span='5'>
                            <t-tooltip content='left-end' placement='left-end' transfer>
                                <t-button size='tiny'>左下</t-button>
                            </t-tooltip>
                        </t-col>
                        <t-col :span='5'>
                            <t-tooltip content='right-end' placement='right-end' transfer>
                                <t-button size='tiny'>右下</t-button>
                            </t-tooltip>
                        </t-col>
                    </t-row>
                    <t-row type='flex' justify='center' class='mb10-ce'>
                        <t-col :span='7'>
                            <t-tooltip content='bottom-start' placement='bottom-start' transfer>
                                <t-button size='tiny'>下左</t-button>
                            </t-tooltip>
                        </t-col>
                        <t-col :span='7'>
                            <t-tooltip content='bottom' placement='bottom' transfer>
                                <t-button size='tiny'>下中</t-button>
                            </t-tooltip>
                        </t-col>
                        <t-col :span='7'>
                            <t-tooltip content='bottom-end' placement='bottom-end' transfer>
                                <t-button size='tiny'>下右</t-button>
                            </t-tooltip>
                        </t-col>
                    </t-row>
                </div>
                <div slot="markdown" v-html="tooltipMd"></div>
                <textarea slot="code" v-html="tooltipHtml"></textarea>
            </t-exapmple>
            <br>
        </contents>
        <footers></footers>
    </div>
</template>
<style lang="css">
    .mb10-ce{
        margin-bottom: 20px;
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
