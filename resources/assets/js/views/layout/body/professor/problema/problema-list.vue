<template>

    <div class="bd-snippet-preview ">

        <table class="table">
            <thead>
            <tr>
                <th><abbr title="Position">Pos</abbr></th>
                <th>Team</th>
                <th><abbr title="Played">Pld</abbr></th>
                <th><abbr title="Won">W</abbr></th>
                <th><abbr title="Drawn">D</abbr></th>
                <th><abbr title="Lost">L</abbr></th>
                <th><abbr title="Goals for">GF</abbr></th>
                <th><abbr title="Goals against">GA</abbr></th>
                <th><abbr title="Goal difference">GD</abbr></th>
                <th><abbr title="Points">Pts</abbr></th>
                <th>Qualification or relegation</th>
            </tr>
            </thead>
            <tfoot>
            <tr>
                <th><abbr title="Position">Pos</abbr></th>
                <th>Team</th>
                <th><abbr title="Played">Pld</abbr></th>
                <th><abbr title="Won">W</abbr></th>
                <th><abbr title="Drawn">D</abbr></th>
                <th><abbr title="Lost">L</abbr></th>
                <th><abbr title="Goals for">GF</abbr></th>
                <th><abbr title="Goals against">GA</abbr></th>
                <th><abbr title="Goal difference">GD</abbr></th>
                <th><abbr title="Points">Pts</abbr></th>
                <th>Qualification or relegation</th>
            </tr>
            </tfoot>
            <tbody>
                <tr>
                    <td v-for="problema in problemas">{{p.titulo}}</td>
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


    export default {

        data(){

            return {

                problemas: null,

            }

        },

        created() {

           this.getAll();

        },

        methods: {

            getAll(){

               this.axios.get('http://localhost:8084/alg-judge/rest/problema/list/10').then(response => {

                   this.problemas = response.data;

               });

            },

        },
    }

</script>