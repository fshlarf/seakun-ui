<template>
  <div>
    <Header />
    <div class="event-registered">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="event-registered__img">
              <img src="/images/thank-you.png" alt="Image not found" />
            </div>
            <h3 class="event-registered__header-h3">Thank You!</h3>
            <p>
              Pendaftaran kamu telah berhasil kami simpan. Link meeting room
              bisa stay tune di email kamu, see you online!
              <br />
              <br />
              Sampai bertemu, teman!
            </p>
            <p style="color: #666666">
              Jika ada kendala segera hubungi ke Whatsapp Seakun.id
              <a href="https://api.whatsapp.com/send?phone=6282124852232"
                >+6282124852232</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/mollecules/Header';
import Footer from '~/components/mollecules/Footer';

export default {
  components: {
    Header: Header,
    Footer: Footer,
  },
};
</script>

<style lang="scss" scoped>
.event-registered {
  padding: 100px 40px 50px !important;
  background: rgb(243, 243, 243);

  .container {
    background: white;
    border-radius: 10px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
  }
  .col {
    text-align: center;

    h3 {
      margin-top: 20px !important;
      margin-bottom: 20px !important;
      font-weight: 700;
    }
    p {
      margin: 0 auto;
      max-width: 600px;
      margin-top: 30px;
      margin-bottom: 40px;
    }
  }
  .container {
    max-width: 1120px !important;
    font-weight: 500 !important;
    margin: 0 auto !important;
  }
  &__img {
    img {
      width: 40rem;
    }
  }
  .row {
    padding: 0px 8px !important;
  }
}
@media (max-width: 800px) {
  .event-registered {
    padding: 50px 0px 0px !important;
    Ï &__img {
      text-align: center;
      margin-top: 20px;
    }
    &__header {
      &-h3 {
        font-size: 22px;
        margin-top: 16px;
      }
    }
    img {
      width: 330px !important;
      margin: 16px auto;
    }
  }
}
</style>
