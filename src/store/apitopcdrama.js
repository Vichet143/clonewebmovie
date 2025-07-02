import axios from 'axios'
import { defineStore } from 'pinia'

const API_KEY = 'aacdbe83dedab8fc913bd72adf3fdbad'
const BASE_URL = 'https://api.themoviedb.org/3'
const API_URL = `${BASE_URL}/tv/airing_today?api_key=${API_KEY}`
export const IMG_URL = 'https://image.tmdb.org/t/p/w500'

const moviecdramaRepositoryStore = defineStore('moviecRepository', {
    state: () => ({
        crepository: []
    }),
    actions: {
        async fetchcRepository() {
            try {
                const { data } = await axios.get(API_URL)
                this.crepository = data.results
                console.log(this.crepository)
            } catch (error) {
                console.error('Failed to fetch movies:', error)
            }
        }
    }
})

export default moviecdramaRepositoryStore 
