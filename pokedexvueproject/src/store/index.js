import Vue from 'vue'
import Vuex from 'vuex'
//importar axios
import axios from 'axios';

Vue.use(Vuex,axios)

export default new Vuex.Store({
  state: {
    imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/',
    apiUrl: 'https://pokeapi.co/api/v2/pokemon/',
    pokemonsArray:[]
  },//refresh the state with mutation
  mutations: {
    SET_POSTS(state,pokemons){
      //aqui rellenamos la data del api al estado pokemonsArray
      state.pokemonsArray=pokemons;
    }
  },//done the call to the apirest
  actions: {
    loadPokemons({commit,state}){
      let pokemons=[];
      axios
      //solo trabajaremos con 200 pokemones
        .get(state.apiUrl +'?limit=200')
        .then(data=>{         
          data.data.results.forEach(pokemon=>{
             //en el mismo then() le agregamos el campo id y lo guardamos en 
             //la variable pokemons creada previamente
             //de esta forma obtenemos el id
            pokemon.id=pokemon.url.split('/')[6];
            //agregamos ese campo id al arreglo de pokemons
            pokemons.push(pokemon);
          })
          //aqui enviamos la data al mutation para que lo rellene
          commit('SET_POSTS',pokemons)
        })
        .catch(error =>{
          console.log(error);
        })
    }   
  },
  modules: {
  }
})
