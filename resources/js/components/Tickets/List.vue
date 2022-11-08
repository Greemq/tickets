<template>
    <div class="wrapper" style="min-height: 100vh">
        <div class="content">
            <div class="container">
                <div class="row justify-content-center" style="padding: 30px 0">
                    <div class="col-4">
                        <input type="text" class="form-control" placeholder="Поиск" v-model="search"
                               @input="pendingSearch"
                               :disabled="loading">
                    </div>
                </div>
                <div v-if="total!=null">
                    Всего записей: {{ total }}
                </div>
                <table class="table table-striped col-12">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Code</th>
                        <th scope="col">barcode</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item,index) in list">
                        <th scope="row">{{ index + 1 }}</th>
                        <td>{{ item.email }}</td>
                        <td>{{ item.phone }}</td>
                        <td>{{ item.code }}</td>
                        <td>
                            <img :src="'data:image/png;base64, '+item.barcode " alt="Red dot"
                                 style="max-height: 100px!important;"/>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div class="row justify-content-center" style="padding: 20px 0">
                    <div class="col-2" v-if="last_page!=null&&last_page>page">
                        <button class="btn btn-info btn-md" @click="loadMore" :disabled="loading"
                                style="color: white!important;">Загрузить еще
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import store from "../../store";

export default {
    name: "List",
    data() {
        return {
            list: [],
            search: '',
            page: 1,
            total: null,
            last_page: null,
            loading: false

        };
    },
    mounted() {
        this.getTickets();
        console.log(store.state.auth)
    },
    methods: {
        loadMore() {
            ++this.page;
            this.getTickets();
        },
        pendingSearch() {
            if (this.timer) {
                clearTimeout(this.timer);
                this.timer = null;
            }
            this.timer = setTimeout(() => {
                this.list = [];
                this.page = 1;
                this.total = null;
                this.getTickets();
            }, 1000);

        },
        getTickets() {
            this.loading = true;
            let form = {
                email: this.search,
                page: this.page
            };
            axios.get('/api/tickets', {params: form})
                .then(res => {
                    this.total = res.data.total;
                    this.last_page = res.data.last_page;
                    this.loading = false;
                    this.list = this.list.concat(res.data.data);
                    this.loading = false;
                }).catch(err => {
                this.loading = false;
            });
        }
    }
};
</script>

<style>

.wrapper {
    display: flex;
}

.content {
    width: 100%;

}
</style>
