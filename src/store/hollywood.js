// store/hollywood.js
import { defineStore } from 'pinia';
import axios from 'axios';

export default defineStore('movieholydramaRepositoryStore', {
    state: () => ({
        repository: [],
    }),
    actions: {
        async fetchRepository() {
            try {
                const response = await axios.get('https://api.tvmaze.com/search/shows?q=hollywood');
                this.repository = response.data;
            } catch (error) {
                console.error("Failed to fetch Hollywood shows:", error);
            }
        },
    },
});
