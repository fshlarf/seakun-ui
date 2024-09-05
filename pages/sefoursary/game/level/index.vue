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
        <BreadCrumb :level="selectedLevel" />
      </div>

      <Game
        @onClick="handleChallenge"
        @submitChallenge="handleSubmitChallenge"
        :level="currentLevel"
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
import CustomerService from '~/services/CustomerServices';

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
      CustomerService,
      countWrongAnswer: 0,
      selectedLevel: 1,
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
          code: 'TAB',
          name: 'SAMSUNG GALAXY TAB A9+',
        },
      ],
    };
  },
  computed: {
    formattedDate() {
      return moment().format('D/M/YYYY h:mm:ss');
    },
  },
  beforeMount() {
    this.$router.push('/sefoursary/game');
  },
  // mounted() {
  //   this.userInfo = JSON.parse(localStorage.getItem('customer'));
  //   this.selectedLevel = parseInt(this.$route.query.id);
  //   this.initialization();
  // },
  methods: {
    getUserInfo,
    arrFindMaxValue,
    async initialization() {
      try {
        this.CustomerService = new CustomerService(this);
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
          isWebView = true;
        }
        // else {
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
        // }
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

    async checkLevel(level) {
      try {
        const parseLevel = parseInt(level);
        const WaitingForConfirmation = [6, 8, 10, 12, 14, 15];
        const mysteryBoxLevel = [2, 4];
        if (parseLevel > this.currentLevel) {
          this.$router.replace({
            path: '/sefoursary/game/level',
            query: { id: this.currentLevel },
          });

          this.selectedLevel = this.currentLevel;
          return;
        } else if (parseLevel == 6) {
          this.loadingChallenge = true;
          const alreadyExixst = await this.checkUserRewards({
            sheet: 'WIN',
            level: parseLevel,
          });
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
            const getLottery = await this.checkIsGotLottery(parseLevel);
            if (getLottery) {
              this.achievementModalType = 'gift';
              this.showAchievementPopup = true;
            } else {
              const isWaitingForConfirmation = await this.getIsWaitingForConfirmation(
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
        }
        // else if (
        //   parseLevel == this.currentLevel &&
        //   mysteryBoxLevel.includes(parseLevel)
        // ) {
        //   this.loadingGift = true;
        //   const getUniqueCode = await this.checkUserRewards({
        //       sheet: 'WIN',
        //       level: parseLevel,
        //     });
        //   console.log('alreadyExixst', alreadyExixst);
        //   if (alreadyExixst) {
        //     const getUniqueCode = await this.getUniqueCodeGift(
        //       this.userInfo.email,
        //       parseLevel
        //     );
        //     if (getUniqueCode) {
        //       this.showWaitingForConfirmation = false;
        //       this.achievementUniqueCode = getUniqueCode.uniqueCode;
        //       this.achievementModalType = 'lottery-numbers';
        //       const gift = this.giftInfo.find(
        //         (item) => item.code === getUniqueCode.prizeCode
        //       );
        //       this.giftName = gift.name;
        //       this.showAchievementPopup = true;
        //     } else {
        //       this.showFailurePopup = true;
        //       this.failureType = 'not-lucky';
        //     }
        //   }
        // }
        else if (
          parseLevel == this.currentLevel ||
          parseLevel < this.currentLevel
        ) {
          if (mysteryBoxLevel.includes(parseLevel)) {
            this.loadingGift = true;
            const getUniqueCode = await this.checkUserRewards({
              sheet: 'WIN',
              level: parseLevel,
            });
            this.showWaitingForConfirmation = false;
            if (getUniqueCode.uniqueCode !== 'nothing') {
              this.achievementUniqueCode = getUniqueCode.uniqueCode;
              this.achievementModalType = 'lottery-numbers';
              this.giftName = '';
              this.showAchievementPopup = true;
            } else {
              this.showFailurePopup = true;
              this.failureType = 'not-lucky';
            }
          } else if (WaitingForConfirmation.includes(parseLevel)) {
            this.loadingChallenge = true;
            this.showWaitingForConfirmation = false;
            if (parseLevel == 14) {
              if (this.currentLevel > 14) {
                this.achievementModalType = 'star';
                this.showAchievementPopup = true;

                // Update current level for next button
                this.currentLevel = 14;
              } else {
                const isWaitingForConfirmation = await this.getIsWaitingForConfirmation(
                  parseLevel
                );
                if (
                  isWaitingForConfirmation &&
                  isWaitingForConfirmation.level === parseLevel
                ) {
                  this.showWaitingForConfirmation = true;
                }
              }
            } else {
              const isAlreadyExist = await this.checkIsGotLottery(parseLevel);
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
            if (parseLevel < this.currentLevel) {
              this.achievementModalType = 'star';
              this.showAchievementPopup = true;
            }
          }
        } else if (
          parseLevel == this.currentLevel &&
          WaitingForConfirmation.includes(parseLevel)
        ) {
          if (parseLevel == 14) {
            if (this.currentLevel > 14) {
              this.achievementModalType = 'star';
              this.showAchievementPopup = true;

              // Update current level for next button
              this.currentLevel = 14;
            } else {
              const isWaitingForConfirmation = await this.getIsWaitingForConfirmation(
                parseLevel
              );
              if (
                isWaitingForConfirmation &&
                isWaitingForConfirmation.level === parseLevel
              ) {
                this.showWaitingForConfirmation = true;
              }
            }
          } else {
            this.loadingChallenge = true;
            const isAlreadyExist = await this.checkIsGotLottery(parseLevel);
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
            this.selectedLevel = this.currentLevel;
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
        const res = await this.CustomerService.getSefoursaryData({
          sheet: 'USER',
        });

        const { data } = res.data;
        if (data) {
          if (data.length == 0) {
            await this.CustomerService.openNextLevelSefoursary({ level: 0 });
          } else {
            const findLevel = this.arrFindMaxValue(data, 'level');
            if (findLevel.level == 0) {
              this.$router.push('/sefoursary/game/');
            } else {
              if (findLevel.level >= 15) {
                this.currentLevel = 15;
              } else {
                this.currentLevel = findLevel.level;
              }
            }
          }
        }
        const levelFromParams = this.$route.query.id;
        const path = this.$route.path;

        if (isWebView) {
          this.checkLevel(this.currentLevel);
        } else {
          this.checkLevel(levelFromParams);
        }
      } catch (error) {
        console.log('error:', error);
      }
      this.isLoading = false;
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
            const alreadyExixst = await this.checkUserRewards({
              sheet: 'WIN',
              level,
            });
            if (!alreadyExixst) {
              this.achievementModalType = 'gift';
              this.showAchievementPopup = true;
            }
          } else {
            this.loadingGift = true;
            await this.updateLevelQuestion();
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
        const levelFromQuery = this.$route.query.id;
        const level = parseInt(levelFromQuery);
        const res = await this.CustomerService.drawRandomGiftSefoursary({
          level,
        });

        const { data } = res.data;

        if (!data.uniqueCode) {
          this.failureType = 'not-lucky';
          this.showFailurePopup = true;
        } else {
          this.achievementUniqueCode = data.uniqueCode;
          this.achievementModalType = 'lottery-numbers';
          this.giftName = data.prizeName;
          this.showAchievementPopup = true;
        }
        if (level !== 6) {
          await this.updateLevelQuestion();
        }
      } catch (error) {
        console.log('error:', error);
      }
      this.loadingGift = false;
    },
    async updateLevelQuestion() {
      try {
        const levelFromQuery = this.$route.query.id;
        const level = parseInt(levelFromQuery);
        const resPostLevel = await this.CustomerService.openNextLevelSefoursary(
          { level }
        );
        this.currentLevel = this.selectedLevel;
      } catch (error) {
        console.log('error:', error);
      }
    },
    async handleNextChallenge() {
      try {
        this.countWrongAnswer = 0;
        const levelFromQuery = this.$route.query.id;
        const level = parseInt(levelFromQuery);

        this.selectedLevel = level + 1;

        this.$router.replace({
          path: '/sefoursary/game/level',
          query: { id: this.selectedLevel },
        });
        this.currentLevel = this.selectedLevel;
        this.showAchievementPopup = false;
        this.showFailurePopup = false;
      } catch (error) {
        console.log('error next challenge', error);
      }
    },
    async handleNextFailure() {
      this.loadingGift = true;
      try {
        const levelFromQuery = this.$route.query.id;
        const level = parseInt(levelFromQuery);
        // this.currentLevel = level + 1;
        this.countWrongAnswer = 0;

        this.selectedLevel = level + 1;
        this.$router.replace({
          path: '/sefoursary/game/level',
          query: { id: this.selectedLevel },
        });
        this.currentLevel = this.selectedLevel;
        this.showFailurePopup = false;
        this.showAchievementPopup = false;
      } catch (error) {
        console.log('error next challenge', error);
      }
      this.loadingGift = false;
    },

    async checkUserRewards({ sheet, level }) {
      try {
        const res = await this.CustomerService.getSefoursaryData({ sheet });
        const { data } = res.data;

        if (data) {
          const findGift = data.find((item) => item.level === level);
          return findGift;
        }
      } catch (error) {
        console.log('error:', error);
      }
    },
    async checkIsGotLottery(level) {
      try {
        const res = await this.CustomerService.getSefoursaryData({
          sheet: 'UNDIAN',
        });
        const { data } = res.data;
        if (data) {
          const findLottery = data.find((item) => item.level == level);
          return findLottery || null;
        }
      } catch (error) {
        console.error('Error retrieving data:', error);
        return null;
      }
    },
    async getIsWaitingForConfirmation(level) {
      try {
        const res = await this.CustomerService.getSefoursaryData({
          sheet: 'USER',
        });
        const { data } = res?.data;
        if (data) {
          const findData = data.find(
            (item) => item.level == level && item.passed == 'UPLOADED'
          );
          return findData;
        } else {
          return false;
        }
      } catch (error) {
        console.log('error');
        return false;
      }
    },
    async handleSubmitChallenge(val) {
      this.loadingChallenge = true;
      try {
        if (val) {
          this.showWaitingForConfirmation = true;
        } else {
          this.$alert.show({
            status: 'error',
            message: 'Terjadi kesalahan. Silahkan coba lagi',
          });
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
