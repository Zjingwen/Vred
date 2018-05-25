<template>
    <div>
        <headers></headers>
        <contents>
            <t-menu :active-name="3" @on:select="onClickHandle1">
                <t-menuSub :name='1'>
                    <template slot="title">menuSub 1</template>
                    <!--<t-menuGroup>
                        <t-menuItem>menuItem 1</t-menuItem>
                        <t-menuItem>menuItem 2</t-menuItem>
                        <t-menuItem>menuItem 4</t-menuItem>
                    </t-menuGroup>-->
                </t-menuSub>
                <t-menuSub :name='2'>
                    <template slot="title">menuSub 2</template>
                    <!--<t-menuGroup>
                        <t-menuItem>menuItem 1</t-menuItem>
                        <t-menuItem>menuItem 2</t-menuItem>
                        <t-menuItem>menuItem 4</t-menuItem>
                    </t-menuGroup>-->
                </t-menuSub>
                <t-menuSub :name='3'>
                    <template slot="title">menuSub 3</template>
                    <!--<t-menuGroup>
                        <t-menuItem>menuItem 1</t-menuItem>
                        <t-menuItem>menuItem 2</t-menuItem>
                        <t-menuItem>menuItem 4</t-menuItem>
                    </t-menuGroup>-->
                </t-menuSub>
            </t-menu>
            <br/>
            <t-menu :active-name="1" @on:select="onClickHandle2">
                <t-menuSub :name='1'>
                    <template slot="title">menuSub 1</template>
                    <!--<t-menuGroup>
                        <t-menuItem>menuItem 1</t-menuItem>
                        <t-menuItem>menuItem 2</t-menuItem>
                        <t-menuItem>menuItem 4</t-menuItem>
                    </t-menuGroup>-->
                </t-menuSub>
                <t-menuSub :name='2'>
                    <template slot="title">menuSub 2</template>
                    <!--<t-menuGroup>
                        <t-menuItem>menuItem 1</t-menuItem>
                        <t-menuItem>menuItem 2</t-menuItem>
                        <t-menuItem>menuItem 4</t-menuItem>
                    </t-menuGroup>-->
                </t-menuSub>
                <t-menuSub :name='3'>
                    <template slot="title">menuSub 3</template>
                    <!--<t-menuGroup>
                        <t-menuItem>menuItem 1</t-menuItem>
                        <t-menuItem>menuItem 2</t-menuItem>
                        <t-menuItem>menuItem 4</t-menuItem>
                    </t-menuGroup>-->
                </t-menuSub>
            </t-menu>
        </contents>
        <footers></footers>
    </div>
</template>
<style lang="css" scoped>
    
</style>
<script>
    export default{
        methods:{
            onClickHandle1: function(val){
                console.group('onClickHandle1');
                console.log(val);
                console.groupEnd();
            },
            onClickHandle2: function(val){
                console.group('onClickHandle2');
                console.log(val);
                console.groupEnd();
            }
        }
    }
</script>