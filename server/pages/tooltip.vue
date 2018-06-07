<template>
    <div>
        <headers></headers>
        <contents :linkName='linkName'>
            <h1>placement方向</h1>
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
                <div slot="markdown" v-html="placementMd"></div>
                <textarea slot="code" v-html="placementHtml"></textarea>
            </t-exapmple>
            <br>
            <h1>isOpen默认是否显示</h1>
            <t-exapmple mode='vertical'>
                <div slot="view">
                    <t-tooltip content='isOpen' placement='right'  isOpen transfer>
                        <t-button size='tiny'>isOpen</t-button>
                    </t-tooltip>
                </div>
                <div slot="markdown" v-html="isOpenMd"></div>
                <textarea slot="code" v-html="isOpenHtml"></textarea>
            </t-exapmple>
            <br>
            <h1>always禁止隐藏</h1>
            <t-exapmple mode='vertical'>
                <div slot="view">
                    <t-tooltip content='always' placement='right' always transfer>
                        <t-button size='tiny'>always</t-button>
                    </t-tooltip>
                </div>
                <div slot="markdown" v-html="alwaysMd"></div>
                <textarea slot="code" v-html="alwaysHtml"></textarea>
            </t-exapmple>
            <br>
            <h1>disabled禁止显示</h1>
            <t-exapmple mode='vertical'>
                <div slot="view">
                    <t-tooltip content='always' placement='right' disabled>
                        <t-button size='tiny'>disabled</t-button>
                    </t-tooltip>
                </div>
                <div slot="markdown" v-html="disabledMd"></div>
                <textarea slot="code" v-html="disabledHtml"></textarea>
            </t-exapmple>
            <br>
            <h1>transfer是否在body处渲染</h1>
            <t-exapmple mode='vertical'>
                <div slot="view">
                    <t-tooltip content='transfer' placement='left' transfer>
                        <t-button size='tiny'>transfer</t-button>
                    </t-tooltip>
                    <t-tooltip content='transfer' placement='right'>
                        <t-button size='tiny'>非transfer</t-button>
                    </t-tooltip>
                </div>
                <div slot="markdown" v-html="transferMd"></div>
                <textarea slot="code" v-html="transferHtml"></textarea>
            </t-exapmple>
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
import placementHtml from '../doc/tooltip/placement.html';
import placementMd from '../doc/tooltip/placement.md';

import isOpenHtml from '../doc/tooltip/isOpen.html';
import isOpenMd from '../doc/tooltip/isOpen.md';

import alwaysHtml from '../doc/tooltip/always.html';
import alwaysMd from '../doc/tooltip/always.md';

import disabledHtml from '../doc/tooltip/disabled.html';
import disabledMd from '../doc/tooltip/disabled.md';

import transferHtml from '../doc/tooltip/transfer.html';
import transferMd from '../doc/tooltip/transfer.md';

export default {
  data: function() {
    return {
      linkName: "气泡提示",
      isOpen: false,
      placementHtml: placementHtml,
      placementMd: placementMd,
      isOpenHtml: isOpenHtml,
      isOpenMd: isOpenMd,
      alwaysHtml: alwaysHtml,
      alwaysMd: alwaysMd,
      disabledHtml: disabledHtml,
      disabledMd: disabledMd,
      transferHtml: transferHtml,
      transferMd: transferMd
    };
  }
};
</script>
