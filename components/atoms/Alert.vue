<template>
    <div :class="`alert alert-${typeAlert}`">
        {{ message }}
    </div>
</template>

<script>
export default {
    props: {
        message: "",
        typeAlert: {
            type: String,
            default: 'danger'
        }
    },
};
</script>

<style lang="scss" scoped>
</style>