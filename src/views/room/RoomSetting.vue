<template>
  <div class="booking-index">

    <el-tabs v-model="activeTab">
      <el-tab-pane label="房源列表" name="room-query"></el-tab-pane>
      <el-tab-pane label="房源设置" name="room-manage" lazy></el-tab-pane>

    </el-tabs>
    <div class="booking-index-extra-tab">
      <router-link class="booking-index-extra-tab-item" active-class="active" :to="{ name: 'room-query' }">预订单反馈</router-link>

   
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
// import { mapGetters } from 'vuex'

// import { bookingMixin } from '@/mixins'

// import {
//   BOOKING_USER_STORES
// } from '@/constants'

export default {
  name: 'RoomSetting',
//   mixins: [ bookingMixin ],
  data () {
    return {
    //   selectedStoreIndex: 0
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
    },

    // shoppingCartCount () {
    //   const { dataSource } = this.shoppingCart
    //   if (!dataSource) {
    //     return 0
    //   }

    //   return dataSource.filter(item => item.itemId !== -1).length
    // }
  },
  methods: {

  },
  created () {
   
  },
  mounted () {
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/custom.scss";
.booking-index {
  position: relative;
}
.booking-index-store-switch {
  margin-left: 10px;
  cursor: pointer;
}
.booking-index-extra-tab {
  width: 300px;
  position: absolute;
  top: 36px;
  right: 0;
  text-align: right;
  height: 40px;
  line-height: 40px;
}
.booking-index-extra-tab-item {
  display: inline-block;
  margin: 0 10px;
  cursor: pointer;
  color: #2c3e50;
  text-decoration: none;

  &:hover,
  &.active {
    color: $--color-primary;

    i {
      color: $--color-primary;
    }
  }

  .item-primary {
    display: flex;
    align-items: center;
  }
  i {
    font-size: 20px;
  }
}

.badge {
  display: inline-block;
  vertical-align: baseline;
}
</style>
