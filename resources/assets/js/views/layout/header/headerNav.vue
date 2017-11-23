<template>
    <nav class="tabs is-boxed">
        <div class="container">
            <ul>

                <router-link tag="li" to="/" exact>
                    <a>Home</a>
                </router-link>


                <router-link tag="li" to="/problema">
                    <a>Problema</a>
                </router-link>


                <router-link tag="li" to="/alunos">
                    <a>Alunos</a>
                </router-link>


                <router-link tag="li" to="/configuracao">
                    <a>Configurações</a>
                </router-link>

            </ul>
        </div>
    </nav>
</template>
<script>

    export default {


    }

</script>