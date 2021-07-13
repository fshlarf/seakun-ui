<template>
    <div class="payment-method__options grid grid-cols-2 gap-1 px-4 py-6">
        <CardShimmer/>
        <CardShimmer/>
    </div>
</template>

<script>
import CardShimmer from '~/components/mollecules/CardShimmer.vue';

export default {
    name : 'PaymentMethodLoading',
    components : {
        CardShimmer
    }
    

}
</script>

<style>

</style>