<template>
    <div>
        <h1>Pokemons</h1>
        <p v-if="loading">Cargando información</p>
        <div class="alert alert-danger" v-if="error">{{error}}</div>
        <div v-if="data">
            <ul class="list-group">
                <li class="list-group-item" v-for="(poke) in data.results" :key="poke.name">
                    <router-link :to="`/pokemons/${poke.name}`">
                        {{poke.name}}
                    </router-link>

                </li>
            </ul>
           <div class="mt-2">
            <button :disabled="!data.previous" class="btn btn-warning me-2" @click="getData(data.previous)">Preview</button>
            <button :disabled="!data.next" class="btn btn-primary" @click="getData(data.next)">Next</button>
           </div>
        </div>
        
    </div>
</template>

<script setup>
//import { ref } from 'vue'
import axios from 'axios'
import { RouterLink } from 'vue-router';
import {useGetData} from '@/composables/getData.js'

const {data, getData, loading, error} = useGetData()

//const pokemons = ref([]);
/*
const getData = async () => {
    try {
        const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon')
        pokemons.value = data.results;
    } catch (error) {
        console.log(error)
    }
}
getData();
*/
getData('https://pokeapi.co/api/v2/pokemon');
</script>