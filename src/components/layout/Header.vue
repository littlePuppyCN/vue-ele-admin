<template>
  <el-container id="header">
    <el-header>
      <div class="title">VUE PROJECT</div>
      <div class="title-nav">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">Index</el-breadcrumb-item>
          <el-breadcrumb-item v-for="i in routeArr" :key="i.name">{{ i.name }}</el-breadcrumb-item></el-breadcrumb>
        <el-dropdown>
          <span class="el-dropdown-link">
            admin<i class="el-icon-arrow-down el-icon--right" />
            <div class="user-img" @click="testToken" />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>index</el-dropdown-item>
            <el-dropdown-item>my page</el-dropdown-item>
            <el-dropdown-item>logout</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>
  </el-container>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      routeArr: []
    }
  },
  watch: {
    $route() {
      this.getRouterArr()
    }
  },
  mounted() {
    this.getRouterArr()
  },
  methods: {
    testToken() {
      this.axios.get('/getlist')
        .then(res => {
          console.log(res)
        })
    },
    // 获取router信息改变bread
    getRouterArr() {
      var matched = this.$route.matched
      this.routeArr = matched
    }
  }
}
</script>

<style lang='less' scoped>
#header {
  // background: #00cc99;
  opacity: 0.2;
}
.el-header {
  padding: 0 !important;
  display: flex;
  line-height: 60px;
  .title {
    width: 200px;
    height: 100%;
    text-align: center;
  }
  .title-nav {
    padding-left: 40px;
    flex: 1;
    display: flex;
    justify-content: space-between;
    /deep/.el-breadcrumb{
        line-height:inherit;
    }
    .user-img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 1px solid #ccc;
    }
    .el-dropdown-link{
        display: flex;
        align-items: center;
    }
  }
}
</style>
