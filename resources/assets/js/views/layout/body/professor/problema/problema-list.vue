<template>

  <div>
    <table class="table is-fullwidth">
      <thead>
      <tr>
        <th>Titúlo</th>
        <th>Edit</th>
        <th>Delete</th>
        <th>Add Caso de Teste</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="problema in problemas">
        <td>{{problema.titulo}}</td>
        <td>
          <button @click="getProblema(problema.id)" class="button is-primary">Edit</button>
        </td>
        <td>
          <button @click="deleteProblema(problema.id)" class="button is-danger">DEL</button>
        </td>
        <td>
          <button @click="addCasoDeTeste(problema.id)" class="button is-success">Add Caso de Teste</button>
        </td>
      </tr>
      </tbody>
    </table>
    <button class="button is-success" @click="novoProblema">Add Problema</button>
    <problema-form ref="problema" :form="problema"></problema-form>
  </div>

</template>


<style lang="scss" scoped="scoped">
</style>

<script>
    import Problema from "../../../../../Model/Problema";
    import ProblemaForm from './problema-form';
    import http from 'axios';
    export default {
        components: {ProblemaForm},
        data() {
            return {
                problemas: [],
                problema: null,
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
            addCasoDeTeste(id){
                console.log('Rota',this.$router.replace('/problema/caso-de-teste/'+id));
            },
            getProblema(id) {
                http.get('http://localhost:8084/alg-judge/rest/problema/' + id).then(response => {
                    this.problema = response.data;
                    this.showForm();
                    console.log('Get Problema', response);
                });
            },
            deleteProblema(id) {
                http.put('http://localhost:8084/alg-judge/rest/problema/delete/' + id).then(response => {
                    this.getAll();
                });
            },
            novoProblema(){
                let data = {};
                this.problema = Problema.buildForm(data);
                this.showForm();
            },
            showForm() {
                this.$refs.problema.showModal();
            },
        },
    }
</script>