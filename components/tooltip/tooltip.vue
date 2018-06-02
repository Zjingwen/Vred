<style src='./tooltip.css' lang="css"></style>
<script>
// const profixCls = 't-tooltip';

/**
* https://akryum.github.io/v-tooltip/
*/
import {VTooltip, VPopover, VClosePopover} from 'v-tooltip';

Vue.component('t-popover', VPopover);
Vue.directive('tooltip', VTooltip);
Vue.directive('close-popover', VClosePopover);

export default {

};
</script>
