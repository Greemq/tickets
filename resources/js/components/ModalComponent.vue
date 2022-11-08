<template>
    <div v-if="isVisible&&form" class="dialog">
        <div class="h-100 content" style="text-align: center;background-color: rgba(0, 0, 0, 0.65);">
            <div class="row align-items-center justify-content-center h-100">
                <div class="col-sm-4 col-10 modal_card">
                    <div class="form-group">
                        <label for="email" style="float: left;color: black!important;">Аты-жөні</label>
                        <input type="text" class="form-control" id="email" :class="{error_field:errors.fio}"
                               placeholder="Аты-жөні" v-model="form.fio">
                    </div>
                    <div class="form-group">
                        <label for="email" style="float: left;color: black!important;">E-mail адресіңіз</label>
                        <input type="text" class="form-control" id="email" :class="{error_field:errors.email}"
                               placeholder="mail@mail.ru" v-model="form.email">
                    </div>

                    <div class="form-group">
                        <div class="btn btn-info" style="padding: 0 10px" @click="sendRequest">Жіберу</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="overlay" @click="hideModal"></div>
    </div>
</template>

<script>
export default {
    name: "ModalComponent",
    data() {
        return {
            isVisible: false,
            form: {},
            errors: []
        };
    },
    computed: {
        getForm() {
            return {
                email: '',
                fio: '',
            };
        }
    },
    methods: {
        showModal() {
            this.form = JSON.parse(JSON.stringify(this.getForm));
            this.isVisible = true;
        },
        hideModal() {
            this.isVisible = false;
            this.$emit('closed');
        },
        sendRequest() {
            axios.post('api/public/barcode/generate', this.form).then(res => {
                console.log(res);
            }).catch(err => {
                this.errors = err.response.data.data.errors;
            });
        }
    }
};
</script>

<style>

.error_field{
    border: 1px solid indianred;
}
.form-group {
    margin-bottom: 20px;
}

.form-group:last-child {
    margin-bottom: 0;
}

.dialog {
    left: 0px !important;
    top: 0px !important;
    height: 100vh;
    width: 100vw;
    position: fixed;
    margin: 0 !important;
    padding: 0 !important;
}

.overlay {
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    z-index: 99;
    background-color: black;
    opacity: 0.4;
}

.content {
    z-index: 101;
}

.modal_card {
    background-color: white;
    border-radius: 15px;
    padding: 20px;
    z-index: 100;
}
</style>
