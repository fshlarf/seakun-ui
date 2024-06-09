<template>
  <div>
    <!-- Intro -->
    <div class="mb-5">
      <h1 class="text-2xl font-bold">{{ blog.title }}</h1>

      <!-- Article Information -->
      <div class="mt-2 flex flex-col justify-between md:flex-row">
        <div class="flex items-center">
          <p class="mr-4 text-sm font-medium">{{ blog.publisherName }}</p>
          <div class="mr-2 flex items-center text-[#A0A3BD]">
            <svg
              class="h-[14px] w-[14px] fill-current"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.9711 0C4.10106 0 4.22569 0.0516249 4.31758 0.143518C4.40948 0.23541 4.4611 0.360044 4.4611 0.49V1.4063H9.723V0.4963C9.723 0.366344 9.77462 0.24171 9.86652 0.149818C9.95841 0.0579249 10.083 0.0063 10.213 0.0063C10.343 0.0063 10.4676 0.0579249 10.5595 0.149818C10.6514 0.24171 10.703 0.366344 10.703 0.4963V1.4063H12.6C12.9712 1.4063 13.3272 1.5537 13.5897 1.8161C13.8522 2.0785 13.9998 2.43442 14 2.8056V12.6007C13.9998 12.9719 13.8522 13.3278 13.5897 13.5902C13.3272 13.8526 12.9712 14 12.6 14H1.4C1.02882 14 0.672829 13.8526 0.410298 13.5902C0.147767 13.3278 0.000185591 12.9719 0 12.6007L0 2.8056C0.000185591 2.43442 0.147767 2.0785 0.410298 1.8161C0.672829 1.5537 1.02882 1.4063 1.4 1.4063H3.4811V0.4893C3.48129 0.359465 3.53299 0.235012 3.62487 0.14327C3.71674 0.0515286 3.84126 -1.32484e-07 3.9711 0ZM0.98 5.4194V12.6007C0.98 12.6559 0.990864 12.7105 1.01197 12.7614C1.03308 12.8124 1.06401 12.8587 1.10302 12.8977C1.14202 12.9367 1.18832 12.9676 1.23927 12.9887C1.29023 13.0098 1.34484 13.0207 1.4 13.0207H12.6C12.6552 13.0207 12.7098 13.0098 12.7607 12.9887C12.8117 12.9676 12.858 12.9367 12.897 12.8977C12.936 12.8587 12.9669 12.8124 12.988 12.7614C13.0091 12.7105 13.02 12.6559 13.02 12.6007V5.4292L0.98 5.4194ZM4.6669 10.2333V11.3995H3.5V10.2333H4.6669ZM7.5831 10.2333V11.3995H6.4169V10.2333H7.5831ZM10.5 10.2333V11.3995H9.3331V10.2333H10.5ZM4.6669 7.4494V8.6156H3.5V7.4494H4.6669ZM7.5831 7.4494V8.6156H6.4169V7.4494H7.5831ZM10.5 7.4494V8.6156H9.3331V7.4494H10.5ZM3.4811 2.3856H1.4C1.34484 2.3856 1.29023 2.39646 1.23927 2.41757C1.18832 2.43868 1.14202 2.46961 1.10302 2.50862C1.06401 2.54762 1.03308 2.59392 1.01197 2.64487C0.990864 2.69583 0.98 2.75044 0.98 2.8056V4.4401L13.02 4.4499V2.8056C13.02 2.75044 13.0091 2.69583 12.988 2.64487C12.9669 2.59392 12.936 2.54762 12.897 2.50862C12.858 2.46961 12.8117 2.43868 12.7607 2.41757C12.7098 2.39646 12.6552 2.3856 12.6 2.3856H10.703V3.0359C10.703 3.16586 10.6514 3.29049 10.5595 3.38238C10.4676 3.47428 10.343 3.5259 10.213 3.5259C10.083 3.5259 9.95841 3.47428 9.86652 3.38238C9.77462 3.29049 9.723 3.16586 9.723 3.0359V2.3856H4.4611V3.0296C4.4611 3.15956 4.40948 3.28419 4.31758 3.37608C4.22569 3.46798 4.10106 3.5196 3.9711 3.5196C3.84114 3.5196 3.71651 3.46798 3.62462 3.37608C3.53272 3.28419 3.4811 3.15956 3.4811 3.0296V2.3856Z"
              />
            </svg>

            <p class="px-2 text-[10px] text-[#66738F] md:text-xs">
              {{ unixToIndonesianDate(blog.createdAt) }}
            </p>
          </div>
          <CategoryTag
            :label="blog.blogCategory ? blog.blogCategory[0].name : ''"
            size="small"
          />
        </div>

        <!-- Share Icon -->
        <div class="mt-3 flex gap-2 md:mt-0">
          <!-- twitter -->
          <div
            class="rounded-full bg-[#F5F8FF] flex justify-center items-center w-[34px] h-[34px] cursor-pointer"
            @click="sharePost('twitter')"
          >
            <svg
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_21466_21393)">
                <path
                  d="M16 2.05927C15.4009 2.32469 14.7654 2.49892 14.1146 2.57614C14.7924 2.16989 15.3129 1.52658 15.5579 0.760082C14.9136 1.14245 14.2086 1.41185 13.4735 1.55664C12.8747 0.918707 12.0216 0.52002 11.0774 0.52002C9.26456 0.52002 7.79475 1.98977 7.79475 3.80252C7.79475 4.05983 7.82381 4.31033 7.87975 4.55064C5.15162 4.41371 2.73287 3.10689 1.11381 1.12089C0.831312 1.60571 0.669438 2.16964 0.669438 2.77114C0.669438 3.91002 1.249 4.91471 2.12975 5.5034C1.60847 5.48707 1.09866 5.34628 0.642875 5.09277C0.642687 5.10652 0.642687 5.12027 0.642687 5.13408C0.642687 6.72452 1.77419 8.05127 3.27581 8.35283C2.79243 8.4843 2.28539 8.50354 1.79344 8.40908C2.21112 9.71321 3.42344 10.6622 4.85981 10.6888C3.73638 11.5691 2.32094 12.094 0.783063 12.094C0.518063 12.094 0.256813 12.0784 0 12.0481C1.45269 12.9795 3.17813 13.5229 5.03188 13.5229C11.0698 13.5229 14.3715 8.52096 14.3715 4.18321C14.3715 4.04083 14.3684 3.89927 14.362 3.75852C15.0046 3.29395 15.5593 2.71853 16 2.05927Z"
                  fill="#55ACEE"
                />
              </g>
              <defs>
                <clipPath id="clip0_21466_21393">
                  <rect
                    width="16"
                    height="13.0625"
                    fill="white"
                    transform="translate(0 0.46875)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>

          <!-- email -->
          <div
            class="rounded-full bg-[#F5F8FF] flex justify-center items-center w-[34px] h-[34px] cursor-pointer"
            @click="sharePost('email')"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 3H3C2.175 3 1.5075 3.675 1.5075 4.5L1.5 13.5C1.5 14.325 2.175 15 3 15H15C15.825 15 16.5 14.325 16.5 13.5V4.5C16.5 3.675 15.825 3 15 3ZM14.7 6.1875L9.3975 9.5025C9.1575 9.6525 8.8425 9.6525 8.6025 9.5025L3.3 6.1875C3.2248 6.14528 3.15894 6.08825 3.10642 6.01984C3.05389 5.95143 3.0158 5.87308 2.99443 5.78953C2.97307 5.70597 2.96888 5.61895 2.98212 5.53373C2.99536 5.44851 3.02575 5.36686 3.07146 5.29373C3.11717 5.22059 3.17724 5.15749 3.24804 5.10825C3.31885 5.059 3.3989 5.02463 3.48337 5.00722C3.56784 4.98981 3.65496 4.98973 3.73947 5.00696C3.82397 5.0242 3.9041 5.0584 3.975 5.1075L9 8.25L14.025 5.1075C14.0959 5.0584 14.176 5.0242 14.2605 5.00696C14.345 4.98973 14.4322 4.98981 14.5166 5.00722C14.6011 5.02463 14.6812 5.059 14.752 5.10825C14.8228 5.15749 14.8828 5.22059 14.9285 5.29373C14.9742 5.36686 15.0046 5.44851 15.0179 5.53373C15.0311 5.61895 15.0269 5.70597 15.0056 5.78953C14.9842 5.87308 14.9461 5.95143 14.8936 6.01984C14.8411 6.08825 14.7752 6.14528 14.7 6.1875Z"
                fill="#FF6E79"
              />
            </svg>
          </div>

          <!-- whatsapp -->
          <div
            class="rounded-full bg-[#F5F8FF] flex justify-center items-center w-[34px] h-[34px] cursor-pointer"
            @click="sharePost('whatsapp')"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.1196 5.12994C12.9596 1.79994 8.54956 0.809939 5.12956 2.87994C1.79956 4.94994 0.719558 9.44994 2.87956 12.7799L3.05956 13.0499L2.33956 15.7499L5.03956 15.0299L5.30956 15.2099C6.47956 15.8399 7.73956 16.1999 8.99956 16.1999C10.3496 16.1999 11.6996 15.8399 12.8696 15.1199C16.1996 12.9599 17.1896 8.54994 15.1196 5.12994ZM13.2296 12.0599C12.8696 12.5999 12.4196 12.9599 11.7896 13.0499C11.4296 13.0499 10.9796 13.2299 9.17956 12.5099C7.64956 11.7899 6.38956 10.6199 5.48956 9.26994C4.94956 8.63994 4.67956 7.82994 4.58956 7.01994C4.58956 6.29994 4.85956 5.66994 5.30956 5.21994C5.48956 5.03994 5.66956 4.94994 5.84956 4.94994H6.29956C6.47956 4.94994 6.65956 4.94994 6.74956 5.30994C6.92956 5.75994 7.37956 6.83994 7.37956 6.92994C7.46956 7.01994 7.46956 7.19994 7.37956 7.28994C7.46956 7.46994 7.37956 7.64994 7.28956 7.73994C7.19956 7.82994 7.10956 8.00994 7.01956 8.09994C6.83956 8.18994 6.74956 8.36994 6.83956 8.54994C7.19956 9.08994 7.64956 9.62994 8.09956 10.0799C8.63956 10.5299 9.17956 10.8899 9.80956 11.1599C9.98956 11.2499 10.1696 11.2499 10.2596 11.0699C10.3496 10.8899 10.7996 10.4399 10.9796 10.2599C11.1596 10.0799 11.2496 10.0799 11.4296 10.1699L12.8696 10.8899C13.0496 10.9799 13.2296 11.0699 13.3196 11.1599C13.4096 11.4299 13.4096 11.7899 13.2296 12.0599Z"
                fill="#4EC664"
              />
            </svg>
          </div>

          <!-- copy link -->
          <div
            class="rounded-full bg-[#F5F8FF] flex justify-center items-center w-[34px] h-[34px] cursor-pointer"
            @click="sharePost('copy-link')"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.9758 3.71728C12.5171 3.21728 11.6898 3.18661 11.1384 3.73795L5.73845 9.13795C5.59845 9.27795 5.59845 9.45528 5.73845 9.59528C5.87845 9.73528 6.05578 9.73528 6.19578 9.59528L10.6624 5.12861C10.7882 5.00718 10.9566 4.93998 11.1314 4.9415C11.3062 4.94302 11.4734 5.01313 11.597 5.13674C11.7206 5.26034 11.7907 5.42755 11.7922 5.60235C11.7937 5.77714 11.7266 5.94555 11.6051 6.07128L7.13845 10.5379C6.98622 10.6946 6.80413 10.8191 6.60293 10.9041C6.40174 10.9892 6.18554 11.033 5.96711 11.033C5.74869 11.033 5.53249 10.9892 5.3313 10.9041C5.1301 10.8191 4.94801 10.6946 4.79578 10.5379C4.63914 10.3857 4.51462 10.2036 4.4296 10.0024C4.34457 9.80124 4.30076 9.58504 4.30076 9.36661C4.30076 9.14819 4.34457 8.93199 4.4296 8.73079C4.51462 8.5296 4.63914 8.34751 4.79578 8.19528L10.1958 2.79528C11.2404 1.74995 12.9391 1.71595 13.9491 2.80528C14.9838 3.85128 15.0138 5.54128 13.9291 6.54728L7.60511 12.8713C6.14511 14.3313 3.85578 14.3313 2.39578 12.8713C0.935781 11.4113 0.935781 9.12195 2.39578 7.66195L7.79578 2.26195C7.92152 2.14051 8.08992 2.07331 8.26472 2.07483C8.43951 2.07635 8.60672 2.14646 8.73033 2.27007C8.85393 2.39367 8.92405 2.56088 8.92556 2.73568C8.92708 2.91048 8.85989 3.07888 8.73845 3.20461L3.33845 8.60461C2.39845 9.54461 2.39845 10.9886 3.33845 11.9286C4.27845 12.8686 5.72245 12.8686 6.66245 11.9286L12.9958 5.59528L13.0164 5.57528C13.5164 5.11728 13.5471 4.28928 12.9958 3.73795C12.989 3.7312 12.9823 3.72431 12.9758 3.71728Z"
                fill="#8DA0CB"
              />
            </svg>
          </div>
        </div>
      </div>

      <!-- Content -->
      <div class="mt-4 space-y-2">
        <div v-for="(block, id) in content.blocks" :key="id">
          <!-- image -->
          <template v-if="block.type == 'image'">
            <div>
              <img
                class="max-h-[325px] w-full rounded-[10px] object-cover"
                :src="block.data.url"
              />
              <span class="mt-2 text-xs font-normal">{{
                block.data.caption
              }}</span>
            </div>
          </template>
          <!-- image -->

          <!-- paragraph -->
          <template v-if="block.type == 'paragraph'">
            <p
              class="text-sm font-normal leading-6"
              v-html="block.data.text"
            ></p>
          </template>
          <!-- paragraph -->

          <!-- header -->
          <template v-if="block.type == 'header'">
            <h2
              v-if="block.data.level == 3"
              class="text-xl font-bold pt-2"
              v-html="block.data.text"
            ></h2>
            <h3
              v-else-if="block.data.level == 4"
              class="text-base font-bold pt-2"
              v-html="block.data.text"
            ></h3>
          </template>
          <!-- header -->

          <!-- list -->
          <template v-if="block.type == 'list'">
            <ul
              class="pl-4 text-sm font-normal leading-6"
              :class="`${
                block.data.style == 'unordered' ? 'list-disc' : 'list-decimal'
              }`"
            >
              <li
                v-for="(item, id) in block.data.items"
                :key="id"
                v-html="item"
              ></li>
            </ul>
          </template>
          <!-- list -->
        </div>
      </div>
      <!-- Content -->
    </div>
  </div>
</template>

<script>
import { unixToIndonesianDate } from '~/helpers/word-transformation';
import CategoryTag from '~/components/mollecules/CategoryTagBlog.vue';

export default {
  components: {
    CategoryTag,
  },
  props: {
    blog: {
      type: Object,
      default: () => {},
    },
    content: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    sharePost(media) {
      let fullURL = window.location.href;
      if (media === 'twitter') {
        this.shareByTwitter(fullURL);
      } else if (media === 'email') {
        this.shareByEmail(fullURL);
      } else if (media === 'whatsapp') {
        this.shareByWhatsapp(fullURL);
      } else if (media === 'copy-link') {
        this.clickCopyHandler('link', fullURL);
      }
    },
    shareByTwitter(url) {
      window.open(`https://twitter.com/intent/tweet?text=${url}`);
    },
    shareByEmail(url) {
      window.open(`mailto:?subject=${this.blog.title}&body=${url}`);
    },
    shareByWhatsapp(url) {
      window.open(`whatsapp://send?text=${encodeURIComponent(url)}`);
    },
    clickCopyHandler(name, value) {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(value).then(
          () => {
            this.$alert.show({
              status: 'success',
              message: `${name} berhasil disalin`,
            });
          },
          (err) => console.log(err)
        );
      } else {
        this.fallbackCopyText(name, value);
      }
    },
    fallbackCopyText(name, value) {
      let textArea = document.createElement('textarea');
      textArea.value = value;

      // Avoid scrolling to bottom
      textArea.style.top = '0';
      textArea.style.left = '0';
      textArea.style.position = 'fixed';

      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        let successful = document.execCommand('copy');
        if (successful) {
          this.$alert.show({
            status: 'success',
            message: `${name} berhasil disalin`,
          });
        }
      } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
      }
      document.body.removeChild(textArea);
    },
    unixToIndonesianDate,
  },
};
</script>

<style>
a {
  color: #3b82f6;
  text-decoration: underline;
}
</style>
