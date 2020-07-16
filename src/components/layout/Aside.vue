<template>
  <aside>
    <el-menu default-active="1">
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

      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-orange" />
          <span>Table</span>
        </template>

        <el-menu-item-group>
          <router-link to="/ordinary">
            <el-menu-item index="4-1">
              <i class="el-icon-coffee" />
              Ordinary
            </el-menu-item>
          </router-link>

          <router-link to="/complicate">
            <el-menu-item index="4-2">
              <i class="el-icon-milk-tea" />
              Complicate
            </el-menu-item>
          </router-link>

        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-orange" />
          <span>Echarts</span>
        </template>

        <el-menu-item-group>
          <router-link to="/slide">
            <el-menu-item index="5-1">
              <i class="el-icon-coffee" />
              Slide-Echarts
            </el-menu-item>
          </router-link>

          <router-link to="/switch">
            <el-menu-item index="5-2">
              <i class="el-icon-milk-tea" />
              Switch-Echarts
            </el-menu-item>
          </router-link>

          <router-link to="/map">
            <el-menu-item index="5-3">
              <i class="el-icon-milk-tea" />
              Map-Echarts
            </el-menu-item>
          </router-link>

        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-orange" />
          <span>Excel</span>
        </template>

        <el-menu-item-group>
          <router-link to="/import">
            <el-menu-item index="6-1">
              <i class="el-icon-coffee" />
              Import-Excel
            </el-menu-item>
          </router-link>

          <router-link to="/export">
            <el-menu-item index="6-2">
              <i class="el-icon-milk-tea" />
              Export-Excel
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
export default {}
</script>

<style lang='less' scoped>
aside {
  width: 100%;
  opacity: 0.5;
  height: calc(100% - 60px);
  display: flex;
  /deep/.el-menu-item-group__title {
    display: none;
  }
  a {
    text-decoration: none;
  }
  .el-menu {
    width: 200px;
    height: 100%;
  }
  #view {
    flex: 1;
    padding: 12px;
  }
}
</style>
