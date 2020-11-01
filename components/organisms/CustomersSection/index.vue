<template>
    <div id="customers">
        <div class="customers" v-if="customers.length > 0">
            <Title title="Pengguna Seakun.id" />
            <div class="customers__content">
                <div class="customers__content--carousell scroll" id="content">
                    <div v-for="(customer, index) in customers" :key="index">
                        <CustomersGroupCard :dataCustomer="customer" />
                    </div>
                    <ButtonChevron @click-chevron="showMore"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CustomersGroupCard from "~/components/mollecules/CustomersGroupCard";
import Title from "~/components/atoms/Title";
import ButtonChevron from "~/components/atoms/ButtonChevron";
import axios from "axios";

export default {
    components: {
        CustomersGroupCard,
        Title,
        ButtonChevron
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
        showMore() {
            this.$router.push('/info/customers')
        },
        getCustomersData() {
            axios
                .get("https://seakun-api.herokuapp.com/registered-user/group")
                .then((res) => this.processDataCustomers(res.data))
                .then(() => this.scrollToRegistrationSection())
                .catch((err) => console.log(err))
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
            const nArr = theArr.slice(theArr.length-4, theArr.length-0).sort().reverse()
            this.customers = nArr;
        },
        scrollToRegistrationSection() {
            let elementReg = document.getElementById('reg')
            if (this.$route.query.regist == 'true') {
                setTimeout(() => {
                    elementReg.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                        inline: "nearest",
                    });
                }, 500)
            }
        }
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
            align-items: center;
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
        }
    }
}
</style>