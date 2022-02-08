<template>
    <div class="max-w-md w-full mx-auto py-28 px-4">
      <div
        class="flex flex-column bg-green-seakun-secondary rounded-[30px] p-5 items-center shadow-md"
      >
        <img
          class="w-4/5"
          src="/images/payment-fail.svg"
          alt="image not found"
        />
        <p class="text-xl font-bold text-center mt-4">
          Pembayaran Gagal diproses
        </p>
        <p class="text-sm font-normal text-center mt-2">
          Mohon maaf proses pembayaran kamu gagal nih. Kita coba lagi yuk.
        </p>
        <Button
          label="Coba bayar lagi"
          class="bg-green-seakun text-sm text-white font-normal px-4 py-2 mt-4"
        />
      </div>
    </div>
</template>
<script>
import Button from '~/components/atoms/Button'
export default {
    name: 'FailedPayment',
    components: {
        Button
    }
}
</script>