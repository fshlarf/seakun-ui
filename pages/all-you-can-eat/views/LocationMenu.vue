<template>
  <div class="md:my-4">
    <div class="md:grid md:grid-cols-2 md:gap-8 tn:space-y-4 md:space-y-0">
      <div>
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe
              width="100%"
              height="400"
              id="gmap_canvas"
              :src="`https://maps.google.com/maps?q=${address}&t=&hl=id&z=13&ie=UTF8&iwloc=&output=embed`"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe
            ><a href="https://putlocker-is.org"></a><br /><style>
              .mapouter {
                position: relative;
                text-align: right;
                height: 400px;
                width: 100%;
              }</style
            ><a href="https://www.embedgooglemap.net">google map for free</a
            ><style>
              .gmap_canvas {
                overflow: hidden;
                background: none !important;
                height: 400px;
                width: 100%;
              }
            </style>
          </div>
        </div>
      </div>
      <div class="space-y-2">
        <p class="text-2xl font-bold">Detail Lokasi</p>
        <p>{{ restaurant.address }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    restaurant: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    address() {
      return this.restaurant.address.replace(' ', '%20');
    },
  },
};
</script>

<style></style>
