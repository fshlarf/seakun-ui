<template>
  <div>
    <Navbar />
    <div v-if="isLoading" class="container-about-us">
      <div
        class="relative z-30 mt-[100px] sm:mt-[70px] lg:mt-[105px] w-full h-[241px] md:h-[382px] rounded-lg animate-pulse bg-slate-200 max-w-[520px] mx-auto"
      />
    </div>

    <div v-else>
      <div class="relative z-30 mt-[-55px] sm:mt-[-50px] lg:mt-[-85px]">
        <BreadCrumb :level="currentLevel" />
      </div>

      <Game
        @onClick="handleChallenge"
        :level="currentLevel"
        @submitChallenge="handleSubmitChallenge"
      />
      <AchievementPopup
        v-if="showAchievementPopup"
        :modalType="achievementModalType"
        @onNext="handleNextChallenge"
        @clickMysterybox="handleMysteryBox"
        :uniqueCode="achievementUniqueCode"
        :level="currentLevel"
        :gift-name="giftName"
      />
      <FailurePopup
        v-if="showFailurePopup"
        :failureType="failureType"
        :countdown="countWrongAnswer"
        @onClose="showFailurePopup = false"
        @onNext="handleNextFailure"
      />
      <AchievementShimmer v-if="loadingGift" />
      <ChallengeShimmer v-if="loadingChallenge" />
      <WaitingForConfirmation
        v-if="showWaitingForConfirmation"
        @refresh="refreshLottery"
      />
    </div>
  </div>
</template>

<script>
import Navbar from '../../../../components/sefoursary/game/Navbar.vue';
import BreadCrumb from '../../../../components/sefoursary/BreadCrumb.vue';
import Game from '~/components/sefoursary/game';
import AchievementPopup from '../../../../components/sefoursary/game/AchievementPopup.vue';
import FailurePopup from '../../../../components/sefoursary/game/FailurePopup.vue';
import AchievementShimmer from '../../../../components/sefoursary/game/AchievementShimmer.vue';
import ChallengeShimmer from '../../../../components/sefoursary/game/ChallengeShimmer.vue';
import WaitingForConfirmation from '~/components/sefoursary/game/WaitingForConfirmation.vue';

import moment from 'moment';
import { getUserInfo, arrFindMaxValue } from '~/helpers/utils';
import { authorizeWebview } from '~/helpers/httpRequest';

import {
  updateDataInGoogleSheet,
  getDataFromGoogleSheet,
  checkUserRewards,
  getRemainingGifts,
  patchPrize,
  getUniqueCodeGift,
  getIsWaitingForConfirmation,
  checkIsGotLottery,
} from '~/services/SefoursaryService.js';

