module.exports = {
    bind: function(el, binding, vnode) {
        vnode.context.$refs[binding.arg].$refs.reference = el;
    }
};