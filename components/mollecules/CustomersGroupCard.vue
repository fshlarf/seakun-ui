<template>
    <div :class="`card card-${setClassStatus(dataCustomer.names)}`" v-if="dataCustomer">
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
            <div class="btn-container">
                <a v-if="isButtonShow(dataCustomer.names)" class="btn btn-register btn-sm">Daftar Sekarang</a>
                <a v-else class="btn-register btn-sm">&nbsp;</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        dataCustomer: Object
    },
    methods: {
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
        }
    }
}
</script>

<style lang="scss" scoped>
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
@media (max-width: 800px) {
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
</style>