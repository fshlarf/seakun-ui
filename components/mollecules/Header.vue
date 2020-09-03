<template>
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
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
        </div>
    </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navbar {
    background-color: #86d0c1 !important;
    border-bottom: 1px solid #eeeeee;
    box-shadow: 0px 0px 16px #dddddd;
    position: fixed;
    width: 100%;
    z-index: 100;

    .navbar-brand {
        cursor: pointer;
        span {
            color: #ffffff;
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