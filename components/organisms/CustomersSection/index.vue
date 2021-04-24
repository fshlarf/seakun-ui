<template>
  <div id="customers">
    <div class="customers">
      <Title title="Pengguna Seakun.id" />
      <div class="customers__content" v-if="netflixCustomers.length > 0">
        <div class="customers__content--carousell scroll" id="content">
          <div class="provider netflix">
            <div class="provider-content">
              <img src="/images/netflix.png" alt="" />
              <p>Grup Netflix yang sudah berlanggan lewat Seakun.id</p>
              <button class="btn btn-primary" @click="showMore('netflix')">
                Yuk lihat dulu!
              </button>
            </div>
          </div>
          <div v-for="(customer, index) in netflixCustomers" :key="index">
            <CustomersGroupCard :dataCustomer="customer" />
          </div>
          <ButtonChevron @click-chevron="showMore('netflix')" />
        </div>
      </div>
      <div class="customers__content" v-if="spotifyCustomers.length > 0">
        <div class="customers__content--carousell scroll" id="content">
          <div class="provider spotify">
            <div class="provider-content">
              <img src="/images/spotify.png" alt="" />
              <p>Grup Spotify yang sudah berlanggan lewat Seakun.id</p>
              <button class="btn btn-primary" @click="showMore('spotify')">
                Yuk lihat dulu!
              </button>
            </div>
          </div>
          <div v-for="(customer, index) in spotifyCustomers" :key="index">
            <CustomersGroupCard :dataCustomer="customer" />
          </div>
          <ButtonChevron @click-chevron="showMore('spotify')" />
        </div>
      </div>
      <div class="customers__content" v-if="gramediaCustomers.length > 0">
        <div class="customers__content--carousell scroll" id="content">
          <div class="provider gramedia">
            <div class="provider-content">
              <img src="/images/gramedia.png" alt="" />
              <p>Grup Gramedia yang sudah berlanggan lewat Seakun.id</p>
              <button class="btn btn-primary" @click="showMore('gramedia')">
                Yuk lihat dulu!
              </button>
            </div>
          </div>
          <div v-for="(customer, index) in gramediaCustomers" :key="index">
            <CustomersGroupCard :dataCustomer="customer" />
          </div>
          <ButtonChevron @click-chevron="showMore('gramedia')" />
        </div>
      </div>
      <div class="customers__content" v-if="youtubeCustomers.length > 0">
        <div class="customers__content--carousell scroll" id="content">
          <div class="provider youtube">
            <div class="provider-content">
              <img src="/images/youtube.png" alt="" />
              <p>Grup Youtube yang sudah berlanggan lewat Seakun.id</p>
              <button class="btn btn-primary" @click="showMore('youtube')">
                Yuk lihat dulu!
              </button>
            </div>
          </div>
          <div v-for="(customer, index) in youtubeCustomers" :key="index">
            <CustomersGroupCard :dataCustomer="customer" />
          </div>
          <ButtonChevron @click-chevron="showMore('youtube')" />
        </div>
      </div>
      <div class="customers__content" v-if="microsoftCustomers.length > 0">
        <div class="customers__content--carousell scroll" id="content">
          <div class="provider microsoft">
            <div class="provider-content">
              <img src="/images/microsoft365.png" alt="microsoft365" />
              <p>Grup Microsoft365 yang sudah berlanggan lewat Seakun.id</p>
              <button class="btn btn-primary" @click="showMore('microsoft')">
                Yuk lihat dulu!
              </button>
            </div>
          </div>
          <div v-for="(customer, index) in microsoftCustomers" :key="index">
            <CustomersGroupCard :dataCustomer="customer" />
          </div>
          <ButtonChevron @click-chevron="showMore('microsoft')" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomersGroupCard from '~/components/mollecules/CustomersGroupCard';
import Title from '~/components/atoms/Title';
import ButtonChevron from '~/components/atoms/ButtonChevron';
import axios from 'axios';

