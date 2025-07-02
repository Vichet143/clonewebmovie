import axios from 'axios'
import { defineStore } from 'pinia'

const API_KEY = 'aacdbe83dedab8fc913bd72adf3fdbad'
const BASE_URL = 'https://api.themoviedb.org/3'
const API_URL = `${BASE_URL}/trending/all/day?api_key=${API_KEY}`
export const IMG_URL = 'https://image.tmdb.org/t/p/w500'

const SearchmoviecdramaRepositoryStore = defineStore('moviecRepository', {
    state: () => ({
        srepository: []
    }),
    actions: {
        async fetchcRepository() {
            try {
                const { data } = await axios.get(API_URL)
                this.s = data.results
                console.log(this.s)
            } catch (error) {
                console.error('Failed to fetch movies:', error)
            }
        }
    }
})

export default SearchmoviecdramaRepositoryStore 
