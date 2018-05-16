/**
 *  this.$message('这是一条消息提示');
 *  this.$message({message: '恭喜你，这是一条成功消息',type: 'success'});
 *  this.$message({message: '警告哦，这是一条警告消息',type: 'warning'});
 * this.$message.error('错了哦，这是一条错误消息');
 */
require("./message.css");
var template = require("./message.html");

module.exports = {

    componentName: 'TMessage',
    template: template,
    data: function() {
        return {
            visible: false,
            message: '',
            duration: 2000,
            type: 'info',
            iconClass: '',
            customClass: '',
            onClose: null,
            showClose: false,
            closed: false,
            timer: null,
            typeMap: {
                'info': 'http://oss2.lanlanlife.com/71ec91851cdc1e40107776f83dd0c6ce_40x40.png',
                //'success': 'http://oss1.lanlanlife.com/caa2747d2ad0b3acea3b1347305e9d25_40x40.png',
                'success': 'http://oss.lanlanlife.com/2cc6b5e4a60478193ed3e6bdaa0f1cec_30x30.png',
                'warning': 'http://oss2.lanlanlife.com/3a2c3aa58e30dae123d372bb99245621_40x40.png',
                'error': 'http://oss2.lanlanlife.com/53a6ff00efbd70fc7d8884b7dc8e1850_40x40.png'
            }
        };
    },

    computed: {
        typeImg: function() {
            // 暂时 不显示其他 img
            if(this.type != 'success') return '';
            return this.typeMap[this.type];
        }
    },

    watch: {
        closed: function(newVal) {
            if (newVal) {
                this.visible = false;
                this.$el.addEventListener('transitionend', this.destroyElement);
            }
        }
    },
    methods: {
        destroyElement: function() {
            this.$el.removeEventListener('transitionend', this.destroyElement);
            this.$destroy(true);
            this.$el.parentNode.removeChild(this.$el);
        },
        close: function() {
            this.closed = true;
            if (typeof this.onClose === 'function') {
                this.onClose(this);
            }
        },
        clearTimer: function() {
            clearTimeout(this.timer);
        },
        startTimer: function() {
            if (this.duration > 0) {
                this.timer = setTimeout(function(){
                    if (!this.closed) {
                        this.close();
                    }
                }.bind(this), this.duration);
            }
        }
    },
    mounted: function() {
        this.startTimer();
    }
};