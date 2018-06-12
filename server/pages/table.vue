<template>
    <div>
        <headers></headers>
        <h1>table表格</h1>
        <contents :linkName='linkName'>
            <t-exapmple mode='vertical' more>
                <div slot="view">
                    <t-table :width="[10,10,10,20,40,20]">
                    <t-thead>
                        <t-tr>
                            <t-th>星期一</t-th>
                            <t-th>星期二</t-th>
                            <t-th>星期三</t-th>
                            <t-th>星期四</t-th>
                            <t-th>星期五</t-th>
                            <t-th>星期六</t-th>
                        </t-tr>
                        <t-tr>
                            <t-th>星期一</t-th>
                            <t-th>星期二</t-th>
                            <t-th>星期三</t-th>
                            <t-th>星期四</t-th>
                            <t-th>星期五</t-th>
                            <t-th>星期六</t-th>
                        </t-tr>
                        <t-tr>
                            <t-th>星期一</t-th>
                            <t-th>星期二</t-th>
                            <t-th>星期三</t-th>
                            <t-th>星期四</t-th>
                            <t-th>星期五</t-th>
                            <t-th>星期六</t-th>
                        </t-tr>
                    </t-thead>
                    <t-tbody>
                        <t-tr>
                            <td>第一天</td>
                            <td>第二天</td>
                            <td>第三天</td>
                            <td>第四天</td>
                            <td>第五天</td>
                            <td>第六天</td>
                        </t-tr>
                        <t-tr>
                            <td>第一天</td>
                            <td>第二天</td>
                            <td>第三天</td>
                            <td>第四天</td>
                            <td>第五天</td>
                            <td>第六天</td>
                        </t-tr>
                        <t-tr>
                            <td>第一天<br>第一天+1</td>
                            <td>第二天</td>
                            <td>第三天</td>
                            <td>第四天</td>
                            <td>第五天</td>
                            <td>第六天</td>
                        </t-tr>
                        <t-tr>
                            <td>第一天</td>
                            <td>第二天</td>
                            <td>第三天</td>
                            <td>第四天</td>
                            <td>第五天</td>
                            <td>第六天<br>第六天+1</td>
                        </t-tr>
                    </t-tbody>
                </t-table>
                </div>
                <div slot="markdown" v-html="tableMd"></div>
                <textarea slot="code" v-html="tableHtml"></textarea>
            </t-exapmple>
        </contents>
        <footers></footers>
    </div>
</template>
<style lang="css" scoped></style>
<script>
    import tableHtml from '../doc/table/table.html';
    import tableMd from '../doc/table/table.md';
    
    export default{
        data:function(){
            return {
                linkName: '表格',
                tableHtml: tableHtml,
                tableMd: tableMd,
            }
        }
    }
</script>