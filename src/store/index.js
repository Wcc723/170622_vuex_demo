import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/*
    State.
 */
const state = {
  products: [],
  cart: []
}

/*
    Getters.
 */
const getters = {
  getProducts (state) {
    console.log('[getters] getProducts')
    return state.products;
  },
  getCart (state) {
    console.log('[getters] getCart')
    return state.cart;
  },
  getCartTotal (state) {
    return state.cart.reduce( (a, b) => a + b.price, 0 )
  }
}

/*
    Actions.
 */
const actions = {
  getData ({ commit }) {
    // global Vue object
    Vue.http.get('http://localhost:3000/products').then(response => {
      const data = response.body.map(item => {
        item.selected = false
        return item
      })
      console.log('[actions] getData', data)
      commit('GET_PRODUCTS', data)
    });
  },
  toogleCart({ commit }, id) {
    console.log('[actions] toogleCart', id)
    commit('TOOGLE_CART', id)
  },
  submit ({ commit }, userInfo) {
    userInfo.id = Math.random().toString(36).substring(7)
    Vue.http.post('http://localhost:3000/orders/', userInfo)
    .then(response => {
      console.log('[success] submit', response)
    })
  }
}

/*
    Mutations.
 */
const mutations = {
  ['GET_PRODUCTS'] (state, products) {
    state.products = products
  },

  ['TOOGLE_CART'] (state, product_id) {
    // 1. array find product for id.
    let product = state.products.find(function(item){
      return item.id === product_id
    })
    // 2. toodle select.
    product.selected = !product.selected
    // 3. set cart.
    state.cart = state.products.filter( (item) => item.selected )
  }
}

/*
    Bulid Vuex Store.
 */
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})