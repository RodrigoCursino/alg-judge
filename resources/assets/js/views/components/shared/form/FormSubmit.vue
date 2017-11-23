<template>
    <div>
        <form>
            <input type="hidden" :value="formRequest.id"/>
            <slot></slot>
            <hr>
            <a @click="submit" class="button is-primary">Salvar</a>
        </form>
    </div>
</template>


<style lang="scss" scoped="scoped">

</style>

<script>

    import Problema from '../../../../Model/Problema'

    export default {


        props: {

            formRequest: {
                type: Object,
                required: true,
            },

        },

        methods: {

            submit() {
                if (this.formRequest.id) {
                    this.formRequest.updateForm();
                } else {
                    const data = {
                        id: null,
                        titulo: 'teste',
                        descricao: 'teste',
                        delete: 'teste',
                        descricaoEntrada: 'teste',
                        descricaoSaida: 'teste',
                    };

                    axios.get('http://localhost:8084/alg-judge/rest/problema/list/10').then(response => {
                        console.log('saved', response);
                    });
                }

            }

        }
    }
</script>