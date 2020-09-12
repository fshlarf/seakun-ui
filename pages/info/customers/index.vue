<template>
    <div>
        <Header />
        <div class="customer container">
            <Title title="Pengguna Seakun.id" />

            <div v-if="isLoading">
                <div class="row row-cols-1 row-cols-md-3 mt-5">
                    <div class="col mb-4" v-for="(item, index) in shimmerInitialData" :key="index">
                        <CardShimmer />
                    </div>
                </div>
            </div>

            <div class="row row-cols-1 row-cols-md-3 mt-5" v-if="customers.length > 0">
                <div class="col mb-4" v-for="(customer, index) in customers" :key="index">
                    <div class="card">
                        <div class="card-body">
                            <div class="row justify-content-between align-items-center mb-3">
                                <div class="col-4">
                                    <h5 class="card-title">{{ `Group ${customer.group}` }}</h5>
                                </div>
                                <div class="col-4">
                                    <img
                                        :src="`/images/${customer.provider && customer.provider.toLowerCase()}.png`"
                                        alt="image not found"
                                        class="img-logo"
                                    />
                                </div>
                            </div>
                            <p class="card-text">
                                Mulai Berlangganan {{ customer.startDate }}
                            </p>
                            <div class="card-text">
                                <div class="row justify-content-between align-items-center">
                                    <div
                                        :class="customer.provider.toLowerCase() === 'netflix' ? 'col-6' : 'col-5'"
                                    >
                                        <span
                                            :class="`group-status ${setGroupClassStatus(customer.names)}`"
                                        >{{ setGroupStatus(customer.names) }}</span>
                                    </div>
                                    <div
                                        :class="customer.provider.toLowerCase() === 'netflix' ? 'col-6' : 'col-7'"
                                    >
                                        <div class="row">
                                            <div
                                                v-for="(name, index) in customer.names"
                                                :key="index"
                                                :class="`img-rounded ${setClassUserName(name)}`"
                                            >{{ setName(name) }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import axios from "axios";
import Title from "~/components/atoms/Title";
import Header from "~/components/mollecules/Header";
import CardShimmer from "~/components/mollecules/CardShimmer";
import Footer from "~/components/organisms/Footer";

export default {
    components: {
        Header,
        Footer,
        CardShimmer,
        Title,
    },
    data() {
        return {
            customers: [],
            shimmerInitialData: Array(6),
            isLoading: false,
        };
    },
    mounted() {
        this.getCustomersData();
    },
    methods: {
        setGroupStatus(arrNames) {
            return arrNames.includes("") ? "Available" : "Full";
        },
        setGroupClassStatus(arrNames) {
            return arrNames.includes("") ? "is-available" : "is-full";
        },
        getInitialName(string) {
            let names = string.split(" ");
            let initials = names[0].substring(0, 1).toUpperCase();

            if (names.length > 1) {
                initials += names[names.length - 1]
                    .substring(0, 1)
                    .toUpperCase();
            }

            return initials;
        },
        setName(name) {
            if (name === "") return "+";
            else return this.getInitialName(name);
        },
        setClassUserName(name) {
            return name === "" ? "is-empty" : "";
        },
        getCustomersData() {
            this.isLoading = true;
            axios
                .get("https://seakun-api.herokuapp.com/registered-user/group")
                .then((res) => this.processDataCustomers(res.data))
                .catch((err) => console.log(err))
                .finally(() => (this.isLoading = false));
        },
        processDataCustomers(customers) {
            let newArr = [];
            let theArr = [];

            customers &&
                customers.map((e, i) => {
                    newArr.push(e.group);
                    theArr[parseInt(e.group) - 1] = {
                        group: parseInt(e.group),
                        names: [],
                        provider: e.provider,
                        startDate: e.start_date,
                    };
                });
            customers &&
                customers.map((e, i) => {
                    if (newArr.includes(e.group)) {
                        theArr[parseInt(e.group) - 1].names.push(
                            e.customer_name
                        );
                    }
                });

            theArr.sort().reverse();
            this.customers = theArr;
            console.log(this.customers);
        },
    },
};
</script>

<style lang="scss" scoped>
.customer {
    padding: 100px 0 40px !important;

    .card-title {
        font-size: 1.25rem;
    }

    .group-status {
        border-radius: 4px;
        padding: 4px 12px;

        &.is-available {
            background-color: green;
            color: #ffffff;
        }
        &.is-full {
            background-color: indianred;
            color: #ffffff;
        }
    }

    .img-logo {
        max-width: 5rem;
    }

    .img-rounded {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #86d0c1;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;

        // &:hover {
        //     cursor: pointer;
        //     background-color: gray;
        // }

        &.is-empty {
            font-size: 32px;
            color: gray;
            background-color: white;
            border: 1px solid gray;
        }
    }
}
@media (max-width: 800px) {
    .customer {
        padding: 100px 10px 0px !important;

        .card-title {
            font-size: 1rem;
        }
    }
}
@keyframes fullView {
    100% {
        width: 100%;
    }
}
@keyframes shimmer {
    0% {
        background-position: -1000px 0;
    }
    100% {
        background-position: 1000px 0;
    }
}
</style>