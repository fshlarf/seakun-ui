<template>
  <div>
    <Navbar />
    <HeaderSection />
    <Introduction />
    <ServicesSection />
    <ColleagueSection />
    <FacilitySection />
    <TestimoniSection />
    <ProcessSection />
    <CustomersSection />
    <RegistrationSection />
    <!-- <ContactPerson/> -->
    <Footer />
    <div id="modal-backdrop" class></div>
  </div>
</template>

<script>
import Navbar from '~/components/mollecules/Navbar';
import HeaderSection from '~/components/organisms/HeaderSection';
import Introduction from '~/components/organisms/Introduction';
import ServicesSection from '~/components/organisms/ServicesSection';
import FacilitySection from '~/components/organisms/FacilitySection';
import ColleagueSection from '~/components/organisms/ColleagueSection';
import RegistrationSection from '~/components/organisms/RegistrationSection';
import TestimoniSection from '~/components/organisms/TestimoniSection';
import ProcessSection from '~/components/organisms/ProcessSection';
import ContactPerson from '~/components/organisms/ContactPerson';
import CustomersSection from '~/components/organisms/CustomersSection';
import Footer from '~/components/mollecules/Footer';

export default {
  components: {
    Navbar,
    HeaderSection,
    Introduction,
    ServicesSection,
    FacilitySection,
    ColleagueSection,
    RegistrationSection,
    ProcessSection,
    ContactPerson,
    TestimoniSection,
    CustomersSection,
    Footer,
  },
};
</script>

<style lang="scss" scoped></style>
