import {requireAuth} from "./router-guards";

export default [
    {
        path: '',
        name: 'main',
        props: false,
        component: () => import('./../components/Main')

    },
    {
        path: 'tickets',
        name: 'tickets',
        props: false,
        beforeRouteEnter: requireAuth,
        component: () => import('./../components/Tickets/List'),
    },
    {
        path: 'login',
        name: 'login',
        props: false,
        component: () => import('./../components/Tickets/Login'),
    },


];
