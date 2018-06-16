import Popper from 'popper';

export default {
  data: function() {
    return {
      $referenceElement: '',
      $onPopper: '',
      $Popper: '',
    };
  },
  mounted: function() {
    const referenceElement = this.$refs.referenceElement;
    const onPopper = this.$refs.onPopper;
    const offset = this.offset;
    let popperConfig = {};

    popperConfig.placement = this.placement;

    if (offset) {
      popperConfig.modifiers = {
        offset: {
          offset: offset.toString(),
        },
      };
    }

    this.$Popper = new Popper(referenceElement, onPopper, popperConfig);
  },
  updated: function() {
    this.$nextTick(()=>{
      this.$Popper.update();
    });
  },
};
