<template>

  <div id="table">
       <h1 class="kj-name">天山路冯美丽</h1>
        <h3 class="title">2020-8-27-----table循环练习</h3> 
        
     <div id="app_table">
         <h1>elementUI  写表格</h1>
         <el-table :data="tableData" style="width: 100%; border: 1px solid red; font-size:20px">
                <el-table-column fixed prop="date" label="日期" width="180" :formatter="isdate">
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="100">
                </el-table-column>
                <el-table-column prop="sex" label="性别" width="60" :formatter="issex">
                </el-table-column>
                <el-table-column prop="address" label="地址" width="400">
                </el-table-column>
                <el-table-column fixed="right" label="操作" width="100">
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                        <el-button type="text" size="small">编辑</el-button>
                    </template>
                </el-table-column>
         </el-table>
     </div>
     <div id="vue_table" >
         <table >
             <tr>
                 <td>日期</td>
                 <td>姓名</td>
                 <td>性别</td>
                 <td>地址</td>
             </tr>
             <tr :key="index" v-for="(item,index) in tableData">
                 <td>
                     {{item.date | formadate}}
                 </td>
                 <td>
                     {{item.name}}
                 </td>
                 <td>
                     {{item.sex}}
                 </td>
                 <td>
                     {{item.address}}
                 </td>

             </tr>
         </table>
     </div>
  </div>
 
</template>

<script>

export default {
    data() {
        return {
            
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
     methods:{
          isdate(row,column){
           	return /\d{4}-\d{1,2}-\d{1,2}/g.exec(row.date)
          },
          issex(row,column){
              return row.sex==1? "男" : "女";
          }
        },//methods
    filters:{
        formadate(data){
          return  data.replace("00:00:00","")
        }
    }

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
    #app_table{  width: 90%; margin: 0 auto;margin-top: 50px; }
    .title{ width: 90%; margin: 0 auto;}
    .trtr{border: 1px solid #000000; line-height: 30px;margin: 2px;}
    #vue_table table{ width: 100%; margin-top: 40px;}
    #vue_table table td{width: 25%; text-align: center; font-size: 20px; border: 1px solid pink;}
</style>