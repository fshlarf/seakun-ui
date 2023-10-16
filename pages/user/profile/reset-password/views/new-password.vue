<template>
  <main>
    <div
      v-if="!isSuccess"
      class="bg-white p-6 rounded-xl text-gray-secondary space-y-6"
      style="box-shadow: 0px 2px 10px 0px rgba(158, 161, 182, 0.1)"
    >
      <nuxt-link to="/user/profile" class="flex items-center gap-2">
        <img src="/images/icons/atoms/arrow-back.svg" alt="back" />
        <p class="text-xs">Kembali</p>
      </nuxt-link>
      <div>
        <h2 class="text-[20px] font-bold">Buat Password Baru</h2>
        <p class="text-sm pt-1 leading-5">
          Password barumu harus berbeda dengan password sebelumnya.
        </p>
      </div>
      <InputPassword
        v-model="password"
        label="Password"
        placeholder="Masukkan  password kamu disini"
        class-label="!text-base !text-gray-secondary"
        class-name="!text-base !text-gray-secondary"
        :error="errorForm.password"
      />
      <InputPassword
        v-model="retypePassword"
        label="Konfirmasi Password"
        placeholder="Ketik ulang password kamu disini"
        class-label="!text-base !text-gray-secondary"
        class-name="!text-base !text-gray-secondary"
        :error="errorForm.retypePassword"
      />
      <div class="text-right">
        <Button
          class="text-white bg-green-primary border-2 border-green-primary w-[166px] !text-base h-[46px]"
          >Reset Password</Button
        >
      </div>
    </div>
  </main>
</template>

<script>
import UserService from '~/services/UserServices';
import Button from '~/components/atoms/Button.vue';
import InputPassword from '~/components/atoms/InputPassword.vue';

export default {
  layout: 'profile',
  components: {
    InputPassword,
    Button,
  },
  data() {
    return {
      UserService,
      token: '',
      password: '',
      retypePassword: '',
      errorForm: {
        password: {
          isError: false,
          message: '',
        },
        retypePassword: {
          isError: false,
          message: '',
        },
      },
      isLoading: false,
      isSuccess: false,
    };
  },
  mounted() {
    this.UserService = new UserService(this);
    const { token } = this.$route.query;
    if (token) {
      this.token = token;
    } else {
      this.$router.push('/user/profile');
    }
  },
  methods: {
    validateForm(input) {
      const { password, retypePassword } = this;
      let isValid = true;
      let errorTemp = {
        password: {
          isError: false,
          message: '',
        },
        retypePassword: {
          isError: false,
          message: '',
        },
      };

      if (input === 'password' || !input) {
        if (password === '') {
          errorTemp.password = {
            isError: true,
            message: 'Password harus diisi',
          };
          isValid = false;
        }
      }

      if (input === 'retypePassword' || !input) {
        if (retypePassword === '') {
          errorTemp.retypePassword = {
            isError: true,
            message: 'Password harus diisi',
          };
          isValid = false;
        } else if (password !== retypePassword) {
          errorTemp.retypePassword = {
            isError: true,
            message: 'Password harus sama',
          };
          isValid = false;
        }
      }

      this.errorForm = { ...errorTemp };
      return isValid;
    },
    async updatePassword() {
      const { UserService, token, password } = this;
      this.isLoading = true;
      try {
        const fetchUpdatePassword = await UserService.updatePassword(
          token,
          password
        );
        if (fetchUpdatePassword.data) {
          this.isSuccess = true;
        }
      } catch (error) {
        console.log(error);
      }
      this.isLoading = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
