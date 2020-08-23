<template>
    <div @click="clickRegisterBtn(dataCustomer.names)" :class="`card card-${setClassStatus(dataCustomer.names)}`" v-if="dataCustomer">
        <div class="card-header">
            <div class="card-header--title">
                <h5>Group {{dataCustomer.group}}</h5>
                <img :src="`/images/${dataCustomer.provider && dataCustomer.provider.toLowerCase()}.png`" alt="Netflix">
            </div>
            <div :class="`card-header--status ${setClassStatus(dataCustomer.names)}`">
                {{ setStatus(dataCustomer.names) }}
            </div>
        </div>
        <div class="card-content">
            <ul>
                <li v-for="(name,index) in dataCustomer.names" :key="index" :class="setClassUserName(name)">{{setName(name)}}</li>
            </ul>
            <div style="text-align: center" v-if="isButtonShow(dataCustomer.names)" @click="clickRegisterBtn(dataCustomer.names)">
                <button class="btn btn-register btn-sm">Daftar Sekarang</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        dataCustomer: Object
    },
    data() {
        return {
            regElement: '',
        }
    },
    mounted() {
        this.regElement = document.getElementById('reg')
    },
    methods: {
        clickRegisterBtn(arrayNames) {
            if (arrayNames.includes("")) this.regElement.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
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
                const regex = /(?<!^).(?!$)/g;
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
        }
    }
}
</script>

<style lang="scss" scoped>
.card {
    width: 14rem;
    margin: 0px 20px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
    border-radius: 4px;
    border: unset;
    min-height: 17rem;
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
            padding: 5px 10px!important;
            border-radius: 4px;
            font-size: 12px;
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
    &.card-Available {
        &:hover {
            transform: scale(1.1);
            cursor: pointer;
        }
    }
    .btn-register {
        background-color: white;
        border-color: green!important;
        color: green;
        margin-bottom: 10px;
    }
}
ul, li {
    list-style: none;
    padding: 5px 14px;
    font-size: 12px;
    margin-bottom: 0!important;
}
@media (max-width: 800px) {
    .card {
        margin: 0px 6px;
        max-width: 12rem;
        &-header {
            &--title {
                img {
                    max-width: 5rem;
                }
            }
            &--status {
                padding: 5px 7px !important;
                font-size: 10px;
            }
        }
    }
    ul, li {
        font-size: 11px;
    }
    .btn-register {
        font-size: 10px;
    }
}
</style>