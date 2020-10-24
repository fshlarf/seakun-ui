<template>
    <div>
        <Header />
        <div class="customer container">
            <div class="row mb-3">
                <h4 class="col text-left font-weight-bold">Group Berlangganan</h4>
            </div>

            <div v-if="isLoading">
                <div class="row row-cols-1 row-cols-md-4">
                    <div class="col" v-for="(item, index) in shimmerInitialData" :key="index">
                        <CardShimmer />
                    </div>
                </div>
            </div>

            <div class="row row-cols-1 row-cols-md-4" v-if="customers.length > 0">
                <div class="col mb-4" v-for="(customer, index) in customers" :key="index">
                    <div :class="`card card-${setClassStatus(customer.names)}`" v-if="customer">
                        <div class="card-header">
                            <div class="card-header--title">
                                <h5>Group {{customer.group}}</h5>
                                <img :src="`/images/${customer.provider && customer.provider.toLowerCase()}.png`" alt="Netflix">
                            </div>
                            <div :class="`card-header--status ${setClassStatus(customer.names)}`">
                                {{ setStatus(customer.names) }}
                            </div>
                        </div>
                        <div class="card-content">
                            <ul>
                                <li v-for="(name,index) in customer.names" :key="index" :class="setClassUserName(name)">{{setName(name)}}</li>
                            </ul>
                            <div class="btn-container">
                                <a v-if="isButtonShow(customer.names)" class="btn btn-register btn-sm" @click="clickRegister">Daftar Sekarang</a>
                                <a v-else class="btn-register btn-sm">&nbsp;</a>
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
import Header from "~/components/mollecules/Header";
import CardShimmer from "~/components/mollecules/CardShimmer";
import Footer from "~/components/mollecules/Footer";
import CustomersGroupCard from "~/components/mollecules/CustomersGroupCard";

export default {
    components: {
        Header,
        Footer,
        CardShimmer,
        CustomersGroupCard
    },
    data() {
        return {
            customers: [],
            shimmerInitialData: Array(4),
            isLoading: false,
        };
    },
    mounted() {
        this.getCustomersData();
    },
    methods: {
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
        },
        setStatus(arrayNames) {
            return arrayNames.includes("") ? 'Available' : 'Full'
        },
        setClassStatus(arrayNames) {
            return arrayNames.includes("") ? 'Available' : 'Full'
        },
        isButtonShow(arrayNames) {
            return arrayNames.includes("") ? true : false
        },
        setName(name) {
            if (name == '') {
                return 'Slot Tersedia'
            } else {
                const regex = /(?!^)[\s\S](?!$)/g
                let arrayName = name.split(" ")
                let newArr = arrayName.map((e, i) => {
                    if (i == arrayName.length - 1) {
                        e = e.replace(regex, '*')
                        return e
                    } else {
                        return e
                    }
                })
                newArr = newArr.join(" ")
                return newArr
            }
        },
        setClassUserName(name) {
            return name == '' ? 'available-slot' : ''
        },
        clickRegister() {
            this.$router.push('/?regist=true')
        }
    },
};
</script>

<style lang="scss" scoped>
.customer {
    padding: 100px 0 40px !important;

    .card {
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
        border: none;

        &-header {
            background-color: white;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 16px 14px !important;
            &--title {
                display: block;
                h5 {
                    font-weight: 700;
                    font-size: 14px;
                }
                img {
                    max-width: 7rem;
                }
            }
            &--status {
                color: white;
                padding: 4px 16px !important;
                border-radius: 4px;
                font-size: .75rem;
            }
        }
        &-content {
            padding-top: 6px;
        }
        .Full {
            background-color:indianred;
        }
        .Available {
            background-color:green;
        }
        .available-slot {
            color: green !important;
            font-weight: 600;
        }
        .btn-container {
            padding: 8px 16px 16px;
        }
        .btn-register {
            background-color: white;
            border-color: green!important;
            color: green;
            width: 100%;
        }
    }
    ul, li {
        list-style: none;
        padding: 5px 8px;
        margin-bottom: 0!important;
    }
}
@media (max-width: 800px) {
    .customer {
        padding: 100px 10px 0px !important;

        .card {
        &-header {
            &--title {
                img {
                    max-width: 5rem;
                }
            }
            &--status {
                color: white;
                padding: 4px 16px !important;
                border-radius: 4px;
                font-size: .75rem;
            }
        }
    }
    }
}
</style>