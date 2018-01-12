<template>
    <div>
        <div :class="show">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">{{title}}</p>
                    <button class="delete" @click="hideModal"></button>
                </header>
                <section class="modal-card-body">
                    <slot name="body"></slot>
                </section>
                <footer class="modal-card-foot">
                    <slot name="footer"></slot>
                </footer>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped="scoped">

</style>

<script>


    export default {


        props: {

            title: {required: true},
        },

        data(){

            return {

                show: 'modal',

            }

        },

        mounted(){

        },

        methods: {


            showModal() {

                this.show = 'modal is-active';

            },

            hideModal() {

                this.show = 'modal';

            }

        }
    }
</script>