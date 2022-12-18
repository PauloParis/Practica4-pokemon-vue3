<template>
    <div>
        <h1>Pokemones Favoritos</h1>
        <p v-if="favoritos.length === 0">Sin favoritos</p>
        <ul v-else class="list-group">
            <li class="list-group-item" v-for="poke in favoritos" :key="poke.id">
                <div>
                    {{poke.name}}
                </div>
                <div>
                    
                        <RouterLink :to="`/pokemons/${poke.name}`" class="btn btn-sm btn-info ms-2">Mayor Información</RouterLink>
                    
                    
                    <button @click="remove(poke.id)" class="btn btn-sm btn-danger">Eliminar</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>

import {useFavoritoStore} from '@/store/favoritos.js'
import { storeToRefs } from 'pinia';
import { RouterLink } from 'vue-router';

const useFavorito = useFavoritoStore();

const {favoritos} = storeToRefs(useFavorito);

const {remove} = useFavorito
</script>