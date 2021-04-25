<template>
  <div>
    <Header />
    <div class="info">
      <div class="container">
        <div class="row">
          <div class="col">
            <Title title="Program User Host Seakun.id" />
            <div class="info__intro">
              Program User Host merupakan fitur yang dihadirkan oleh Seakun.id
              untuk
              <b
                >memberikan kewenangan ke salah satu anggota member di dalam
                satu grup berlangganan bersama untuk menggunakan kartu
                debit/kredit miliknya untuk melakukan pembayaran</b
              >
              ke Provider Entertainment.
            </div>
            <br />
            <div class="info__intro">
              Jika kamu menjadi <b>User Host</b> di Seakun.id, kamu akan
              mendapatkan benefit dari Seakun.id yaitu sebagai berikut.
            </div>
            <UserHostBenefits/>
          </div>
        </div>
      </div>
    </div>
    <UserHostFaq/>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/mollecules/Header';
import Accordion from '~/components/atoms/Accordion';
import AccordionContainer from '~/components/atoms/AccordionContainer';
import Title from '~/components/atoms/Title';
import Footer from '~/components/mollecules/Footer';
import UserHostBenefits from './views/UserHostBenefits'
import UserHostFaq from './views/UserHostFaq'

export default {
  components: {
    Accordion,
    AccordionContainer,
    Footer,
    Header,
    Title,
    UserHostBenefits,
    UserHostFaq
  },
};
</script>

<style lang="scss">
.info {
  padding: 100px 0px 40px !important;

  .faq-title-container {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10rem;
    color: #e5e5e5;
    font-weight: 700;
  }

  &__benefits {
    margin-top: 5rem;
    display: flex;
    justify-content: space-between;
    &-card {
      width: 18rem;
      margin: 10px 6px;
      text-align: center;
      padding: 16px 24px;
      border: 1px solid #eeeeee;
      border-radius: 8px;
      box-shadow: 0px 0px 4px #dddddd;
      cursor: pointer;
      transition: transform 0.2s;
      &:hover {
        box-shadow: 0px 0px 16px #dddddd;
        transform: scale(1.05);
      }
      img {
        margin-top: 8px;
        max-width: 11rem;
        margin-bottom: 20px;
      }
      h5 {
        font-size: 18px;
      }
    }
  }

  &.faq {
    padding-top: 50px !important;
    background-color: #f6f6f6;
  }
  .img-info {
    margin-top: 10px;
    width: 546px;
  }
}
@media (max-width: 800px) {
  .info {
    &__benefits {
      margin-top: 2rem;
      display: block;
      &-card {
        width: auto;
        margin: 25px 8px;
        p {
          margin: 0px !important;
        }
      }
    }
    &.faq {
      padding-top: 20px !important;
    }
    .img-info {
      width: 100%;
    }
  }
}
</style>
