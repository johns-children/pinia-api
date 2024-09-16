import { defineStore } from 'pinia'
import axios from 'axios'

export const usePokemonStore = defineStore('pokemon', {
  state: () => ({
    pokemonData: null,
    loading: false,
    error: null,
  }),
  actions: {
    async fetchPokemon(pokemonName) {
      this.loading = true
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        this.pokemonData = response.data
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    }
  }
})
