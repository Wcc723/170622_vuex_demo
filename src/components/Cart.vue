<template>
  <div>
    <div class="row">
      <div class="col-sm-8">
        <!-- 產品列表 -->
        <div class="card mb-3" v-for="(item, index) in products">
          <div class="card-img-top"
            v-bind:style="{ 'background-image': `url(${item.images})` }"
            style="height: 300px; background-size: cover; background-position: center center;"></div>
          <div class="card-block">
            <h4 class="card-title">{{ item.name }}</h4>
            <p class="card-text">{{ item.description }}</p>
          </div>
          <div class="card-footer text-center">
            <h4 class="card-title text-center">NT$ {{ item.price }}</h4>
            <button
              type="button"
              class="btn btn-outline-primary"
              :class="{ 'active': item.selected }"
              @click="toogleCart( item.id )"
              >
              <span>已</span>
              選購
            </button>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <!-- 購物車 -->
        <table class="table">
          <tr v-for="(item, index) in cart">
            <td>
              <button type="button" class="btn btn-outline-primary btn-sm" @click="toogleCart( item.id )">
                取消選購
              </button>
            </td>
            <td>
              <img class="card-img-top img-fluid" :src="item.images" width="150" alt="Card image cap">
            </td>
            <td>
              {{ item.name }}
            </td>
            <td class="text-right">
              NT${{ item.price }}
            </td>
          </tr>
          <tr>
            <td colspan="4" class="text-right">
              NT$ 總價 {{ showPrice }}
            </td>
          </tr>
        </table>
        <!-- 訂購資訊 -->
        <div v-if="cart.length">
          <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" class="form-control" id="email" v-model="temp.email" placeholder="Enter email">
          </div>

          <div class="form-group">
            <label for="username">姓名</label>
            <input type="text" class="form-control" id="username" v-model="temp.username" placeholder="輸入姓名">
          </div>

          <div class="form-group">
            <label for="address">地址</label>
            <input type="text" class="form-control" id="address" v-model="temp.address" name="address" placeholder="請輸入地址">
          </div>

          <div class="text-right">
            <button class="btn btn-danger" @click="submit( temp )">送出</button>
          </div>
        </div>
        <pre>{{ temp }}</pre>
      </div>
    </div>


  </div>
</template>

<script>
// 引用 vuex
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'hello',
  data () {
    return {
      temp: {
        username: '',
        address: '',
        email: '',
        cart: []
      }
    }
  },
  computed: {
    ...mapGetters({
      products : 'getProducts',
      cart     : 'getCart',
      showPrice: 'getCartTotal'
    }),
  },
  watch: {
    cart(value){
        this.temp.cart = value
    }
  },
  methods: {
    ...mapActions([
      'getData',
      'toogleCart',
      'submit'
    ]),
  },
  mounted () {
    this.getData()
  }
}
</script>

<style></style>
