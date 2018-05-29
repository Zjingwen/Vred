<template>
    <div :class="classs" :style="style">
        <div v-if='mode == "horizontal"'>
            <div ref="view" :class="[`${prefixCls}-view`]">
                <slot name="view"></slot>
            </div>
            <pre ref="markdown" :class="[`${prefixCls}-markdown`]" v-showdown>
                <slot name="markdown"></slot>
            </pre>
            <div :class="[`${prefixCls}-split`]"></div>
            <pre :class="[`${prefixCls}-code`]" v-highligh>
<slot name="code"></slot>
            </pre>
        </div>
        <div :class="[`${prefixCls}-frome`]" v-else>
            <div class="row">
                <div ref="view" :class="[`${prefixCls}-view`]">
                    <slot name="view"></slot>
                </div>
                <pre ref="markdown" :class="[`${prefixCls}-markdown`]" v-showdown>
<slot name="markdown"></slot>
                </pre>
            </div><div class="row">
                <pre :class="[`${prefixCls}-code`]" v-highligh>
                    <slot name="code"></slot>
                </pre>
            </div>
        </div>
        <div v-if='more' class="more" @click='moreHandle'>↑</div>
    </div>
</template>
<style src='./exapmple.css' scoped></style>
<script>
    import { oneOf } from '../util/assist';
    import { highlight } from 'highlight.js';
    import showdown from 'showdown';
    import 'highlight.js/styles/solarized-light.css';

    let prefixCls = 't-exapmple';

    export default {
        name: prefixCls,
        directives: {
            highligh: {
                inserted: function(el, binding, vnode, oldVnode){
                    let block = highlight('html',el.querySelectorAll('textarea')[0].value);
                    el.innerHTML = block.value;
                }
            },
            showdown: {
                inserted: function(el, binding, vnode, oldVnode){
                    let converter = new showdown.Converter();
                    let block = el.querySelectorAll('textarea')[0].value;
                    let html = converter.makeHtml(block);

                    el.innerHTML = html;
                }
            }
        },
        data:function(){
            return {
                prefixCls: prefixCls,
                staticHeight: '',
                styleHeigiht: ''
            }
        },
        props: {
            mode:{
                type: String,
                default: 'horizontal',
                validator:function(val){
                    return oneOf(val,['horizontal','vertical'])//horizontal（水平） 和 vertical（垂直）
                }
            },
            more:{
                type: Boolean,
                default: false
            }
        },
        mounted:function(){
            
            if(this.more){
                const viewHeight = this.$refs['view'].offsetHeight+40;
                const markdownHeight = this.$refs['markdown'].offsetHeight;

                if(this.mode == 'horizontal'){
                    this.styleHeigiht = viewHeight + markdownHeight +34;
                    this.staticHeight = viewHeight + markdownHeight +34;
                }else{
                    this.styleHeigiht = viewHeight + markdownHeight;
                    this.staticHeight = viewHeight + markdownHeight;
                }
                
            }

        },
        computed:{
            classs:function(){
                let classs = [
                    `${prefixCls}`,
                    `${prefixCls}-${this.mode}`
                ];

                return classs;
            },
            style:function(){
                
                if(!this.more) return {};
                
                let style = {};

                style.overflow = 'hidden';
                style.paddingBottom = '40px';

                style.height = typeof this.staticHeight == 'number' ? 
                    `${this.staticHeight}px` : this.staticHeight ;

                return style;
            }
        },
        methods:{
            moreHandle:function(){

                if(this.staticHeight == 'auto'){

                    this.staticHeight = this.styleHeigiht;
                }else{

                    this.staticHeight = 'auto';
                }
            }
        }
    }
</script>

