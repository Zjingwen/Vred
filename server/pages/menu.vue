<template>
    <div>
        <headers></headers>
        <contents>
            <t-row>
                <t-col :span='24'>
                    <t-menu :active-name="1" @on:select="onClickHandle1">
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
                    <t-menu :width='300' mode='vertical' :active-name="3" @on:select="onClickHandle6">
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