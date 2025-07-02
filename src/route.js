import { createWebHistory, createRouter } from 'vue-router';
import Home from './pages/Home.vue';
import Faq from './pages/Faq/Faq.vue';
import Explore from './pages/explore/Explore.vue';
import Allexplore from './pages/explore/Allexplore.vue';
import Page404 from './pages/404page/page404.vue';

// Wrapper component that will choose what to show
import Explorewapper from './pages/explore/Explorewapper.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/faq', component: Faq },
    {
        path: '/explore',
        component: Explore,
        children: [
            { path: '', component: Allexplore },
            { path: ':id', component: Explorewapper, props: true, },
        ]
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: Page404 }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
