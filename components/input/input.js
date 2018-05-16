import './input';
import html from "./input";

export default Vue.extend({
    template: html,
    data: function () {
        return {
            currentValue: this.value
        }
    },
    props: {
        type: {
            type: String,
            default: 'text'
        },
        value: [String, Number],
        name: String,
        customClass: '',
        placeholder: String,
        disabled: Boolean,
        readonly: Boolean,
        autofocus: Boolean,
        autoComplete: {
            type: String,
            default: 'off'
        },
        size: String,
        form: String,
        icon: String,
        imageIcon: Boolean
    },
    methods: {

        updateValue: function (value) {
            this.currentValue = value.trim();
        },

        handleBlur: function (event) {
            this.$emit('blur', event);
            this.$emit("input", this.$refs.input.value);
        },

        handleFocus: function (event) {
            this.$emit('focus', event);
        },

        handleIconClick: function () {
            this.$emit("icon-click", event);
        },

        inputSelect: function () {
            this.$refs.input.select();
        }
    },
    created: function () {
        this.$on('inputSelect', this.inputSelect);
    },
    watch: {
        currentValue: function (newV) {
            this.$emit("input", newV);
            this.$emit('change', newV);
        }
    }
});