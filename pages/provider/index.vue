<template>
  <div>
    <NavbarProvider />
    <div
      class="pt-20 bg-red-20 mx-auto w-[321px] md:w-full md:container dm-sans pb-24"
    >
      <div class="flex items-center gap-2 text-sm">
        <nuxt-link class="text-primary" to="/">Beranda</nuxt-link>
        <p>></p>
        <p>{{ provider.name }}</p>
      </div>
      <template v-if="!isLoading">
        <div
          v-if="selectedPackage"
          class="mt-4 rounded-[10px] w-full h-[204px] overflow-hidden border flex justify-center items-center"
        >
          <img
            class="!object-contain max-h-full max-w-full"
            :src="priceScheme.screenshot"
            alt="provider price"
          />
        </div>
        <div
          v-else
          class="mt-4 !rounded-[10px] w-full h-[204px] !overflow-hidden border flex justify-center items-center text-sm"
        >
          Paket tidak aktif
        </div>
      </template>
      <template v-else>
        <div
          class="mt-4 rounded-[10px] w-full h-[204px] overflow-hidden border flex justify-center items-center shimmer"
        ></div>
      </template>

      <div class="lg:flex lg:justify-between">
        <div class="lg:w-[732px]">
          <div
            v-if="!isLoading"
            class="mt-4 lg:mt-8 flex justify-between items-center"
          >
            <div class="flex items-center gap-1 lg:gap-3">
              <img
                class="h-[20px] lg:h-[40px]"
                :src="`/images/icons/${provider.slug}.svg`"
                alt="provider logo"
              />
              <p class="text-[18px] lg:text-[24px] font-bold">
                {{ provider.name }}
              </p>
            </div>
            <div
              v-if="selectedPackage && selectedPackage.po == 1"
              class="text-[12px] lg:text-[14px] bg-[#F6F6BE] rounded-full px-3 py-1 font-medium"
            >
              Preorder
            </div>
          </div>
          <div v-else class="mt-4 lg:mt-8 flex items-center gap-2 lg:gap-3">
            <div
              class="shimmer w-[30px] lg:w-[40px] h-[30px] lg:h-[40px] !rounded-full !overflow-hidden"
            ></div>
            <div class="shimmer h-4 lg:h-5 w-[100px] lg:w-[200px]"></div>
          </div>

          <div
            v-if="!isLoading && selectedPackage"
            class="mt-[12px] lg:mt-[16px] flex justify-between items-center"
          >
            <p class="text-primary font-bold lg:text-[24px]">
              {{
                currencyFormat(
                  selectedVariant.uid
                    ? selectedVariant.grandTotal
                    : selectedPackage.variants[0].grandTotal
                )
              }}<span
                class="text-[#66738F] text-[12px] lg:text-[18px] font-normal"
                >/{{
                  selectedVariant.uid
                    ? selectedVariant.duration
                    : selectedPackage.variants[0].duration
                }}
                bulan</span
              >
            </p>
            <div
              role="button"
              @click="isShowPriceScheme = !isShowPriceScheme"
              class="flex items-center gap-1 lg:hidden"
            >
              <p class="text-[#66738F] text-[12px]">Skema Harga</p>
              <img
                :class="{ 'rotate-180': isShowPriceScheme }"
                src="/images/icons/atoms/chevron-gray.svg"
                alt="chevron"
              />
            </div>
          </div>

          <div
            class="transition-all ease-in-out duration-200 overflow-hidden"
            :class="`${
              !isLoading && selectedPackage && isShowPriceScheme
                ? 'opacity-100 h-auto mt-[12px]'
                : 'max-h-0 opacity-0'
            }`"
          >
            <div class="rounded-[8px] p-[12px] border border-[#66738F80]/50">
              <p class="text-[#66738F] text-[12px]">Skema Harga</p>
              <div
                v-for="(info, id) in priceScheme.informations"
                :key="id"
                class="flex items-center justify-between text-xs mt-1"
                :class="`${
                  id == priceScheme.informations.length - 1 ? 'font-bold' : ''
                }`"
              >
                <p>{{ info.title }}</p>
                <p>{{ info.value }}</p>
              </div>
            </div>
          </div>

          <div class="mt-4">
            <h3 class="text-sm lg:text-base font-medium">Pilih Paket</h3>
            <div
              v-if="!isLoading"
              class="mt-[12px] flex items-center gap-[12px]"
            >
              <div
                v-for="(pkg, id) in packages"
                :key="id"
                class="relative z-0 rounded-[8px] w-[99px] md:w-[233px] md:rounded-[8px] overflow-hidden"
                :class="`${
                  selectedPackage &&
                  selectedPackage.packageUid == pkg.packageUid
                    ? 'border-2 border-primary'
                    : ''
                }`"
              >
                <div
                  v-if="pkg.active !== 1"
                  class="absolute z-20 w-full h-full bg-black/40 flex justify-center items-center lg:justify-end lg:items-start lg:p-3"
                >
                  <div
                    class="bg-white rounded-full px-2 py-1 text-[10px] lg:text-[12px]"
                  >
                    Slot Penuh
                  </div>
                </div>
                <div
                  @click="onSelectPackage(pkg)"
                  class="absolute z-10 bottom-0 left-0 w-full h-[39px] md:h-[71px] px-1 flex justify-center items-center pt-3"
                  :class="`${
                    selectedPackage &&
                    pkg.packageUid === selectedPackage.packageUid
                      ? ''
                      : 'cursor-pointer'
                  }`"
                >
                  <p class="text-[10px] lg:text-[20px] font-bold text-white">
                    {{ pkg.packageName }}
                  </p>
                </div>
                <img
                  @click="onSelectPackage(pkg)"
                  class="w-full"
                  :class="`${
                    selectedPackage &&
                    pkg.packageUid === selectedPackage.packageUid
                      ? ''
                      : 'cursor-pointer'
                  }`"
                  :src="`/images/product/${provider.slug}.svg`"
                  alt="provider"
                />
              </div>
            </div>
            <div v-else class="flex items-center gap-[12px] mt-[12px]">
              <div
                class="shimmer !rounded-[8px] w-[99px] h-[80px] md:w-[233px] md:h-[160px] md:rounded-[8px] !overflow-hidden"
              ></div>
              <div
                class="shimmer !rounded-[8px] w-[99px] h-[80px] md:w-[233px] md:h-[160px] md:rounded-[8px] !overflow-hidden"
              ></div>
            </div>
          </div>

          <div v-if="!isLoading && selectedPackage" class="mt-4 lg:hidden">
            <h3 class="text-sm font-medium">Pilih Durasi Berlangganan</h3>
            <div class="mt-[12px] grid grid-cols-3 gap-[12px]">
              <div
                v-for="(variant, id) in selectedPackage.variants"
                :key="id"
                @click="onSelectVariant(variant)"
                class="rounded-[6px] h-[37px] flex justify-center items-center gap-[4px]"
                :class="`${
                  variant.uid == selectedVariant.uid
                    ? 'bg-[#DFF6F2]'
                    : 'bg-[#F6FBFA] cursor-pointer'
                }`"
              >
                <img
                  :src="`/images/icons/atoms/${
                    variant.uid == selectedVariant.uid
                      ? 'radio-button-active'
                      : 'radio-button'
                  }.svg`"
                  alt="radio"
                />
                <p
                  class="text-sm"
                  :class="`${
                    variant.uid == selectedVariant.uid
                      ? 'text-primary'
                      : 'text-[#66738F]'
                  }`"
                >
                  {{ variant.duration }} Bulan
                </p>
              </div>
            </div>
          </div>

          <div v-if="!isLoading && selectedPackage" class="mt-4">
            <h3 class="text-sm lg:text-base font-medium">Benefit</h3>
            <div class="mt-[12px] space-y-[8px] lg:space-y-[10px]">
              <div
                v-for="(benefit, id) in selectedVariant.benefits"
                :key="id"
                class="flex gap-[8px] lg:gap-[12px] items-start"
              >
                <img
                  class="mt-[1px] w-[18px] lg:w-[20px]"
                  src="/images/icons/atoms/checked-green.svg"
                  alt="benefit"
                />
                <p class="text-[12px] lg:text-[14px] max-w-[90%]">
                  {{ benefit.description }}
                </p>
              </div>
            </div>
          </div>

          <div v-if="!isLoading && selectedPackage" class="mt-4 lg:mt-8">
            <div
              class="rounded-t-[10px] bg-[#EFFAF8] overflow-x-auto overscroll-auto hide-scrollbar border border-[#EFFAF8] lg:hidden"
            >
              <div class="flex items-center gap-[4px] mx-[15px">
                <div
                  v-for="(menu, id) in bottomMenus"
                  :key="id"
                  class="min-w-max pt-[15px] text-primary font-bold text-sm"
                  :class="`${
                    menu.value == selectedMenu.value ? '' : ' cursor-pointer'
                  }`"
                  @click="
                    menu.value !== selectedMenu.value
                      ? (selectedMenu = menu)
                      : (selectedMenu = selectedMenu),
                      onSelectMenu(menu)
                  "
                >
                  <p class="px-[15px]">
                    {{ menu.name }}
                  </p>
                  <div
                    class="mt-[10px]"
                    :class="`${
                      menu.value == selectedMenu.value
                        ? 'border-b-2 border-green-seakun-secondary-dark underlined'
                        : ' cursor-pointer'
                    }`"
                  ></div>
                </div>
              </div>
            </div>
            <div class="hidden lg:block rounded-t-[10px] border p-3">
              <div class="flex items-center">
                <div
                  v-if="additionalInformation"
                  class="min-w-max p-[15px] text-base"
                  :class="`${
                    selectedMenu.value == 'information'
                      ? 'text-primary bg-[#DFF6F2] rounded-[8px] font-bold'
                      : 'text-[#66738F] cursor-pointer'
                  }`"
                  @click="
                    selectedMenu.value !== 'information'
                      ? (selectedMenu = informationMenu)
                      : (selectedMenu = selectedMenu),
                      onSelectMenu(informationMenu)
                  "
                >
                  <p class="px-[15px]">
                    {{ informationMenu.name }}
                  </p>
                </div>
                <div
                  v-for="(menu, id) in bottomMenus"
                  :key="id"
                  class="min-w-max p-[15px] text-base"
                  :class="`${
                    menu.value == selectedMenu.value
                      ? 'text-primary bg-[#DFF6F2] rounded-[8px] font-bold'
                      : 'text-[#66738F] cursor-pointer'
                  }`"
                  @click="
                    menu.value !== selectedMenu.value
                      ? (selectedMenu = menu)
                      : (selectedMenu = selectedMenu),
                      onSelectMenu(menu)
                  "
                >
                  <p class="px-[15px]">
                    {{ menu.name }}
                  </p>
                </div>
              </div>
            </div>

            <div class="border rounded-b-[10px] p-[12px] bg-white text-sm">
              <div
                v-if="selectedMenu.value == 'information'"
                class="p-[12px] bg-[#F4FCFA]"
              >
                <p>
                  {{ additionalInformation }}
                </p>
              </div>

              <div
                v-else-if="selectedMenu.value == 'orderScheme'"
                class="space-y-[6px] lg:space-y-[10px]"
              >
                <div
                  v-for="(scheme, id) in priceScheme.schemes"
                  :key="id"
                  class="flex gap-[8px] lg:gap-[12px] items-start"
                >
                  <div
                    class="w-[18px] lg:w-[24px] h-[18px] lg:h-[24px] rounded-full bg-primary text-white flex justify-center items-center text-[11px] lg:text-[14px] mt-[2px] lg:mt-0"
                  >
                    {{ id + 1 }}
                  </div>
                  <p class="text-[12px] lg:text-[14px] max-w-[90%] lg:mt-[2px]">
                    {{ scheme }}
                  </p>
                </div>
              </div>

              <div
                v-else-if="selectedMenu.value == 'rules'"
                class="space-y-[6px] lg:space-y-[10px]"
              >
                <div
                  v-for="(rule, id) in providerRules"
                  :key="id"
                  class="flex gap-[8px] lg:gap-[12px] items-start"
                >
                  <div
                    class="w-[18px] lg:w-[24px] h-[18px] lg:h-[24px] rounded-full bg-primary text-white flex justify-center items-center text-[11px] lg:text-[14px] mt-[2px] lg:mt-0"
                  >
                    {{ id + 1 }}
                  </div>
                  <p class="text-[12px] lg:text-[14px] max-w-[90%] lg:mt-[2px]">
                    {{ rule }}
                  </p>
                </div>
              </div>

              <template v-else-if="selectedMenu.value == 'group'">
                <template v-if="!isLoadingGroup">
                  <div v-if="providerGroups.length > 0">
                    <div class="flex flex-wrap gap-[12px] lg:gap-[20px]">
                      <GroupCard
                        v-for="(group, id) in providerGroups"
                        :key="id"
                        :group="group"
                        :provider="providerSlug"
                      />
                    </div>
                    <a
                      :href="`/info/customers?provider=${providerSlug}&id=${providerUid}`"
                      target="_blank"
                      class="mt-[12px] lg:mt-[16px] flex gap-[8px] justify-center items-center w-full text-primary"
                    >
                      <p>Show more</p>
                      <img
                        src="/images/icons/atoms/chevron-green.svg"
                        alt="show more"
                      />
                    </a>
                  </div>
                  <div
                    v-else
                    class="rounded-[8px] py-6 border text-center w-full"
                  >
                    <p class="text-sm lg:text-base">Belum ada grup</p>
                  </div>
                </template>
                <div v-else class="flex flex-wrap gap-[12px] lg:gap-[20px]">
                  <GroupCardShimmer />
                  <GroupCardShimmer />
                </div>
              </template>
            </div>
          </div>
        </div>

        <div class="hidden lg:block mt-8 w-[352px] h-[1200px]">
          <div class="border rounded-[8px] p-4">
            <p class="font-medium">Skema Harga</p>
            <div
              v-for="(info, id) in priceScheme.informations"
              :key="id"
              class="flex items-center justify-between text-sm mt-1"
              :class="`${
                id == priceScheme.informations.length - 1 ? 'font-bold' : ''
              }`"
            >
              <p>{{ info.title }}</p>
              <p>{{ info.value }}</p>
            </div>
          </div>

          <div v-if="!isLoading && selectedPackage" class="mt-[20px]">
            <h3 class="font-medium">Pilih Durasi Berlangganan</h3>
            <div class="mt-[12px] grid grid-cols-2 gap-[16px]">
              <div
                v-for="(variant, id) in selectedPackage.variants"
                :key="id"
                @click="onSelectVariant(variant)"
                class="rounded-[6px] h-[37px] flex justify-center items-center gap-[4px]"
                :class="`${
                  variant.uid == selectedVariant.uid
                    ? 'bg-[#DFF6F2]'
                    : 'bg-[#F6FBFA] cursor-pointer'
                }`"
              >
                <img
                  :src="`/images/icons/atoms/${
                    variant.uid == selectedVariant.uid
                      ? 'radio-button-active'
                      : 'radio-button'
                  }.svg`"
                  alt="radio"
                />
                <p
                  class="text-sm"
                  :class="`${
                    variant.uid == selectedVariant.uid
                      ? 'text-primary'
                      : 'text-[#66738F]'
                  }`"
                >
                  {{ variant.duration }} Bulan
                </p>
              </div>
            </div>
          </div>

          <div
            v-if="!isLoading && selectedPackage"
            class="mt-[20px] flex justify-between items-center"
          >
            <p class="font-medium">Total Biaya</p>
            <p class="text-primary font-bold">
              {{ currencyFormat(selectedVariant.grandTotal) }}
            </p>
          </div>
          <Button
            @click="onClickOrder"
            add-class="w-full text-base text-white bg-primary py-3 text-center font-bold mt-[24px]"
            :disabled="!selectedPackage"
            >Pesan</Button
          >
        </div>
      </div>
    </div>

    <div
      class="fixed z-50 bottom-0 left-0 bg-white p-3 md:p-5 w-full lg:hidden shadowed"
    >
      <div class="mx-auto w-[321px] md:w-full md:grid md:grid-cols-2 md:gap-3">
        <div
          v-if="!isLoading && selectedPackage"
          class="flex justify-between items-center mb-2 md:mb-0 md:block"
        >
          <p class="text-sm md:text-base font-medium">Total Biaya</p>
          <p class="text-sm md:text-[20px] md:mt-1 font-bold text-primary">
            {{ currencyFormat(selectedVariant.grandTotal) }}
          </p>
        </div>
        <Button
          @click="onClickOrder"
          add-class="w-full text-white bg-primary py-2 md:py-3 text-center font-bold"
          :disabled="!selectedPackage"
          >Pesan</Button
        >
      </div>
    </div>

    <Snackbar ref="snackbar" />
  </div>
</template>

<script>
import NavbarProvider from '~/components/mollecules/NavbarProvider.vue';
import { providerList } from '~/constants/price-scheme';
import { currencyFormat } from '~/helpers/word-transformation';
import GroupCard from './views/group-card.vue';
import GroupCardShimmer from './views/group-card-shimmer.vue';
import MasterService from '~/services/MasterServices';
import Button from '~/components/atoms/Button.vue';
import Snackbar from '~/components/mollecules/Snackbar.vue';
import { mapActions } from 'vuex';

export default {
  components: {
    NavbarProvider,
    GroupCard,
    Button,
    GroupCardShimmer,
    Snackbar,
  },
  data() {
    return {
      MasterService,
      providerSlug: '',
      providerUid: '',
      priceScheme: {},
      providerList,
      paramProfiderDetail: {
        uid: '',
      },
      paramProviderGroup: {
        page: 1,
        limit: 4,
        providerUid: '',
      },
      isLoadingGroup: false,
      providerGroups: [],
      provider: {},
      packages: [],
      selectedPackage: null,
      selectedVariant: null,
      packageVariantUid: '',
      isLoading: true,
      informationMenu: {
        name: 'Informasi',
        value: 'information',
      },
      bottomMenus: [
        {
          name: 'Skema Berlangganan',
          value: 'orderScheme',
        },
        // {
        //   name: 'Rules',
        //   value: 'rules',
        // },
        {
          name: 'Grup Patungan',
          value: 'group',
        },
      ],
      selectedMenu: {},
      additionalInformation: '',
      orderScheme: [],
      providerRules: [
        'Lorem ipsum dolor sit amet, consectetur',
        'Adipiscing elit, sed do eiusmod tempor incididunt',
        'Lorem ipsum dolor sit amet, consectetur ',
        'Adipiscing elit, sed do eiusmod tempor incididunt',
      ],
      isShowPriceScheme: false,
    };
  },
  mounted() {
    const { id, name } = this.$route.query;
    this.MasterService = new MasterService(this);
    this.providerSlug = name;
    this.providerUid = id;
    this.paramProfiderDetail.uid = id;
    this.paramProviderGroup.providerUid = id;
    this.getProviderDetail();
    this.limitGroupByScreenSize();
    this.selectedMenu = this.bottomMenus[0];
  },
  methods: {
    ...mapActions({
      createOrder: 'createOrder',
    }),
    limitGroupByScreenSize() {
      let screen = window.innerWidth;
      let limitGroup = 3;
      if (screen <= 1024) {
        limitGroup = 4;
      } else {
        limitGroup = 3;
      }
      this.paramProviderGroup.limit = limitGroup;
    },
    onClickOrder() {
      const customerUid = this.$cookies.get('customerUid');
      if (customerUid) {
        const payload = {
          customerUid: customerUid,
          packageVariantUid: this.selectedVariant.uid,
          ispreorder: this.selectedPackage.po === 1,
          userhost: this.selectedPackage.host === 1,
        };
        this.createOrder(payload);
      } else {
        this.$refs.snackbar.showSnackbar({
          message: `Harap login untuk memesan`,
          className: '',
          color: 'bg-red-400',
          duration: 3000,
        });
        setTimeout(() => {
          this.$router.push('/login');
        }, 3000);
      }
    },
    onSelectMenu(menu) {
      if (menu.value == 'group' && this.providerGroups.length == 0) {
        this.getProviderGroup();
      }
    },
    onSelectPackage(pkg) {
      if (pkg.packageUid !== this.selectedPackage.packageUid) {
        this.selectedPackage = pkg;
        this.selectedVariant = this.selectedPackage.variants[0];
        this.priceScheme = this.providerList.find((scheme) => {
          return scheme.desc === this.selectedPackage.variants[0].notes;
        });
        this.additionalInformation =
          this.selectedPackage.po == 1
            ? 'Dengan memilih paket Pre-order artinya kamu menunggu grup penuh. Begitu slot sudah penuh, kamu akan dihubungi oleh Admin Seakun untuk melakukan pembayaran.'
            : '';
      }
    },
    onSelectVariant(variant) {
      this.selectedVariant = variant;
    },
    async getProviderDetail() {
      this.isLoading = true;
      const { MasterService, paramProfiderDetail } = this;
      try {
        const fetchProviderDetail = await MasterService.getProviderDetail(
          paramProfiderDetail
        );
        if (fetchProviderDetail.data) {
          const { data } = fetchProviderDetail.data;
          this.provider = data;
          this.packages = this.provider.packages;
          this.selectedPackage = this.packages.find((pkg) => {
            return pkg.active == 1;
          });
          if (this.selectedPackage) {
            this.additionalInformation =
              this.selectedPackage.po == 1
                ? 'Dengan memilih paket Pre-order artinya kamu menunggu grup penuh. Begitu slot sudah penuh, kamu akan dihubungi oleh Admin Seakun untuk melakukan pembayaran.'
                : '';
            this.selectedVariant = this.selectedPackage.variants.find(
              (variant) => {
                return variant.isActive == 1;
              }
            );
            if (this.selectedVariant) {
              this.packageVariantUid = this.selectedVariant.uid;
            }
            this.priceScheme = this.providerList.find((scheme) => {
              return scheme.desc === this.selectedPackage.variants[0].notes;
            });
          }
        }
      } catch (error) {
        console.log(error);
      }
      this.isLoading = false;
    },
    async getProviderGroup() {
      this.isLoadingGroup = true;
      const { MasterService, paramProviderGroup } = this;
      try {
        const fetchGroup = await MasterService.getAccountGroups(
          paramProviderGroup
        );
        if (fetchGroup.data) {
          const { data } = fetchGroup.data;
          this.providerGroups = data;
          console.log(data);
        }
      } catch (error) {
        console.log(error);
      }
      this.isLoadingGroup = false;
    },
    currencyFormat,
  },
};
</script>

<style lang="scss" scoped>
.underlined {
  height: 2px;
  max-width: 0%;
  animation: drawBorder 0.2s ease forwards;
}

.shadowed {
  box-shadow: 2px 12px 15px 5px;
}

@keyframes drawBorder {
  from {
    max-width: 0%;
  }
  to {
    max-width: 100%;
  }
}
</style>
