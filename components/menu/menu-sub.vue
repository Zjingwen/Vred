<template>
    <li :class='classs' @click='itemHandle'>
        <div :class='[profixCls + "-title"]'><slot name='title'></slot></div>
        <slot></slot>
    </li>
</template>
<style lang="css" src='./index.css' scoped></style>
<script>
    import { findComponentUpward, findComponentsDownward } from '../util/assist';
    const profixCls = 'v-menu-item-sub';

    export default{
        name: profixCls,
        props:{
            name:{
                type:[String,Number],
                dafeult:''
            }
        },
        data:function(){
            return {
                profixCls: profixCls,
                active: false
            }
        },
        computed:{
            classs:function(){
                let classs = [
                    `${profixCls}`,{
                        [`active`]: this.active
                    }
                ];

                return classs;
            }
        },
        methods:{
            itemHandle:function(){
                findComponentUpward(this,'v-menu').$onClickHandle(this.name);
            }
        },
    }
</script>