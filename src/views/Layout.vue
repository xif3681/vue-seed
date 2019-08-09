<template>
  <el-container class="layout">
    <el-header>
      <div class="header-logo">luo.shuqi</div>
      <div class="header-operations">
        <el-dropdown trigger="click" @command="handleCommand">
          <i class="el-icon-user-solid"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>关于</el-dropdown-item>
            <el-dropdown-item command="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>lsq</span>
        <!-- <span>{{ user.name }}</span> -->
      </div>
    </el-header>

    <el-container>
      <el-aside width="200px">
        <el-menu class="menu" router>
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-notebook-1"></i>用户管理</template>
            <el-menu-item index="/user-setting">用户设置</el-menu-item>
            <el-menu-item  index="/user-adding">添加用户</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-shopping-cart-2"></i>博客管理</template>
            <el-menu-item index="/blog-setting">博客设置</el-menu-item>
            <el-menu-item index="/blog-publish">博客发布</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-shopping-cart-2"></i>房源管理</template>
            <el-menu-item index="/room-setting">房源设置</el-menu-item>
            <el-menu-item index="/room-publish">房源发布</el-menu-item>

            <!-- <el-menu-item index="/booking-long-term">长周期订货</el-menu-item> -->
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// import { mapGetters } from 'vuex'
// import { privilegeMixin } from '@/mixins'
// import { BOOKING_USER } from '@/constants'

export default {
  name: 'Layout',
//   mixins: [ privilegeMixin ],
  computed: {
    // ...mapGetters({
    //   user: BOOKING_USER
    // }),


  },
  methods: {
    handleCommand() {}
  },
  mounted () {
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/element-variables.scss";
.layout {
  height: 100%;
}
.el-header {
  line-height: 60px;
  color: #fff;
  background-color: $--color-primary;
}
.header-logo {
  width: 200px;
  display: inline-block;
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
}
.header-operations {
  float: right;
  height: 100%;

  .el-icon-user-solid {
    margin-right: 4px;
    color: #fff;
  }
}

.menu {
  height: 100%;
}
</style>
