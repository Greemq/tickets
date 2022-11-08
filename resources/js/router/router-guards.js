import store from "./../store";

export const requireAuth = (to, from, next) => {
    console.log(store.state.auth.authorized);
    if (store.state.auth.authorized) {
        next();
    } else {
        next({name: 'login', query: {from: to.name}});
    }
};
