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
                    <CustomersGroupCard :dataCustomer="customer" />
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
import Footer from "~/components/organisms/Footer";
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
    },
};
</script>

<style lang="scss" scoped>
.customer {
    padding: 100px 0 40px !important;
}
@media (max-width: 800px) {
    .customer {
        padding: 100px 10px 0px !important;
    }
}
</style>