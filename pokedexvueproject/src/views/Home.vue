<template>
  <div class="home">
    <b-container class="mt-4">
      <h1 class="text-center">Mis Pokemones</h1>
      <b-form class="row  search-container">
        <b-input class="col-9" v-model="text" placeholder="Ingresa el nombre del pokemon:">
        </b-input>
        <b-button class="col-2 mx-2" variant="primary" >Buscar</b-button>
      </b-form>
    <div class="mt-2">Value: {{ text }}</div>

      <b-row>
        <b-col class="col-xl-3 col-lg-4 col-md-4 col-sm-6  mb-4" v-for="(pokemon,index) in Pokemones" :key="'poke'+index">
          <b-card class="text-center name-pokemon" footer-bg-variant="danger" :footer="pokemon.name">
            <img :src="imageUrl+pokemon.id+'.png'" alt="image not found">
            <!-- <h4 class="name-pokemon">{{pokemon.name}}</h4> -->
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
//importar axios
import axios from "axios";
import {mapState} from "vuex";

export default {
  name: 'home',
  components: {
    //HelloWorld
  },
  data() {
      return {
        text: '',
        Pokemones:[]
      }
  },
  computed: {
    ...mapState(['imageUrl','apiUrl'])
  },
  methods: {
    async getPokemons(){
      try {
        //solo trabajaremos con 200 pokemones
        let datos=await axios.get(this.apiUrl+'?limit=200' )
        
        //this.infoPokemon= await datos.data.results.;
        //en el mismo await le agregamos el campo id y lo guardamos en infoPOKEMON
        await datos.data.results.forEach(pokemon => {
          //de esta forma obtenemos el id para pasarlo como parametro en la iamgen
          pokemon.id=pokemon.url.split('/')[6];
          //agregamos ese campo id al arreglo de pokemones
          this.Pokemones.push(pokemon);
        });        

       
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
.name-pokemon{
  text-transform: capitalize;
  color: white;
}
</style>