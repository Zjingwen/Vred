<template>
    <div :class="classs" :style="styles"><slot></slot></div>
</template>
<style lang='stylus' scoped></style>
<script>
    import { oneOf } from '../util/assist';
    const prefixCls = 'v-header';

    export default {
        name: prefixCls,
        props:{
            width:{
                type: Number,
                default: 100
            },
            type:{
                type: String,
                default: '',
                validator: function(val){
                    return oneOf(val,['','fixed'])
                }
            },
            index:{
                type: Number,
                default: 0
            }
        },
        computed:{
            styles:function(){
                let style = {
                    width: this.width + '%',
                    overflow: 'hidden',
                };

                if(this.type){
                    style.position = this.type;
                    style.zIndex = this.index;
                }

                return style
            },
            classs:function(){
                return [
                    `${prefixCls}`
                ]
            }
        }
    }
</script>