<template>
    <ul :class='classs'>
        <slot></slot>
    </ul>
</template>
<style lang="css" src='./index.css' scoped></style>
<script>
    import { findComponentUpward, findComponentsDownward } from '../util/assist';

    const profixCls = 'v-menu';

    export default{
        name: profixCls,
        props: {
            activeName:{
                type: [String,Number],
                default: ''
            }
        },
        computed:{
            classs:function(){
                let classs = [
                    `${profixCls}`
                ];

                return classs;
            }
        },
        methods:{
            $onClickHandle:function(val){
                
                this.$activeHandle(val);
                this.$emit('on:select',val);
            },
            $activeHandle:function(name){
                findComponentsDownward(this,'v-menu-item-sub').forEach((val)=>{
                    
                    if(val.name == name) {
                        val.active = true
                        
                        return;
                    }
                    
                    val.active = false;
                });
            }
        },
        mounted:function(){
            
            this.$activeHandle(this.activeName);
        }
    }
</script>