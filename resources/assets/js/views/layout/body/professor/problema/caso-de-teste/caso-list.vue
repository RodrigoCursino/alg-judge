<template>
    <div>
        <ul>
            <li v-for="caso in casosDeTeste">{{caso.entrada}}</li>
        </ul>
    </div>

</template>


<style lang="scss" scoped="scoped">

</style>

<script>

    import http from 'axios';

    export default {

        props: {
           // problemaId: {required: true}
        },

        components: {},

        data() {

            return {

                casosDeTeste: [],

            }

        },

        computed: {

            problemaId: function () {
                const self = this;
                http.get('http://localhost:8084/alg-judge/rest/casodeteste/listarcasos/21')
                    .then(response => {
                        self.casosDeTeste = response.data;
                        console.log('Casos De Teste',response.data);
                    });

            }


        },

        mounted() {

        },

        created() {

        },

        methods: {

            showMeCode() {

                console.log('Codigo Enter');

            },

        },
    }

</script>