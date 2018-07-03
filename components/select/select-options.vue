<template>
  <t-poptip
    placement='bottom'
    trigger='click'
    :width='width'
    :maxHeight='170'
  >
    <slot name='input'/>
    <div slot='content' :class="classs">
      <slot name="options" />
    </div>
  </t-poptip>
</template>
<script>
import poptip from '../poptip/index';
import {findComponentDownward} from '@util/assist';
const profixCls = 't-select-options';

export default {
  name: profixCls,
  components: {
    't-poptip': poptip,
  },
  data: function() {
    return {
      width: 0,
    };
  },
  computed: {
    classs: function() {
      let classs = [
        `${profixCls}`,
      ];
      return classs;
    },
  },
  mounted: function() {
    const el = findComponentDownward(this, 't-input');
    this.width = Number(el.$el.offsetWidth);
  },
};
</script>
