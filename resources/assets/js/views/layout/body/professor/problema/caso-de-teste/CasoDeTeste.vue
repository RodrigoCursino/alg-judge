<template>
    <div class="container box">
        <div class="panel">
            <div class="panel-body">
                {{ pid }}
                <caso-list :casosDeTeste="casosDeTeste"></caso-list>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped="scoped">

</style>

<script>

    import http from 'axios';
    import CasoList from './caso-list';

    export default {

        props: {

        },

        components: {
            CasoList
        },

        data() {

            return {

                casosDeTeste: []

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
        },
    }

</script>