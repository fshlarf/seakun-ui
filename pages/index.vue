<template>
    <div>
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
import HeaderSection from "~/components/organisms/HeaderSection.vue";
import Introduction from "~/components/organisms/Introduction.vue";
import ServicesSection from "~/components/organisms/ServicesSection.vue";
import FacilitySection from "~/components/organisms/FacilitySection.vue";
import ColleagueSection from "~/components/organisms/ColleagueSection.vue";
import RegistrationSection from "~/components/organisms/RegistrationSection.vue";
import TestimoniSection from "~/components/organisms/TestimoniSection.vue";
import ProcessSection from "~/components/organisms/ProcessSection.vue";
import ContactPerson from "~/components/organisms/ContactPerson.vue";
import CustomersSection from "~/components/organisms/CustomersSection.vue";
import Footer from "~/components/organisms/Footer.vue";

export default {
    components: {
        HeaderSection: HeaderSection,
        Introduction: Introduction,
        ServicesSection: ServicesSection,
        FacilitySection: FacilitySection,
        ColleagueSection: ColleagueSection,
        RegistrationSection: RegistrationSection,
        ProcessSection: ProcessSection,
        ContactPerson: ContactPerson,
        TestimoniSection: TestimoniSection,
        CustomersSection: CustomersSection,
        Footer: Footer,
    }
};
</script>

<style lang="scss" scoped>
</style>
