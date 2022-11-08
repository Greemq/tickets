<template>
    <div class="wrapper" style="min-height: 100vh">
        <div class="content">
            <div class="container h-100" style="text-align: center">
                <div class="row align-items-center justify-content-center h-100">
                    <div class="col-4">
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="text" class="form-control" id="email" :class="{error_fields:errors}"
                                   placeholder="mail@mail.ru" v-model="email">
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" class="form-control" id="password" v-model="password" :class="{error_fields:errors}"
                                   placeholder="password">
                        </div>
                        <div class="form-group">
                            <button class="btn btn-primary" @click="logIn" :disabled="loading">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import store from "../../store";
import {LS_USERS, LS_TOKEN} from "../../_types";
import {AUTH, RESET} from "../../_types/store-types";

export default {
    name: "Login",
    data() {
        return {
            email: '',
            password: '',
            loading: false,
            errors: false
        };
    },
    methods: {
        logIn() {
            this.errors = false;
            this.loading = true;
            let form = {
                email: this.email,
                password: this.password
            };
            axios.post('/api/auth/login', form).then(res => {
                this.setAuthorization(res.data.token);
                this.$nextTick(() => {
                    this.$router.push({name: 'tickets'});
                });
                this.loading = false;
            }).catch(() => {
                this.errors = true;
                this.loading = false;
            });
        },
        setAuthorization(token) {
            const authdata = window.btoa(this.email + ':' + encodeURIComponent(this.password));
            localStorage.setItem(LS_USERS, JSON.stringify(authdata));
            localStorage.setItem(LS_TOKEN, token);
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
            store.commit(AUTH + RESET);
        }
    },

}
;
</script>

<style>
.error_fields{
    border: 1px solid red;
}
.wrapper {
    display: flex;
}

.content {
    width: 100%;

}

.form-group {
    margin-bottom: 20px;
}
</style>