export default {
  components: {
    Navbar,
    BreadCrumb,
    Game,
    AchievementPopup,
    FailurePopup,
    AchievementShimmer,
    ChallengeShimmer,
    WaitingForConfirmation,
  },
  data() {
    return {
      countWrongAnswer: 0,
      currentLevel: 1,
      showAchievementPopup: false,
      achievementModalType: '',
      userInfo: null,
      failureType: '',
      showFailurePopup: false,
      isLoading: true,
      loadingGift: false,
      achievementUniqueCode: '',
      loadingChallenge: false,
      showWaitingForConfirmation: false,
      giftName: '',
      giftInfo: [
        {
          code: 'SPO',
          name: 'Gratis Spotify 1 bulan',
        },
        {
          code: 'YOU',
          name: 'Gratis Youtube 1 bulan',
        },
        {
          code: 'E20',
          name: 'Ewallet 20k',
        },
        {
          code: 'E50',
          name: 'Ewallet 50k',
        },
        {
          code: 'E100',
          name: 'Ewallet 100k',
        },
        {
          code: 'TWS',
          name: 'BASEUS TWS',
        },
        {
          code: 'HP',
          name: 'SAMSUNG AO5',
        },
        {
          code: 'TV',
          name: 'TCL SMART TV 40”',
        },
        {
          code: 'TABLET',
          name: 'SAMSUNG GALAXY TAB A9+',
        },
      ],
    };
  },
  computed: {
    formattedDate() {
      return moment().format('M/D/YYYY h:mm:ss');
    },
  },
  mounted() {
    this.userInfo = JSON.parse(localStorage.getItem('customer'));
    this.initialization();
  },
  methods: {
    updateDataInGoogleSheet,
    getDataFromGoogleSheet,
    getUserInfo,
    arrFindMaxValue,
    checkUserRewards,
    getRemainingGifts,
    patchPrize,
    getUniqueCodeGift,
    getIsWaitingForConfirmation,
    checkIsGotLottery,
    async initialization() {
      try {
        await this.checkAuth();
      } catch (error) {
        console.log('error', error);
      }
    },
    async checkAuth() {
      try {
        let isWebView = false;
        const { ats, rts } = this.$route.query;
        if (ats && rts) {
          await authorizeWebview(this, ats, rts);
          const accesToken = this.$cookies.get('ATS');
          const refreshToken = this.$cookies.get('RTS');
          if (!accesToken || !refreshToken) {
            this.$alert.show({
              status: 'error',
              message: 'Silahkan login terlebih dahulu',
            });
            setTimeout(() => {
              this.$router.push('/login');
            }, 5000);
          } else {
            isWebView = true;
            await this.getLevel(isWebView);
          }
        } else {
          const accesToken = this.$cookies.get('ATS');
          const refreshToken = this.$cookies.get('RTS');

          if (!accesToken || !refreshToken) {
            this.$alert.show({
              status: 'error',
              message: 'Silahkan login terlebih dahulu',
            });
            setTimeout(() => {
              this.$router.push('/login');
            }, 2000);
          } else {
            await this.getLevel(isWebView);
          }
        }
      } catch (error) {
        this.$alert.show({
          status: 'error',
          message: 'Sesi berakhir. Silahkan login kembali',
        });
        setTimeout(() => {
          this.$router.push('/login');
        }, 2000);
        console.log('Error', error);
      }
    },

    async handleSubmitChallenge() {
      this.loadingChallenge = true;
      try {
        const customer = JSON.parse(localStorage.getItem('customer'));

        const ctx = {
          sheetName: 'USER',
          payload: {
            'User name': customer.name,
            Email: customer.email,
            'User WA': customer?.phoneNumber,
            Level: this.currentLevel,
            'Last Updated': this.formattedDate,
            Passed: 'UPLOADED',
          },
        };
        const resPostLevel = await this.updateDataInGoogleSheet(ctx);
        if (resPostLevel) {
          this.showWaitingForConfirmation = true;
        }
      } catch (error) {
        this.$alert.show({
          status: 'error',
          message: 'Terjadi kesalahan. Silahkan coba lagi',
        });
        console.log('error submit challenge:', error);
      }
      this.loadingChallenge = false;
    },

    async checkLevel(level) {
      try {
        const parseLevel = parseInt(level);
        const WaitingForConfirmation = [6, 8, 10, 12, 14, 15];
        const mysteryBoxLevel = [2, 4];

        if (parseLevel == 6) {
          this.loadingChallenge = true;
          const alreadyExixst = await this.checkUserRewards(
            this.userInfo.email,
            level
          );
          if (alreadyExixst) {
            if (alreadyExixst.uniqueCode == 'nothing') {
              this.showWaitingForConfirmation = false;
              this.showFailurePopup = true;
              this.failureType = 'not-lucky';
            } else {
              this.showWaitingForConfirmation = false;
              this.achievementUniqueCode = alreadyExixst.uniqueCode;
              this.achievementModalType = 'lottery-numbers';
              const gift = this.giftInfo.find(
                (item) => item.code === alreadyExixst.prizeCode
              );
              this.giftName = gift.name;
              this.showAchievementPopup = true;
            }
          } else {
            const getLottery = await this.checkIsGotLottery(
              this.userInfo.email,
              parseLevel
            );
            if (getLottery) {
              this.achievementModalType = 'gift';
              this.showAchievementPopup = true;
            } else {
              const isWaitingForConfirmation = await this.getIsWaitingForConfirmation(
                this.userInfo.email,
                parseLevel
              );
              if (
                isWaitingForConfirmation &&
                isWaitingForConfirmation.level === parseLevel
              ) {
                this.showWaitingForConfirmation = true;
              }
            }
          }
        } else if (parseLevel > this.currentLevel) {
          this.$router.replace({
            path: '/sefoursary/game/level',
            query: { id: this.currentLevel },
          });
        } else if (
          parseLevel == this.currentLevel &&
          mysteryBoxLevel.includes(parseLevel)
        ) {
          this.loadingGift = true;
          const alreadyExixst = await this.checkUserRewards(
            this.userInfo.email,
            level
          );
          if (alreadyExixst) {
            const getUniqueCode = await this.getUniqueCodeGift(
              this.userInfo.email,
              parseLevel
            );
            if (getUniqueCode) {
              this.showWaitingForConfirmation = false;
              this.achievementUniqueCode = getUniqueCode.uniqueCode;
              this.achievementModalType = 'lottery-numbers';
              const gift = this.giftInfo.find(
                (item) => item.code === getUniqueCode.prizeCode
              );
              this.giftName = gift.name;
              this.showAchievementPopup = true;
            } else {
              this.showFailurePopup = true;
              this.failureType = 'not-lucky';
            }
          }
        } else if (parseLevel < this.currentLevel) {
          if (mysteryBoxLevel.includes(parseLevel)) {
            this.loadingGift = true;
            const getUniqueCode = await this.getUniqueCodeGift(
              this.userInfo.email,
              parseLevel
            );
            this.showWaitingForConfirmation = false;
            if (getUniqueCode) {
              this.achievementUniqueCode = getUniqueCode.uniqueCode;
              this.achievementModalType = 'lottery-numbers';
              const gift = this.giftInfo.find(
                (item) => item.code === getUniqueCode.prizeCode
              );
              this.giftName = gift.name;
              this.showAchievementPopup = true;
            } else {
              this.showFailurePopup = true;
              this.failureType = 'not-lucky';
            }
          } else if (WaitingForConfirmation.includes(parseLevel)) {
            this.loadingChallenge = true;
            this.showWaitingForConfirmation = false;
            if (parseLevel == 14) {
              this.achievementModalType = 'star';
              this.showAchievementPopup = true;
            } else {
              const isAlreadyExist = await this.checkIsGotLottery(
                this.userInfo.email,
                parseLevel
              );
              if (isAlreadyExist) {
                this.achievementUniqueCode = isAlreadyExist.uniqueCode;
                this.achievementModalType = 'lottery-numbers';
                const gift = this.giftInfo.find(
                  (item) => item.code === isAlreadyExist.prizeCode
                );
                this.giftName = gift.name;
                this.showAchievementPopup = true;
              } else {
                const isWaitingForConfirmation = await this.getIsWaitingForConfirmation(
                  this.userInfo.email,
                  parseLevel
                );
                if (
                  isWaitingForConfirmation &&
                  isWaitingForConfirmation.level === parseLevel
                ) {
                  this.showWaitingForConfirmation = true;
                }
              }
            }

            // CODE UNDIAN
            this.loadingChallenge = false;
          } else {
            this.achievementModalType = 'star';
            this.showAchievementPopup = true;
          }
        } else if (
          parseLevel == this.currentLevel &&
          WaitingForConfirmation.includes(parseLevel)
        ) {
          if (parseLevel == 14) {
            this.showWaitingForConfirmation = false;
            this.achievementModalType = 'star';
            this.showAchievementPopup = true;
          } else {
            this.loadingChallenge = true;
            const isAlreadyExist = await this.checkIsGotLottery(
              this.userInfo.email,
              parseLevel
            );
            if (isAlreadyExist) {
              this.showWaitingForConfirmation = false;
              this.achievementUniqueCode = isAlreadyExist.uniqueCode;
              this.achievementModalType = 'lottery-numbers';
              const gift = this.giftInfo.find(
                (item) => item.code === isAlreadyExist.prizeCode
              );
              this.giftName = gift.name;
              this.showAchievementPopup = true;
            } else {
              const isWaitingForConfirmation = await this.getIsWaitingForConfirmation(
                this.userInfo.email,
                parseLevel
              );
              if (
                isWaitingForConfirmation &&
                isWaitingForConfirmation.level === parseLevel
              ) {
                this.showWaitingForConfirmation = true;
              }
            }
          }
        } else {
          if (parseLevel !== this.currentLevel) {
            this.$router.replace({
              path: '/sefoursary/game/level',
              query: { id: this.currentLevel },
            });
          }
        }
      } catch (error) {
        console.log('error', error);
      }
      this.loadingGift = false;
      this.loadingChallenge = false;
    },
    async getLevel(isWebView) {
      this.isLoading = true;
      try {
        const userData = this.userInfo;

        const res = await this.getDataFromGoogleSheet(
          'USER',
          'Email',
          userData.email
        );
        if (res) {
          const findMyLevel = res.filter(
            (item) => item.Email === userData.email
          );
          if (findMyLevel.length == 0) {
            this.$router.push('/sefoursary/game/');
          } else {
            const findLevel = this.arrFindMaxValue(findMyLevel, 'level');

            this.currentLevel = findLevel.level;
            this.$router.replace({
              path: '/sefoursary/game/level',
              query: { id: this.currentLevel },
            });
          }
        }
      } catch (error) {
        console.log('error:', error);
      }
      this.isLoading = false;
      const levelFromParams = this.$route.query.id;
      const path = this.$route.path;

      if (isWebView) {
        this.checkLevel(this.currentLevel);
      } else {
        this.checkLevel(levelFromParams);
      }
    },
    async handleChallenge(ctx) {
      const { answerKey, level } = ctx.question;
      const correctAsnwer = ctx.selected === answerKey;
      try {
        if (!correctAsnwer) {
          this.failureType = 'wrong-answer';
          this.showFailurePopup = true;
          if (this.countWrongAnswer === 0) {
            this.countWrongAnswer = 5;
          } else {
            this.countWrongAnswer += 2;
          }
        } else {
          const mysteryBox = [2, 4, 6];
          if (mysteryBox.includes(level)) {
            this.loadingGift = true;
            const alreadyExixst = await this.checkUserRewards(
              this.userInfo.email,
              level
            );
            if (!alreadyExixst) {
              this.achievementModalType = 'gift';
              this.showAchievementPopup = true;
            }
          } else {
            this.achievementModalType = 'star';
            this.showAchievementPopup = true;
          }
        }
      } catch (error) {
        console.log('error', error);
      }
      this.loadingGift = false;
    },
    async handleMysteryBox() {
      this.loadingGift = true;
      try {
        let lotteryKeyword;
        if (this.currentLevel < 3) {
          lotteryKeyword = {
            provider: 'SPO',
            ewallet: 'E20',
          };
        } else if (this.currentLevel < 5) {
          lotteryKeyword = {
            provider: 'SPO',
            ewallet: 'E50',
          };
        } else if (this.currentLevel < 7) {
          lotteryKeyword = {
            provider: 'YOU',
            ewallet: 'E100',
          };
        }
        const remainingRes = await this.getRemainingGifts(lotteryKeyword);

        if (remainingRes.length > 0) {
          const getPrize = this.chancePrize();
          if (getPrize) {
            const myGift = remainingRes[0];
            const { prizeCode, uniqueCode, prizeName, quota } = myGift;
            const payload = {
              'Kode Hadiah': prizeCode,
              'Kode Unik': uniqueCode,
              Hadiah: prizeName,
              Quota: 0,
            };
            const updatePrize = this.patchPrize(payload);
            await this.postUserWin({ prizeCode, uniqueCode });
            this.achievementUniqueCode = uniqueCode;
            this.achievementModalType = 'lottery-numbers';
            this.giftName = prizeName;
            this.showAchievementPopup = true;
          } else {
            await this.postUserWin({
              prizeCode: 'nothing',
              uniqueCode: 'nothing',
            });
            this.failureType = 'not-lucky';
            this.showFailurePopup = true;
          }
        } else {
          this.failureType = 'not-lucky';
          this.showFailurePopup = true;
        }
      } catch (error) {
        console.log('error:', error);
      }
      this.loadingGift = false;
    },
    async updateLevelQuestion() {
      try {
        const customer = JSON.parse(localStorage.getItem('customer'));

        const ctx = {
          sheetName: 'USER',
          payload: {
            'User name': customer.name,
            Email: customer.email,
            'User WA': customer?.phoneNumber,
            Level: this.currentLevel + 1,
            'Last Updated': this.formattedDate,
            Passed: true,
          },
        };
        const resPostLevel = this.updateDataInGoogleSheet(ctx);
      } catch (error) {
        console.log('error:', error);
      }
    },
    async handleNextChallenge() {
      this.loadingGift = true;
      try {
        this.countWrongAnswer = 0;
        const levelFromQuery = this.$route.query.id;
        const level = parseInt(levelFromQuery);
        if (this.currentLevel === level) {
          await this.updateLevelQuestion();
        }
        this.currentLevel = level + 1;

        this.$router.replace({
          path: '/sefoursary/game/level',
          query: { id: level + 1 },
        });
        this.showAchievementPopup = false;
        this.showFailurePopup = false;
      } catch (error) {
        console.log('error next challenge', error);
      }
      this.loadingGift = false;
    },
    async handleNextFailure() {
      this.loadingGift = true;
      try {
        const levelFromQuery = this.$route.query.id;
        const level = parseInt(levelFromQuery);
        if (this.currentLevel === level) {
          await this.updateLevelQuestion();
        }
        this.currentLevel = level + 1;
        this.countWrongAnswer = 0;
        this.$router.replace({
          path: '/sefoursary/game/level',
          query: { id: level + 1 },
        });
        this.showFailurePopup = false;
        this.showAchievementPopup = false;
      } catch (error) {
        console.log('error next challenge', error);
      }
      this.loadingGift = false;
    },
    async postUserWin({ prizeCode, uniqueCode }) {
      try {
        const customer = JSON.parse(localStorage.getItem('customer'));
        const ctx = {
          sheetName: 'WIN',
          payload: {
            'User name': customer.name,
            Email: customer.email,
            'User WA': customer?.phoneNumber,
            WIN: true,
            'Kode Hadiah': prizeCode,
            'Kode Unik': uniqueCode,
            Level: this.currentLevel,
          },
        };

        const res = await this.updateDataInGoogleSheet(ctx);
      } catch (error) {
        console.log('error', error);
      }
    },
    async refreshLottery() {
      window.location.reload();
    },
    chancePrize() {
      return Math.random() < 0.3;
    },
  },
};
</script>

<style lang="scss" scoped></style>
