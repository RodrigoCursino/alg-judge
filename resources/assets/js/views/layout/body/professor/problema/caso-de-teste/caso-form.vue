<template>
    <div>

        {{editCaso}}

        <div>
            <!-- Entrada -->
            <h1 class="has-text-black">
                <strong>
                    Descrição do Entrada
                </strong>
            </h1>
            <div v-html="problema.descricaoEntrada"></div>

            <!-- Descrição -->
            <h1 class="has-text-black">
                <strong>
                    Descrição do Problema
                </strong>
            </h1>
            <div v-html="problema.descricao"></div>

            <!-- Saída -->
            <h1 class="has-text-black">
                <strong>
                    Descrição de Saída
                </strong>
            </h1>
            <div v-html="problema.descricaoSaida"></div>

        </div>

        <hr>
        <h1 class="has-text-centered"><strong>ADICIONE UM NOVO CASO DE TESTE</strong></h1>
        <hr>
        <form>

            <input-hidden v-model="casoDeTeste.id"></input-hidden>

            <form-group :form="casoDeTeste" field="saida">
                <label class="label">Saída</label>
                <input-text v-model="casoDeTeste.saida"></input-text>
            </form-group>

            <!-- Adicionar casos de entrada -->
            <div>
                <label class="label">Entrada</label>
                <input-hidden v-model="casoDeTeste.id"></input-hidden>
                <div class="columns">
                    <div class="column is-four-fifths">
                        <input-text v-model="caso"></input-text>
                    </div>
                    <div class="column">
                        <a @click="addEntrada(caso)" class="button is-success add_entrada"><strong>+</strong>Entrada</a>
                    </div>
                </div>
                <span v-if="entradas.length > 0"><strong
                        class="msg_alert">*** clique sobre a entrada para deletar ***</strong></span>
                <div v-if="entradas.length > 0" class="buttons background_entrada">
                    <a v-for="entrada in entradas" @click="delEntrada(entrada)"
                       class="button entrada_hover">{{entrada}}</a>
                </div>
            </div>


            <form-group class="my_margin" :form="casoDeTeste" field="exemplo">
                <label class="label">Exemplo</label>
                <toggle-button
                        v-model="casoDeTeste.exemplo"
                        @change=""
                        :value="false"
                        :sync="true"
                        :labels="true"
                />
            </form-group>

            <hr>

            <div>
                <a @click="salvar()" class="button is-success">Salvar</a>
            </div>

        </form>
    </div>
</template>


<style lang="scss" scoped="scoped">

    .add_entrada {

        font-size: 1em;

    }

    .add_entrada > strong {

        margin-right: 5px;

    }

    .msg_alert {
        color: #77797a;
        font-size: 0.8em;
    }

    .my_margin {
        margin-top: 15px;
    }

    .background_entrada {
        background-color: #efefef;
        padding: 0.5rem 0.5rem 0.0rem 0.5rem;
        border-radius: 10px;
    }

</style>

<script>

    import CasoDeTeste from "../../../../../../Model/CasoDeTeste";
    import CasoDeTesteDao from "../../../../../../Dao/CasoDeTesteDao";
    import ProblemaDao from "../../../../../../Dao/ProblemaDao";
    import http from 'axios';

    export default {


        props: {problema: {required: true}},

        components: {},

        computed: {

            editCaso(){

                let self = this;

                Bus.$on('editCaso', function (caso) {

                   self.casoDeTeste = CasoDeTeste.buildForm(caso);
                   self.entradas = self.getEntradas(caso.entrada);

                });
            }

        },

        data() {

            return {

                casoDeTeste: new CasoDeTeste(),
                caso: '',
                entradas: [],

            }

        },

        mounted() {


        },

        created() {
            this.casoDeTeste = CasoDeTeste.buildForm(this.casoDeTeste);
            this.casoDeTeste.exemplo = false;
        },

        methods: {

            salvar() {

                this.casoDeTeste.entrada = '';

                for (var entrada in this.entradas) {

                    if (entrada < this.entradas.length - 1) {
                        this.casoDeTeste.entrada += this.entradas[entrada] + "\n";
                    } else {
                        this.casoDeTeste.entrada += this.entradas[entrada];
                    }
                }

                this.casoDeTeste.problema = ProblemaDao.submitForm(this.problema);
                this.salvarCasoDeTeste(this.casoDeTeste);
                this.clean();
            },

            salvarCasoDeTeste(casoDeTeste){

                let data = CasoDeTesteDao.submitForm(casoDeTeste);

                if(data.id == 0) {

                    http.post('http://localhost:8084/alg-judge/rest/casodeteste',data)
                        .then(response => {
                            console.log('Casos De Teste Salvo');
                            location.reload();
                        });

                } else {

                    debugger;
                    http.put('http://localhost:8084/alg-judge/rest/casodeteste',data)
                        .then(response => {
                            console.log('Casos De Teste Salvo');
                            location.reload();
                        });

                }

            },

            clean() {

                this.entradas = [];
                this.casoDeTeste = new CasoDeTeste();
                this.casoDeTeste = CasoDeTeste.buildForm(this.casoDeTeste);
            },

            addEntrada(entrada) {
                this.entradas.push(entrada);
                this.caso = '';
            },

            delEntrada(entrada) {
                this.entradas.splice(this.findIndex(entrada), 1);
            },

            findIndex(index) {
                return this.entradas.findIndex((_entrada) => {
                    return _entrada === index;
                });
            },

            getEntradas(entrada){

                return entrada.split('\n');
            },

        },
    }

</script>