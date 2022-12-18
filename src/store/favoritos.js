import {defineStore} from 'pinia'
import { computed, ref } from 'vue'

export const useFavoritoStore = defineStore ('favorito', () => {

    const favoritos = ref([]);

    if(localStorage.getItem("favoritos")){
        favoritos.value = JSON.parse(localStorage.getItem("favoritos")); //JSON.parse - de texto a array
    }

    const add = (poke) => {
        favoritos.value.push(poke);
        localStorage.setItem('favoritos', JSON.stringify(favoritos.value)); //JSON.stringify - de array a texto
    };

    const remove = (id) => {
        favoritos.value = favoritos.value.filter((item) => item.id !== id); //devuelve todo menos el elemento con el id
        localStorage.setItem('favoritos', JSON.stringify(favoritos.value));
    };

    const findPoke = (name) => {
        return favoritos.value.some((item) => item.name === name);
    };

    return{
        favoritos,
        add,
        remove,
        findPoke,
    }
})