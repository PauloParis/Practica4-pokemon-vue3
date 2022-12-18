<template>
  <div>
    <h1>Home counter: {{useCounter.count}}</h1>
    <h2>Double: {{useCounter.double}}</h2>
    <button @click="useCounter.increment">Increment</button>
    <!-- DESTRUCTURANDO -->
    <hr>
    <h1>Home counter destructurado: {{count}}</h1>
    <h2>Double destructurado: {{double}}</h2>
    <button @click="increment">Increment destructurado</button>
  </div>
</template>

<script setup>
import {useCounterStore} from '@/store/counter.js'
import {storeToRefs} from 'pinia'

const useCounter = useCounterStore();

const {increment} = useCounter; //destructurando, no sirve para los ref (count), y getter (computed)

//Para destructurar una referencia o un computed, se usa storeToRefs
const {count, double} = storeToRefs (useCounter)

</script>