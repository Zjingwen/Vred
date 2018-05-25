<template>
    <div :class='classs'>menu-item-sub</div>
</template>
<style lang="css" src='./index.css' scoped></style>
<script>
    const profixCls = 'v-menu-item-sub';

    export default{
        name: profixCls,
        computed:{
            classs:function(){
                let classs = [
                    `${profixCls}`
                ];

                return classs;
            }
        }
    }
</script>