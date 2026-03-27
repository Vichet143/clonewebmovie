import axios from 'axios'
import { defineStore } from 'pinia'

const API_KEY = 'aacdbe83dedab8fc913bd72adf3fdbad'
const BASE_URL = 'https://api.themoviedb.org/3'
const API_URL = `${BASE_URL}/trending/all/day?api_key=${API_KEY}`
export const IMG_URL = 'https://image.tmdb.org/t/p/w500'

const SearchmoviecdramaRepositoryStore = defineStore('searchMovieRepository', {
    state: () => ({
        srepository: [],
        loading: false,
        error: null,
        lastQuery: ''
    }),
    actions: {
        async fetchcRepository() {
            try {
                const { data } = await axios.get(API_URL)
                this.srepository = (data.results || []).filter((item) => {
                    const hasImage = item.poster_path || item.backdrop_path
                    const hasTitle = item.title || item.name
                    return hasImage && hasTitle
                })
            } catch (error) {
                console.error('Failed to fetch movies:', error)
            }
        },
        async searchRepository(query) {
            const trimmedQuery = query ? query.trim() : ''

            if (!trimmedQuery) {
                this.srepository = []
                this.lastQuery = ''
                this.error = null
                return
            }

            this.loading = true
            this.error = null
            this.lastQuery = trimmedQuery

            try {
                const { data } = await axios.get(`${BASE_URL}/search/multi`, {
                    params: {
                        api_key: API_KEY,
                        query: trimmedQuery,
                        include_adult: false,
                        language: 'en-US',
                        page: 1
                    }
                })

                this.srepository = (data.results || []).filter((item) => {
                    const isPerson = item.media_type === 'person'
                    const hasImage = item.poster_path || item.backdrop_path
                    const hasTitle = item.title || item.name
                    return !isPerson && hasImage && hasTitle
                })
            } catch (error) {
                this.error = 'Failed to search. Please try again.'
                this.srepository = []
                console.error('Failed to search movies:', error)
            } finally {
                this.loading = false
            }
        }
    }
})

export default SearchmoviecdramaRepositoryStore 
