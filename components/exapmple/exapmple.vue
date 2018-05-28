<template>
    <div :class="classs">
        <div :class="[`${prefixCls}-view`]">
            <slot name="view"></slot>
        </div>
        <pre :class="[`${prefixCls}-markdown`]" v-showdown>
            <slot name="markdown"></slot>
        </pre>
        <div :class="[`${prefixCls}-split`]"></div>
        <pre :class="[`${prefixCls}-code`]" v-highligh>
            <slot name="code"></slot>
        </pre>
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
                prefixCls: prefixCls
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
        },
        computed:{
            classs:function(){
                let classs = [
                    `${prefixCls}`,
                    `${prefixCls}-${this.mode}`
                ];

                return classs;
            }
        }
    }
</script>

