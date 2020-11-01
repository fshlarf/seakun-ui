<template>
    <div class="chevron" @click="$emit('click-chevron')">
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
        <span>{{btnText}}</span>
    </div>
</template>

<script>
export default {
    props: {
        btnText: {
            type: String,
            default: 'Selengkapnya'
        }
    }
}
</script>

<style lang="scss" scoped>
.chevron {
    cursor: pointer;
    padding: 20px !important;
    color: white;
    height: 37px;
    display: block;
    align-items: center;
    padding: 0px 16px !important;
    text-align: center;
    width: 144px;
    svg {
        background-color: #86d0c1;
        padding: 8px;
        font-size: 36px;
        border-radius: 25px !important;
        margin-bottom: 10px;
    }
    span {
        color: black;
    }
}
@media (max-width: 800px) {
    .chevron {
        svg {
            background-color: #86d0c1;
            padding: 8px;
            font-size: 36px;
            border-radius: 25px;
            margin-bottom: 10px;
        }
        span {
            color: black;
        }
    }
}
</style>