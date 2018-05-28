<template>
    <div>
        <headers></headers>
        <contents :linkName='linkName'>
            <t-exapmple mode='horizontal'>
                <div slot="view">
                    <t-row>
                        <t-col :span='24'>col</t-col>
                    </t-row>
                </div>
            <textarea slot="markdown">
#### zhoujingwen
如果
            </textarea>
            <textarea slot="code">
<template>
    <t-row>1111</t-row>
</template>  

<script>
export default{
    data:function(){
        return {
            linkName: '例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示',
        }
    }
}
</script>
            </textarea>
            </t-exapmple>
            <br/>
            <t-exapmple mode='vertical'>
                <div slot="view">
                    <t-row>
                        <t-col :span='24'>col</t-col>
                    </t-row>
                </div>
            <textarea slot="markdown">
#### zhoujingwen
如果
            </textarea>
            <textarea slot="code">
<template>
    <t-row>1111</t-row>
</template>  

<script>
export default{
    data:function(){
        return {
            data1:1,
            data1:1,
            data1:1,
            data1:1,
            data1:1,
            data1:1,
            data1:1,
            data1:1,
            data1:1,
            data1:1,
            data1:1,
            data1:1,
            linkName: '例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示',
        }
    }
}
</script>
            </textarea>
            </t-exapmple>
        </contents>
        <footers></footers>
    </div>
</template>
<style lang="css"></style>
<script>
    export default{
        data:function(){
            return {
                linkName: '例子展示',
            }
        }
    }
</script>