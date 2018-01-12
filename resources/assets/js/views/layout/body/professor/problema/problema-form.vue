<template>

    <modal-form ref="modal" title="Edit Problema">

        <div slot="body">

            <input-hidden v-model="problema.id"></input-hidden>

            <form-group :form="problema" field="titulo">
                <label class="label">Título</label>
                <input-text v-model="problema.titulo"></input-text>
            </form-group>

            <form-group :form="problema" field="descricao">
                <label class="label">Descrição</label>
                <vue-editor id="descricao" v-model="problema.descricao"></vue-editor>
            </form-group>

            <form-group :form="problema" field="descricaoEntrada">
                <label class="label">Descrição Entrada</label>
                <vue-editor id="descricaoEntrada" v-model="problema.descricaoEntrada"></vue-editor>
            </form-group>

            <form-group :form="problema" field="descricaoSaida">
                <label class="label">Descrição Saída</label>
                <vue-editor id="descricaoSaida" v-model="problema.descricaoSaida"></vue-editor>
            </form-group>

        </div>

        <div slot="footer">
            <button @click="saveProblema(problema)" class="button is-success">Salvar</button>
            <button @click="hideModal" class="button">Cancel</button>
        </div>

    </modal-form>

</template>


<style lang="scss" scoped="scoped">

</style>

<script>

    import Problema from "../../../../../Model/Problema";
    import ProblemaDao from "../../../../../Dao/ProblemaDao";
    import {VueEditor} from 'vue2-editor';
    import http from 'axios';

    export default {

        components: {
            VueEditor,
        },

        props: {

            form: {required: false},

        },

        data() {

            return {

                problema: new Problema(),
                problemaDao: null,
            }
        },

        created() {
            this.problema = Problema.buildForm(this.problema);
        },

        watch: {
            form: function () {
                if (this.form) {
                    this.problema = Problema.buildForm(this.form);
                }
            }
        },

        methods: {

            saveProblema(problema) {

                const data = ProblemaDao.submitForm(problema);

                if (data.id) {

                    http.put('http://localhost:8084/alg-judge/rest/problema', problema).then(response => {
                        this.$refs.modal.hideModal();
                    });

                } else {

                    http.post('http://localhost:8084/alg-judge/rest/problema', data).then(response => {
                        console.log('saved', response);
                        this.$refs.modal.hideModal();
                    });
                };

            },

            hideModal() {

                this.$refs.modal.hideModal();
            },

            showModal() {

                this.$refs.modal.showModal();
            }

        }
    }

</script>