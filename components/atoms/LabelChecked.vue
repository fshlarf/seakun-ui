<template>
    <div class="a-label">
        <i class="fa fa-check-circle"></i>
        <p>{{ title }}</p>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        title: String
    }
}
</script>

<style lang="scss" scoped>
.a-label {
    display: flex;
    font-weight: 300;
    padding: 4px 0px;
    p {
        margin-bottom: 0px !important;
        padding: 0px 10px;
    }
    i {
        font-size: 23px!important;
        color: #00b348;
    }
}
</style>