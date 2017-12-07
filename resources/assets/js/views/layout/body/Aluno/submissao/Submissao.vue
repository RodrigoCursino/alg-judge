<template>

    <div>
        <textarea v-model="codigo" @keypress.enter="showMeCode">

        </textarea>
    </div>

</template>


<style lang="scss" scoped="scoped">

</style>

<script>
    export default {

        props: {},

        components: {},

        computed: {},

        data() {

            return {

                codigo: null,
                codigoForm: '',

            }

        },

        mounted() {

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