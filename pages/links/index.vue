<template>
  <div class="sider">
    <div class="links">
      <div class="links__container">
        <h4 style="color: #52af9c; margin-bottom: 8px">Halo, teman!</h4>
        <p style="text-align: center; color: #52af9c">@seakun.id</p>
        <div class="links__container-content">
          <div v-for="(link, id) in links" :key="id" style="min-width: 120px">
            <Link :source="link.source" :img="link.img" :label="link.label" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Link from './views/link';
export default {
  components: {
    Link,
  },
  data() {
    return {
      links: [
        {
          img: '/images/links/website.png',
          label: 'Website',
          source: '/',
        },
        {
          img: '/images/links/pre-order.png',
          label: 'Prosedur Pre-Order',
          source: '/info/pre-order/',
        },
        {
          img: '/images/links/host.png',
          label: 'Prosedur User Host',
          source: '/info/user-host/',
        },
        {
          img: '/images/links/whatsapp.png',
          label: 'Whatsapp',
          source: 'https://api.whatsapp.com/send?phone=6282124852232',
        },
        {
          img: '/images/links/scheme-price.png',
          label: 'Skema Harga',
          source: '/info/scheme-of-price',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.sider {
  background-color: #86d0c1 !important;
  padding: 2px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: absolute;
}
.links {
  background-color: #86d0c1 !important;
  margin: 20px;
  &__container {
    padding: 20px;
    background-color: white;
    border: 1px dashed #86d0c1;
    min-height: 80vh;
    &-content {
      justify-content: space-around;
      display: flex;
      flex-wrap: wrap;
      .link {
        cursor: pointer;
        width: 124px;
        height: 143px;
        &-circle {
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100px;
          height: 100px;
          background: #ffffff;
          border: 1px solid #86d0c1;
          box-sizing: border-box;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 50%;
        }
        &-label {
          color: #52af9c;
          text-align: center;
          font-size: 12px;
          margin-top: 6px;
        }
      }
      .link:hover {
        opacity: 0.8;
      }
    }
  }
}
</style>
