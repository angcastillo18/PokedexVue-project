<template>
    <div>
        <b-img  :src="require('../assets/Banner-pokemon.jpg')" class="img-fluid mt-5" style="max-height: 300px;  " alt="img failed"/>
        <b-card bg-variant="danger" text-variant="white" header="Mi pokedex">
            <b-card-text>Creado con Vue.js, Bootstrap, Vuex, Router y Pokemon Api.</b-card-text>
            <p>Puedes descargar el proyecto en el siguiente link: 
                <b-link href="https://github.com/angcastillo18/PokedexVue-project">Repositorio del proyecto</b-link>
            </p>
        </b-card>   
    </div>
</template>

<script>
export default {
    name:'about'
}
</script>

<style scoped>
</style>