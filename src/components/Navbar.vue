<template>
  <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">前端拉賽</a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" :to="{ path: '/hello' }">Hello</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ path: '/form' }">Form</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ path: '/card' }">Card</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ path: '/cart' }">購物車 ({{ cart.length }})</router-link>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="text" placeholder="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters({
    cart: 'getCart',
  })
}
</script>