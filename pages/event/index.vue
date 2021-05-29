<template>
  <div>
    <Header />
    <div class="event">
      <EventDetail extendClass="mobile" :dataEvent="dataEvent" />
      <div class="event-reg">
        <h5 class="heading-5">Daftar Webinar</h5>
        <br />
        <div class="event-reg__form">
          <form>
            <FormInput
              label="Nama Lengkap*"
              placeholder="Masukkan Nama Lengkap"
              class="input"
              :errorMessage="errorMsg.fullname"
              @keydown="onChangeInput('fullname')"
              v-model="dataUser.fullname"
            />
            <FormInput
              label="Email*"
              placeholder="Masukkan Email"
              class="input"
              :errorMessage="errorMsg.email"
              @keydown="onChangeInput('email')"
              v-model="dataUser.email"
            />
            <FormInput
              label="Whatsapp*"
              placeholder="Masukkan Whatsapp"
              class="input"
              :errorMessage="errorMsg.whatsapp"
              @keydown="onChangeInput('whatsapp')"
              v-model="dataUser.whatsapp"
            />
            <ButtonDrop
              @onClick="showJobList = !showJobList"
              label="Pekerjaan*"
              :btnText="dataUser.job"
              extendClass="full-width"
            />
            <p class="error-msg" style="margin-bottom: 0" v-if="errorMsg.job">
              {{ errorMsg.job }}
            </p>
            <transition name="slide-fade">
              <div class="dropdown" v-if="showJobList">
                <div
                  v-for="(item, id) in jobs"
                  :key="id"
                  class="dropdown__item"
                  @click="chooseJob(item)"
                >
                  <div>{{ item }}</div>
                </div>
              </div>
            </transition>
            <br />
            <div class="form-seakun-user">
              <label for="seakun-user"
                >Apakah anda tahu tentang Seakun.id?*</label
              >
              <br />
              <input
                type="radio"
                id="trueSeakunUser"
                :value="true"
                v-model="dataUser.is_know_seakun"
                @change="onChangeInput('is_know_seakun')"
              /><label style="padding-left: 8px" for="trueSeakunUser">Ya</label>
              <br />
              <input
                type="radio"
                id="falseSeakunUser"
                :value="false"
                v-model="dataUser.is_know_seakun"
                @change="onChangeInput('is_know_seakun')"
              /><label style="padding-left: 8px" for="falseSeakunUser"
                >Tidak</label
              >
              <p class="error-msg" v-if="errorMsg.is_know_seakun">
                {{ errorMsg.is_know_seakun }}
              </p>
            </div>
            <div class="form-know-seakun">
              <label for="seakun-user">Apakah anda pengguna Seakun.id?*</label>
              <br />
              <input
                type="radio"
                id="Ya"
                :value="true"
                v-model="dataUser.is_seakun_user"
                @change="onChangeInput('is_seakun_user')"
              /><label style="padding-left: 8px" for="Ya">Ya</label>
              <br />
              <input
                type="radio"
                id="Tidak"
                :value="false"
                v-model="dataUser.is_seakun_user"
                @change="onChangeInput('is_seakun_user')"
              /><label style="padding-left: 8px" for="Tidak">Tidak</label>
              <p class="error-msg" v-if="errorMsg.is_seakun_user">
                {{ errorMsg.is_seakun_user }}
              </p>
            </div>
            <FormInput
              label="Apa motivasi/ekspektasi anda mengikuti event ini?*"
              placeholder="Masukkan Jawaban Anda"
              class="input"
              :errorMessage="errorMsg.motivation"
              @keydown="onChangeInput('motivation')"
              v-model="dataUser.motivation"
            />
            <FormInput
              label="Apa saran anda untuk tema webinar/project selanjutnya?"
              placeholder="Masukkan Jawaban Anda"
              class="input"
              :errorMessage="errorMsg.suggestion_theme"
              @keydown="onChangeInput('suggestion_theme')"
              v-model="dataUser.suggestion_theme"
            />
            <div class="form-know-seakun">
              <label for="seakun-user"
                >Dari mana anda mengetahui Seakun.id?*</label
              >
              <br />
              <input
                type="radio"
                id="Teman/Saudara"
                value="Teman/Saudara"
                v-model="dataUser.source_info"
                @change="onChangeInput('source_info')"
              /><label style="padding-left: 8px" for="Teman/Saudara"
                >Teman/Saudara</label
              >
              <br />
              <input
                type="radio"
                id="Medsos (Twitter, IG, FB, Tiktok)"
                value="Medsos (Twitter, IG, FB, Tiktok)"
                v-model="dataUser.source_info"
                @change="onChangeInput('source_info')"
              /><label
                style="padding-left: 8px"
                for="Medsos (Twitter, IG, FB, Tiktok)"
                >Medsos (Twitter, IG, FB, Tiktok)</label
              >
              <br />
              <input
                type="radio"
                id="Pencarian Google"
                value="Pencarian Google"
                v-model="dataUser.source_info"
                @change="onChangeInput('source_info')"
              /><label style="padding-left: 8px" for="Pencarian Google"
                >Pencarian Google</label
              >
              <br />
              <input
                type="radio"
                id="LinkedIn"
                value="LinkedIn"
                v-model="dataUser.source_info"
                @change="onChangeInput('source_info')"
              /><label style="padding-left: 8px" for="LinkedIn">LinkedIn</label>
              <p class="error-msg" v-if="errorMsg.source_info">
                {{ errorMsg.source_info }}
              </p>
            </div>
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="send-notif"
                :value="true"
                v-model="dataUser.notification"
              />
              <label class="form-check-label" for="send-notif"
                >Kirimi saya email tentang layanan baru Seakun.id?</label
              >
            </div>
            <br />
            <button
              class="btn btn-primary"
              @click.prevent="clickSubmit"
              :disabled="isDisableBtn"
              style="width: 100px"
            >
              <span
                v-if="isDisableBtn"
                class="spinner-border spinner-border-sm text-dark"
                role="status"
                aria-hidden="true"
              ></span>
              Submit
            </button>
          </form>
        </div>
      </div>
      <EventDetail :dataEvent="dataEvent" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/mollecules/Header';
