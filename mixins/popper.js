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
        offset: this.$offsetNumber(offset),
      };
    }
    this.$Popper = new Popper(referenceElement, onPopper, popperConfig);
  },
  updated: function() {
    this.$nextTick(()=>{
      this.$Popper.update();
    });
  },
  methods: {
    $offsetNumber: function(offset) {
      let placement = this.placement;
      let offsetNumber = {
        'top': function() {},
        'top-start': function() {},
        'top-end': function() {},
        'right': function() {},
        'right-start': function($offset) {
          console.log($offset);
          return {
            'offset': `0,${$offset}`, // 上，左
          };
        },
        'right-end': function() {},
        'bottom': function($offset) {
          return {
            'offset': `0,${$offset}`, // 左，上
          };
        },
        'bottom-start': function() {},
        'bottom-end': function() {},
      };

      return offsetNumber[placement](offset);
    },
  },
};
