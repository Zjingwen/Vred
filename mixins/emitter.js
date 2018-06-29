
function broadcast(componentName, eventName, params) {
  for (let i=0; i < this.$children.length; i++) {
    let child = this.$children[i];
    let name = child.$options.componentName;
    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      broadcast.apply(child, [componentName, eventName].concat([params]));
    }
  }
}

module.exports = {
  methods: {
    dispatch: function(componentName, eventName, params) {
      let parent = this.$parent || this.$root;
      let name = parent.$options.componentName;

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;

        if (parent) {
          name = parent.$options.componentName;
        }
      }
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },

    broadcast: function(componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params);
    },
  },
};
