<template>
  <div>
    <NavbarBlank></NavbarBlank>
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

<style >
html {
  font-family: Montserrat !important;
  font-size: 16px;
  background: rgba(239, 239, 239, 0.1);
}
body{
  background: rgba(239, 239, 239, 0.1) !important;
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
