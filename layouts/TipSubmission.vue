<template>
    <div>
      <div
        class="w-full fixed top-0 z-40 flex items-center bg-white shadow-md shadow-black/[5%]  h-[49px] sm:h-[64px] px-5 md:px-9 lg:px-0"
      >
        <nuxt-link to="/" class="w-full lg:max-w-[900px] xl:max-w-[1150px] mx-auto">
          <img
            class="h-6 w-[100px] sm:h-[25px] sm:w-[100px]"
            src="/images/navbar/new_brand_seakun.svg"
            alt="brand seakun"
          />
        </nuxt-link>
      </div>
      <div >
          <Nuxt class="mt-[73px] lg:mt-[101px] px-5 md:px-9 lg:px-10 xl:px-[60px]  lg:max-w-[900px] xl:max-w-[1150px] mx-auto "/>
        </div>
      <Footer/>
    </div>
  </template>
  <script>
  import Footer from './../components/mollecules/Footer.vue'
  export default {
    components:{
        Footer
    }
  };
  </script>
  
  
  </style>
  