<template>
  <div
    class="dm-sans w-full p-4 md:p-5 lg:p-6 bg-white rounded-xl border-[1px] md:border-none border-[#08A0811A]/10"
  >
    <main class="flex justify-between">
      <div class="md:flex gap-6">
        <section v-if="isLoading">
          <div
            class="shimmer !rounded-full w-[58px] h-[58px] lg:w-[78px] lg:h-[78px]"
          ></div>
        </section>
        <section v-else>
          <img
            :src="`/images/profile-page/avatar/${profile.avatar}.svg`"
            alt="profile"
            class="rounded-full w-[58px] h-[58px] lg:w-[78px] lg:h-[78px]"
          />
        </section>
        <section
          class="flex gap-6 md:gap-[60px] text-xs md:text-sm mt-3 md:mt-0"
        >
          <div class="text-[#66738F] space-y-2 md:space-y-3 whitespace-nowrap">
            <p>Nama Lengkap</p>
            <p>No Whatsapp</p>
            <p>Email</p>
            <p>Tanggal Lahir</p>
            <p>Jenis Kelamin</p>
            <p>Alamat</p>
            <p>Domisili</p>
          </div>
          <div
            v-if="isLoading"
            class="block space-y-2 md:space-y-3 mt-1 lg:mt-0"
          >
            <p class="block shimmer h-3 lg:h-[15px] w-[150px]"></p>
            <br />
            <p class="block shimmer h-3 lg:h-[15px] w-[200px]"></p>
            <br />
            <p class="block shimmer h-3 lg:h-[15px] w-[100px]"></p>
            <br />
            <p class="block shimmer h-3 lg:h-[15px] w-[100px]"></p>
            <br />
            <p class="block shimmer h-3 lg:h-[15px] w-[150px]"></p>
            <br />
            <p class="block shimmer h-3 lg:h-[15px] w-[100px]"></p>
            <br />
            <p class="block shimmer h-3 lg:h-[15px] w-[100px]"></p>
          </div>
          <div
            v-else
            class="text-gray-secondary space-y-2 md:space-y-3 max-w-[200px] truncate"
          >
            <p class="truncate">{{ profile.name }}</p>
            <p class="truncate">{{ profile.phoneNumber }}</p>
            <p class="truncate">{{ profile.email }}</p>
            <p class="truncate">
              {{
                profile.customerDetail && profile.customerDetail.birthDate
                  ? unixToIndonesianDate(profile.customerDetail.birthDate)
                  : '-'
              }}
            </p>
            <p class="truncate">
              {{
                profile.customerDetail && profile.customerDetail.gender
                  ? convertGender(profile.customerDetail.gender)
                  : '-'
              }}
            </p>
            <p class="truncate">
              {{
                profile.customerDetail && profile.customerDetail.address
                  ? profile.customerDetail.address
                  : '-'
              }}
            </p>
            <p class="truncate">
              {{
                profile.customerDetail && profile.customerDetail.domicile
                  ? profile.customerDetail.domicile
                  : '-'
              }}
            </p>
          </div>
        </section>
      </div>
      <div
        class="cursor-pointer hidden md:block relative z-20"
        @click="$emit('clickEditButton')"
      >
        <img src="/images/profile-page/icon-edit.svg" alt="edit" />
      </div>
    </main>
    <div class="text-center mt-8 md:hidden">
      <Button
        @click="$emit('clickEditButton')"
        add-class="bg-green-primary text-white w-full !h-[38px] !text-sm font-bold"
        >Edit Profile</Button
      >
    </div>
  </div>
</template>

<script>
import Button from '~/components/atoms/Button.vue';
import { unixToIndonesianDate } from '~/helpers/word-transformation';

export default {
  components: {
    Button,
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
  methods: {
    convertGender(gender) {
      switch (gender) {
        case 'male':
          return 'Laki-laki';
        case 'female':
          return 'Perempuan';
      }
    },
    unixToIndonesianDate,
  },
};
</script>

<style lang="scss" scoped>
.dm-sans {
  font-family: 'DM Sans', sans-serif;
  font-feature-settings: 'clig' off, 'liga' off;
}
</style>
