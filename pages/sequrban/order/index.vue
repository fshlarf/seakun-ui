<template>
  <div>
    <NavbarBlank />
    <div class="container pt-24 -mb-8">
      <div class="md:shadow md:rounded-3xl max-w-xl mx-auto tn:p-2 md:p-5">
        <div>
          <h1 class="text-3xl font-bold">Pesanan</h1>
          <p>Silakan isi terlebih dahulu sebelum melakukan pemesanan</p>
          <div class="h-1 w-full bg-gray-300 my-2"></div>
          <div class="flex justify-between mt-4">
            <p class="font-bold">Produk yang dipesan</p>
            <p
              class="text-primary font-bold cursor-pointer"
              @click="showModalPackage"
            >
              Ubah paket
            </p>
          </div>
          <div class="my-2">
            <SequrbanChoiceCard
              type="chosen"
              :is-loading="isLoading"
              :variant="dataDetailQurban"
            />
          </div>
          <div class="mt-4">
            <h1 class="font-bold">Informasi pengguna</h1>
            <div class="my-2">
              <SequrbanWarningCard />
            </div>
          </div>
        </div>
        <InputForm
          v-model="dataParamOrder.fullname"
          label="Nama pemesan"
          placeholder="Tulis namamu di sini"
          class=""
        />
        <label class="mt-4 text-sm" for="nomor-telepon"
          >Nomor telepon untuk pemotongan</label
        >
        <div id="nomor-telepon" class="grid grid-cols-4 gap-3 -mt-6">
          <InputForm label="" placeholder="+62" class="" />
          <InputForm
            v-model="dataParamOrder.whatsapp"
            label=""
            placeholder="Masukkan nomor telepon WhatsApp mu"
            class="col-span-3"
          />
        </div>
        <InputForm
          v-model="dataParamOrder.email"
          label="Email"
          placeholder="Tulis alamat email"
          class=""
        />
        <InputForm
          v-model="dataParamOrder.qurban_fullname"
          label="Nama lengkap yang diniatkan untuk berqurban"
          placeholder="Tulis nama di sini"
          class=""
        />
        <div class="mt-1 ml-1">
          <label
            class="space-x-1"
            style="display: inline-block"
            for="nama-lengkap"
            ><input
              style="vertical-align: middle"
              type="checkbox"
              name="nama-lengkap"
              id="nama-lengkap"
            /><span style="vertical-align: middle" class="text-sm"
              >Sama seperti pemesan</span
            >
          </label>
        </div>
        <InputForm
          v-model="dataParamOrder.qurban_father_name"
          label="Nama ayah kandung yang diniatkan untuk berqurban"
          placeholder="Tulis nama di sini"
          class=""
        />
        <InputForm
          v-model="dataParamOrder.address"
          label="Alamat pengiriman daging qurban"
          placeholder="Tulis alamat agar vendor mengirimkan daging qurbanmu"
          class=""
        />
        <div class="grid grid-cols-3 gap-3">
          <InputForm
            v-model="dataParamOrder.city"
            label="Kota / Kecamatan"
            placeholder="Masukkan kota / kecamatan"
            class="mt-0 col-span-2"
          />
          <InputForm
            v-model="dataParamOrder.postal_code"
            label="Kode pos"
            placeholder="Kode pos"
            class="mt-0"
          />
        </div>
        <div class="mt-4 ml-1">
          <label
            class="space-x-1"
            style="display: inline-block"
            for="nama-lengkap"
            ><input
              style="vertical-align: middle"
              type="checkbox"
              name="nama-lengkap"
              id="nama-lengkap"
            /><span style="vertical-align: middle" class="text-sm"
              >Menyetujui aturan yang dibuat Seakun</span
            ><span class="text-primary text-sm font-bold"> Lihat detail</span>
          </label>
        </div>
        <div class="h-1 w-full bg-gray-300 my-2"></div>
        <Button variant="primary" label="Lanjutkan" class="w-full mt-3 py-2" />
        <Button variant="secondary" label="Kembali" class="w-full mt-2" />
      </div>
    </div>
    <ModalChangeOrderPackage
      :is-show-modal="isShowModalPackage"
      :is-loading="isLoading"
      :dataQurban="dataQurban"
      :qurban-current-variant="dataDetailQurban"
      @closeModal="closeModalPackage"
      @choosePackage="choosePackage"
    />
    <Footer />
  </div>
</template>

<script>
import axios from 'axios';
import SequrbanChoiceCard from '../views/SequrbanOrderChoiceCard.vue';
import SequrbanWarningCard from '../views/SequrbanOrderWarningCard.vue';
import ModalChangeOrderPackage from '../views/ModalChangeOrderPackage.vue';
import InputForm from '~/components/atoms/Input.vue';
import Button from '~/components/atoms/Button.vue';
import DownArrowIcon from '~/assets/images/icon/down-arrow.svg?inline';
import NavbarBlank from '~/components/mollecules/NavbarBlank';
import Footer from '~/components/mollecules/Footer';

export default {
  data() {
    return {
      typeId: '',
      isLoading: false,
      isShowModalPackage: false,
      dataQurban: [],
      dataDetailQurban: {},
      dataParamOrder: {
        fullname: '',
        email: '',
        whatsapp: '',
        vendor_code: '',
        type: '',
        joint_price: 0,
        admin_fee: 0,
        delivery_cost: 0,
        service_cost: 0,
        packing_cost: 0,
        total_cost: 0,
        bulking_price: 0,
        discount_price: 0,
        down_payment: 0,
        remaining_payment: 0,
        qurban_fullname: '',
        qurban_father_name: '',
        address: '',
        city: '',
        postal_code: '',
      },
    };
  },
  components: {
    NavbarBlank,
    SequrbanChoiceCard,
    SequrbanWarningCard,
    ModalChangeOrderPackage,
    InputForm,
    Button,
    DownArrowIcon,
    Footer,
  },
  watch: {
    $route(to, from) {
      this.id = to.query.id;
      if (to !== from) {
        this.dataDetailQurban = {};
        this.getDataDetailQurban(this.id);
      }
    },
  },
  mounted() {
    this.typeId = this.$route.query.id;
    this.getDataDetailQurban(this.typeId);
  },
  methods: {
    getDataQurban() {
      this.isLoading = true;
      axios
        .get('https://seakun-packet-api-v1.herokuapp.com/sequrban')
        .then((res) => {
          this.dataQurban = res.data;
          this.isLoading = false;
        })
        .catch((err) => console.log(err));
    },
    getDataDetailQurban(id) {
      this.isLoading = true;
      axios
        .get(`https://seakun-packet-api-v1.herokuapp.com/sequrban/${id}`)
        .then((res) => {
          this.dataDetailQurban = res.data;
          this.isLoading = false;
        })
        .catch((err) => console.log(err));
    },
    showModalPackage() {
      this.isShowModalPackage = true;
      this.getDataQurban();
    },
    closeModalPackage() {
      this.isShowModalPackage = false;
    },
    choosePackage(id) {
      this.isShowModalPackage = false;
      this.$router.push(`/sequrban/order?id=${id}`);
    },
  },
};
</script>

<style lang="scss" scoped></style>
