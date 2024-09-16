<template>
  <div>
    <input v-model="pokemonName" placeholder="Enter Pokemon Name" />
    <button @click="getPokemon">Get Pokemon</button>

    <div v-if="pokemonStore.loading">Loading...</div>
    <div v-if="pokemonStore.error">Error: {{ pokemonStore.error.message }}</div>
    
    <div v-if="pokemonStore.pokemonData">
      <h1>{{ pokemonStore.pokemonData.name }}</h1>
      <img :src="pokemonStore.pokemonData.sprites.front_default" alt="pokemon image" />
      <p>Height: {{ pokemonStore.pokemonData.height }}</p>
      <p>Weight: {{ pokemonStore.pokemonData.weight }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { usePokemonStore } from '~/stores/pokemon'

const pokemonName = ref('')
const pokemonStore = usePokemonStore()

const getPokemon = () => {
  pokemonStore.fetchPokemon(pokemonName.value)
}
</script>
