<template>
    <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand">Seakun.id</a>
        <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="mr-auto"></div>
            <ul class="row navbar-nav">
                <li class="nav-item">
                    <nuxt-link class="nav-link" to='/'>Home</nuxt-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navbar {
    padding: 0.5rem 17.5rem !important;
    background-color: #86d0c1!important;
}
@media (max-width: 800px) {
    .navbar {
        padding: 16px !important;
        display: flex;
        justify-content: space-between;
        flex-wrap: unset;
        a {
            text-align: left;
        }
        .navbar-collapse {
            display: block;
            flex-basis: unset;
            flex-grow: unset;
            margin-right: 14px;
        }
        .navbar-toggler {
            display: none!important;
        } 
    }
}
</style>