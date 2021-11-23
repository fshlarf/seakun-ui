<template>
  <div class="mt-8 md:mb-8 tn:px-2 md:px-0">
    <div class="grid grid-cols-5">
      <div class="col-span-2">
        <img
          class="object-cover w-full h-[130px] md:h-[300px]"
          :src="`${packet.image}`"
          alt="no image found"
        />
      </div>
      <div class="col-span-3 tn:pl-2 md:px-4 lg:px-8">
        <p class="md:text-3xl lg:text-4xl font-bold">
          {{ packet.name }}
        </p>
        <div class="flex space-x-2 md:space-x-4 items-center lg:my-2">
          <p
            class="text-secondary text-[9px] md:text-xl lg:text-2xl font-bold uppercase tracking-widest"
          >
            {{ packet.package }}
          </p>
          <div
            class="bg-fifth rounded-full tn:py-1 tn:px-2 md:px-3 md:my-2 w-max"
          >
            <p
              v-if="packet.memberType === 'single'"
              class="tn:text-[9px] md:text-xs font-semibold"
            >
              PRE-ORDER
            </p>
            <p v-else class="tn:text-[9px] md:text-xs font-semibold">
              MIN. 2 ORANG
            </p>
          </div>
        </div>
        <div class="md:flex md:space-x-2 items-center font-medium">
          <p class="tn:text-[9px] md:text-base">
            Mulai
            <span class="line-through">
              {{ currencyFormat(packet.detailPrice.originalPrice) }}
            </span>
          </p>
          <div
            class="flex items-center space-x-2 justify-center md:justify-start"
          >
            <p class="font-bold md:text-3xl">
              {{ currencyFormat(packet.detailPrice.finalPrice) }}
            </p>
            <p class="text-gray-500 tn:text-[9px] md:text-base">/ orang</p>
          </div>
        </div>
        <Button
          class="my-2 py-2 w-full md:hidden !text-xs"
          label="PESAN"
          variant="third"
          @click="$emit('onClickChooseVariant', packet)"
        />

        <div class="hidden md:block">
          <div class="bg-fifth rounded-lg py-1 px-3 my-2 max-w-max">
            <p class="text-[9px] md:text-xs font-semibold">
              Masa berlaku voucher sampai dengan {{ packet.voucher.expired }}
            </p>
          </div>
          <p class="text-secondary font-bold mt-3 mb-1 px-3 text-lg">
            Detail Harga
          </p>
          <div class="flex justify-between item-center px-3 mb-1">
            <p>Harga Satuan</p>
            <p class="font-bold">
              <span class="line-through font-normal mr-2">{{
                currencyFormat(packet.detailPrice.vendorPrice)
              }}</span
              >{{ currencyFormat(packet.detailPrice.discountPrice) }}
            </p>
          </div>
          <div class="flex justify-between item-center px-3">
            <p>Biaya Admin</p>
            <p class="font-bold">
              {{ currencyFormat(packet.detailPrice.adminPrice) }}
            </p>
          </div>
          <hr class="h-[0.5px] bg-primary mt-3 mb-4" />
          <div
            class="flex justify-between items-center cursor-pointer"
            @click="$emit('toggleShow', packet.id)"
          >
            <p class="md:ml-3 font-bold text-secondary">
              Syarat dan ketentuan:
            </p>
            <div v-if="!isShowTerms" class="w-4 h-4">
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 330 330"
                style="enable-background: new 0 0 330 330"
                xml:space="preserve"
              >
                <path
                  id="XMLID_225_"
                  d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	                c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	                s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                />
              </svg>
            </div>
            <div v-if="isShowTerms" class="w-4 h-4">
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 330 330"
                style="enable-background: new 0 0 330 330"
                xml:space="preserve"
              >
                <path
                  id="XMLID_224_"
                  d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394
                  l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393
                  C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"
                />
              </svg>
            </div>
          </div>
          <div v-if="isShowTerms">
            <ul class="list-decimal tn:pl-8 md:pl-10">
              <li v-for="(terms, id) in packet.terms" :key="id">
                {{ terms }}
              </li>
            </ul>
          </div>
          <Button
            class="my-3 py-2 tn:w-full md:w-[40%]"
            label="PESAN"
            variant="third"
            @click="$emit('onClickChooseVariant', packet)"
          />
        </div>
      </div>
    </div>

    <div>
      <div class="md:hidden">
        <div class="bg-fifth rounded-lg py-2 px-3 my-2">
          <p class="text-[9px] font-semibold text-center">
            Masa berlaku voucher sampai dengan {{ packet.voucher.expired }}
          </p>
        </div>
        <div
          class="flex justify-between items-center cursor-pointer text-[12px]"
          @click="$emit('toggleShowPrice', packet.id)"
        >
          <p class="md:ml-3 font-bold text-secondary">Detail Harga:</p>
          <div v-if="!isShowPrice" class="w-3 h-3">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 330 330"
              style="enable-background: new 0 0 330 330"
              xml:space="preserve"
            >
              <path
                id="XMLID_225_"
                d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	                c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	                s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
              />
            </svg>
          </div>
          <div v-if="isShowPrice" class="w-3 h-3">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 330 330"
              style="enable-background: new 0 0 330 330"
              xml:space="preserve"
            >
              <path
                id="XMLID_224_"
                d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394
                  l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393
                  C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"
              />
            </svg>
          </div>
        </div>
        <div v-if="isShowPrice" class="text-[12px] my-2">
          <div class="flex justify-between item-center px-3 mb-1">
            <p>Harga Satuan</p>
            <p class="font-bold">
              <span class="line-through font-normal mr-2">{{
                currencyFormat(packet.detailPrice.vendorPrice)
              }}</span
              >{{ currencyFormat(packet.detailPrice.discountPrice) }}
            </p>
          </div>
          <div class="flex justify-between item-center px-3">
            <p>Biaya Admin</p>
            <p class="font-bold">
              {{ currencyFormat(packet.detailPrice.adminPrice) }}
            </p>
          </div>
        </div>

        <div
          class="flex justify-between items-center cursor-pointer mt-2 text-[12px]"
          @click="$emit('toggleShow', packet.id)"
        >
          <p class="md:ml-3 font-bold text-secondary">Syarat dan ketentuan:</p>
          <div v-if="!isShowTerms" class="w-3 h-3">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 330 330"
              style="enable-background: new 0 0 330 330"
              xml:space="preserve"
            >
              <path
                id="XMLID_225_"
                d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	                c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	                s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
              />
            </svg>
          </div>
          <div v-if="isShowTerms" class="w-3 h-3">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 330 330"
              style="enable-background: new 0 0 330 330"
              xml:space="preserve"
            >
              <path
                id="XMLID_224_"
                d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394
                  l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393
                  C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"
              />
            </svg>
          </div>
        </div>
        <div v-if="isShowTerms" class="text-[12px]">
          <ul class="list-decimal pl-4 mt-2">
            <li v-for="(terms, id) in packet.terms" :key="id">
              {{ terms }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { currencyFormat } from '~/helpers/word-transformation.js';
import Button from '~/components/atoms/Button.vue';
export default {
  props: {
    packet: {
      type: Object,
      default: () => {},
    },
    isShowTerms: {
      type: Boolean,
      default: false,
    },
    isShowPrice: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      currencyFormat,
    };
  },
  components: {
    Button,
  },
};
</script>

<style></style>
