import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/Home.vue'
import Money from '@/views/Money.vue'
import Labels from '@/views/Labels.vue'
import Statistics from '@/views/Statistics.vue'
import EditLabel from '@/views/EditLabel.vue'
import NotFound from '@/views/NotFound.vue'

import { Component } from 'vue-property-decorator';
Vue.use(VueRouter)

const routes= [
  {
    path: '/',
    redirect: '/money'  //根路径，进来时的页面
  },
  {
    path: '/money',
    component: Money
  },
  {
    path: '/labels',
    component: Labels
  },
  {
    path: '/statistics',
    component: Statistics
  },
  {
    path: '/labels/edit/:id',
    component: EditLabel
  },
  {
    path: '*',
    component: NotFound
  },
  
]

const router = new VueRouter({
  routes
})

export default router