export default {
  components: {
    CustomersGroupCard,
    Title,
    ButtonChevron,
  },
  data() {
    return {
      netflixCustomers: [],
      spotifyCustomers: [],
      gramediaCustomers: [],
      youtubeCustomers: [],
      microsoftCustomers: [],
    };
  },
  mounted() {
    this.getCustomersData('netflix');
    this.getCustomersData('spotify');
    this.getCustomersData('gramedia');
    this.getCustomersData('youtube');
    this.getCustomersData('microsoft');
  },
  methods: {
    showMore(provider) {
      this.$router.push(`/info/customers?provider=${provider}`);
    },
    getCustomersData(provider) {
      axios
        .get(
          `https://seakun-api.herokuapp.com/registered-user/group-${provider}`
        )
        .then((res) => this.processDataCustomers(res.data, provider))
        .then(() => this.scrollToRegistrationSection())
        .catch((err) => console.log(err));
    },
    processDataCustomers(customers, provider) {
      let newArr = [];
      let theArr = [];
      customers &&
        customers.map((e, i) => {
          newArr.push(e.group);
          theArr[parseInt(e.group) - 1] = {
            group: parseInt(e.group),
            names: [],
            provider: e.provider,
          };
        });
      customers &&
        customers.map((e, i) => {
          if (newArr.includes(e.group)) {
            theArr[parseInt(e.group) - 1].names.push(e.customer_name);
          }
        });
      switch (provider) {
        case 'netflix':
          const netArr = theArr
            .slice(theArr.length - 4, theArr.length - 0)
            .sort()
            .reverse();
          this.netflixCustomers = netArr;
          break;
        case 'spotify':
          const spoArr = theArr
            .slice(theArr.length - 4, theArr.length - 0)
            .sort()
            .reverse();
          this.spotifyCustomers = spoArr;
          break;
        case 'gramedia':
          const graArr = theArr
            .slice(theArr.length - 4, theArr.length - 0)
            .sort()
            .reverse();
          this.gramediaCustomers = graArr;
          break;
        case 'youtube':
          const youArr = theArr
            .slice(theArr.length - 4, theArr.length - 0)
            .sort()
            .reverse();
          this.youtubeCustomers = youArr;
          break;
        case 'microsoft':
          const micArr = theArr
            .slice(theArr.length - 4, theArr.length - 0)
            .sort()
            .reverse();
          this.microsoftCustomers = micArr;
          break;
      }
    },
    scrollToRegistrationSection() {
      let elementReg = document.getElementById('reg');
      if (this.$route.query.regist == 'true') {
        setTimeout(() => {
          elementReg.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
          });
        }, 500);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.customers {
  padding: 80px 10rem 10px 10rem;
  &__heading {
    text-align: center;
    margin-bottom: 30px;
    h4 {
      font-weight: 800 !important;
    }
  }
  &__content {
    display: flex;
    align-items: center;
    justify-content: center;
    &--carousell {
      display: flex;
      justify-content: space-between;
      overflow-x: scroll;
      height: 24rem !important;
      padding-top: 30px;
      align-items: center;
    }
  }
  .provider {
    margin: auto;
    box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.4);
    width: 300px;
    text-align: center;
    align-items: center;
    padding: 80px 30px;
    margin-right: 6px;
    &-content {
      img {
        width: 150px;
      }
      p {
        color: white;
        font-weight: 700;
        width: 216px;
      }
    }
    &.netflix {
      background-image: url('/images/netflix-provider.jpg');
    }
    &.spotify {
      background-image: url('/images/spotify-provider.png');
      background-size: 650px;
    }
    &.gramedia {
      background-image: url('/images/gramedia-provider.jpg');
      background-size: 650px;
      box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.6) !important;
    }
    &.youtube {
      background-image: url('/images/youtube-provider.png');
      background-size: 650px;
    }
    &.microsoft {
      background-image: url('/images/microsoft-provider.jpg');
      background-size: 650px 440px;
    }
  }
}

.scroll {
  overflow-x: scroll;
  overflow-y: hidden;
  scrollbar-color: #408374 #eeeeee;
  scrollbar-width: unset;
  scroll-behavior: smooth;
}
.scroll::-webkit-scrollbar {
  width: 0px !important;
}
.scroll::-webkit-scrollbar-track {
  border-radius: 10px;
}
.scroll::-webkit-scrollbar-thumb {
  background: white;
  border-radius: 10px;
}
.scroll::-webkit-scrollbar-thumb:hover {
  background: white;
}

@media (max-width: 800px) {
  .customers {
    padding: 80px 4px 0px 4px;
    .is-desktop {
      display: none;
    }
    &__heading {
      margin-bottom: 0px;
    }
    &__content {
      &--carousell {
        height: 20rem !important;
        padding: 16px 10px 0px 16px;
      }
    }
    .provider {
      padding: 76px 0px;
      margin-left: -16px;
      &-content {
        img {
          width: 110px;
        }
        p {
          padding-top: 8px;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
