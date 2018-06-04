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

    // 如果被overflow: hidden;包裹会不显示
    // onPopper.parentNode.removeChild(onPopper);

    // if (this.scope) {
    //   referenceElement.appendChild(onPopper);
    // } else {
    //   document.getElementById('app').appendChild(onPopper);
    // }

    this.$Popper = new Popper(referenceElement, onPopper, {
      placement: self.placement,
    });
  },
  updated: function() {
    const self = this;

    self.$nextTick(()=>{
      self.$Popper.update();
    });
  },
};
