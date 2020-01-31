<template>
  <div class="text-font ">
    <b-row >
      <b-col class="text-center">
        <img :src="imageUrl + pokemonInfoArray.id + '.png'" alt="...cargando" class="pokemon-img">
      </b-col>
    </b-row>
    <b-row >
      <b-col  class="text-center pokemon-name">
        {{pokemonInfoArray.name}}
      </b-col>
    </b-row>
    <b-card no-body >
      <b-tabs card fill>
        <b-tab title="Mi descripción">
          <b-row align-h="between" class="style-info mt-2">
            <b-col cols="5" class="px-0">
              Experiencia Base :
            </b-col>
            <b-col cols="5" class="text-right px-0">
              {{pokemonInfoArray.base_experience}} XP
            </b-col>
          </b-row>
          <b-row align-h="between" class="style-info mt-2" >
            <b-col cols="4" class="px-0">
              Altura :
            </b-col>
            <b-col cols="4" class="text-right px-0">
              {{pokemonInfoArray.height/10}} m
            </b-col>
          </b-row>
          <b-row align-h="between" class="style-info mt-2" >
            <b-col cols="4" class="px-0">
              Peso :
            </b-col>
            <b-col cols="4" class="text-right px-0">
              {{pokemonInfoArray.weight/10}} kg
            </b-col>
          </b-row>
          <b-row class="mt-4 ">
            <b-col cols="12" class="px-0 style-info" style="font-weight:bold;">Tipo(s) de pokemon : </b-col>

            <div class="pokemon-types" v-for="(value,index) in pokemonInfoArray.types" :key="'value'+index">{{value.type.name}}</div>
          </b-row>
          <b-row class="mt-3">
            <b-col cols="12"  class="px-0 style-info" style="font-weight:bold;">Habilidades : </b-col>

            <div cols="12" class="pokemon-abilities" v-for="(value,index) in pokemonInfoArray.abilities" :key="'value'+index">{{value.ability.name}}</div>
          </b-row>
        </b-tab>
        <b-tab title="Mis estadísticas">
          <b-row  v-for="(value,index) in pokemonInfoArray.stats" :key="'value'+index">
            <b-col class="my-2" cols="6" >
              {{value.stat.name}} 
            </b-col>
            <b-col class="my-2" cols="6">
              <b-progress :value="value.base_stat" variant="danger" max=180 show-value  ></b-progress>
            </b-col>
          </b-row>
        </b-tab>
      </b-tabs>

    </b-card>
    

  </div>
</template>

<script>
import {mapState} from "vuex";


export default {
    name:'PokemonDetail',
    data() {
      return {
        urlPokemon:'',
        greatStat:'success',
        mediumStat:'warning',
        badStat:'danger'
      }
    },
    computed: {
      ...mapState(['pokemonInfoArray','imageUrl'])

    },
/*    mounted() {
      this.$bvModal.show('modal-show')
    }, */ 
}
</script>

<style scoped>
.pokemon-name{
    text-transform: capitalize;
    color: black;
    font-weight: bold;
    margin: 5px 0;
    font-size: 23px;
}
.pokemon-img{
  background: rgb(83, 80, 80);
  border-radius: 50%;
  padding: 6px;
}
.text-right{
  text-align: right;
}
.text-font{
  font-family: 'Dosis', sans-serif;
  font-size: 19px;
}
.style-info{
  border-bottom: 0.5px solid rgba(73, 73, 73, 0.959);
}
.pokemon-types{
  text-transform: capitalize;
  background: rgb(7, 7, 124);
  margin: 15px 5px;
  text-align: center;
  border-radius: 15px;
  color: white;
  padding: 5px 10px;
  font-size: 15px;
}
.pokemon-abilities{
  text-transform: capitalize;
  background: rgb(216, 23, 23);
  margin: 15px 5px;
  text-align: center;
  border-radius: 15px;
  color: white;
  padding: 5px 10px;
    font-size: 15px;
}
</style>
