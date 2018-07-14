<template>
  <div>
    <headers></headers>
    <contents :linkName='linkName'>
      <t-row type='flex' justify='center'>
        <t-col :span='20'>
          <t-menu active-name="/index/order" placement='right' @on-select="HandleClickHorizontal">
            <t-menuSub name='/index/order'>
              <template slot="title">统计分析</template>
              <t-menuGroup title='订单'>
                  <t-menuItem name="/index/order-1">订单详情-1</t-menuItem>
                  <t-menuItem name="/index/order-2">订单详情-2</t-menuItem>
                  <t-menuItem name="/index/order-3">订单详情-3</t-menuItem>
              </t-menuGroup>
              <t-menuGroup title='详情'>
                  <t-menuItem name="/index/order-4">订单详情-4</t-menuItem>
                  <t-menuItem name="/index/order-5">订单详情-5</t-menuItem>
                  <t-menuItem name="/index/order-6">订单详情-6</t-menuItem>
              </t-menuGroup>
            </t-menuSub>
            <t-menuSub name='/index/activity'>
                <template slot="title">开奖系统</template>
                <t-menuGroup title='开奖'>
                    <t-menuItem name="/index/activity-1">开奖详情-1</t-menuItem>
                    <t-menuItem name="/index/activity-2">开奖详情-2</t-menuItem>
                    <t-menuItem name="/index/activity-3">开奖详情-3</t-menuItem>
                </t-menuGroup>
            </t-menuSub>
            <t-menuSub name='/index/date'>
                <template slot="title">数据管理</template>
                <t-menuGroup>
                    <t-menuItem name="/index/date-1">数据管理-1</t-menuItem>
                    <t-menuItem name="/index/date-2">数据管理-2</t-menuItem>
                    <t-menuItem name="/index/date-3">数据管理-3</t-menuItem>
                </t-menuGroup>
            </t-menuSub>
            <t-menuItem name="/index/ziliao">资料整理</t-menuItem>
          </t-menu>
        </t-col>
      </t-row>
      <t-row type='flex' justify='center'>
          <t-col :span='20'>
                <t-menu mode='vertical' :active-name="activeNameVertical" @on-select="HandleClickVertical">
                    <t-menuSub name='/index/date'>
                        <template slot="title">统计分析</template>
                        <t-menuGroup title='订单'>
                            <t-menuItem name="/index/date-1">订单详情-1</t-menuItem>
                            <t-menuItem name="/index/date-2">订单详情-2</t-menuItem>
                            <t-menuItem name="/index/date-3">订单详情-3</t-menuItem>
                        </t-menuGroup>
                        <t-menuGroup title='详情'>
                            <t-menuItem name="/index/date-4">订单详情-4</t-menuItem>
                            <t-menuItem name="/index/date-5">订单详情-5</t-menuItem>
                            <t-menuItem name="/index/date-6">订单详情-6</t-menuItem>
                        </t-menuGroup>
                    </t-menuSub>
                    <t-menuItem name='/index/order'>订单详情</t-menuItem>
                    <t-menuItem name='/index/activity'>开奖系统</t-menuItem>
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
                linkName:'导航',
                activeNameVertical:'/index/date-2',
            }
        },
        methods:{
            HandleClickHorizontal: function(val){
                this.$message(`Horizontal:${val}`);
            },
            HandleClickVertical: function(val){
                this.activeNameVertical = val;
                this.$message(`Vertical:${val}`);
            },
        }
    }
</script>
