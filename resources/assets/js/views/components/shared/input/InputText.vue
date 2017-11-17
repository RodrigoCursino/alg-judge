<template>

    <div class="control">
        <input class="input" v-model="internalValue" v-bind:value="value" :name="name">
    </div>

</template>


<style lang="scss" scoped="scoped">

</style>

<script>
    export default {

       mixins: [require('../Mixins/Model')]
    }

</script>