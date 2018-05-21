<template>
    <div :style="style" :class="classs"><slot></slot></div>
</template>
<style scoped>
    .v-layout{
        display: flex;
        // flex: auto;

        flex-direction: row;
    }
</style>
<script>
    const prefixCls = 'v-layout';
    export default{
        name: prefixCls,
        props:{
            top:{
                type: Number,
                default: 0
            },
            bottom:{
                type: Number,
                default: 0
            }
        },
        computed:{
            style:function(){
                let style = {
                    overflow: 'hidden'
                };
                
                if(this.top){
                    style.paddingTop= this.top+'px'
                }

                if(this.bottom){
                    style.paddingBottom= this.bottom+'px'
                }
                
                return style;
            },
            classs:function(){
                return [
                    `${prefixCls}`
                ]
            }
        }
    }
</script>