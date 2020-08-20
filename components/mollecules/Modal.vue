<template>
    <div v-if="showPacket" class="modal fade show" id="modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" >
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">{{titleModal}}</h5>
                    <button @click="$emit('closeModal')" type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span>&times;</span>
                    </button>
                </div>
                <div class="modal-body scroller">
                    <slot></slot>
                </div>
                <!-- <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        showPacket: Boolean,
        titleModal: String
    }
}
</script>

<style lang="scss" scoped>
.modal-dialog {
    max-width: 50rem;
}
.modal-body {
    padding: 0px!important;
}
@media (max-width: 800px) {
    .modal-dialog {
        max-width: auto!important;
    }
}
</style>