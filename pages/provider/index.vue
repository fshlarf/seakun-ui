<template>
  <div>
    <NavbarProvider />
    <div
      class="pt-20 bg-red-20 mx-auto w-[321px] md:w-full md:container dm-sans"
    >
      <div class="flex items-center gap-2 text-sm">
        <nuxt-link class="text-primary" to="/">Beranda</nuxt-link>
        <p>></p>
        <p>{{ provider.name }}</p>
      </div>
      <div
        class="mt-4 rounded-[10px] w-full h-[204px] overflow-hidden border flex justify-center items-center"
      >
        <img
          class="object-contain"
          :src="priceScheme.screenshot"
          alt="provider price"
        />
      </div>

      <div class="mt-4 flex justify-between items-center">
        <div class="flex items-center gap-1">
          <img
            class="h-[20px]"
            :src="`/images/icons/${provider.slug}.svg`"
            alt="provider logo"
          />
          <p class="text-[18px] font-bold">{{ provider.name }}</p>
        </div>
        <div
          v-if="selectedPackage && selectedPackage.po == 1"
          class="text-[12px] bg-[#F6F6BE] rounded-full px-3 py-1 font-bold"
        >
          Preorder
        </div>
      </div>

      <div class="mt-[12px] flex justify-between items-center">
        <p class="text-primary font-bold">
          {{
            currencyFormat(
              selectedVariant.uid
                ? selectedVariant.grandTotal
                : selectedPackage.variants[0].grandTotal
            )
          }}<span class="text-[#66738F] text-[12px] font-normal"
            >/{{
              selectedVariant.uid
                ? selectedVariant.duration
                : selectedPackage.variants[0].duration
            }}
            bulan</span
          >
        </p>
        <div class="flex items-center gap-1">
          <p class="text-[#66738F] text-[12px]">Skema Harga</p>
          <img src="/images/icons/atoms/chevron-gray.svg" alt="chevron" />
        </div>
      </div>

      <div
        class="mt-[12px] rounded-[8px] p-[12px] border border-[#66738F80]/50"
      >
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

      <div class="mt-4">
        <h3 class="text-sm font-medium">Pilih Paket</h3>
        <div class="mt-[12px] flex items-center gap-[12px]">
          <!-- <div > -->
          <div
            v-for="(pkg, id) in packages"
            :key="id"
            class="relative z-0 rounded-[8px] w-[99px] md:w-[233px] md:rounded-[8px] overflow-hidden"
            :class="{
              'border-2 border-primary':
                selectedPackage.packageUid == pkg.packageUid,
            }"
          >
            <div
              v-if="pkg.active !== 1"
              class="absolute z-20 w-full h-full bg-black/40 flex justify-center items-center"
            >
              <div class="bg-white rounded-full px-2 py-1 text-[10px]">
                Slot Penuh
              </div>
            </div>
            <div
              @click="onSelectPackage(pkg)"
              class="absolute z-10 bottom-0 left-0 w-full h-[39px] md:h-[71px] px-1 flex justify-center items-center pt-3"
              :class="`${
                pkg.packageUid !== selectedPackage.packageUid
                  ? 'cursor-pointer'
                  : ''
              }`"
            >
              <p class="text-[10px] font-bold text-white">
                {{ pkg.packageName }}
              </p>
            </div>
            <img
              @click="onSelectPackage(pkg)"
              class="w-full"
              :class="`${
                pkg.packageUid !== selectedPackage.packageUid
                  ? 'cursor-pointer'
                  : ''
              }`"
              :src="`/images/product/${provider.slug}.svg`"
              alt="provider"
            />
          </div>
          <!-- </div> -->
        </div>
      </div>

      <div class="mt-4">
        <h3 class="text-sm font-medium">Pilih Durasi Berlangganan</h3>
        <div
          v-if="!selectedVariant.uid"
          class="mt-[12px] rounded-[6px] text-center py-3 bg-[#F6FBFA] text-[#66738F] text-sm"
        >
          Paket tidak aktif
        </div>
        <div v-else class="mt-[12px] grid grid-cols-3 gap-[12px]">
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

      <div class="mt-4">
        <h3 class="text-sm font-medium">Benefit</h3>
        <div class="mt-[12px] space-y-[8px]">
          <div
            v-for="(benefit, id) in selectedVariant.benefits"
            :key="id"
            class="flex gap-[8px] items-start"
          >
            <img
              class="mt-[1px] w-[18px]"
              src="/images/icons/atoms/checked-green.svg"
              alt="benefit"
            />
            <p class="text-[12px] max-w-[90%]">
              {{ benefit.description }}
            </p>
          </div>
        </div>
      </div>

      <div class="mt-4">
        <div
          class="rounded-t-[10px] bg-[#EFFAF8] overflow-x-auto overscroll-auto hide-scrollbar"
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
        <div class="border rounded-b-[10px] p-[12px] bg-white text-sm">
          <div
            v-if="selectedMenu.value == 'information'"
            class="p-[12px] bg-[#F4FCFA]"
          >
            <p>
              Paket Patungan pada Gramedia terdapat 3 macam, yaitu Paket
              Gramedia (Full Premium), Fiksi dan Non Fiksi. Untuk dapat
              menggunakan paket ini, kamu harus menunggu terlebih dahulu karena
              bersifat Preorder.
            </p>
          </div>

          <div
            v-else-if="selectedMenu.value == 'orderScheme'"
            class="space-y-[6px]"
          >
            <div
              v-for="(scheme, id) in priceScheme.schemes"
              :key="id"
              class="flex gap-[8px] items-start"
            >
              <div
                class="w-[18px] h-[18px] rounded-full bg-primary text-white flex justify-center items-center text-[11px] mt-[2px]"
              >
                {{ id + 1 }}
              </div>
              <p class="text-[12px] max-w-[90%]">{{ scheme }}</p>
            </div>
          </div>

          <div v-else-if="selectedMenu.value == 'rules'" class="space-y-[6px]">
            <div
              v-for="(rule, id) in providerRules"
              :key="id"
              class="flex gap-[8px] items-start"
            >
              <div
                class="w-[18px] h-[18px] rounded-full bg-primary text-white flex justify-center items-center text-[11px] mt-[2px]"
              >
                {{ id + 1 }}
              </div>
              <p class="text-[12px] max-w-[90%]">{{ rule }}</p>
            </div>
          </div>

          <div
            v-else-if="selectedMenu.value == 'group'"
            class="flex flex-wrap gap-[12px]"
          >
            <GroupCard
              v-for="(group, id) in providerGroups"
              :key="id"
              :group="group"
            />
            <!-- <GroupCard /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarProvider from '~/components/mollecules/NavbarProvider.vue';
import { providerList } from '~/constants/price-scheme';
import { currencyFormat } from '~/helpers/word-transformation';
import GroupCard from './views/group-card.vue';
import MasterService from '~/services/MasterServices';

export default {
  components: {
    NavbarProvider,
    GroupCard,
  },
  data() {
    return {
      MasterService,
      providerSlug: 'gramedia-digital',
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
      selectedPackage: {},
      selectedVariant: {},
      packageVariantUid: '',
      isLoading: true,
      bottomMenus: [
        {
          name: 'Informasi',
          value: 'information',
        },
        {
          name: 'Skema Berlangganan',
          value: 'orderScheme',
        },
        {
          name: 'Rules',
          value: 'rules',
        },
        {
          name: 'Grup Patungan',
          value: 'group',
        },
      ],
      selectedMenu: {},
      information:
        'Paket Patungan pada Gramedia terdapat 3 macam, yaitu Paket Gramedia (Full Premium), Fiksi dan Non Fiksi. Untuk dapat menggunakan paket ini, kamu harus menunggu terlebih dahulu karena bersifat Preorder.',
      orderScheme: [
        'Seakun membuat akun dan membeli PAKET PREMIUM di Gramedia',
        'Akun dishare HANYA ke 2 member dalam 1 grup',
      ],
      providerRules: [
        'Lorem ipsum dolor sit amet, consectetur',
        'Adipiscing elit, sed do eiusmod tempor incididunt',
        'Lorem ipsum dolor sit amet, consectetur ',
        'Adipiscing elit, sed do eiusmod tempor incididunt',
      ],
    };
  },
  mounted() {
    this.MasterService = new MasterService(this);
    const { id, name } = this.$route.query;
    this.paramProfiderDetail.uid = id;
    this.paramProviderGroup.providerUid = id;
    this.getProviderDetail();
    this.providerSlug = name;
    // this.priceScheme = this.providerList.find((el) => {
    //   return el.slug === this.providerSlug;
    // });
    this.selectedMenu = this.bottomMenus[0];
  },
  methods: {
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
          } else {
            this.selectedPackage = this.provider.packages[0];
            this.priceScheme = this.providerList.find((scheme) => {
              return (
                scheme.desc === this.provider.packages[0].variants[0].notes
              );
            });
          }
          console.log(fetchProviderDetail.data);
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

@keyframes drawBorder {
  from {
    max-width: 0%;
  }
  to {
    max-width: 100%;
  }
}
</style>
