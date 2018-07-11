<template>
    <div>
        <headers></headers>
        <contents :linkName='linkName'>
           <t-pagination :paging='pagination' align="center"  @on-click='handleClick' @on-goto='handleGoto' remote></t-pagination>
           <t-pagination :paging='pagination' align="center" @on-goto='handleGoto'></t-pagination>
        </contents>
        <footers></footers>
    </div>
</template>
<style lang="css"></style>
<script>
  export default{
    data:function(){
      return {
        linkName:'翻页',
        pagination: {
          current: 3,
          first:"",
          gotoLink:"/taoke/item?type=index&pCategoryId=&cCategoryName=&time=all&startDate=&endDate=&startHour=&endHour=&shopRank=all&dsr=all&qtth=&jpdp=0&xfzbz=0&maxPrice=&minPrice=&spyxl=&maxTkPrice=&minTkPrice=&maxTkRate=&minTkRate=&maxqzkb=&qzkb=&sort=22&source_all=all&source_kind=all&minqzkb=&baoyou=0&deliveryIns=0&pinpai=0&minUsedSpeed=&maxUsedSpeed=&maxCountDown=&minAmount=&maxAmount=&minAvailableCount=&maxAvailableCount=&keywords=&jutao=0&fCategory=&brand=all&maxYxe=&minYxe=&monthSales24h=&monthSales2h=&ys=0&yr=0&d12=0&is618=0&page=",
          last:"/taoke/item?type=index&pCategoryId=&cCategoryName=&time=all&startDate=&endDate=&startHour=&endHour=&shopRank=all&dsr=all&qtth=&jpdp=0&xfzbz=0&maxPrice=&minPrice=&spyxl=&maxTkPrice=&minTkPrice=&maxTkRate=&minTkRate=&maxqzkb=&qzkb=&sort=22&source_all=all&source_kind=all&minqzkb=&baoyou=0&deliveryIns=0&pinpai=0&minUsedSpeed=&maxUsedSpeed=&maxCountDown=&minAmount=&maxAmount=&minAvailableCount=&maxAvailableCount=&keywords=&jutao=0&fCategory=&brand=all&maxYxe=&minYxe=&monthSales24h=&monthSales2h=&ys=0&yr=0&d12=0&is618=0&page=63",
          left:"/taoke/item?type=index&pCategoryId=&cCategoryName=&time=all&startDate=&endDate=&startHour=&endHour=&shopRank=all&dsr=all&qtth=&jpdp=0&xfzbz=0&maxPrice=&minPrice=&spyxl=&maxTkPrice=&minTkPrice=&maxTkRate=&minTkRate=&maxqzkb=&qzkb=&sort=22&source_all=all&source_kind=all&minqzkb=&baoyou=0&deliveryIns=0&pinpai=0&minUsedSpeed=&maxUsedSpeed=&maxCountDown=&minAmount=&maxAmount=&minAvailableCount=&maxAvailableCount=&keywords=&jutao=0&fCategory=&brand=all&maxYxe=&minYxe=&monthSales24h=&monthSales2h=&ys=0&yr=0&d12=0&is618=0&page=2",
          pageList :{
            1:"",
            2:"/taoke/item?type=index&pCategoryId=&cCategoryName=&time=all&startDate=&endDate=&startHour=&endHour=&shopRank=all&dsr=all&qtth=&jpdp=0&xfzbz=0&maxPrice=&minPrice=&spyxl=&maxTkPrice=&minTkPrice=&maxTkRate=&minTkRate=&maxqzkb=&qzkb=&sort=22&source_all=all&source_kind=all&minqzkb=&baoyou=0&deliveryIns=0&pinpai=0&minUsedSpeed=&maxUsedSpeed=&maxCountDown=&minAmount=&maxAmount=&minAvailableCount=&maxAvailableCount=&keywords=&jutao=0&fCategory=&brand=all&maxYxe=&minYxe=&monthSales24h=&monthSales2h=&ys=0&yr=0&d12=0&is618=0&page=2",
            3:"/taoke/item?type=index&pCategoryId=&cCategoryName=&time=all&startDate=&endDate=&startHour=&endHour=&shopRank=all&dsr=all&qtth=&jpdp=0&xfzbz=0&maxPrice=&minPrice=&spyxl=&maxTkPrice=&minTkPrice=&maxTkRate=&minTkRate=&maxqzkb=&qzkb=&sort=22&source_all=all&source_kind=all&minqzkb=&baoyou=0&deliveryIns=0&pinpai=0&minUsedSpeed=&maxUsedSpeed=&maxCountDown=&minAmount=&maxAmount=&minAvailableCount=&maxAvailableCount=&keywords=&jutao=0&fCategory=&brand=all&maxYxe=&minYxe=&monthSales24h=&monthSales2h=&ys=0&yr=0&d12=0&is618=0&page=3",
            4:"/taoke/item?type=index&pCategoryId=&cCategoryName=&time=all&startDate=&endDate=&startHour=&endHour=&shopRank=all&dsr=all&qtth=&jpdp=0&xfzbz=0&maxPrice=&minPrice=&spyxl=&maxTkPrice=&minTkPrice=&maxTkRate=&minTkRate=&maxqzkb=&qzkb=&sort=22&source_all=all&source_kind=all&minqzkb=&baoyou=0&deliveryIns=0&pinpai=0&minUsedSpeed=&maxUsedSpeed=&maxCountDown=&minAmount=&maxAmount=&minAvailableCount=&maxAvailableCount=&keywords=&jutao=0&fCategory=&brand=all&maxYxe=&minYxe=&monthSales24h=&monthSales2h=&ys=0&yr=0&d12=0&is618=0&page=4",
            5:"/taoke/item?type=index&pCategoryId=&cCategoryName=&time=all&startDate=&endDate=&startHour=&endHour=&shopRank=all&dsr=all&qtth=&jpdp=0&xfzbz=0&maxPrice=&minPrice=&spyxl=&maxTkPrice=&minTkPrice=&maxTkRate=&minTkRate=&maxqzkb=&qzkb=&sort=22&source_all=all&source_kind=all&minqzkb=&baoyou=0&deliveryIns=0&pinpai=0&minUsedSpeed=&maxUsedSpeed=&maxCountDown=&minAmount=&maxAmount=&minAvailableCount=&maxAvailableCount=&keywords=&jutao=0&fCategory=&brand=all&maxYxe=&minYxe=&monthSales24h=&monthSales2h=&ys=0&yr=0&d12=0&is618=0&page=5",
          },
          right:"/taoke/item?type=index&pCategoryId=&cCategoryName=&time=all&startDate=&endDate=&startHour=&endHour=&shopRank=all&dsr=all&qtth=&jpdp=0&xfzbz=0&maxPrice=&minPrice=&spyxl=&maxTkPrice=&minTkPrice=&maxTkRate=&minTkRate=&maxqzkb=&qzkb=&sort=22&source_all=all&source_kind=all&minqzkb=&baoyou=0&deliveryIns=0&pinpai=0&minUsedSpeed=&maxUsedSpeed=&maxCountDown=&minAmount=&maxAmount=&minAvailableCount=&maxAvailableCount=&keywords=&jutao=0&fCategory=&brand=all&maxYxe=&minYxe=&monthSales24h=&monthSales2h=&ys=0&yr=0&d12=0&is618=0&page=2",
          total:63,
        },
      }
    },
    methods:{
      handleClick:function(val){
        this.$set(this.pagination,'current',val);
        this.$message(`click:${val.toString()}`);
      },
      handleGoto: function(val){
        this.$message(`goto:${val.toString()}`);
      }
    }
  }
</script>