import Footer from '~/components/mollecules/Footer';
import FormInput from '~/components/atoms/FormInput';
import ButtonDrop from '~/components/atoms/ButtonDropDown';
import EventDetail from './views/event-detail';
import axios from 'axios';

export default {
  components: {
    Header,
    Footer,
    FormInput,
    ButtonDrop,
    EventDetail,
  },
  data() {
    return {
      dataEvent: {},
      dataUser: {
        fullname: '',
        email: '',
        whatsapp: '',
        job: 'Pilih Pekerjaan',
        is_seakun_user: null,
        is_know_seakun: null,
        motivation: '',
        suggestion_theme: '',
        source_info: '',
        notification: false,
      },
      showJobList: false,
      errorMsg: {
        fullname: '',
        email: '',
        whatsapp: '',
        job: '',
        is_seakun_user: '',
        is_know_seakun: '',
        motivation: '',
        suggestion_theme: '',
        source_info: '',
      },
      jobs: [
        'Pelajar',
        'Mahasiswa',
        'Pegawai Negeri',
        'Pegawai Swasta',
        'Pegawai BUMN',
        'Pegawai Startup',
        'Wiraswasta',
      ],
      isDisableBtn: false,
    };
  },
  mounted() {
    this.getDataEvent();
  },
  methods: {
    getDataEvent() {
      axios
        .get(`https://seakun-api-v1.herokuapp.com/event/${this.$route.query.name}`)
        .then((res) => {
          this.dataEvent = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    onChangeInput(name) {
      this.errorMsg[name] = '';
    },
    chooseJob(item) {
      this.dataUser.job = item;
      this.showJobList = false;
      this.errorMsg.job = '';
    },
    clickSubmit() {
      this.validateInput();
      if (
        this.dataUser.fullname &&
        this.dataUser.email &&
        this.dataUser.whatsapp &&
        this.dataUser.job != 'Pilih Pekerjaan' &&
        this.dataUser.is_seakun_user != null &&
        this.dataUser.is_know_seakun != null &&
        this.dataUser.motivation &&
        this.dataUser.source_info
      ) {
        this.postRegisteredUser();
      }
    },
    validateInput() {
      !this.dataUser.fullname
        ? (this.errorMsg.fullname = 'Nama Lengkap harus diisi')
        : (this.errorMsg.fullname = '');
      !this.dataUser.email
        ? (this.errorMsg.email = 'Email harus diisi')
        : (this.errorMsg.email = '');
      !this.dataUser.whatsapp
        ? (this.errorMsg.whatsapp = 'Whatsapp harus diisi')
        : (this.errorMsg.whatsapp = '');
      this.dataUser.job == 'Pilih Pekerjaan'
        ? (this.errorMsg.job = 'Pekerjaan harus dipilih')
        : (this.errorMsg.job = '');
      this.dataUser.is_seakun_user == null
        ? (this.errorMsg.is_seakun_user = 'Harus dipilih')
        : (this.errorMsg.is_seakun_user = '');
      this.dataUser.is_know_seakun == null
        ? (this.errorMsg.is_know_seakun = 'Harus dipilih')
        : (this.errorMsg.is_know_seakun = '');
      !this.dataUser.motivation
        ? (this.errorMsg.motivation =
            'Motivasi mengikuti event ini harus diisi')
        : (this.errorMsg.motivation = '');
      !this.dataUser.source_info
        ? (this.errorMsg.source_info = 'Harus diisi')
        : (this.errorMsg.source_info = '');
    },
    postRegisteredUser() {
      this.isDisableBtn = true;
      let payload = {
        ...this.dataUser,
        title_event: this.dataEvent.title_event,
        slug_event: this.dataEvent.slug_event,
      };
      axios
        .post('https://seakun-api-v1.herokuapp.com/event/register-user', payload)
        .then((res) => {
          this.isDisableBtn = false;
          this.$router.push('/thankyou/event-registered');
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
h5 {
  font-weight: 700;
}
.event {
  padding: 80px 0px !important;
  background-color: white;
  display: flex;
  max-width: 1100px !important;
  font-weight: 500 !important;
  margin: 0 auto !important;
  &-reg {
    width: 50%;
    margin: 20px 20px;
  }
  &-detail {
    width: 50%;
    margin: 20px 20px;
    padding: 0px 10px;
    border: 1px solid #86d0c1;
    height: -webkit-fill-available;
    border-radius: 8px;
    padding-bottom: 20px;
    img {
      width: 100%;
      padding: 16px;
    }
    &__info {
      display: flex;
      padding: 2px 16px;
      &--key {
        width: 18%;
        margin-right: 16px;
      }
      &--value {
        width: 70%;
        margin-left: 16px;
      }
    }
  }
}
.slide-fade-enter-active {
  transition: all 0.4s ease;
}
.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-50px);
  opacity: 0.2;
}
.dropdown {
  border-radius: 0.25rem;
  border: 1px solid #ced4da;
  padding: 0px;
  margin-bottom: 20px;
  div {
    padding: 8px 16px;
    cursor: pointer;
    &:hover {
      background-color: #daeeef;
      border-color: #c6e9eb;
    }
  }
  &__item {
    padding: 8px 16px !important;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ul {
      list-style-type: none;
      margin: 0 !important;
      li {
        font-size: 0.8rem !important;
      }
    }

    div {
      padding: 0px;
    }
    img {
      max-width: 20px;
    }
    &-info {
      font-weight: 400;
      padding-top: 0px !important;
      font-style: italic;
    }
  }
}
@media (max-width: 800px) {
  .event {
    display: block;
    width: 100% !important;
    padding: 80px 10px !important;
    font-size: 14px !important;
    &-reg {
      width: 100% !important;
      padding: 0 4px;
      margin: 0px 0px;
    }
    &-detail {
      width: 100% !important;
      padding: 0 0px;
      padding-bottom: 16px;
      margin: 0px 0px;
      &__info {
        &--key {
          width: 28% !important;
        }
      }
    }
  }
  .form-control {
    font-size: 14px !important;
  }
  .heading-5 {
    margin-top: 30px;
  }
}
</style>
