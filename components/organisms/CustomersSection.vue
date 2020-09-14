<template>
    <div id="customers">
        <div class="customers" v-if="customers.length > 0">
            <Title title="Pengguna Seakun.id" />
            <div class="customers__content">
                <div class="customers__content--carousell scroll" id="content">
                    <div v-for="(customer, index) in customers" :key="index">
                        <CustomersGroupCard :dataCustomer="customer" />
                    </div>
                </div>
                <div class="customers__content--chevron" @click="slideRight">
                    <span class="is-desktop">Selengkapnya</span>
                    <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        class="bi bi-chevron-right"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CustomersGroupCard from "~/components/mollecules/CustomersGroupCard";
import Title from "~/components/atoms/Title";
import axios from "axios";

export default {
    components: {
        CustomersGroupCard,
        Title,
    },
    data() {
        return {
            customers: [],
        };
    },
    mounted() {
        this.getCustomersData();
    },
    methods: {
        slideRight() {
            this.$router.push('/info/customers')
        },
        getCustomersData() {
            axios
                .get("https://seakun-api.herokuapp.com/registered-user/group")
                .then((res) => this.processDataCustomers(res.data))
                .catch((err) => console.log(err));
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
            const nArr = theArr.slice(theArr.length-3, theArr.length-0).sort().reverse()
            this.customers = nArr;
        },
    },
};
</script>

<style lang="scss" scoped>
.customers {
    padding: 80px 10rem 10px 10rem;
    &__heading {
        text-align: center;
        margin-bottom: 30px;
        h4 {
            font-weight: 800 !important;
        }
    }
    &__content {
        display: flex;
        align-items: center;
        justify-content: center;
        &--carousell {
            display: flex;
            justify-content: space-between;
            overflow-x: scroll;
            height: 24rem !important;
            padding-top: 30px;
        }
        &--chevron {
            cursor: pointer;
            padding: 20px;
            background-color:rgba(221, 221, 221, 0.088);
            border-radius: 10px;
            &:hover {
                background-color:#86d0c1;
                color: #ffffff;
            }
        }
    }
}
.scroll {
    overflow-y: scroll;
    scrollbar-color: #408374 #eeeeee;
    scrollbar-width: unset;
    scroll-behavior: smooth;
}
.scroll::-webkit-scrollbar {
    width: 0px !important;
}
.scroll::-webkit-scrollbar-track {
    border-radius: 10px;
}
.scroll::-webkit-scrollbar-thumb {
    background: white;
    border-radius: 10px;
}
.scroll::-webkit-scrollbar-thumb:hover {
    background: white;
}
@media (max-width: 800px) {
    .customers {
        padding: 80px 4px 0px 4px;
        .is-desktop {
            display: none;
        }
        &__heading {
            margin-bottom: 0px;
        }
        &__content {
            &--carousell {
                height: 20rem !important;
                padding: 16px 10px 0px 16px;
            }
            &--chevron {
                padding: 8px;
                margin: 0px 16px !important;
            }
        }
    }
}
</style>