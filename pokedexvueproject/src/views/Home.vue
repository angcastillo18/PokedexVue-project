<template>
  <div class="home">
    <b-container class="mt-4">
      <h1 class="text-center">Mis Pokemones</h1>
      <b-form class="row  search-container">
        <b-input class="col-9" v-model="search" placeholder="Ingresa el nombre del pokemon:">
        </b-input>
        <b-button class="col-2 mx-2" variant="primary" >Buscar</b-button>
      </b-form>
      <b-row>
        <b-col class="col-xl-3 col-lg-4 col-md-4 col-sm-6  mb-4" v-for="(pokemon,index) in filteredList" :key="'poke'+index">
          <b-card  class="text-center pokemon-card" @click="showModalInfo(pokemon.id)" footer-bg-variant="danger" :footer="pokemon.name">
            <img :src="imageUrl+pokemon.id+'.png'" alt="image not found">
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    <b-modal id="modal-pokemon"  centered ok-only ok-variant="danger" :title="'Pokemon #' + pokemonId" >
     <div v-if="loadingState" class="text-center">
            <b-spinner style="width: 3rem; height: 3rem;"  label="Spinning" ></b-spinner>
     </div>
     <pokemonDetail v-else  /> 
    </b-modal>
  </div>
</template>

<script>
// @ is an alias to /src
import pokemonDetail from '@/components/PokemonDetail.vue'
/* //importar axios
import axios from "axios"; */
import {mapState,mapActions} from "vuex";

export default {
  name: 'home',
  components: {
    pokemonDetail
  },
  data() {
      return {
        search: ''
      }
  },
  computed: {
    ...mapState(['imageUrl','apiUrl','pokemonsArray','pokemonId','loadingState']),
    //funcion Filtrar la lista de pokemones por la busqueda
    filteredList(){
      return this.pokemonsArray.filter(pokemon=>{
        return pokemon.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  methods: {
    ...mapActions(['loadInfoPokemon','loadPokemons']),
    showModalInfo(id){
      //abrimos el evento del modal y luego ejecutamos el action loadInfoPokemon
      this.$root.$emit('bv::show::modal', 'modal-pokemon', '#btnShow')
      this.loadInfoPokemon(id);
    }
    /*
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
    */

  } ,
  created() {
    //this.getPokemons();
    //llamar a la action del store ApiPokemons
    //this.$store.dispatch('loadPokemons')
    this.loadPokemons();
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
.pokemon-card{
  text-transform: capitalize;
  color: white;
  cursor: pointer;
}
</style>