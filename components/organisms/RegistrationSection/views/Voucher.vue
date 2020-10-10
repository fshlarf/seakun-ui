<template>
    <span>
        <p>
            Punya
            <b>Voucher</b>?
            <a @click="onShowVoucher" class="referal-code">Masukkan Voucher</a>
        </p>
        <div class="form-group" v-if="showFormVoucher">
            <label for="voucher">Voucher</label>
            <input
                v-model="voucher"
                @blur="checkValidVoucher"
                type="text"
                id="voucher"
                name="voucher"
                class="form-control"
                placeholder="Contoh: SEPTCERIA"
            />
            <p
                v-if="isVoucherValid"
                style="color: limegreen; margin-top: 6px; font-weight: 800"
            >
                Voucher Valid
            </p>
            <p
                v-if="!isVoucherValid && showInvalidVoucher"
                style="color: red; margin-top: 6px; font-weight: 800"
            >
                Voucher invalid
            </p>
        </div>
    </span>
</template>

<script>
export default {
    props: {
        checkValidVoucher: Function,
        isVoucherValid: Boolean,
        onShowVoucher: Function,
        showFormVoucher: Boolean,
        showInvalidVoucher: Boolean,
        voucher: String,
    },
};
</script>

<style lang="scss" scoped>
.form-group {
    input {
        max-width: 300px !important;
    }
}
.referal-code {
    color: dodgerblue;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
        opacity: 0.7;
    }
}
</style>