<template>
  <div
    class="dm-sans p-4 md:p-5 lg:p-6 bg-white rounded-xl mt-6 md:mt-0"
    style="box-shadow: 0px 2px 10px 0px rgba(158, 161, 182, 0.1)"
  >
    <section
      class="md:flex items-center gap-2 cursor-pointer hidden"
      @click="$emit('clickArrow')"
    >
      <img src="/images/icons/atoms/arrow-back.svg" alt="back" />
      <p class="text-xs text-gray-secondary">Kembali</p>
    </section>
    <section class="md:mt-6">
      <h1 class="text-[20px] text-gray-secondary font-bold hidden md:block">
        Edit Profile
      </h1>
      <img
        src="/images/profile-page/dummy-profile.png"
        alt="profile"
        class="w-[78px] h-[78px] rounded-full md:mt-6 mx-auto md:mx-0"
      />
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
        v-model="phoneNumber"
        label="No Whatsapp"
        class-label="!text-sm md:!text-xs  !text-gray-secondary"
        class-name="!text-sm md:!text-base !text-gray-secondary"
        @keyup="validateForm('phoneNumber')"
        :error="errorForm.phoneNumber"
      />
      <Input
        v-model="email"
        label="Email"
        class-label="!text-sm md:!text-xs !text-gray-secondary"
        class-name="!text-sm md:!text-base !text-gray-secondary"
        @keyup="validateForm('email')"
        :error="errorForm.email"
      />
      <div>
        <nuxt-link to="/user/profile/reset-password">
          <p class="text-sm md:text-base text-[#3299DB] mt-3 text-right">
            Reset Password?
          </p>
        </nuxt-link>
      </div>
      <div class="">
        <Button
          @click="onClickUpdateProfile"
          :disabled="!isUpdate"
          :is-loading="isLoading"
          class="!text-sm md:!text-base border-2 border-green-primary bg-green-primary w-full md:w-[166px] h-[40px] md:h-[46px] text-white"
        >
          Simpan
        </Button>
        <Button
          @click="$emit('onClickCancel')"
          :disabled="isLoading"
          class="!text-sm md:!text-base border-2 border-green-primary w-full md:w-[166px] h-[40px] md:h-[46px] text-green-primary mt-3"
        >
          Batal
        </Button>
      </div>
    </form>
  </div>
</template>

<script>
import Input from '~/components/atoms/Input.vue';
import InputPassword from '~/components/atoms/InputPassword.vue';
import Button from '~/components/atoms/Button.vue';

export default {
  components: {
    Input,
    Button,
    InputPassword,
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
      name: '',
      email: '',
      phoneNumber: '',
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
