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


            }

        }
    }
</script>