<template>
    <div class="container box">
        <div class="panel">
            <div class="panel-body">
                <nav class="level">
                    <!-- Left side -->
                    <div class="level-left">
                        <div class="level-item">
                            <p class="subtitle is-5">
                                <strong>Problema : {{problema.titulo}}</strong>
                            </p>
                        </div>
                    </div>

                    <!-- Right side -->
                    <div class="level-right">
                        <p class="level-item"><a class="button is-success">Voltar</a></p>
                    </div>
                </nav>
                <hr>
                <div class="columns">
                    <div class="column is-three-fifths" style="padding: 25px">
                        <caso-form :problema="problema"></caso-form>
                    </div>
                    <div class="column auto">
                        {{ pid }}
                        <caso-list :problema="problema" :casosDeTeste="casosDeTeste"></caso-list>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped="scoped">

</style>

<script>

    import http from 'axios';
    import CasoList from './caso-list';
    import CasoForm from "./caso-form";

    export default {

        props: {

        },

        components: {
            CasoForm,
            CasoList
        },

        data() {

            return {

                casosDeTeste: [],
                problema: []

            }

        },

        mounted() {

        },

        computed: {

            pid() {

                const self = this;
                http.get('http://localhost:8084/alg-judge/rest/casodeteste/listarcasos/'+self.$route.params.pid)
                    .then(response => {
                        self.casosDeTeste = response.data;
                        this.searchProblem(self.$route.params.pid);
                        return self.casosDeTeste;
                });

            }

        },

        created() {

        },

        methods: {

            showMeCode(){

              console.log('Codigo Enter');

            },

            searchProblem(id) {

                http.get('http://localhost:8084/alg-judge/rest/problema/' + id).then(response => {
                    this.problema = response.data;
                    console.log('Get Problema', response.data.titulo);
                });
            }
        },
    }

</script>