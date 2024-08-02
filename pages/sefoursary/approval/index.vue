<template>
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

export default {
  components: {
    ChallengeShimmer,
  },
  data() {
    return {
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
  created() {
    this.SefoursaryService = new SefoursaryService(this);
  },
  mounted() {
    const query = this.$route.query;
    this.email = query.email || '';
    this.name = query.name || '';
    this.phone = query.phone || '';
    this.level = query.level || '';
    this.uid = query.uid || '';
    this.passed = query.passed || '';
    if (this.email) {
      this.handleLottery();
    }
  },
  methods: {
    updateDataInGoogleSheet,
    checkIsGotLottery,
    async handleLottery() {
      try {
        const { email, level } = this;
        const isAlreadyExist = await this.checkIsGotLottery(
          email,
          parseInt(level)
        );
        if (!isAlreadyExist) {
          await this.postLottery();
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
          content = `Kamu mendapatkan mystery box`;
        }

        if (level == 8) {
          title = 'Challenge level 8 telah diverifikasi';
          content = `Kode undian TWS berhasil dibuat`;
        }
        if (level == 10) {
          title = 'Challenge level 10 telah diverifikasi';
          content = `Kode undian Smartphone berhasil dibuat`;
        }
        if (level == 12) {
          title = 'Challenge level 12 telah diverifikasi';
          content = `Kode undian SmartTV berhasil dibuat`;
        }
        if (level == 14) {
          title = 'Challenge level 14 telah diverifikasi';
          content = `Challengen level 15 sudah terbuka`;
        }
        if (level == 15) {
          title = 'Challenge level 15 telah diverifikasi';
          content = `Kode undian TAB berhasil dibuat`;
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
        this.$alert.show({
          status: 'error',
          message: 'Gagal mengirimkan kode undian',
        });
        console.log('error', error);
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
        const resPostLevel = await this.updateDataInGoogleSheet(ctx);
        if (resPostLevel) {
          this.$alert.show({
            status: 'success',
            message: `Berhasil menambahkan kode undian`,
          });
        }
      } catch (error) {
        this.$alert.show({
          status: 'error',
          message: 'Gagal menambahkan undian',
        });
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

<style lang="scss" scoped></style>
