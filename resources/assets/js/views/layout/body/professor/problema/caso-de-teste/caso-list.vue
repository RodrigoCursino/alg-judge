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