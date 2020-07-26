<template>
  <div>
    <Introduction/>
    <ServicesSection/>
    <ColleagueSection/>
    <FacilitySection/>
    <ProcessSection/>
    <RegistrationSection/>
    <ContactPerson/>
    <Footer/>
    <div id="modal-backdrop" class=""></div>
  </div>
</template>

<script>
import Introduction from '~/components/organisms/Introduction.vue'
import ServicesSection from '~/components/organisms/ServicesSection.vue'
import FacilitySection from '~/components/organisms/FacilitySection.vue'
import ColleagueSection from '~/components/organisms/ColleagueSection.vue'
import RegistrationSection from '~/components/organisms/RegistrationSection.vue'
import ProcessSection from '~/components/organisms/ProcessSection.vue'
import ContactPerson from '~/components/organisms/ContactPerson.vue'
import Footer from '~/components/organisms/Footer.vue'
export default {
  components: {
    Introduction: Introduction,
    ServicesSection: ServicesSection,
    FacilitySection: FacilitySection,
    ColleagueSection: ColleagueSection,
    RegistrationSection: RegistrationSection,
    ProcessSection: ProcessSection,
    ContactPerson: ContactPerson,
    Footer: Footer
  }
}
</script>

<style lang="scss" scoped>
</style>
