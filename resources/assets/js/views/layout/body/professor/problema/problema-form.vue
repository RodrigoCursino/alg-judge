<template>

    <form-submit :form-request="problemaDao">

        <form-group :form="problema" field="titulo">
            <label class="label">Título</label>
            <input-text v-model="problema.titulo"></input-text>
        </form-group>

        <form-group :form="problema" field="descricao">
            <label class="label">Descrição</label>
            <vue-editor v-model="problema.descricao"></vue-editor>
        </form-group>

        <form-group :form="problema" field="descricaoEntrada">
            <label class="label">Descrição Entrada</label>
            <vue-editor v-model="problema.descricaoEntrada"></vue-editor>
        </form-group>

        <form-group :form="problema" field="descricaoSaida">
            <label class="label">Descrição Saída</label>
            <vue-editor v-model="problema.descricaoSaida"></vue-editor>
        </form-group>

    </form-submit>

</template>


<style lang="scss" scoped="scoped">

</style>

<script>
    import Problema from "../../../../../Model/Problema";
    import ProblemaDao from "../../../../../Dao/ProblemaDao";
    import {VueEditor} from 'vue2-editor';

    export default {

        components: {
            VueEditor
        },


        data() {

            return {

                problema: new Problema(),
                problemaDao: null,
            }
        },

        created() {

            this.problema = Problema.buildForm(this.problema);
            this.problemaDao = new ProblemaDao(this.problema);

        },

        mounted() {
            console.log('Component mounted.');
        },

        methods: {}
    }

</script>