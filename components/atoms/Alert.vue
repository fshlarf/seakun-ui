<template>
    <div class="alert alert-danger">
        <div class="row">
            <div class="col col-lg-1 text-center">
                <span class="fa fa-info-circle"></span>
            </div>
            <div class="col">{{ message }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        message: "",
    },
};
</script>

<style lang="scss" scoped>
</style>