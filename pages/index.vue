<template>
  <div>
    <Navbar />
    <HeaderSection />
    <IntroductionSection />
    <PartnershipSection />
    <ProductSection />
    <UserTypeSection />
    <OrderFlowSection />
    <TestimonySection />
    <UserGroupSection />
    <BenefitSection />
    <QnaSection />
    <Footer />
    <Modal
      :is-show="isShowInfoModal"
      size="auto"
      @onClose="isShowInfoModal = false"
    >
      <div class="py-4">
        Diinformasikan kepada pengguna Seakun per tanggal 8 Agustus 2021,
        whatsapp Seakun.id yg sebelumnya (+6282124852227) mengalami kendala.
        Jadi
        <b
          >segala proses pembayaran maupun pengaduan harap diinfokan ke nomor
          whatsapp berikut
          <a
            href="https://api.whatsapp.com/send?phone=6282124852232"
            class="text-primary"
            >+6282124852232</a
          >
        </b>
      </div>
    </Modal>
  </div>
</template>

<script>
import Navbar from '~/components/mollecules/Navbar';
import HeaderSection from '~/components/organisms/HeaderSection';
import IntroductionSection from '~/components/organisms/IntroductionSection';
import PartnershipSection from '~/components/organisms/PartnershipSection';
import ProductSection from '~/components/organisms/ProductSection';
import UserTypeSection from '~/components/organisms/UserTypeSection';
import OrderFlowSection from '~/components/organisms/OrderFlowSection';
import TestimonySection from '~/components/organisms/TestimonySection';
import UserGroupSection from '~/components/organisms/UserGroupSection';
import BenefitSection from '~/components/organisms/BenefitSection';
import QnaSection from '~/components/organisms/QnaSection';
import Footer from '~/components/mollecules/Footer';
import Modal from '~/components/atoms/Modal.vue';

export default {
  components: {
    Navbar,
    HeaderSection,
    IntroductionSection,
    PartnershipSection,
    ProductSection,
    UserTypeSection,
    OrderFlowSection,
    TestimonySection,
    UserGroupSection,
    BenefitSection,
    QnaSection,
    Footer,
    Modal,
  },
  data() {
    return {
      isShowInfoModal: true,
    };
  },
};
</script>

<style lang="scss" scoped></style>
