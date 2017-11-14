<template>
    <section class="hero is-primary is-medium">
        <!-- Hero head: will stick at the top -->
        <div class="hero-head">
            <nav class="navbar">
                <div class="container">
                    <div class="navbar-brand">
                        <a class="navbar-item">
                            <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">
                        </a>
                        <span class="navbar-burger burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
                    </div>
                    <div id="navbarMenuHeroA" class="navbar-menu">
                        <div class="navbar-end">
                            <a class="navbar-item is-active">
                                Home
                            </a>
                            <a class="navbar-item">
                                Examples
                            </a>
                            <a class="navbar-item">
                                Documentation
                            </a>
                            <div class="dropdown is-active">
                                <div class="dropdown-trigger">
                                    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                                        <span>Dropdown button</span>
                                        <span class="icon is-small">
        <i class="fa fa-angle-down" aria-hidden="true"></i>
      </span>
                                    </button>
                                </div>
                                <div class="dropdown-menu" id="dropdown-menu" role="menu">
                                    <div class="dropdown-content">
                                        <a href="#" class="dropdown-item">
                                            Dropdown item
                                        </a>
                                        <a class="dropdown-item">
                                            Other dropdown item
                                        </a>
                                        <a href="#" class="dropdown-item is-active">
                                            Active dropdown item
                                        </a>
                                        <a href="#" class="dropdown-item">
                                            Other dropdown item
                                        </a>
                                        <hr class="dropdown-divider">
                                        <a href="#" class="dropdown-item">
                                            With a divider
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

        <!-- Hero content: will be in the middle -->
        <div class="hero-body">
            <div class="container has-text-centered">
                <h1 class="title">
                    ALG JUDGE
                </h1>
                <h2 class="subtitle">
                    seu juiz em portugol.
                </h2>
            </div>
        </div>

        <!-- Hero footer: will stick at the bottom -->
        <div class="hero-foot">
            <header-nav></header-nav>
        </div>
    </section>
</template>
<script>

    import HeaderNav from './headerNav';

    export default {

       components:{
           HeaderNav,
       }

    }

</script>