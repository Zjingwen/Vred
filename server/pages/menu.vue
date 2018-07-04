<template>
  <div>
    <headers></headers>
    <contents :linkName='linkName'>
      <t-row type='flex' justify='center'>
        <t-col :span='20'>
          <t-menu active-name="/index/order" placement='center' @on-select="onClickHandle1">
            <t-menuSub name='/index/order'>
              <template slot="title">统计分析</template>
              <t-menuGroup title='订单详情'>
                  <t-menuItem name="/index/order-1">订单详情-1</t-menuItem>
                  <t-menuItem name="/index/order-2">订单详情-2</t-menuItem>
                  <t-menuItem name="/index/order-3">订单详情-3</t-menuItem>
              </t-menuGroup>
            </t-menuSub>
            <t-menuItem name="/index/activity">开奖系统</t-menuItem>
            <t-menuItem name="/index/date">数据管理</t-menuItem>
          </t-menu>
        </t-col>
      </t-row>
      <t-row type='flex' justify='center'>
          <t-col :span='20'>
              <!-- <t-menu mode='vertical' :active-name="2" @on:select="onClickHandle2">
                  <t-menuSub :name='1'>
                      <template slot="title">数据分析</template>
                  </t-menuSub>
                  <t-menuSub :name='2'>
                      <template slot="title">订单详情</template>
                  </t-menuSub>
                  <t-menuSub :name='3'>
                      <template slot="title">开奖系统</template>
                  </t-menuSub>
              </t-menu> -->
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
                this.$message(`onClickHandle1:${val}`);
            },
            onClickHandle2: function(val){
                console.group('onClickHandle2');
                console.log(val);
                console.groupEnd();
            },
        }
    }
</script>
