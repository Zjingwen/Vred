<template>
    <div :class='classs'>menu-item</div>
</template>
<style lang="css" src='./index.css' scoped></style>
<script>
    const profixCls = 'v-menu-item';

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