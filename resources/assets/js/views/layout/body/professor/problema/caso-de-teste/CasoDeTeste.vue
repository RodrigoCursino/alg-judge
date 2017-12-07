<template>
    <div class="container box">
        <div class="panel">
            <div class="panel-body">
                <caso-list :problema-id="pid"></caso-list>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped="scoped">

</style>

<script>

    import CasoList from './caso-list';

    export default {

        props: {
            pid:{required:true},
        },

        components: {
            CasoList
        },

        computed: {},

        data() {

            return {

               casoDeTeste

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