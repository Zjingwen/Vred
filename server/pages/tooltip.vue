<template>
    <div>
        <headers></headers>
        <contents :linkName='linkName'>
            <h1>tooltip提示基础用用法</h1>
            <t-exapmple mode='vertical' more>
                <div slot="view">
                    <t-row type='flex' justify='center' class='mb10-ce'>
                        <t-col :span='5'>
                            <t-button size='tiny' v-tooltip.top-start="msg">上左</t-button>
                        </t-col>
                        <t-col :span='5'>
                            <t-button size='tiny' v-tooltip.top="msg">上中</t-button>
                        </t-col>
                        <t-col :span='5'>
                            <t-button size='tiny' v-tooltip.top-end="msg">上右</t-button>
                        </t-col>
                    </t-row>
                    <t-row type='flex' justify='space-between' class='mb10-ce'>
                        <t-col :span='5'>
                            <t-button size='tiny' v-tooltip.left-start="msg">左上</t-button>
                        </t-col>
                        <t-col :span='5'>
                            <t-button size='tiny' v-tooltip.right-start="msg">右上</t-button>
                        </t-col>
                    </t-row>
                    <t-row type='flex' justify='space-between' class='mb10-ce'>
                        <t-col :span='5'>
                            <t-button size='tiny' v-tooltip.left="msg">左中</t-button>
                        </t-col>
                        <t-col :span='5'>
                            <t-button size='tiny' v-tooltip.right="msg">右中</t-button>
                        </t-col>
                    </t-row>
                    <t-row type='flex' justify='space-between' class='mb10-ce'>
                        <t-col :span='5'>
                            <t-button size='tiny' v-tooltip.left-end="msg">左下</t-button>
                        </t-col>
                        <t-col :span='5'>
                            <t-button size='tiny' v-tooltip.right-end="msg">右下</t-button>
                        </t-col>
                    </t-row>
                    <t-row type='flex' justify='center' class='mb10-ce'>
                        <t-col :span='5'>
                            <t-button size='tiny' v-tooltip.bottom-start="msg">下左</t-button>
                        </t-col>
                        <t-col :span='5'>
                            <t-button size='tiny' v-tooltip.bottom="msg">下中</t-button>
                        </t-col>
                        <t-col :span='5'>
                            <t-button size='tiny' v-tooltip.bottom-end="msg">下右</t-button>
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
      isOpen: true,
      tooltipHtml: tooltipHtml,
      tooltipMd: tooltipMd
    };
  }
};
</script>
