<template>

  <div id="table">
       <h1 class="kj-name">天山路冯美丽</h1>
        <h3 class="title">2020-8-27-----table循环练习</h3> 
     <div id="app_table">
         
         <el-table :data="tableData" style="width: 100%">
             <el-table-column :prop="item.porp" :label="item.label" v-for="item in data" :key="item.key" :formatter="dateFormat">
             </el-table-column>
         </el-table>
     </div>
  </div>
 
</template>

<script>

export default {
    data() {
        return {
            data:
                [
                    { label: "日期", porp: "date"},
                    { label: "姓名", porp: "name"},
                    { label: "性别", porp: "sex"},
                    { label: "地址", porp: "address"},
                ],
            tableData: 
                    [
                        {
                            date: '2016-05-02 00:00:00',
                            name: '张小虎',
                            sex: 1,
                            address: '上海市普陀区金沙江路 1518 弄'
                        },
                        {
                            date: '2016-05-04 00:00:00 ',
                            name: '王小狮',
                            sex: 0,
                            address: '上海市普陀区金沙江路 1517 弄'
                        },
                        {
                            date: '2016-05-01 00:00:00 ',
                            name: '李小豹',
                            sex: 1,
                            address: '上海市普陀区金沙江路 1519 弄'
                        },
                        {
                            date: '2016-05-03 00:00:00 ',
                            name: '赵小猫',
                            sex: 0,
                            address: '上海市普陀区金沙江路 1516 弄'
                        }
                    ]
        }
       
    },
     methods(){
            alert(111);
           
        }//methods
};


// new Vue({
//   el: '#app_table',
//   data: {
//     message:[{
// 	date: '2016-05-02 00:00:00',
// 	name: '张小虎',
// 	sex: '1',
// 	address: '上海市普陀区金沙江路 1518 弄'
//   }, {
// 	date: '2016-05-04 00:00:00 ',
// 	name: '王小狮',
// 	sex: '0',
// 	address: '上海市普陀区金沙江路 1517 弄'
//   }, {
// 	date: '2016-05-01 00:00:00 ',
// 	name: '李小豹',
// 	sex: '1',
// 	address: '上海市普陀区金沙江路 1519 弄'
//   }, {
// 	date: '2016-05-03 00:00:00 ',
// 	name: '赵小猫',
// 	sex: '0',
// 	address: '上海市普陀区金沙江路 1516 弄'
//   }]
//   }
// })

</script>

<style scoped>
    #app_table{  width: 90%; margin: 0 auto;margin-top: 50px; border: 1px solid red; }
    .title{ width: 90%; margin: 0 auto;}
    .trtr{border: 1px solid #000000; line-height: 30px;margin: 2px;}
</style>