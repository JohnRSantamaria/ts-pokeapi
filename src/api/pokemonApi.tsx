import axios from "axios";
export const pokemonApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2'
})

//https://pokeapi.co/api/v2/pokemon?limit=1500