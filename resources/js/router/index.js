import Vue from "vue";
import Router from 'vue-router';
import Home from '../components/Home';
import routes from "./routes";

Vue.use(Router);
const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        // {
        //     path: '/',
        //     redirect: `/${i18nService.getCurrentLocale()}`,
        // },
        // {
        //     path: '/:locale',
        //     component: Localizer,
        //     beforeEnter: checkLocale,
        //     children: [...routes]
        // },
        {
            path: '/',
            component: Home,
            children: [...routes]
        },
        // {
        //     path: '/',
        //     name: 'main',
        //     props: false,
        //     component: Home,
        //     children: routes
        // },
    ]
});


const DEFAULT_TITLE = 'Tickets';
router.afterEach((to, from, next) => {
    Vue.nextTick(() => {
        document.title = "Tickets" || DEFAULT_TITLE;
    });

    next;
});

export default router;
