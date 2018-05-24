<template>
    <button
        class="t-btn"
        :disabled="disabled"
        :type="htmlType"
        :class="classs"
        :style="style"
        @click="handleClick"
    ><span><slot></slot></span></button>
</template>
<style src='./button.css' scoped lang="css"></style>
<script>
    import { oneOf } from '../util/assist';

    const prefixCls = 't-btn';

    export default {
        name: prefixCls,
        props: {
            type: {
                type: String,
                default: 'default',
                validator:function(val){
                    return oneOf(val,['default','text','warning','error'])
                }
            },
            width:{
                type: Number,
                default: 100
            },
            height:{
                type: Number,
                default: 50
            },
            size: {
                type: String,
                default: 'default',
                validator:function(val){
                    return oneOf(val,['default','tiny','large','long','auto'])
                }
            },
            disabled: {
                type: Boolean,
                default: false
            },
            htmlType: {
                type: String,
                default: 'button',
                validator:function(val){
                    return oneOf(val,['button','submit','reset'])
                }
            }
        },
        computed:{
            classs:function(){
                let classs = [];
                
                classs = [
                    [`${prefixCls}-type-`+this.type]
                ];

                if(this.size != 'auto'){
                    classs.push([`${prefixCls}-size-`+this.size])
                }

                return classs ;
            },
            style:function(){
                let style = {};

                if(this.size == 'auto'){
                    style.width = this.width+'px';
                    style.height = this.height+'px';
                    style.lineHeight = this.height+'px';
                };
                return style;
            }
        },
        methods: {
            handleClick: function(event){
                this.$emit("click",event);
            }
        }
    }
</script>