<template>
    <button
        class="t-btn"
        :disabled="disabled"
        :type="type"
        :class="classs"
        :style="style"
        @click="handleClick"
    ><span><slot></slot></span></button>
</template>
<style src='./button.css' lang="css" scoped></style>
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
            icon: {
                type: String,
                default: ''
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
            disabled: Boolean
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