<template>
  <div>
    <NavbarBlank></NavbarBlank>
     <!-- <NavigationBlank/>  -->
    <div class="container-wrapper mt-10">
        <Nuxt />
    </div>
  </div>
</template>
<script>
import NavbarBlank from '~/components/mollecules/NavbarBlank'

export default {
    name:'NavigationBlank',
    components : {
        NavbarBlank
    }
    
}
</script>

<style scoped>
html {
  font-family: Montserrat !important;
  font-size: 16px;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.container-wrapper {
    margin-top: 60px;
}
</style>
