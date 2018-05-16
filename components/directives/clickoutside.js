
var nodeList = [];
var ctx = '$clickoutCTX$';

document.addEventListener('click',function(e){
    //console.log(e.target);
    for (var i = 0; i < nodeList.length; i++) {
        var obj = nodeList[i];
        obj[ctx].handleFn(e)
    }
});

module.exports = {
    bind: function(el, binding, vnode){
        var id = nodeList.push(el) - 1;

        //console.log(binding.expression);
        //console.log(binding.value);

        function handleFn(e) {
            //if (el.contains(e.target)) return;
            if(!vnode.context ||
                el.contains(e.target) ||
                (vnode.context.popperEl &&
                vnode.context.popperEl.contains(e.target))) return;

            el[ctx].bindingFn && el[ctx].bindingFn();
        }

        el[ctx] = {
            id: id,
            handleFn: handleFn,
            methodName: binding.expression,
            bindingFn: binding.value
        };
    },

    update: function(el, binding) {
        el[ctx].methodName = binding.expression;
        el[ctx].bindingFn = binding.value;
    }
}