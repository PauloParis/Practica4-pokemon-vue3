<template>
    <p v-if="loading">Cargando información</p>
    <div class="alert alert-danger" v-if="error">{{error}}</div>
    <div v-if="data">
        <img :src="data.sprites?.front_default" alt=""/> <!-- ? opcional chaining -->
        <h1>Poke name: {{$route.params.name}}</h1>
        <div class="btn-group">
            <button :disabled="findPoke(data.name)" @click="add(data)" class=" btn btn-primary mb-2">Agregar Favoritos</button>
        </div>
    </div>
    <h1 v-else>No existe el pokemon</h1>
    <button class="btn btn-outline-primary" @click="back">Volver</button>
</template>

<script setup>
//import { ref } from "vue";
//import axios from "axios"
import { useRoute, useRouter } from "vue-router";
import {useGetData} from '@/composables/getData.js'

import {useFavoritoStore} from '@/store/favoritos.js'
import { storeToRefs } from "pinia";

const route = useRoute();
const router = useRouter();
const useFavorito = useFavoritoStore();

const {add, findPoke} = useFavorito;
const {} = storeToRefs(useFavorito)

const {getData, data, loading, error} = useGetData();


//const poke = ref({});

const back = () => {
    router.push('/pokemons')
}

/*
const getData = async() => {
    try {
        const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
        poke.value = data;
    } catch (error) {
        console.log(error)  
        poke.value = null;    
    }   
}
getData()
*/

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);

</script>