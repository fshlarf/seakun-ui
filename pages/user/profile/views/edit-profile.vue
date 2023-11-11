<template>
  <div
    class="dm-sans p-4 md:p-5 lg:p-6 bg-white rounded-xl mt-6 md:mt-0"
    style="box-shadow: 0px 2px 10px 0px rgba(158, 161, 182, 0.1)"
  >
    <section
      class="md:flex items-center gap-2 cursor-pointer hidden max-w-max"
      @click="$emit('clickArrow')"
    >
      <img src="/images/icons/atoms/arrow-back.svg" alt="back" />
      <p class="text-xs text-gray-secondary">Kembali</p>
    </section>
    <h1 class="text-[20px] text-gray-secondary font-bold hidden md:block mt-6">
      Edit Profile
    </h1>
    <section
      class="md:mt-6 flex flex-col lg:flex-row items-center gap-3 lg:gap-8"
    >
      <img
        :src="`/images/profile-page/avatar/${avatar ? avatar : 'default'}.svg`"
        alt="profile"
        class="w-[78px] h-[78px] rounded-full mx-auto md:mx-0 border"
      />
      <div>
        <div v-if="!isChangeAvatar">
          <Button
            @click="isChangeAvatar = !isChangeAvatar"
            class="text-xs lg:text-sm text-green-primary border border-green-primary rounded-[6px] px-2 py-1 lg:px-6 lg:py-1.5"
            >Ganti Avatar</Button
          >
        </div>
        <div v-else class="flex items-center gap-2 lg:gap-3">
          <div
            v-for="(ava, id) in avatars"
            :key="id"
            @click="selectAvatar(ava.name), validateForm"
          >
            <img
              :src="`/images/profile-page/avatar/${ava.name}.svg`"
              :alt="ava.name"
              class="w-[35px] h-[35px] lg:w-[50px] lg:h-[50px] cursor-pointer rounded-full"
              :class="`${
                ava.name == avatar ? 'border-2 border-[#08A081]' : ''
              }`"
            />
          </div>
        </div>
      </div>
    </section>
    <form action="submit" class="mt-6 space-y-3 md:space-y-4 lg:space-y-6">
      <Input
        v-model="name"
        label="Nama Lengkap"
        class-label="!text-sm md:!text-xs !text-gray-secondary"
        class-name="!text-sm md:!text-base !text-gray-secondary"
        @keyup="validateForm('name')"
        :error="errorForm.name"
      />
      <Input
        v-model="birthDate"
        type="date"
        label="Tanggal Lahir"
        class-label="!text-sm md:!text-xs !text-gray-secondary"
        class-name="!text-sm md:!text-base !text-gray-secondary"
        @change="validateForm"
      />
      <div>
        <p class="!text-sm md:!text-xs !text-gray-secondary">Jenis Kelamin</p>
        <div class="flex items-center gap-7 mt-5">
          <section
            v-for="(option, id) in genders"
            :key="id"
            class="flex items-center gap-2 cursor-pointer"
            @click="handleSelectGender(option.value)"
          >
            <img
              :src="[
                gender == option.value
                  ? '/images/icons/atoms/radio-button-active.svg'
                  : '/images/icons/atoms/radio-button.svg',
              ]"
              alt="radio"
            />
            <p class="text-main text-sm lg:text-base">{{ option.name }}</p>
          </section>
        </div>
      </div>
      <TextArea
        v-model="address"
        class-area="!resize-none"
        label="Alamat"
        class-label="!text-sm md:!text-xs !text-gray-secondary"
        @keyup="validateForm"
      />
      <div class="mt-2">
        <p class="text-sm">Provinsi</p>
        <div class="relative z-0 mt-2">
          <div class="absolute z-10 right-3 top-1/2 transform -translate-y-1/2">
            <img
              class="w-[16px]"
              :class="{ 'rotate-180': isShowDropDownDomicile }"
              src="/images/icons/atoms/chevron-gray.svg"
              alt="pilih domisili"
            />
          </div>
          <div
            @click="onClickDomicile"
            class="cursor-pointer rounded-[8px] border border-[#A0A3BD66] p-3 text-sm w-full"
          >
            {{ domicile ? domicile : 'Pilih Provinsi' }}
          </div>
        </div>
      </div>
      <div id="container-province" class="relative z-10 !mt-0">
        <div
          id="drop-province"
          v-if="isShowDropDownDomicile"
          class="!absolute !z-60 top-0 left-0 w-full rounded-[5px] bg-white py-2 overflow-y-auto overscroll-auto shadow-md"
        >
          <div class="p-2">
            <input
              v-model="searchProvince"
              class="focus:outline-none rounded-[8px] border border-[#A0A3BD66] px-3 py-2 text-sm w-full"
              type="text"
              placeholder="Cari provinsi"
              @keyup="onSearchProvince"
            />
          </div>
          <div>
            <div
              v-for="(province, id) in province"
              :key="id"
              placeholder="Cari provinsi"
              class="p-2 lg:p-3 text-center w-full cursor-pointer bg-white hover:bg-primary hover:text-white text-sm lg:text-base"
              @click="onSelectProvince(province)"
            >
              {{ province }}
            </div>
          </div>
        </div>
      </div>
      <Input
        v-model="email"
        label="Email"
        class-label="!text-sm md:!text-xs !text-gray-secondary"
        class-name="!text-sm md:!text-base !text-gray-secondary"
        disabled
        :error="errorForm.email"
      />
      <Input
        v-model="phoneNumber"
        label="No Whatsapp"
        class-label="!text-sm md:!text-xs  !text-gray-secondary"
        class-name="!text-sm md:!text-base !text-gray-secondary"
        disabled
        :error="errorForm.phone"
      />

      <div>
        <nuxt-link to="/user/profile/reset-password">
          <p class="text-sm md:text-base text-[#3299DB] mt-3 text-right">
            Reset Password?
          </p>
        </nuxt-link>
      </div>
      <div class="text-right">
        <Button
          @click="onClickUpdateProfile"
          :disabled="!isUpdate"
          :is-loading="isLoading"
          class="!text-sm md:!text-base border-2 border-green-primary bg-green-primary w-full md:w-[166px] h-[40px] md:h-[46px] text-white"
        >
          Simpan
        </Button>
        <!-- <Button
          @click="$emit('onClickCancel')"
          :disabled="isLoading"
          class="!text-sm md:!text-base border-2 border-green-primary w-full md:w-[166px] h-[40px] md:h-[46px] text-green-primary mt-3"
        >
          Batal
        </Button> -->
      </div>
    </form>
  </div>
</template>

<script>
import Input from '~/components/atoms/Input.vue';
import InputPassword from '~/components/atoms/InputPassword.vue';
import Button from '~/components/atoms/Button.vue';
import TextArea from '~/components/atoms/TextArea.vue';
import { toUnixTimestamp, unixToIsoDate } from '~/helpers/word-transformation';
import { indonesiaProvince } from '~/constants/indonesia-province';

export default {
  components: {
    Input,
    Button,
    InputPassword,
    TextArea,
  },
  props: {
    profile: {
      type: Object,
      default: () => {},
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      indonesiaProvince,
      isChangeAvatar: false,
      name: '',
      birthDate: '',
      email: '',
      phoneNumber: '',
      genders: [
        {
          name: 'Laki-laki',
          value: 'male',
        },
        {
          name: 'Perempuan',
          value: 'female',
        },
      ],
      gender: 'male',
      password: '',
      address: '',
      domicile: '',
      searchProvince: '',
      isUpdate: false,
      errorForm: {
        name: {
          isError: false,
          message: '',
        },
        email: {
          isError: false,
          message: '',
        },
        phoneNumber: {
          isError: false,
          message: '',
        },
      },
      avatar: 'default',
      avatars: [
        {
          name: 'man-1',
        },
        {
          name: 'man-2',
        },
        {
          name: 'man-3',
        },
        {
          name: 'woman-1',
        },
        {
          name: 'woman-2',
        },
        {
          name: 'woman-3',
        },
      ],
      isShowDropDownDomicile: false,
      province: [],
    };
  },
  watch: {
    profile(val) {
      if (val) {
        this.getProfileData(val);
      }
    },
  },
  mounted() {
    this.getProfileData(this.profile);
    this.province = this.indonesiaProvince;
  },
  methods: {
    calculateDropDownProvince() {
      const viewportHeight = window.innerHeight;
      const container = document.getElementById('container-province');
      const drop = document.getElementById('drop-province');
      const elementPosition = container.getBoundingClientRect().top;
      const lowerPartHeight = viewportHeight - elementPosition;
      drop.style.maxHeight = `${lowerPartHeight}px`;
    },
    onClickDomicile() {
      this.isShowDropDownDomicile = !this.isShowDropDownDomicile;
      setTimeout(() => {
        const drop = document.getElementById('drop-province');
        if (drop) {
          this.calculateDropDownProvince();
        }
      }, 200);
      const profileDomicile = this.profile.customerDetail.domicile
        ? this.profile.customerDetail.domicile
        : '';
      this.isUpdate = profileDomicile !== this.domicile;
      if (
        !this.isShowDropDownDomicile &&
        !this.indonesiaProvince.some((prov) => prov == this.domicile)
      ) {
        this.domicile = '';
        const domicileInput = document.getElementById('input-domicile');
        domicileInput.blur();
      }
    },
    onSelectProvince(province) {
      this.domicile = province;
      this.isShowDropDownDomicile = false;
      const profileDomicile = this.profile.customerDetail.domicile
        ? this.profile.customerDetail.domicile
        : '';
      this.isUpdate = profileDomicile !== this.domicile;
      this.searchProvince = '';
    },
    onSearchProvince() {
      this.province = this.indonesiaProvince.filter((province) => {
        const prov = province.toLowerCase();
        const dom = this.searchProvince.toLowerCase();
        return prov.includes(dom);
      });
      const drop = document.getElementById('drop-province');
      if (drop) {
        this.calculateDropDownProvince();
      }
      const profileDomicile = this.profile.customerDetail.domicile
        ? this.profile.customerDetail.domicile
        : '';
      this.isUpdate = profileDomicile !== this.domicile;
    },
    getProfileData(profile) {
      if (profile) {
        this.name = profile.name;
        this.email = profile.email;
        this.phoneNumber = profile.phoneNumber;
        this.avatar = profile.avatar;
        this.address = profile.customerDetail?.address;
        this.gender = profile.customerDetail?.gender;
        this.domicile = profile.customerDetail?.domicile;
        this.birthDate = profile.customerDetail?.birthDate
          ? this.unixToIsoDate(profile.customerDetail.birthDate)
          : '';
      }
    },
    onClickUpdateProfile() {
      if (this.validateForm()) {
        const {
          name,
          email,
          phoneNumber,
          birthDate,
          domicile,
          address,
          avatar,
          gender,
        } = this;

        const payload = {
          name,
          email,
          phoneNumber,
          birthDate: birthDate ? this.toUnixTimestamp(birthDate) : null,
          avatar,
          domicile,
          address,
          gender,
        };
        this.$emit('onUpdateProfile', payload);
      }
    },
    handleSelectGender(val) {
      this.gender = val;
      this.validateForm();
    },
    selectAvatar(val) {
      this.avatar = val;
      this.isChangeAvatar = !this.isChangeAvatar;
      this.validateForm();
    },
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    validateForm(input) {
      const {
        name,
        email,
        phoneNumber,
        address,
        domicile,
        birthDate,
        gender,
        avatar,
      } = this;
      const nameFormat = /^[A-Za-z][A-Za-z\s]*$/;
      const idnPhoneFormat = /^[0-9]+$/;
      let isValid = true;
      let errorTemp = {
        name: {
          isError: false,
          message: '',
        },
        email: {
          isError: false,
          message: '',
        },
        phoneNumber: {
          isError: false,
          message: '',
        },
      };

      if (input === 'email' || !input) {
        if (email === '') {
          errorTemp.email = {
            isError: true,
            message: 'Email harus diisi',
          };
          isValid = false;
        } else if (!this.validateEmail(email)) {
          errorTemp.email = {
            isError: true,
            message: 'Format email salah. cth: john@mail.com',
          };
          isValid = false;
        }
      }

      if (input === 'name' || !input) {
        if (name === '') {
          errorTemp.name = {
            isError: true,
            message: 'Nama lengkap harus diisi',
          };
          isValid = false;
        } else if (!name.match(nameFormat)) {
          errorTemp.name = {
            isError: true,
            message: 'Format nama salah',
          };
          isValid = false;
        }
      }

      if (input === 'phone' || !input) {
        if (phoneNumber === '') {
          errorTemp.phone = {
            isError: true,
            message: 'Nomor whatsapp harus diisi',
          };
          isValid = false;
        } else if (!phoneNumber.match(idnPhoneFormat)) {
          errorTemp.phone = {
            isError: true,
            message: 'Format nomor whatsapp salah',
          };
          isValid = false;
        }
      }

      if (
        name !== this.profile.name ||
        avatar !== this.profile.avatar ||
        address !== this.profile.customerDetail?.address ||
        birthDate !== this.profile.customerDetail?.birthDate ||
        domicile !== this.profile.customerDetail?.domicile ||
        gender !== this.profile.customerDetail?.gender
      ) {
        this.isUpdate = true;
      }
      this.errorForm = { ...errorTemp };
      return isValid;
    },
    toUnixTimestamp,
    unixToIsoDate,
  },
};
</script>

<style lang="scss" scoped>
.dm-sans {
  font-family: 'DM Sans', sans-serif;
  font-feature-settings: 'clig' off, 'liga' off;
}
</style>
