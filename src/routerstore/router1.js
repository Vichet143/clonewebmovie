import Explore from '../pages/explore/Explore.vue'
import Allexplore from '../pages/explore/Allexplore.vue'
import Cardpopular from '../pages/explore/Cardpopular.vue'
import Cardregoin from '../pages/explore/Cardregoin.vue'
import Cardsubtitle from '../pages/explore/Cardsubtitle.vue'

export const exploreRoutes = [
    {
        path: '/explore',
        component: Explore,
        children: [
            { path: '', component: Allexplore },
            { path: 'cardpopular', component: Cardpopular },
            { path: 'cardregoin', component: Cardregoin },
            { path: 'cardsubtitle', component: Cardsubtitle },
        ]
    }
];