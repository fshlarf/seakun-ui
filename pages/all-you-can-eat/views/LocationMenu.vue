<template>
  <div class="my-4">
    <div class="grid grid-cols-2 gap-2 md:gap-4 lg:gap-8">
      <div class="border">
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe
              class="tn:h-[150px] md:h-[300px] lg:h-[400px]"
              width="100%"
              id="gmap_canvas"
              :src="`https://maps.google.com/maps?q=${address}&t=&hl=id&z=13&ie=UTF8&iwloc=&output=embed`"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>
        </div>
      </div>
      <div class="space-y-2">
        <p class="md:text-2xl font-bold">Detail Lokasi</p>
        <p class="tn:text-xs md:text-base font-medium">
          Voyage at Harris Vertu Hotel Harmoni, <br />{{ restaurant.address }}
        </p>
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
