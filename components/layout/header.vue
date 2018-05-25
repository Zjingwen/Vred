<template>
    <div :class="classs">
        <div class='v-header-width' :style="styles">
            <slot></slot>
        </div>
    </div>
</template>
<style lang='css' scoped>
    .v-header{
        width: 100%;
    }
    .v-header-width{
        margin: 0 auto;
    }
</style>
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
                    maxWidth: this.width + 'px'
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