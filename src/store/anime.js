import { defineStore } from 'pinia';
import axios from 'axios';

export default defineStore('movieanimedramaRepositoryStorimport', {
    state: () => ({
        repository: [],
    }),
    actions: {
        async fetchRepository() {
            try {
                const response = await axios.get('https://api.tvmaze.com/search/shows?q=girls');
                this.repository = response.data;
            } catch (error) {
                console.error("Failed to fetch Hollywood shows:", error);
            }
        },
    },
});