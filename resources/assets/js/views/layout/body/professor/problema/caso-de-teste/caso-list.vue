<template>
    <div>
        <h1 class="has-text-centered">
            <strong>CASOS DE TESTE</strong>
            <hr>
        </h1>
        <table class="table is-hoverable">
            <thead>
            <tr>
                <th>Entrada(s)</th>
                <th>Exemplo</th>
                <th>Saída</th>
                <th>     </th>
                <th>     </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="casos in casosDeTeste">
                <td>{{casos.entrada}}</td>
                <td>{{saida(casos.exemplo)}}</td>
                <td>{{casos.saida}}</td>
                <td><a @click="edit(casos)" class="button is-primary">E</a></td>
                <td><a @click="deletarCaso(casos)" class="button is-danger">D</a></td>
            </tr>
            </tbody>
        </table>
    </div>

</template>


<style lang="scss" scoped="scoped">

    .list_casos {
        background-color: #00a5bb;
    }

</style>

<script>

    import http from 'axios';

    export default {

        props: {
            casosDeTeste: {required: true},
        },

        components: {},

        data() {

            return {


            }

        },

        computed: {

            loadCases: function () {

                const self = this;

                http.get('http://localhost:8084/alg-judge/rest/casodeteste/listarcasos/'+this.id)
                    .then(response => {
                        self.casosDeTeste = response.data;
                        console.log('Casos De Teste',response.data);
                    });
            },
        },

        mounted() {

        },

        created() {

        },

        methods: {

            showMeCode() {

                console.log('Codigo Enter');

            },

            saida(saida){

                if (saida) {
                    saida = "sim";
                } else {
                    saida = "não";
                }

                return saida;

            },

            edit(caso) {
                Bus.$emit('editCaso', caso);
            },

            deletarCaso(caso) {

                http.put('http://localhost:8084/alg-judge/rest/casodeteste/deletecasos',caso)
                    .then(response => {
                        window.location.reload();
                        console.log('Casos De Teste',response.data);
                    });
            }

        },
    }

</script>