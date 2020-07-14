<template>
  <aside>
    <el-menu
      default-active="1"
    >
      <router-link to="/index">
        <el-menu-item index="1">
          <i class="el-icon-location" />
          <span slot="title">Index</span>
        </el-menu-item>
      </router-link>

      <router-link to="/guide">
        <el-menu-item index="2">
          <i class="el-icon-menu" />
          <span slot="title">Guide</span>
        </el-menu-item>
      </router-link>

      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-setting" />
          <span>Auth</span>
        </template>

        <el-menu-item-group>
          <router-link to="/user">
            <el-menu-item index="3-1">
              <i class="el-icon-user" />
              User
            </el-menu-item>
          </router-link>

          <router-link to="/admin">
            <el-menu-item index="3-2">
              <i class="el-icon-user-solid" />
              Admin
            </el-menu-item>
          </router-link>

          <router-link to="/permission">
            <el-menu-item index="3-3">
              <i class="el-icon-s-check" />
              Permission
            </el-menu-item>
          </router-link>

        </el-menu-item-group>
      </el-submenu>
    </el-menu>

    <div id="view">
      <router-view />
    </div>
  </aside>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
aside{
    width: 100%;
    opacity: 0.5;
    height: calc(100% - 60px);
    display: flex;
    /deep/.el-menu-item-group__title{
        display: none;
    }
    a{
        text-decoration: none;
    }
    .el-menu{
        width: 200px;
        height:100%;
    }
    #view{
        flex: 1;
        padding: 12px;
    }
}
</style>
