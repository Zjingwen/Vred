<template>
  <t-poptip
    placement='bottom'
    trigger='click'
    :width='width'
  >
    <slot name='input'/>
    <div slot='content' class="t-select-options">
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
      width: 170,
    };
  },
  mounted: function() {
    const el = findComponentDownward(this, 't-input');
    this.width = el.$el.offsetWidth;
  },
};
</script>
