<template>
    <table cellspacing="0" cellpadding="0" border="0" :class="classs">
        <colgroup>
            <col v-for='(item,index) in width' :key='index' :width='item' />
        </colgroup>
        <slot></slot>
    </table>
</template>

<style src='./table.css' lang="css" scoped></style>

<script>
import {findComponentDownward} from '../util/assist.js';

const prefixCls = 'v-table';
export default {
  name: prefixCls,
  props: {
    width: {
      type: Array,
      default: function() {
        return [];
      },
    },
  },
  computed: {
    classs: function() {
      let classs = [
        `${prefixCls}`,
      ];

      return classs;
    },
  },
  methods: {
    widthHandle: function() {
      let componentNode = findComponentDownward(this, 'v-table-tr');
      let width = this.width;
      let length = componentNode.$el.children.length;

      if (length && !width.length) {
        let num = 100 / length;
        for (let i = 0; i < length; i++) {
          this.$set(this.width, i, `${num}`);
        }
      };
    },
  },
  mounted: function() {
    if (!this.width.length) this.widthHandle();
  },
};
</script>
