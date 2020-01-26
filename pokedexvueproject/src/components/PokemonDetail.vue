<template>
  <div >
    <div>POKEMON {{pokemonInfoArray.name}}</div>
    <div>BASE EXPERIENCE {{pokemonInfoArray.base_experience}} exp</div>
    <div>ALTURA {{pokemonInfoArray.height/10}} m</div>
    <div>Peso {{pokemonInfoArray.weight/10}} kg</div>
    <div>POKEMON types 
      <div v-for="(value,index) in pokemonInfoArray.types" :key="'value'+index" >{{value.type.name}}</div>
    </div>
    <div>POKEMON Abilities 
      <div v-for="(value,index) in pokemonInfoArray.abilities" :key="'value'+index" >{{value.ability.name}}</div>
    </div>
    <b-modal id="modal-show">
      <p>HOla</p>
    </b-modal>
  </div>
</template>

<script>
import {mapState} from "vuex";


export default {
    name:'PokemonDetail',
    data() {
      return {
        urlPokemon:''
      }
    },
    computed: {
      ...mapState(['pokemonInfoArray'])
    },
   mounted() {
      this.$bvModal.show('modal-show')
    }, 
}
</script>

<style>

</style>