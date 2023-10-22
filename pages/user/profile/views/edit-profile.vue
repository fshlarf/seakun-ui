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
      <!-- :src="`/images/profile-page/avatar/${avatar}.svg`" -->
      <img
        :src="`/images/profile-page/avatar/${dummyAva}.svg`"
        alt="profile"
        class="w-[78px] h-[78px] rounded-full mx-auto md:mx-0"
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
            v-for="(avatar, id) in avatars"
            :key="id"
            @click="selectAvatar(avatar.name)"
          >
            <img
              :src="`/images/profile-page/avatar/${avatar.name}.svg`"
              :alt="avatar.name"
              class="w-[35px] h-[35px] lg:w-[50px] lg:h-[50px] cursor-pointer"
              :class="{
                'rounded-full border-2 border-[#08A081]':
                  avatar.name === dummyAva,
              }"
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
        v-model="dateOfBirth"
        type="date"
        label="Tanggal Lahir"
        class-label="!text-sm md:!text-xs !text-gray-secondary"
        class-name="!text-sm md:!text-base !text-gray-secondary"
        @keyup="validateForm('dateOfBirth')"
      />
      <div>
        <p class="!text-sm md:!text-xs !text-gray-secondary">Jenis Kelamin</p>
        <div class="flex items-center gap-7 mt-5">
          <section
            v-for="(option, id) in gender"
            :key="id"
            class="flex items-center gap-2 cursor-pointer"
            @click="handleSelectGender(option.value)"
          >
            <img
              :src="[
                selectedGender == option.value
                  ? '/images/icons/atoms/radio-button-active.svg'
                  : '/images/icons/atoms/radio-button.svg',
              ]"
              alt="radio"
            />
            <p class="text-main text-sm lg:text-base">{{ option.value }}</p>
          </section>
        </div>
      </div>
      <TextArea
        v-model="address"
        class-area="!resize-none"
        label="Alamat"
        class-label="!text-sm md:!text-xs !text-gray-secondary"
      />
      <TextArea
        v-model="domicile"
        class-area="!resize-none"
        label="Domisili"
        class-label="!text-sm md:!text-xs !text-gray-secondary"
      />
      <Input
        v-model="email"
        class-input="bg-[#A0A3BD26]"
        label="Email"
        class-label="!text-sm md:!text-xs !text-gray-secondary"
        class-name="!text-sm md:!text-base !text-gray-secondary"
        @keyup="validateForm('email')"
        :error="errorForm.email"
      />
      <Input
        v-model="phoneNumber"
        class-input="bg-[#A0A3BD26]"
        label="No Whatsapp"
        class-label="!text-sm md:!text-xs  !text-gray-secondary"
        class-name="!text-sm md:!text-base !text-gray-secondary"
        @keyup="validateForm('phoneNumber')"
        :error="errorForm.phoneNumber"
      />
      <Input
        v-model="password"
        type="password"
        class-input="bg-[#A0A3BD26]"
        label="Password"
        class-label="!text-sm md:!text-xs  !text-gray-secondary"
        class-name="!text-sm md:!text-base !text-gray-secondary"
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
      isChangeAvatar: false,
      name: '',
      dateOfBirth: '',
      email: '',
      phoneNumber: '',
      gender: [
        {
          value: 'Laki-laki',
        },
        {
          value: 'Perempuan',
        },
      ],
      selectedGender: '',
      password: '',
      address: '',
      domicile: '',
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
      avatar: 'man-1',
      dummyAva: 'man-1',
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
  },
  methods: {
    getProfileData(profile) {
      if (profile) {
        this.name = profile.name;
        this.email = profile.email;
        this.phoneNumber = profile.phoneNumber;
        this.avatar = profile.avatar;
      }
    },
    onClickUpdateProfile() {
      if (this.validateForm()) {
        const { name, email, phoneNumber } = this;
        const payload = {
          name,
          email,
          phoneNumber,
        };
        this.$emit('onUpdateProfile', payload);
      }
    },
    handleSelectGender(val) {
      this.selectedGender = val;
    },
    selectAvatar(val) {
      this.dummyAva = val;
    },
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    validateForm(input) {
      const { name, email, phoneNumber } = this;
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
        email !== this.profile.email ||
        phoneNumber !== this.profile.phoneNumber
      ) {
        this.isUpdate = true;
      }
      this.errorForm = { ...errorTemp };
      return isValid;
    },
  },
};
</script>

<style lang="scss" scoped>
.dm-sans {
  font-family: 'DM Sans', sans-serif;
  font-feature-settings: 'clig' off, 'liga' off;
}
</style>
