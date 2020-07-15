<template>
  <div>
    <Introduction/>
    <ServicesSection/>
    <ColleagueSection/>
    <FacilitySection/>
    <RegistrationSection/>
    <ContactPerson/>
    <Footer/>
  </div>
</template>

<script>
import Introduction from '~/components/organisms/Introduction.vue'
import ServicesSection from '~/components/organisms/ServicesSection.vue'
import FacilitySection from '~/components/organisms/FacilitySection.vue'
import ColleagueSection from '~/components/organisms/ColleagueSection.vue'
import RegistrationSection from '~/components/organisms/RegistrationSection.vue'
import ContactPerson from '~/components/organisms/ContactPerson.vue'
import Footer from '~/components/organisms/Footer.vue'
export default {
  components: {
    Introduction: Introduction,
    ServicesSection: ServicesSection,
    FacilitySection: FacilitySection,
    ColleagueSection: ColleagueSection,
    RegistrationSection: RegistrationSection,
    ContactPerson: ContactPerson,
    Footer: Footer
  }
}
</script>

<style lang="scss" scoped>
</style>
