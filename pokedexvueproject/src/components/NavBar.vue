<template>
  <div>
      <b-navbar toggleable="lg" type="dark" variant="danger">
          <b-container>
            <b-navbar-brand href="#">Mi Pokedex</b-navbar-brand>
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

            <b-collapse id="nav_collapse" class="justify-content-end" is-nav >
                <b-navbar-nav >
                    <b-nav-item :to="{name:'home'}" exact  >Home</b-nav-item>
                    <b-nav-item :to="{name:'about'}"  exact>About Us</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
          </b-container>
      </b-navbar>
  </div>
</template>

<script>
export default {
    name:'NavBar'
}
</script>

<style>

</style>