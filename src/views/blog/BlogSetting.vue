<template>
    <div class="plansetting">
        <div class="allocation-apply-title">博客设置</div>
        <el-tabs v-model="activeTab" >
            <el-tab-pane label="博客设置" name="blog-manage"></el-tab-pane>
            <el-tab-pane label="博客列表" name="blog-query" lazy></el-tab-pane>
        </el-tabs>
        <router-view></router-view>

    </div>

</template>
<script>

export default {
  name: 'BlogSetting',

  components: {
  },
  data () {
    return {

    }
  },
  computed: {
    activeTab: {
      get () {
        return this.$route.name
      },

      set (name) {
        this.$router.push({ name })
      }
    }
  },
  methods: {

  },
  created () {

  }
}
</script>
<style lang="scss" scoped>
.allocation-apply-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
}
</style>
