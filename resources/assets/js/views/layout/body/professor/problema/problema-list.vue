<template>

    <div>
        <table class="table is-fullwidth">
            <thead>
            <tr>
                <th>Titúlo</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="problema in problemas">
                <td>{{problema.titulo}}</td>
                <td> <button class="button is-primary">DEL</button> </td>
                <td> <button class="button is-danger">DEL</button></td>
            </tr>

            </tbody>
        </table>
    </div>

</template>


<style lang="scss" scoped="scoped">

</style>

<script>

    import Problema from "../../../../../Model/Problema";
    import ProblemaDao from "../../../../../Dao/ProblemaDao";
    import http from 'axios';

    export default {

        data() {

            return {

                problemas: null,

            }

        },

        created() {

            this.getAll();

        },

        methods: {

            getAll() {

                http.get('http://localhost:8084/alg-judge/rest/problema/list/10').then(response => {

                    this.problemas = response.data;

                });

            },

            delete() {

                http.get('http://localhost:8084/alg-judge/rest/problema/list/10').then(response => {

                    this.problemas = response.data;

                });

            },

        },
    }

</script>