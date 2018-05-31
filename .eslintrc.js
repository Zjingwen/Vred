module.exports = {
    "root": true,
    "extends": [
        "google",
        "plugin:vue/essential"
    ],
    "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": 6,
    },
    "rules":{
        //强制分号结尾
        "semi":[2],
        //禁止jsdoc
        "require-jsdoc": [0],
        
        'vue/no-unused-vars': [2],
        //强制两空格缩进
        "indent": [2, 2],
    },
    "plugins": [
        "vue"
    ]
};