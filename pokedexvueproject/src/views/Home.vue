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
    <!-- 
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
 -->

    <ul>
      <li v-for="(item,index) in infoPokemon" :key="'poke'+index">
       {{index}} - {{item.name}} - 
      </li>
    </ul>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
//importar axios
import axios from "axios";


export default {
  name: 'home',
  components: {
    //HelloWorld
  },
  data() {
      return {
        text: '',
        infoPokemon:[]
      }
  },
  methods: {
    async getPokemons(){
      try {
        let datos=await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=964`)
        
        this.infoPokemon= await datos.data.results;
        console.log(infoPokemon)
        //console.log(this.infoPokemon[0].name)
      } catch (error) {
       console.log(error) 
      }
      finally{

      }
    }
  },
  created() {
    this.getPokemons();
  },
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