/**
 * @TODO:jingwen 混入的写法，模仿iveiw
 */
import Popper from 'popper';

export default {
  mounted: function() {
    const referenceElement = this.$refs.referenceElement;
    const onPopper = this.$refs.onPopper;
    const self = this;

    onPopper.parentNode.removeChild(onPopper);
    document.getElementsByTagName('body')[0].appendChild(onPopper);

    new Popper(referenceElement, onPopper, {
      placement: self.placement,
    });
  },
};
