<template>
  <div class="home">
    <b-container class="mt-4">
      <h1 class="text-center">Mis pokemones</h1>
      <b-form class="row  search-container">
        <b-input class="col-9" v-model="text" placeholder="Ingresa el nombre del pokemon:">
        </b-input>
        <b-button class="col-2 mx-2" variant="primary" >Buscar</b-button>
      </b-form>
    <div class="mt-2">Value: {{ text }}</div>
    <b-list-group>
      <b-list-group-item class="pokemon-content">
        <b-row>
          <b-col class="col-12">
            <b-img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" ></b-img>
          </b-col>
          <b-col class="col-12">
            <h1>Pikachu</h1>
          </b-col>
        </b-row>        
      </b-list-group-item>
            <b-list-group-item class="pokemon-content">
        <b-row>
          <b-col class="col-12">
            <b-img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" ></b-img>
          </b-col>
          <b-col class="col-12">
            <h1>Pikachu</h1>
          </b-col>
        </b-row>        
      </b-list-group-item>
            <b-list-group-item class="pokemon-content">
        <b-row>
          <b-col class="col-12">
            <b-img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" ></b-img>
          </b-col>
          <b-col class="col-12">
            <h1>Pikachu</h1>
          </b-col>
        </b-row>        
      </b-list-group-item>
    </b-list-group>

    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    //HelloWorld
  },
  data() {
      return {
        text: ''
      }
  }
}
</script>

<style  scoped>
.search-container{
 max-width: 750px;
 margin: 25px auto;
}
.pokemon-content{
  max-width: 200px
}
</style>