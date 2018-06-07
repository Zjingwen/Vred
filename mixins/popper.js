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
    const self = this;

    this.$Popper = new Popper(referenceElement, onPopper, {
      placement: self.placement,
    });

    this.$Popper.update();
  },
  updated: function() {
    const self = this;

    this.$nextTick(function() {
      self.$Popper.updatePopper();
    });
  },
  beforeDestroy: function() {
    if (this.$Popper) {
      this.$Popper.destroy();
    }
  },
};
