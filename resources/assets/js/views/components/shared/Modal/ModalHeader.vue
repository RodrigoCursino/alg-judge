<template>
    <div>

        <header class="modal-card-head">
            <p class="modal-card-title">{{title}}</p>
            <button class="delete" @click="hideModal"></button>
        </header>

    </div>
</template>

<style lang="scss" scoped="scoped">

</style>

<script>


    export default {


        props: {

            title: {required: true},
            form: {required: true},
        },

        data() {

            return {

                show: 'modal',

            }

        },

        mounted() {

        },

        methods: {

            submitForm() {

                window.EventBus.$emit('submitForm', this.form);

            },

            showModal() {

                this.show = 'modal is-active';

            },

            hideModal() {

                this.show = 'modal';

            }

        }
    }
</script>