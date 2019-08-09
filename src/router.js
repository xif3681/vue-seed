import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const lazyLoadView = (AsyncView) => {
  const AsyncComponent = () => ({
    component: AsyncView,
    loading: require('./views/Loading.vue').default,
    error: require('./views/Loading.vue').default,
    delay: 200,
    timeout: 30000
  })

  return Promise.resolve({
    functional: true,
    render (h, { data, children }) {
      return h(AsyncComponent, data, children)
    }
  })
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      exact: true,
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
    },
    {
      path: '/',
      name: 'Layout',
      component: () => lazyLoadView(import('./views/Layout.vue')),
      children: [
        /* user */
        {
          path: '/user-setting',
          name: 'user-setting',
          component: () => import(/* webpackChunkName: "user-setting" */'./views/user/UserSetting.vue')
        },
        {
          path: '/user-adding',
          name: 'user-adding',
          component: () => import( /* webpackChunkName: "user-adding" */'./views/user/UserAdding.vue')
        },


        /* room */
        {
          path: '/room-setting',
          name: 'room-setting',
          redirect: {
            name: 'room-manage'
          },
          component: () => import(/* webpackChunkName: "room-setting'" */ './views/room/RoomSetting.vue'),
          children: [
            /* Help Info */
            {
              path: 'room-manage',
              name: 'room-manage',
              component: () => import(/* webpackChunkName: "room-manage" */'./views/room/RoomManage.vue')
            },

            {
              path: 'room-query',
              name: 'room-query',
              component: () => import(/* webpackChunkName: "room-query" */ './views/room/RoomQuery.vue')
            },

          ],

        },
        {
          path: '/room-publish',
          name: 'room-publish',
          component: () => import( /* webpackChunkName: "room-publish" */'./views/room/RoomPublish.vue')
        },

        /* blog */
        {
          path: '/blog-setting',
          name: 'blog-setting',
          redirect: {
            name: 'blog-manage'
          },
          component: () => import(/* webpackChunkName: "blog-setting" */'./views/blog/BlogSetting.vue'),
          children: [
            {
              path: 'blog-query',
              name: 'blog-query',
              component: () => import(/* webpackChunkName: "blog-query" */'./views/blog/BlogQuery.vue')
            },
            {
              path: 'blog-manage',
              name: 'blog-manage',
              component: () => import(/* webpackChunkName: "blog-manage" */'./views/blog/BlogManage.vue')
            },
          ]
        },
        {
          path: '/blog-publish',
          name: 'blog-publish',
          component: () => import(/* webpackChunkName: "blog-publish" */'./views/blog/BlogPublish.vue')
         },


      ]
    }
  ]
})
