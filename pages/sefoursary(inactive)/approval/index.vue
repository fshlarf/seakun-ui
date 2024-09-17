<!-- <template>
  <div>
    <ChallengeShimmer v-if="isLoading" />
  </div>
</template>

<script>
import ChallengeShimmer from '~/components/sefoursary/game/ChallengeShimmer.vue';
import {
  checkIsGotLottery,
  SefoursaryService,
  updateDataInGoogleSheet,
} from '~/services/SefoursaryService.js';
import moment from 'moment';
import CustomerService from '~/services/CustomerServices';

export default {
  components: {
    ChallengeShimmer,
  },
  data() {
    return {
      CustomerService,
      SefoursaryService,
      isLoading: true,
      email: '',
      name: '',
      phone: '',
      level: '',
      uid: '',
      passed: '',
    };
  },
  computed: {
    formattedDate() {
      return moment().format('D/M/YYYY h:mm:ss');
    },
  },
  created() {
    this.$router.push('/');
    this.SefoursaryService = new SefoursaryService(this);
    this.CustomerService = new CustomerService(this);
  },
  mounted() {
    const query = this.$route.query;
    this.email = query.email || '';
    this.name = query.name || '';
    this.phone = query.phone || '';
    this.level = query.level || '';
    this.uid = query.uid || '';
    this.passed = query.passed || '';
    if (this.level && this.uid) {
      this.generateUniqueCode();
    }
  },
  methods: {
    updateDataInGoogleSheet,
    checkIsGotLottery,
    async generateUniqueCode() {
      this.isLoading = true;
      const { CustomerService } = this;
      const payload = {
        level: parseInt(this.level),
        uid: this.uid,
      };
      try {
        const generate = await CustomerService.generateUniqueCodeSefoursary(
          payload
        );
        if (generate.data) {
          console.log('generate', generate.data);
          this.$alert.show({
            status: 'success',
            message: `Berhasil menambahkan kode undian`,
          });
        }
      } catch (error) {
        this.$alert.show({
          status: 'error',
          title: 'Gagal menambah kode undian',
          message:
            error?.response?.data?.message || 'Gagal mengirimkan kode undian',
          duration: 16000,
        });
      }
      this.isLoading = false;
    },
    async handleLottery() {
      try {
        const { email, level } = this;
        const isAlreadyExist = await this.checkIsGotLottery(
          email,
          parseInt(level)
        );
        if (!isAlreadyExist) {
          await this.postLottery();
          await this.postUser();
          await this.sendLotteryNotif();
        } else {
          this.$alert.show({
            status: 'error',
            message: 'Customer sudah mendapatkan kode undian',
          });
        }
      } catch (error) {
        console.log('error', error);
      }
      this.isLoading = false;
    },
    async sendLotteryNotif() {
      try {
        const { email, uid, level } = this;
        let title;
        let content;

        if (level == 6) {
          title = 'Challenge level 6 telah diverifikasi';
          content = `Klik level 6 untuk membuka mystery box`;
        }

        if (level == 8) {
          title = 'Challenge level 8 telah diverifikasi';
          content = `Klik level 8 untuk melihat Kode undian TWS`;
        }
        if (level == 10) {
          title = 'Challenge level 10 telah diverifikasi';
          content = `Klik level 10 untuk melihat Kode undian Smartphone`;
        }
        if (level == 12) {
          title = 'Challenge level 12 telah diverifikasi';
          content = `Klik level 12 untuk melihat Kode undian SmartTV`;
        }
        if (level == 14) {
          title = 'Challenge level 14 telah diverifikasi';
          content = `Challenge level 15 sudah terbuka`;
        }
        if (level == 15) {
          title = 'Challenge level 15 telah diverifikasi';
          content = `Klik level 15 untuk melihat Kode undian TAB`;
        }

        const payload = {
          title,
          content,
          userUid: uid,
          userEmail: email,
          type: 'anniv',
          redirectUrl: 'https://seakun.id/sefoursary/game',
        };

        const res = await this.SefoursaryService.pushNotification(payload);
      } catch (error) {
        if (error?.response?.status === 404) {
          this.$alert.show({
            status: 'error',
            title: 'Gagal mengirim notifikasi',
            message: 'User belum login di mobile app',
            duration: 6000,
          });
        } else {
          this.$alert.show({
            status: 'error',
            message: 'Gagal mengirimkan kode undian',
          });
        }
        console.log('error', error.response);
      }
    },
    async postLottery() {
      try {
        const { email, level, name, phone } = this;
        let uniqueCode;
        let lotteryCode;
        if (level == 8) {
          uniqueCode = 'TWS';
          lotteryCode = this.generateRandomCode('SE11');
          console.log('lotteryCode', lotteryCode);
        }
        if (level == 10) {
          uniqueCode = 'HP';
          lotteryCode = this.generateRandomCode('SE12');
        }
        if (level == 12) {
          uniqueCode = 'TV';
          lotteryCode = this.generateRandomCode('SE13');
        }
        if (level == 15) {
          uniqueCode = 'TAB';
          lotteryCode = this.generateRandomCode('SE14');
        }
        const ctx = {
          sheetName: 'UNDIAN',
          payload: {
            'Kode Hadiah': uniqueCode,
            'Kode Unik': lotteryCode,
            'User name': this.formattedName(name),
            Email: email,
            'User WA': phone,
            Level: level,
          },
        };
        await this.updateDataInGoogleSheet(ctx);
      } catch (error) {
        this.$alert.show({
          status: 'error',
          message: 'Gagal menambahkan undian',
        });
        console.log('error:', error);
      }
    },
    async postUser() {
      try {
        const ctx = {
          sheetName: 'USER',
          payload: {
            'User name': this.name,
            Email: this.email,
            'User WA': this.phone,
            Level: parseInt(this.level) + 1,
            'Last Updated': this.formattedDate,
            Passed: true,
          },
        };
        const addUser = await this.updateDataInGoogleSheet(ctx);
        if (addUser) {
          this.$alert.show({
            status: 'success',
            message: `Berhasil menambahkan kode undian`,
          });
        }
      } catch (error) {
        console.log('error:', error);
      }
    },
    formattedName() {
      return this.name.replace(/-/g, ' ');
    },
    generateRandomCode(defaultCode) {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let result = '';
      const charactersLength = characters.length;
      for (let i = 0; i < 5; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return `${defaultCode}-${result}`;
    },
  },
};
</script>

<style lang="scss" scoped></style> -->
