<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container">
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
                class="navbar-toggler collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-expanded="false"
                aria-controls="navbarSupportedContent"
                aria-label="Toggle navigation"
            >
                <span class="sr-only">Toggle Navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="mr-auto"></div>
                <ul class="nav navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" @click="toServiceElement">Layanan</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" @click="toRegistrationElement">Daftar</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            regElement: "",
            serviceElement: "",
        };
    },
    mounted() {
        this.regElement = document.getElementById("reg");
        this.serviceElement = document.getElementById("facility");
    },
    methods: {
        toRegistrationElement() {
            this.regElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
            });
        },
        toServiceElement() {
            this.serviceElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.navbar {
    background-color: #86d0c1 !important;
    box-shadow: 0px 0px 16px #dddddd;
    position: fixed;
    width: 100%;
    z-index: 100;

    .nav-link {
        font-weight: 700;
        color: #ffffff;

        &:hover {
            cursor: pointer;
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 4px;
        }
    }

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

        .navbar-link {
            padding-left: 20px;
        }

        .navbar-toggler {
            background-color: transparent !important;
            border-radius: 2px !important;
            border: 1px solid #ffffff;

            span {
                &.icon-bar {
                    display: block;
                    width: 14px;
                    height: 2px;
                    border-radius: 1px;
                    background: #ffffff;
                    margin: 2px 0px;
                }
            }
        }
    }
}
</style>