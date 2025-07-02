import Home from '../pages/Home.vue'
import Faq from '../pages/Faq/Faq.vue'
import Page404 from '../pages/404page/page404.vue'

export const generalRoutes = [
    { path: '/', component: Home },
    { path: '/faq', component: Faq },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: Page404 }
];