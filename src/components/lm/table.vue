<template>
  <div class="lmright">
    <h1 class="kj-name">李密 的空间</h1>
    <el-table
	    :data="tableData"
	    border
	    style="width: 100%">
	    <el-table-column
	      fixed
	      prop="date"
	      label="日期"
		  align="center"
	      :formatter="resetDate">
	    </el-table-column>
	    <el-table-column
	      prop="name"
	      label="姓名"
		  align="center">
	    </el-table-column>
	    <el-table-column
	      fixed
	      prop="sex"
	      label="性别"
		  align="center"
	      :formatter="resetSex">
	    </el-table-column>
	    <el-table-column
	      prop="address"
	      label="地址"
		  align="center">
	    </el-table-column>
	    <el-table-column
	      fixed="right"
	      label="操作"
		  align="center"
	      width="100">
	      <template slot-scope="scope">
	        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
	        <el-button type="text" size="small">编辑</el-button>
	      </template>
	    </el-table-column>
	  </el-table>
	  <table border="" cellspacing="" cellpadding="" class="ystable">
	  	<tr>
	  		<th>日期</th>
	  		<th>姓名</th>
	  		<th>性别</th>
	  		<th>地址</th>
	  	</tr>
		
	  	<tr :key="index" v-for="(item,index) in tableData">
			<td>{{item.date | formatDate}}</td>
	  		<td>{{item.name}}</td>
	  		<td>{{item.sex==1 ? '男' : '女'}}</td>
	  		<td>{{item.address}}</td>
	    </tr>
	  </table>
  </div>
</template>

<script>
	export default {
    data() {
      return {
        tableData: [
          {
					date: '2016-05-02 00:00:00',
					name: '张小虎',
					sex: '1',
					address: '上海市普陀区金沙江路 1518 弄'
				  }, 
				  {
					date: '2016-05-04 00:00:00 ',
					name: '王小狮',
					sex: '0',
					address: '上海市普陀区金沙江路 1517 弄'
				  }, 
				  {
					date: '2016-05-01 00:00:00 ',
					name: '李小豹',
					sex: '1',
					address: '上海市普陀区金沙江路 1519 弄'
				  }, 
				  {
					date: '2016-05-03 00:00:00 ',
					name: '赵小猫',
					sex: '0',
					address: '上海市普陀区金沙江路 1516 弄'
				  }
			  ]
      }
    },
    methods:{
    	resetDate(row, column){
    		return /\d{4}-\d{1,2}-\d{1,2}/g.exec(row.date);
    	},
    	resetSex(row, column){
    		return row.sex==1 ? "男":"女";
    	}
    	
    },
	filters: {
		formatDate(v) {
			//return /\d{4}-\d{1,2}-\d{1,2}/g.exec(v);
			return v.replace(' 00:00:00', '');
			//return v.Format("yyyy-MM-dd");
		}
	}
  }
	
</script>

<style>
.lmright{ padding:0 20px;}
.ystable{background-color: transparent; border-collapse: collapse; border-spacing: 0; width:100%; margin-top:50px; border:1px solid #000;}
.ystable tr,.ystable td { text-align:center; line-height:40px;}
</style>
