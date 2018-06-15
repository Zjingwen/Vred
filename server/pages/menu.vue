<template>
    <div>
        <headers></headers>
        <contents :linkName='linkName'>
            <t-row type='flex' justify='center'>
                <t-col :span='20'>
                    <t-menu :active-name="1" placement='center' @on:select="onClickHandle1">
                        <t-menuSub :name='1'>
                            <template slot="title">数据分析</template>
                            <t-menuGroup>
                                <t-menuItem>
                                    <t-menuSub :name='1-1'>
                                        <template slot="title">数据展示 A-1</template>
                                        <t-menuGroup>
                                            <t-menuItem>数据展示 B-1</t-menuItem>
                                            <t-menuItem>数据展示 B-2</t-menuItem>
                                            <t-menuItem>
                                                <t-menuSub :name='1-2'>
                                                    <template slot="title">数据展示 B-3</template>
                                                    <t-menuGroup>
                                                        <t-menuItem>数据展示 C-1</t-menuItem>
                                                        <t-menuItem>数据展示 C-2</t-menuItem>
                                                        <t-menuItem>数据展示 C-3</t-menuItem>
                                                    </t-menuGroup>
                                                </t-menuSub>
                                            </t-menuItem>
                                        </t-menuGroup>
                                    </t-menuSub>
                                </t-menuItem>
                                <t-menuItem>数据展示 A-2</t-menuItem>
                                <t-menuItem>数据展示 A-3</t-menuItem>
                            </t-menuGroup>
                        </t-menuSub>
                        <t-menuSub :name='2'>
                            <template slot="title">订单详情</template>
                            <t-menuGroup>
                                <t-menuItem>订单详情 1-1</t-menuItem>
                                <t-menuItem>订单详情 1-2</t-menuItem>
                                <t-menuItem>订单详情 1-3</t-menuItem>
                                <t-menuItem>订单详情 1-4</t-menuItem>
                                <t-menuItem>订单详情 1-5</t-menuItem>
                                <t-menuItem>订单详情 1-6</t-menuItem>
                            </t-menuGroup>
                        </t-menuSub>
                        <t-menuSub :name='3'>
                            <template slot="title">开奖系统</template>
                            <t-menuGroup>
                                <t-menuItem>开奖系统 1-1</t-menuItem>
                                <t-menuItem>开奖系统 1-2</t-menuItem>
                                <t-menuItem>开奖系统 1-3</t-menuItem>
                            </t-menuGroup>
                        </t-menuSub>
                    </t-menu>
                </t-col>
            </t-row>
        </contents>
        <footers></footers>
    </div>
</template>
<style lang="css" scoped>
    
</style>
<script>
    export default{
        data:function(){
            return {
                linkName:'导航'
            }
        },
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
            },
            onClickHandle3: function(val){
                console.group('onClickHandle3');
                console.log(val);
                console.groupEnd();
            },
            onClickHandle4: function(val){
                console.group('onClickHandle4');
                console.log(val);
                console.groupEnd();
            },
            onClickHandle5: function(val){
                console.group('onClickHandle5');
                console.log(val);
                console.groupEnd();
            },
            onClickHandle6: function(val){
                console.group('onClickHandle6');
                console.log(val);
                console.groupEnd();
            }
        }
    }
</script>

/*
            <br/>
            <br/>
            <t-row>
                <t-col :span='24'>
                    <t-menu :active-name="2" @on:select="onClickHandle2">
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
                </t-col>
            </t-row>
            <br/>
            <br/>
            <t-row>
                <t-col :span='24'>
                    <t-menu :active-name="3" @on:select="onClickHandle3">
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
                </t-col>
            </t-row>
            <br/>
            <br/>
            <t-row>
                <t-col :span='8'>
                    <t-menu mode='vertical' :active-name="3" @on:select="onClickHandle4">
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
                </t-col>
                <t-col :span='8'>
                    <t-menu mode='vertical' :active-name="3" @on:select="onClickHandle5">
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
                </t-col>
                <t-col :span='8'>
                    <t-menu :width='300' :height='30' mode='vertical' :active-name="3" @on:select="onClickHandle6">
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
                </t-col>
            </t-row>
*/