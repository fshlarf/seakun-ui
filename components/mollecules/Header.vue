<template>
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
            <div class="navbar-header">
                <nuxt-link class="navbar-brand" to="/">
                    <img
                        src="/images/seakunid.png"
                        width="30"
                        height="30"
                        alt="image not found"
                        class="d-inline-block align-top"
                    />
                    <span>Seakun.id</span>
                </nuxt-link>
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
            </div>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="mr-auto"></div>
                <ul class="row navbar-nav">
                    <li class="nav-item" v-for="(menu, index) in menus" :key="index">
                        <nuxt-link class="nav-link" :to="menu.path">{{ menu.title }}</nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    props: {
        menus: Array,
    },
};
</script>

<style lang="scss" scoped>
.navbar {
    background-color: #ffffff !important;
    border-bottom: 1px solid #eeeeee;
    box-shadow: 0px 0px 16px #dddddd;
    position: fixed;
    width: 100%;
    z-index: 100;

    .navbar-brand {
        cursor: pointer;
        span {
            color: #000000;
            font-weight: 700;
        }
    }
}
@media (max-width: 800px) {
    .navbar {
        position: fixed;
        width: 100%;
        z-index: 100;

        .navbar-collapse {
            display: block;
            flex-basis: unset;
            flex-grow: unset;
            margin-right: 14px;
        }
        .navbar-toggler {
            display: none !important;
        }
    }
}
</style>