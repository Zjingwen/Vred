<template>
    <table cellspacing="0" cellpadding="0" border="0" :class="classs">
        <colgroup>
            <col width='20%'></col>
            <col width='10%'></col>
            <col width='10%'></col>
            <col width='10%'></col>
            <col width='10%'></col>
        </colgroup>
        <slot></slot>
    </table>
</template>

<style src='./table.css' lang="css" scoped></style>

<script>
    import { findComponentDownward } from '../util/assist.js';

    const prefixCls = 'v-table';
    export default {
        name: prefixCls,
        props:{
            width:{
                type: Array,
                default: function(){
                    console.log(findComponentDownward(this,'v-table-head'))
                    console.log(this.$children);
                    return []
                }
            }
        },
        computed:{
            classs:function(){
                let classs = [
                    `${prefixCls}`
                ];

                return classs;
            }
        },
        methods:{
            widthHandle:function(){
                console.log(this.width);
            }
        },
        mounted:function(){
            this.widthHandle();
        }
    }
</script>