<template>
  <div id="app">
    <NavBar/>
    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>

<style>

</style>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
  components: {
    NavBar
  }
}
</script>