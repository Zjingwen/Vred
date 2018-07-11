<template>
<div>
  <div v-if="remote && paging.total > 1"  :class="classs">
    <ul  class="t-paging">
      <li v-if="paging.left == ''" class="first disabled"><a>首页</a></li>
      <li v-else class="first effect"><a href="javascript:;" @click="up">上一页</a></li>

      <template v-if="paging.first != ''">
          <li class="effect"><a href="javascript:;" @click="pageClick(1)">1</a></li>
          <li>...</li>
      </template>

      <template v-for="(value, key) in paging.pageList">
        <li v-if="paging.current == key" class="active" :key="key"><a>{{key}}</a></li>
        <li v-else class="effect" :key="key">
            <a href="javascript:;" @click="pageClick(key)">{{key}}</a>
        </li>
      </template>

      <template v-if="paging.last != ''">
        <li>...</li>
        <li class="effect"><a href="javascript:;" @click="pageClick(paging.total)">{{paging.total}}</a></li>
      </template>

      <li v-if="paging.right == ''" class="last disabled"><a>尾页</a></li>
      <li v-else class="last effect"><a href="javascript:;" @click="down">下一页</a></li>
    </ul>
    <span class="gotoLink">跳转<t-input @on-enter='handleEneter'></t-input></span>
  </div>
  <div v-if="!remote && paging.total > 1" :class="classs">
    <ul class="t-paging">
      <li v-if="paging.left == ''" class="first disabled"><a>首页</a></li>
      <template v-else>
          <li class="first effect"><a :href="paging.left">上一页</a></li>
      </template>

      <template v-if="paging.first != ''">
          <li class="effect"><a :href="paging.first">1</a></li>
          <li>...</li>
      </template>

      <template v-for="(value, key) in paging.pageList">
          <li v-if="paging.current == key" class="active" :key='key'><a>{{key}}</a></li>
          <li v-else class="effect" :key='key'><a :href="value">{{key}}</a></li>
      </template>

      <template v-if="paging.last != ''">
          <li>...</li>
          <li class="effect"><a :href="paging.last">{{paging.total}}</a></li>
      </template>

      <li v-if="paging.right == ''" class="last disabled"><a>尾页</a></li>
      <template v-else>
          <li class="last effect"><a :href="paging.right">下一页</a></li>
      </template>
    </ul>
    <span class="gotoLink">跳转<t-input @on-enter='handleEneter'></t-input></span>
  </div>
</div>
</template>
<style src='./pagination.less'></style>
<script>
import input from '../input/index';
const profixCls = 't-pagination';

export default {
  name: profixCls,
  props: {
    paging: Object,
    align: {
      type: String,
      default: 'center',
    },
    remote: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classs: function() {
      let calsss = [
        `${profixCls}`,
        `t-${this.align}`,
      ];

      return calsss;
    },
  },
  data: function() {
    return {
      current: 1,
    };
  },
  methods: {
    up: function() {
      this.current -= 1;
    },
    down: function() {
      this.current += 1;
    },
    pageClick: function(page) {
      this.current = page;
      this.remote && this.$emit('on-click', this.current);
    },
    handleEneter: function(page) {
      this.current = page;
      this.$emit('on-goto', page);
    },
  },
  components: {
    't-input': input,
  },
};
</script>
