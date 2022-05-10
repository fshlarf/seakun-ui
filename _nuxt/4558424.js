(window.webpackJsonp=window.webpackJsonp||[]).push([[98,14],{220:function(t,n,e){var content=e(224);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(19).default)("f7e4c7e6",content,!0,{sourceMap:!1})},221:function(t,n,e){"use strict";e.r(n);var r={name:"Button",props:{variant:{type:String,default:null},size:{type:String,default:null},label:{type:String,default:""},isLoading:{type:Boolean,default:!1},shape:{type:String,default:""},addClass:{type:String,default:""}},data:function(){return{classBtn:"btn btn-".concat(this.variant," ").concat(this.size?"btn-"+this.size:""," ").concat("pill"===this.shape?"!rounded-full":""," ").concat(this.addClass?this.addClass:"")}},methods:{handleOnClick:function(t){this.$emit("click",t)}}},o=(e(223),e(6)),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("button",t._b({class:t.classBtn,attrs:{type:"button",disabled:t.isLoading},on:{click:t.handleOnClick}},"button",t.$props,!1),[t.isLoading?e("div",[t._m(0)]):e("div",[t._v("\n    "+t._s(t.label)+"\n  ")])])}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("i",{staticClass:"fa fa-circle-o-notch fa-spin"}),t._v("\n      Loading...\n    ")])}],!1,null,"20743f99",null);n.default=component.exports},223:function(t,n,e){"use strict";e(220)},224:function(t,n,e){var r=e(18)((function(i){return i[1]}));r.push([t.i,"button[data-v-20743f99]:disabled,button[data-v-20743f99]:hover:disabled{border:1px solid #a9e0d5!important;background-color:#a9e0d5!important;color:#fff!important}.fa[data-v-20743f99]{margin-left:-12px;margin-right:8px}",""]),r.locals={},t.exports=r},752:function(t,n,e){"use strict";e.r(n);var r={components:{Button:e(221).default},methods:{goToWhatsapp:function(){window.location.href="https://api.whatsapp.com/send?phone=6282124852232"},goToSeakunHelp:function(){window.location.href="https://forms.gle/t1AbaxnjEtJr8NAPA"},redirectToSeakun:function(t){"home"===t?this.$router.push("/"):"price-scheme"===t?this.$router.push("/info/scheme-of-price"):"order-flow"===t?this.$router.push("/#orderFlow"):"product"===t?this.$router.push("/#provider"):"faq"===t?this.$router.push("/#qna"):"vote"===t&&this.$router.push("/vote")}}},o=e(6),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"pt-8",staticStyle:{"background-color":"#f4f9f8"}},[e("div",{staticClass:"max-w-sm mx-auto px-8"},[t._m(0),t._v(" "),e("div",{staticClass:"grid grid-cols-1 gap-6"},[e("Button",{staticClass:"py-3",attrs:{label:"Website Seakun",variant:"primary"},on:{click:function(n){return t.redirectToSeakun("home")}}}),t._v(" "),e("Button",{staticClass:"py-3",attrs:{label:"Skema Harga",variant:"primary"},on:{click:function(n){return t.redirectToSeakun("price-scheme")}}}),t._v(" "),e("Button",{staticClass:"py-3",attrs:{label:"Cara Berlangganan",variant:"primary"},on:{click:function(n){return t.redirectToSeakun("order-flow")}}}),t._v(" "),e("Button",{staticClass:"py-3",attrs:{label:"Mulai Berlangganan",variant:"primary"},on:{click:function(n){return t.redirectToSeakun("product")}}}),t._v(" "),e("Button",{staticClass:"py-3",attrs:{label:"FAQ",variant:"primary"},on:{click:function(n){return t.redirectToSeakun("faq")}}}),t._v(" "),e("Button",{staticClass:"py-3",attrs:{label:"Polling Layanan Baru",variant:"primary"},on:{click:function(n){return t.redirectToSeakun("vote")}}}),t._v(" "),e("Button",{staticClass:"py-3",attrs:{label:"Laporan Kendala",variant:"primary"},on:{click:t.goToSeakunHelp}}),t._v(" "),e("Button",{staticClass:"py-3",attrs:{label:"Hubungi WA",variant:"primary"},on:{click:t.goToWhatsapp}})],1)]),t._v(" "),t._m(1)])}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"mt-4 mb-10 flex justify-center space-x-4 items-center"},[e("img",{staticClass:"w-8 h-8 rounded-full",attrs:{src:"/images/seakunid.png",alt:""}}),t._v(" "),e("p",{staticClass:"text-primary font-bold text-xl"},[t._v("Seakun.id")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"max-w-sm mx-auto mt-2"},[e("div",{staticClass:"flex justify-between items-center"},[e("img",{staticClass:"w-[66px]",attrs:{src:"/images/icons/links/leafs-left.svg",alt:"#"}}),t._v(" "),e("div",{staticClass:"my-8 flex justify-center items-center space-x-3"},[e("a",{attrs:{href:"https://instagram.com/official.seakun"}},[e("img",{attrs:{src:"/images/icons/links/Instagram.png",alt:"Instagram"}})]),t._v(" "),e("a",{attrs:{href:"https://twitter.com/seakun_id"}},[e("img",{attrs:{src:"/images/icons/links/Twitter.png",alt:"Twitter"}})]),t._v(" "),e("a",{attrs:{href:"https://www.linkedin.com/company/seakun-id/"}},[e("img",{attrs:{src:"/images/icons/links/Linkedin.png",alt:"LinkedIn"}})])]),t._v(" "),e("img",{staticClass:"w-[80px]",attrs:{src:"/images/icons/links/leafs-right.svg",alt:"#"}})])])}],!1,null,null,null);n.default=component.exports}}]);