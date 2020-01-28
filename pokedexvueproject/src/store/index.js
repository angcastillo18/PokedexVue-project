import Vue from 'vue'
import Vuex from 'vuex'
//importar axios
import axios from 'axios';

Vue.use(Vuex,axios)

export default new Vuex.Store({
  state: {
    imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/',
    apiUrl: 'https://pokeapi.co/api/v2/pokemon/',
    pokemonsArray:[],
    pokemonId:'',
    pokemonInfoArray:[],
    loadingState:false
  },//refresh the state with mutation
  mutations: {
    SET_POSTS_POKEMONS(state,pokemons){
      //aqui rellenamos la data del api al estado pokemonsArray
      state.pokemonsArray=pokemons;
    },
    SET_POSTS_POKEMON_INFO(state,infoPokemon){
      //aqui rellenamos la data del api al estado pokemonsArray
      state.pokemonInfoArray=infoPokemon;
    },
    //aqui modificamos el state loadingState
    showLoading(state){
      state.loadingState=true;
    },
    hideLoading(state){
      state.loadingState=false;
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
          commit('SET_POSTS_POKEMONS',pokemons)
        })
        .catch(error =>{
          console.log(error);
        }) 
    },
    //creamos la llamada al la info del pokemon detallada   
    async loadInfoPokemon({commit,state},id){  
     try {
       //cambiamos el estado del loading a true
      commit('showLoading')
       let data= await axios.get(state.apiUrl+id)
       commit('SET_POSTS_POKEMON_INFO',data.data);
     } catch (error) {
       console.log(error)
     }finally{
       //cambiamos el estado del loading a false
      commit('hideLoading') 
     }
/*       axios
      .get(state.apiUrl+id)
      .then(data=>{
        commit('SET_POSTS_POKEMON_INFO',data.data);
        console.log(state.loadingState);
      })
      .catch(error =>{
        console.log(error);
      })
      .finally(()=>{
        commit('hideLoading') 
      }) */
    }
  },
  modules: {
  }
})
