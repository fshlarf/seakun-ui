<template>
  <div>
    <NavbarProvider @toggleMenu="onToggleNavbarMenu" />
    <div
      v-if="isOpenMenu"
      class="fixed z-40 top-0 left-0 w-full h-screen bg-black/40"
    ></div>
    <div class="pt-20 px-[20px] md:w-full md:container dm-sans pb-28">
      <div class="flex items-center gap-2 text-sm">
        <nuxt-link class="text-primary" to="/seglowup">Beranda</nuxt-link>
        <p>></p>
        <p>Zap {{ priceScheme.series }}</p>
      </div>
      <template v-if="!isLoading">
        <div
          v-if="selectedPackage"
          class="mt-4 rounded-[10px] w-full xl:h-auto overflow-hidden flex justify-center items-center"
        >
          <img
            class="!object-contain w-full xl:w-full xl:h-auto"
            :src="
              isDesktopView
                ? priceScheme.screenshot
                : priceScheme.screenshotMobile
            "
            alt="provider price"
          />
        </div>
        <div
          v-else
          class="mt-4 rounded-[10px] w-full h-[204px] xl:h-auto overflow-hidden flex justify-center items-center"
        >
          <img
            class="!object-contain max-h-full max-w-full xl:w-full xl:h-auto"
            :src="
              isDesktopView
                ? '/images/price-scheme/desktop/not-active.webp'
                : '/images/price-scheme/mobile/not-active.webp'
            "
            alt="provider not active"
          />
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
            <div class="flex items-center gap-[12px] lg:gap-3">
              <img
                class="w-[32px] xl:w-[40px] shrink-0 rounded-[5px]"
                :src="`/images/icons/zap/${priceScheme.series}.svg`"
                alt="provider logo"
              />
              <p class="text-[18px] lg:text-[24px] font-bold whitespace-nowrap">
                {{ priceScheme.series }}
              </p>
            </div>
            <div
              v-if="selectedPackage && selectedPackage.po == 1"
              class="text-[12px] lg:text-[14px] bg-[#F6F6BE] rounded-full px-3 py-1 font-medium shrink-0"
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
                >/ 8x Treatment
              </span>
            </p>
            <div
              role="button"
              @click="isShowPriceScheme = !isShowPriceScheme"
              class="flex items-center gap-1 lg:hidden"
            >
              <p class="text-[#66738F] text-[12px]">Skema Harga</p>
              <img
                :class="{ '-rotate-180': isShowPriceScheme }"
                src="/images/icons/atoms/chevron-gray.svg"
                alt="chevron"
                class="transtion-all ease-in-out duration-200"
              />
            </div>
          </div>

          <section
            class="transition-all ease-in-out duration-200 overflow-hidden"
            :class="`${
              !isLoading && selectedPackage && isShowPriceScheme
                ? 'h-max pt-[12px] '
                : 'h-0 opacity-0'
            }`"
          >
            <div
              class="rounded-[8px] py-3 px-[12px] border border-[#66738F80]/50"
            >
              <p class="text-[12px] font-bold">Skema Harga</p>
              <div
                v-for="(info, id) in priceScheme.informations"
                :key="id"
                class="grid grid-cols-2 gap-1 items-start text-xs py-1"
                :class="`${
                  id == priceScheme.informations.length - 1 ? 'font-bold' : ''
                }`"
              >
                <p v-html="info.title"></p>
                <p class="text-right" v-html="info.value"></p>
              </div>
            </div>
          </section>

          <section class="mt-4">
            <h3 class="text-sm lg:text-base font-medium">Pilih Paket</h3>
            <div
              v-if="!isLoading"
              class="mt-[12px] grid grid-cols-3 md:grid-cols-5 gap-[12px]"
            >
              <PackageCard
                v-for="(pkg, id) in packages"
                :key="id"
                :id="id"
                :pkg="pkg"
                :selected-package="selectedPackage"
                @onSelectPackage="onSelectPackage"
              />
            </div>
            <div
              v-else
              name="packageLoader"
              class="flex items-center gap-[12px] mt-[12px]"
            >
              <div
                class="shimmer !rounded-[8px] w-[99px] h-[80px] md:w-[233px] md:h-[160px] md:rounded-[8px] !overflow-hidden"
              ></div>
              <div
                class="shimmer !rounded-[8px] w-[99px] h-[80px] md:w-[233px] md:h-[160px] md:rounded-[8px] !overflow-hidden"
              ></div>
            </div>
          </section>

          <section
            v-if="!isLoading && selectedPackage && selectedPackage.active == 1"
            class="mt-4 lg:hidden"
          >
            <h3 class="text-sm font-medium">Jumlah Treatment</h3>
            <div class="mt-[12px] grid grid-cols-2 gap-[12px]">
              <div v-for="(variant, id) in selectedPackage.variants" :key="id">
                <div
                  v-if="variant.isActive == 1"
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
                    8x Treatment
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section v-if="!isLoading && selectedPackage" class="mt-4">
            <h3 class="text-sm lg:text-base font-medium">Benefit</h3>
            <div class="mt-[12px] space-y-[8px] lg:space-y-[10px]">
              <div
                v-for="(benefit, id) in selectedVariant.benefits"
                :key="id"
                class="flex gap-[8px] lg:gap-[12px] items-start"
              >
                <img
                  class="w-[18px] lg:w-[20px]"
                  src="/images/icons/atoms/checked-green-2.svg"
                  alt="benefit"
                />
                <p class="text-[12px] lg:text-[14px] max-w-[90%]">
                  {{ benefit.description }}
                </p>
              </div>
            </div>
          </section>

          <!-- Bottom menu -->
          <section v-if="!isLoading && selectedPackage" class="mt-4 lg:mt-8">
            <div
              class="rounded-t-[10px] bg-[#EFFAF8] overflow-x-auto overscroll-auto hide-scrollbar border border-[#EFFAF8] lg:hidden"
            >
              <div class="flex items-center gap-[4px]">
                <div
                  v-for="(menu, id) in bottomMenus"
                  :key="id"
                  class="min-w-max pt-[15px] px-3 text-primary font-bold text-sm"
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
                v-html="priceScheme.additionalInfo"
              ></div>
              <div
                v-else-if="selectedMenu.value == 'categoryTreatment'"
                class="space-y-4"
              >
                <div
                  v-for="(category, id) in isShowLessCategory
                    ? priceScheme.categoryTreatment.slice(0, 3)
                    : priceScheme.categoryTreatment"
                  :key="id"
                >
                  <section class="flex items-center gap-2 md:gap-3">
                    <div
                      class="w-[18px] lg:w-[24px] h-[18px] lg:h-[24px] rounded-full bg-[#08A081] text-white flex justify-center items-center text-[11px] lg:text-[14px] mt-[2px] lg:mt-0"
                    >
                      {{ id + 1 }}
                    </div>
                    <p class="text-sm text-main font-medium">
                      {{ category.title }}
                    </p>
                  </section>
                  <div class="mt-[7px] space-y-[2px] md:space-y-[6px]">
                    <section
                      v-for="(desc, id) in category.description"
                      :key="id"
                      class="flex gap-2 md:gap-3"
                    >
                      <div class="w-[18px] lg:w-[24px]"></div>
                      <div class="flex items-center gap-2">
                        <div
                          class="rounded-full bg-[#AECBBB] w-[6px] h-[6px] md:w-2 md:h-2"
                        ></div>
                        <p class="max-w-[246px] md:max-w-full">
                          {{ desc.text }}
                        </p>
                      </div>
                    </section>
                  </div>
                </div>
                <div
                  class="w-max mx-auto text-sm text-[#00BA88] font-medium flex items-center gap-1 cursor-pointer"
                  @click="isShowLessCategory = !isShowLessCategory"
                >
                  <p>
                    {{
                      isShowLessCategory
                        ? 'Tampilkan Semua'
                        : 'Tampilkan Sedikit'
                    }}
                  </p>
                  <Chevron color="#00BA88" :isShow="!isShowLessCategory" />
                </div>
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
                    class="w-[18px] lg:w-[24px] h-[18px] lg:h-[24px] rounded-full bg-[#00BA88] text-white flex justify-center items-center text-[11px] lg:text-[14px] mt-[2px] lg:mt-0"
                  >
                    {{ id + 1 }}
                  </div>
                  <p class="text-[12px] lg:text-[14px] max-w-[90%] lg:mt-[2px]">
                    {{ scheme }}
                  </p>
                </div>
              </div>

              <template v-else-if="selectedMenu.value == 'group'">
                <template v-if="!isLoadingGroup">
                  <div v-if="providerGroups.length > 0">
                    <div
                      class="flex flex-wrap justify-center gap-[12px] lg:gap-[20px]"
                    >
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
          </section>
          <!-- Bottom menu -->
        </div>

        <div class="hidden lg:block mt-8 w-[352px]">
          <div class="border rounded-[8px] p-4">
            <p class="font-medium">Skema Harga</p>
            <div
              v-for="(info, id) in priceScheme.informations"
              :key="id"
              class="grid grid-cols-2 gap-1 items-start text-sm py-1 text-main"
              :class="`${
                id == priceScheme.informations.length - 1 ? 'font-bold' : ''
              }`"
            >
              <p v-html="info.title"></p>
              <p class="text-right" v-html="info.value"></p>
            </div>
          </div>

          <div
            v-if="!isLoading && selectedPackage && selectedPackage.active == 1"
            class="mt-[20px]"
          >
            <h3 class="font-medium">Jumlah Treatment</h3>
            <div class="mt-[12px] grid grid-cols-2 gap-[16px]">
              <div v-for="(variant, id) in selectedPackage.variants" :key="id">
                <div
                  v-if="variant.isActive == 1"
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
                    8x Treatment
                  </p>
                </div>
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
            :disabled="selectedPackage && selectedPackage.active == 0"
            :is-loading="isLoadingCreateOrder"
            >{{
              selectedPackage && selectedPackage.active == 1
                ? 'Pesan'
                : 'Slot sedang penuh'
            }}</Button
          >
        </div>
      </div>
    </div>

    <div
      class="fixed z-30 bottom-0 left-0 bg-white py-3 md:py-5 w-full lg:hidden shadowed"
    >
      <div class="px-[20px] md:w-full md:grid md:grid-cols-2 md:gap-3">
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
          add-class="w-full text-white bg-primary py-3 md:py-3 text-center font-bold"
          :disabled="selectedPackage && selectedPackage.active == 0"
          :is-loading="isLoadingCreateOrder"
          >{{
            selectedPackage && selectedPackage.active == 1
              ? 'Pesan'
              : 'Slot sedang penuh'
          }}</Button
        >
      </div>
    </div>

    <ModalBlackListWarning
      :show-modal="isShowModalBlackList"
      @onClose="closeModalBlackList"
    />
  </div>
</template>

<script>
import NavbarProvider from '~/components/mollecules/NavbarProvider.vue';
import { providerList } from '~/constants/price-scheme';
import { seglowupPriceList } from '~/constants/seglowup-price';
import { currencyFormat } from '~/helpers/word-transformation';
import GroupCard from './views/group-card.vue';
import PackageCard from './views/package-card.vue';
import GroupCardShimmer from './views/group-card-shimmer.vue';
import MasterService from '~/services/MasterServices';
import Button from '~/components/atoms/Button.vue';
import Chevron from '~/components/atoms/Chevron.vue';
import OrderService from '~/services/OrderServices.js';
import ModalBlackListWarning from '~/components/mollecules/ModalBlackListWarning.vue';
import moment from 'moment';

export default {
  components: {
    NavbarProvider,
    GroupCard,
    Button,
    GroupCardShimmer,
    Chevron,
    ModalBlackListWarning,
    PackageCard,
  },
  data() {
    return {
      MasterService,
      providerSlug: '',
      providerUid: '',
      priceScheme: {},
      providerList,
      seglowupPriceList,
      isShowLessCategory: true,
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
          name: 'Kategory Treatment',
          value: 'categoryTreatment',
        },
        {
          name: 'Informasi',
          value: 'information',
        },
        {
          name: 'Skema Patungan',
          value: 'orderScheme',
        },
        {
          name: 'Grup Patungan',
          value: 'group',
        },
      ],
      selectedMenu: {},
      orderScheme: [],
      isShowPriceScheme: false,
      isOpenMenu: false,
      isLoadingCreateOrder: false,
      isShowModalBlackList: false,
    };
  },
  computed: {
    isDesktopView() {
      let screen = window.innerWidth;
      return screen >= 768;
    },
  },
  mounted() {
    const { id, name } = this.$route.query;
    this.MasterService = new MasterService(this);
    this.OrderServices = new OrderService(this);
    this.providerSlug = name;
    this.providerUid = id;
    this.paramProfiderDetail.uid = id;
    this.paramProviderGroup.providerUid = id;
    this.getProviderDetail();
    this.limitGroupByScreenSize();
    this.selectedMenu = this.bottomMenus[0];
  },
  methods: {
    closeModalBlackList() {
      this.isShowModalBlackList = false;
    },
    async createOrder() {
      this.isLoadingCreateOrder = true;
      try {
        const payload = {
          packageVariantUid: this.selectedVariant.uid,
          ispreorder: this.selectedPackage.po === 1,
          userhost: this.selectedPackage.host === 1,
        };
        const fetchCreateOrder = await this.OrderServices.createOrder(payload);
        if (fetchCreateOrder.data) {
          const dataResult = fetchCreateOrder.data.data;
          const params = {
            ...payload,
            customerUid: dataResult.customerUid,
            orderUid: dataResult.orderUid,
            type: dataResult.provider.type,
            redirectUrl: dataResult.redirectUrl,
          };
          localStorage.setItem(
            'swo',
            JSON.stringify({ ...dataResult, createdAt: moment().unix() })
          );
          this.toPaymentPage(params.redirectUrl);
        } else {
          throw new Error(fetchCreateOrder);
        }
      } catch (error) {
        console.log(error);
        if (
          error.response &&
          error.response.data.message.includes('blocked customer')
        ) {
          this.isShowModalBlackList = true;
        } else if (error.response.data.message.includes('token required')) {
          this.$router.push('/login');
        }
      }
      this.isLoadingCreateOrder = false;
    },
    toPaymentPage(url) {
      window.location.href = url;
    },
    onToggleNavbarMenu(isOpen) {
      this.isOpenMenu = isOpen;
    },
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
          packageVariantUid: this.selectedVariant.uid,
          ispreorder: this.selectedPackage.po === 1,
          userhost: this.selectedPackage.host === 1,
        };
        this.createOrder(payload);
      } else {
        this.$alert.show({
          status: 'error',
          duration: 4000,
          message: 'Harap login untuk memesan',
        });
        setTimeout(() => {
          this.$router.push('/login');
        }, 2000);
      }
    },
    onSelectMenu(menu) {
      if (menu.value == 'group' && this.providerGroups.length == 0) {
        this.getProviderGroup();
      }
    },
    onSelectPackage(pkg) {
      if (pkg.packageName !== this.selectedPackage.packageName) {
        this.selectedPackage = pkg;
        this.selectedVariant = this.selectedPackage.variants[0];
        const scheme = this.seglowupPriceList.find((scheme) => {
          return scheme.desc === this.selectedVariant.notes;
        });
        this.priceScheme = scheme
          ? scheme
          : this.seglowupPriceList.find(
              (scheme) => scheme.desc == this.selectedPackage.variants[0].notes
            );
      }
    },
    onSelectVariant(variant) {
      this.selectedVariant = variant;
      const scheme = this.seglowupPriceList.find((scheme) => {
        return scheme.desc === this.selectedVariant.notes;
      });
      this.priceScheme = scheme
        ? scheme
        : this.seglowupPriceList.find(
            (scheme) => scheme.desc == this.selectedPackage.variants[0].notes
          );
    },
    async getProviderDetail() {
      this.isLoading = true;
      const { package_id } = this.$route.query;
      const { MasterService, paramProfiderDetail } = this;
      try {
        const fetchProviderDetail = await MasterService.getProviderDetail(
          paramProfiderDetail
        );
        if (fetchProviderDetail.data) {
          const { data } = fetchProviderDetail.data;
          this.provider = data;
          this.packages = this.provider.packages.filter((pkg) => {
            return pkg.variants.some((variant) => variant.isDisplayed == 1);
          });
          this.selectedPackage = this.packages.find(
            (pkg) => pkg.packageUid == package_id
          );
          this.selectedPackage = this.selectedPackage
            ? this.selectedPackage
            : this.packages[0];
          if (this.selectedPackage) {
            this.selectedVariant = this.selectedPackage.variants[0];
            if (this.selectedVariant) {
              this.packageVariantUid = this.selectedVariant.uid;
            }
            const scheme = this.seglowupPriceList.find((scheme) => {
              return scheme.desc === this.selectedVariant.notes;
            });
            this.priceScheme = scheme
              ? scheme
              : this.seglowupPriceList.find(
                  (scheme) =>
                    scheme.desc == this.selectedPackage.variants[0].notes
                );
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
          this.providerGroups = data ? data : [];
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
