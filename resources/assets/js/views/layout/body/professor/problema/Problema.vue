<template>

    <div class="container box">
        <div class="panel">
            <div class="panel-body">
                <problema-form></problema-form>
            </div>
        </div>
    </div>

</template>


<style lang="scss" scoped="scoped">

    .box {

        background-color: white;
        padding: 40px 80px 30px 80px;
    }

    .container {
        margin-bottom: 25px;
    }


</style>


<script>

    import ProblemaForm from './problema-form';
    import ProblemaList from './problema-list';

    export default {

        components: {
            ProblemaForm,
            ProblemaList
        },

    }
</script>
