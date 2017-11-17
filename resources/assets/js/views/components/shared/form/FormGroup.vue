<template>

    <div class="field">
        <label class="label">{{label}}</label>
        <div class="control">
           <slot></slot>
        </div>
        <p v-if="form.errors.has( field )" class="help is-danger">{{ form.errors.get(field) }}</p>
    </div>


</template>


<style lang="scss" scoped="scoped">

</style>

<script>
    export default {

        props: {

            form:{
                type: Object,
                required: true,
            },

            field:{
                type: String,
                required: true,
            },
        },

        computed: {
            label(){

                return this.field.toUpperCase();
            }

        }
    }

</script>