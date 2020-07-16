<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="currentUserList"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        type="selection"
        width="55"
      />
      <el-table-column
        label="日期"
        width="120"
      >
        <template slot-scope="scope">{{ scope.row.id }}</template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="120"
      />
      <el-table-column
        prop="profile"
        label="地址"
        show-overflow-tooltip
      />
      <el-table-column
        fixed="right"
        label="操作"
        width="100"
      >
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="handleClick(scope.row)">Delete</el-button>
          <el-button v-if="scope.row.index == 0" type="text" size="small" @click="deleteAll">DeleteAll</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      :current-page="currentPage"
      :page-sizes="[5, 10, 20, 40]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="userList.length"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      userList: [],
      currentPage: 1, // 初始页
      pagesize: 5, //    每页的数据
      multipleSelection: []
    }
  },
  computed: {
    currentUserList() {
      var newArr = this.userList.slice((this.currentPage - 1) * this.pagesize, this.currentPage * this.pagesize)
      for (var i = 0; i < newArr.length; i++) {
        newArr[i].index = i
      }
      return newArr
    }
  },
  mounted() {
    this.getUser()
  },
  created() {

  },
  methods: {
    deleteAll() {
      for (var i = 0; i < this.userList.length; i++) {
        for (var j = 0; j < this.multipleSelection.length; j++) {
          if (this.multipleSelection[j].id === this.userList[i].id) {
            this.userList.splice(1, i)
          }
        }
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage
    },
    handleSizeChange(size) {
      this.pagesize = size
    },
    handleClick(v) {
      console.log(v)
      var arr = this.userList.filter(item => {
        return v.id !== item.id
      })
      this.userList = arr
    },
    getUser() {
      this.axios.get('/getlist').then(res => {
        this.userList = res.data.userlist
      })
    }
  }

}
</script>

<style>

</style>
