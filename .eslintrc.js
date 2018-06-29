module.exports = {
    "root": true,
    "extends": [
        "google",
        "plugin:vue/essential"
    ],
    "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": 6,
        "ecmafeatures": {
            //允许在全局作用域下使用return语句
            "globalReturn": false,
            //启用全局strict模式（严格模式）
            "impliedStrict": false,
        }
    },
    "rules":{
        //强制分号结尾
        "semi":[2],
        //禁止jsdoc
        "require-jsdoc": [0],
        //vue默认规则
        'vue/no-unused-vars': [2],
        //强制两空格缩进
        "indent": [2, 2],
        //禁止 for 循环出现方向错误的循环，比如 for (i = 0; i < 10; i--)
        'for-direction': 'error',
        //使用 === 替代 ==
        "eqeqeq": [2, "allow-null"], 
        //强制在函数括号内使用一致的换行
        "function-paren-newline": ["error", "never"],
        //强制使用一致的逗号风格
        "comma-style": ["error", "last"],
        //强制在逗号周围使用空格
        "comma-spacing": ["error", { "before": false, "after": true }],
        //禁止或强制在计算属性中使用空格
        "computed-property-spacing": ["error", "never"],
        //强制使用一致的换行符风格
        "linebreak-style": ["error", "unix"],
        //要求使用剩余参数而不是 arguments
        "prefer-rest-params" : [0],
        //禁止 this 关键字出现在类和类对象之外
        "no-invalid-this": [0],
        //强制一行的最大长度
        "max-len": [0],
        "prefer-spread":[0],
    },
    "plugins": [
        "vue"
    ]
};