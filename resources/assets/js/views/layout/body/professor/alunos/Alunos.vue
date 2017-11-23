<template>

    <div class="container box">
        <div class="panel">
            <div class="panel-body">
                <aluno-form></aluno-form>
            </div>
        </div>
    </div>

</template>


<style lang="scss" scoped="scoped">

    .box {

        background-color: white;
        padding: 40px 80px 30px 80px;
    }


</style>


<script>

    import AlunoForm from './aluno-form';

    export default {

        components: {
            AlunoForm
        },

    }
</script>
