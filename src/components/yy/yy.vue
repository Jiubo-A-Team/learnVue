<template>
  <div>
    <h1 class="kj-name">杨勇 的空间</h1>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column
        :formatter="formatDate"
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        :formatter="formatRole"
        prop="sex"
        label="性别"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        tableData:[
          {
            date: '2016-05-02 00:00:00',
            name: '张小虎',
            sex: '1',
            address: '上海市普陀区金沙江路1518弄',
          },{
            date: '2016-05-04 00:00:00',
            name: '王小狮',
            sex: '0',
            address: '上海市普陀区金沙江路 1517 弄'
          },{
            date: '2016-05-01 00:00:00',
            name: '李小豹',
            sex: '1',
            address: '上海市普陀区金沙江路 1519 弄'
          },{
            date: '2016-05-03 00:00:00',
            name: '赵小喵',
            sex: '0',
            address: '上海市普陀区金沙江路 1516 弄'
          }
        ],
      }
    },
    methods:{
      formatDate:function(row,column){
        row.date = row.date.substring(0,10).replace(/-/g, '.')
        return row.date
      },

      formatRole:function(row,column){
        return row.sex == true ? "男":"女"
      },
    }
  }
</script>

<style>
</style>
