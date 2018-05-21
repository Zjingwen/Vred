<template>
    <div :class="classs"><slot></slot></div>
</template>
<style scoped>
    .v-sider{
        flex-direction: row;
        height: 100%;
        width: 200px;
        min-width: 200px;
        max-width: 200px;
    }
</style>
<script>
    const prefixCls = 'v-sider';
    export default{
        name: prefixCls,
        props:{
            // top:{
            //     type: Number,
            //     default: 0
            // },
            // bottom:{
            //     type: Number,
            //     default: 0
            // }
        },
        computed:{
            // style:function(){
            //     let style = {
            //         overflow: 'hidden'
            //     };
                
            //     if(this.top){
            //         style.paddingTop= this.top+'px'
            //     }

            //     if(this.bottom){
            //         style.paddingBottom= this.bottom+'px'
            //     }
                
            //     return style;
            // },
            classs:function(){
                return [
                    `${prefixCls}`
                ]
            }
        }
    }
</script>