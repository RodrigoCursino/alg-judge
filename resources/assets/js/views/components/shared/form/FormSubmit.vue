<template>
    <div>
        <form>
            <input type="hidden" :value="abc.id"/>
            <slot></slot>
            <hr>
            <a @click="submit" class="button is-primary">Salvar</a>
        </form>
    </div>
</template>


<style lang="scss" scoped="scoped">

</style>

<script>
    export default {

        props: {

            abc:{
                type: Object,
                required: true,
            },

        },

        methods:{

            submit() {
                if(this.abc.id) {
                    this.abc.updateForm();
                } else {
                    debugger;
                    this.abc.submitForm();
                }

            }

        }
    }
</script>