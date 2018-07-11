<template>
  <div>
    <headers></headers>
    <contents :linkName='linkName'>
      <h1>图标字体</h1>
      <t-row class="ta">
        <t-col :span='5' v-for="(item,index) in iconfont" :key="index">
          <t-icon :type='item' size='tiny'/>
          <t-icon :type='item' size='default'/>
          <t-icon :type='item' size='large'/>
          <p class="p">type：{{item}}</p>
        </t-col>
      </t-row>
    </contents>
    <footers></footers>
  </div>
</template>
<style scoped>
  .ta{
    text-align: center;
  }
  .p{
    padding-bottom: 45px;
    padding-top: 25px;
  }
</style>

<script>
  export default{
    data:function(){
      return {
        linkName:'图标字体',
        iconfont:[
          'check-circle',
          'CI',
          'Dollar',
          'compass',
          'close-circle',
          'info-circle',
          'left-circle',
          'down-circle',
          'minus-circle',
          'plus-circle',
          'question-circle',
          'right-circle',
          'time-circle',
          'earth',
          'YUAN',
          'up-circle',
          'sync',
          'poweroff',
          'setting',
          'eye',
          'edit-square',
          'export',
          'save',
          'right',
          'left',
          'up',
          'down',
          'doubleleft',
          'arrowright',
          'arrowup',
          'arrowleft',
          'arrowdown',
          'upload',
          'close',
          'line',
          'minus',
          'question',
          'plus',
          'check-circle-fill',
          'left-circle-fill',
          'down-circle-fill',
          'minus-circle-fill',
          'close-circle-fill',
          'info-circle-fill',
          'up-circle-fill',
          'right-circle-fill',
          'plus-circle-fill',
          'question-circle-fill',
          'check-square-fill',
          'down-square-fill',
          'minus-square-fill',
          'close-square-fill',
          'up-square-fill',
          'right-square-fill',
        ],
      }
    },
  }
</script>
