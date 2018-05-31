<template>
    <div>
        <headers></headers>
        <contents :linkName='linkName'>
            <h1>无sider</h1>
            <t-exapmple more>
                <div slot="view">
                    <t-header>header</t-header>
                    <t-layout class='demo-content'>
                        <t-content>
                            <p v-for="i in 10" :key='i' v-text='i'></p>
                        </t-content>
                    </t-layout>
                    <t-footer>footer</t-footer>
                </div>
                <textarea slot="markdown" v-html="noSiferMd"></textarea>
                <textarea slot="code" v-html="noSiferHtml"></textarea>
            </t-exapmple>
            <br>
            <h1>左sider</h1>
            <t-exapmple more>
                <div slot="view">
                    <t-header>header</t-header>
                    <t-layout class='demo-content'>
                        <t-sider>sider</t-sider>
                        <t-content>
                            <p v-for="i in 10" :key='i' v-text='i'></p>
                        </t-content>
                    </t-layout>
                    <t-footer>footer</t-footer>
                </div>
                <textarea slot="markdown" v-html="leftSiferMd"></textarea>
                <textarea slot="code" v-html="leftSiferHtml"></textarea>
            </t-exapmple>
            <br>
            <h1>左sider</h1>
            <t-exapmple more>
                <div slot="view">
                    <t-header>header</t-header>
                    <t-layout class='demo-content'>
                        <t-sider>sider</t-sider>
                        <t-content>
                            <p v-for="i in 10" :key='i' v-text='i'></p>
                        </t-content>
                    </t-layout>
                    <t-footer>footer</t-footer>
                </div>
                <textarea slot="markdown" v-html="leftSiferMd"></textarea>
                <textarea slot="code" v-html="leftSiferHtml"></textarea>
            </t-exapmple>
            <br>
            <h1>右sider</h1>
            <t-exapmple more>
                <div slot="view">
                    <t-header>header</t-header>
                        <t-layout class='demo-content'>
                            <t-content>
                                <p v-for="i in 10" :key='i' v-text='i'></p>
                            </t-content>
                            <t-sider width="400">sider</t-sider>
                        </t-layout>
                    <t-footer>footer</t-footer>
                </div>
                <textarea slot="markdown" v-html="rightSiferMd"></textarea>
                <textarea slot="code" v-html="rightSiferHtml"></textarea>
            </t-exapmple>
            
        </contents>
        <footers></footers>
    </div>
</template>
<style lang="css" scoped>
.v-header,
.v-footer {
  text-align: center;
  height: 36px;
  line-height: 36px;
  background: #b3c0d1;
  color: #fff;
  font-size: 12px;
}
.v-sider {
  background: rgba(0, 153, 229, 0.7);
}
.v-content {
  background: rgba(0, 117, 175, 0.9);
}
</style>
<script>
import noSiferHtml from "../doc/layout/no-sider.html";
import noSiferMd from "../doc/layout/no-sider.md";

import leftSiferHtml from "../doc/layout/left-sider.html";
import leftSiferMd from "../doc/layout/left-sider.md";

import rightSiferHtml from "../doc/layout/right-sider.html";
import rightSiferMd from "../doc/layout/right-sider.md";

export default {
  data: function() {
    return {
      linkName: "布局",
      noSiferHtml: noSiferHtml,
      noSiferMd: noSiferMd,
      leftSiferHtml: leftSiferHtml,
      leftSiferMd: leftSiferMd,
      rightSiferHtml: rightSiferHtml,
      rightSiferMd: rightSiferMd
    };
  }
};
</script>