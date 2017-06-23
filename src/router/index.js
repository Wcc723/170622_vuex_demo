import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Hello from '@/components/Hello'
import Form from '@/components/Form'
import Card from '@/components/Card'
import Cart from '@/components/Cart'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    },
    {
      path: '/card',
      name: 'Card',
      component: Card
    },
    {
      path: '/cart',
      name: '購物車',
      component: Cart
    }
  ]
})
