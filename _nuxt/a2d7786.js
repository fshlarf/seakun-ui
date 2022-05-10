(window.webpackJsonp=window.webpackJsonp||[]).push([[130,14,26,36,58],{220:function(t,l,e){var content=e(224);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(19).default)("f7e4c7e6",content,!0,{sourceMap:!1})},221:function(t,l,e){"use strict";e.r(l);var o={name:"Button",props:{variant:{type:String,default:null},size:{type:String,default:null},label:{type:String,default:""},isLoading:{type:Boolean,default:!1},shape:{type:String,default:""},addClass:{type:String,default:""}},data:function(){return{classBtn:"btn btn-".concat(this.variant," ").concat(this.size?"btn-"+this.size:""," ").concat("pill"===this.shape?"!rounded-full":""," ").concat(this.addClass?this.addClass:"")}},methods:{handleOnClick:function(t){this.$emit("click",t)}}},n=(e(223),e(6)),component=Object(n.a)(o,(function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("button",t._b({class:t.classBtn,attrs:{type:"button",disabled:t.isLoading},on:{click:t.handleOnClick}},"button",t.$props,!1),[t.isLoading?e("div",[t._m(0)]):e("div",[t._v("\n    "+t._s(t.label)+"\n  ")])])}),[function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("div",[e("i",{staticClass:"fa fa-circle-o-notch fa-spin"}),t._v("\n      Loading...\n    ")])}],!1,null,"20743f99",null);l.default=component.exports},223:function(t,l,e){"use strict";e(220)},224:function(t,l,e){var o=e(18)((function(i){return i[1]}));o.push([t.i,"button[data-v-20743f99]:disabled,button[data-v-20743f99]:hover:disabled{border:1px solid #a9e0d5!important;background-color:#a9e0d5!important;color:#fff!important}.fa[data-v-20743f99]{margin-left:-12px;margin-right:8px}",""]),o.locals={},t.exports=o},225:function(t,l,e){var content=e(234);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(19).default)("9610f45c",content,!0,{sourceMap:!1})},230:function(t,l,e){var content=e(240);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(19).default)("6a2cdb88",content,!0,{sourceMap:!1})},232:function(t,l,e){"use strict";e.r(l);e(233);var o=e(6),component=Object(o.a)({},(function(){var t=this,l=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"wrapper w-full"},[e("div",{staticClass:"grid grid-cols-6 gap-2 items-center"},[e("div",{staticClass:"col-span-2"},[e("div",{staticClass:"shimmer h-24 w-full"})]),t._v(" "),e("div",{staticClass:"col-span-4"},[e("div",{staticClass:"shimmer h-4 w-full my-1"}),t._v(" "),e("div",{staticClass:"shimmer w-8/12 my-1"}),t._v(" "),e("div",{staticClass:"shimmer w-9/12 my-1"}),t._v(" "),e("div",{staticClass:"shimmer w-full my-1"})])])])])])}],!1,null,"8b5e9a08",null);l.default=component.exports},233:function(t,l,e){"use strict";e(225)},234:function(t,l,e){var o=e(18)((function(i){return i[1]}));o.push([t.i,".card[data-v-8b5e9a08]{border:none;box-shadow:0 4px 20px rgba(0,0,0,.08)}",""]),o.locals={},t.exports=o},235:function(t,l,e){"use strict";e.r(l);var o=e(232),n={name:"Modal",data:function(){return{classModal:"".concat(this.size?"".concat(this.size):"xl:w-1/2")}},props:{isShow:{type:Boolean,default:!1},size:{type:String,default:null},isLoading:{type:Boolean,default:!1}},components:{CardShimmer:o.default},methods:{onClose:function(){this.$emit("onClose")}}},r=(e(239),e(6)),component=Object(r.a)(n,(function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("div",[t.isShow?e("div",{staticClass:"z-40 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed",attrs:{tabindex:"0"}},[e("div",{staticClass:"z-50 relative p-3 mx-auto my-0 w-full"},[e("div",{staticClass:"modal-popup bg-white rounded-2xl shadow-lg border flex flex-col overflow-hidden tn:w-full md:w-4/5 lg:w-3/5",class:t.classModal},[e("button",{staticClass:"fill-current h-6 w-6 absolute right-0 top-0 tn:m-3 xl:m-4 font-3xl font-bold primary focus:outline-none",on:{click:t.onClose}},[e("svg",{staticClass:"w-6 h-6 primary",attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"}})])]),t._v(" "),e("div",{staticClass:"px-6 py-3"},[t._t("header")],2),t._v(" "),e("div",{staticClass:"scroll-bar tn:px-3 tn:py-0 md:px-6 overflow-y-auto overscroll-auto"},[t.isLoading?e("div",{staticClass:"space-y-2"},[e("CardShimmer"),t._v(" "),e("CardShimmer"),t._v(" "),e("CardShimmer")],1):e("div",[t._t("default")],2)]),t._v(" "),e("div",{staticClass:"px-6 py-3"},[t._t("footer")],2)])]),t._v(" "),e("div",{staticClass:"z-40 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed bg-black opacity-50",on:{click:t.onClose}})]):t._e()])}),[],!1,null,null,null);l.default=component.exports},239:function(t,l,e){"use strict";e(230)},240:function(t,l,e){var o=e(18)((function(i){return i[1]}));o.push([t.i,".modal-popup{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);max-height:95%;max-width:95%;min-width:20rem}.scroll-bar-hidden::-webkit-scrollbar{display:none}.scroll-bar-hidden{-ms-overflow-style:none;scrollbar-width:none}.scroll-bar::-webkit-scrollbar{width:5px}.scroll-bar::-webkit-scrollbar-thumb{background:#86d0c1;border-radius:2px;margin-right:5px}.scroll-bar{scrollbar-width:thin!important;scrollbar-color:#86d0c1 #fff!important;border-radius:2px}",""]),o.locals={},t.exports=o},379:function(t,l,e){var content=e(393);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(19).default)("449637d7",content,!0,{sourceMap:!1})},388:function(t,l,e){"use strict";e.r(l);var o={props:{text:{type:String,default:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis praesentium nostrum ad nobis tempora quae nam velit. Maxime mollitia accusamus, rerum, enim placeat, voluptatem aperiam itaque unde fugit suscipit dicta."}}},n=(e(392),e(6)),component=Object(n.a)(o,(function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("div",{class:"bg-red-100 rounded-xl p-3"},[e("div",{staticClass:"flex justify-center gap-3 items-center"},[e("div",{},[e("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M11.9998 8.99996V13M11.9998 17H12.0098M10.2898 3.85996L1.81978 18C1.64514 18.3024 1.55274 18.6453 1.55177 18.9945C1.55079 19.3437 1.64127 19.6871 1.8142 19.9905C1.98714 20.2939 2.2365 20.5467 2.53748 20.7238C2.83847 20.9009 3.18058 20.9961 3.52978 21H20.4698C20.819 20.9961 21.1611 20.9009 21.4621 20.7238C21.7631 20.5467 22.0124 20.2939 22.1854 19.9905C22.3583 19.6871 22.4488 19.3437 22.4478 18.9945C22.4468 18.6453 22.3544 18.3024 22.1798 18L13.7098 3.85996C13.5315 3.56607 13.2805 3.32308 12.981 3.15444C12.6814 2.98581 12.3435 2.89722 11.9998 2.89722C11.656 2.89722 11.3181 2.98581 11.0186 3.15444C10.7191 3.32308 10.468 3.56607 10.2898 3.85996Z",stroke:"rgb(239 68 68)","stroke-linecap":"round","stroke-linejoin":"round"}})])]),t._v(" "),e("div",[e("p",{staticClass:"tn:text-xs md:text-base text-red-500",domProps:{innerHTML:t._s(t.text)}})])])])}),[],!1,null,null,null);l.default=component.exports},392:function(t,l,e){"use strict";e(379)},393:function(t,l,e){var o=e(18)((function(i){return i[1]}));o.push([t.i,".alert-card{background-color:#fff8ec}.alert-text{color:#ffc801}",""]),o.locals={},t.exports=o},651:function(t,l,e){"use strict";e.r(l);var o=e(235),n=e(221),r=e(388),d={components:{Modal:o.default,Button:n.default,WarningInfo:r.default},props:{showModal:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1},dataOrder:{type:Object,default:{}}},methods:{onClose:function(){this.$emit("onClose")}}},c=e(6),component=Object(c.a)(d,(function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("Modal",{attrs:{"is-show":t.showModal},on:{onClose:t.onClose},scopedSlots:t._u([{key:"header",fn:function(){return[e("div",{staticClass:"font-bold text-lg"},[t._v("Cek Data Pesanan")])]},proxy:!0}])},[t._v(" "),e("div",{staticClass:"-mt-3"},[e("WarningInfo",{attrs:{text:"Periksa kembali data kamu sebelum melanjutkan ke pembayaran"}})],1),t._v(" "),e("div",{staticClass:"mt-3 md:px-3"},[e("h1",{staticClass:"text-sm"},[t._v("Nama pemesan")]),t._v(" "),e("p",{staticClass:"font-bold"},[t._v(t._s(t.dataOrder.fullname))])]),t._v(" "),e("div",{staticClass:"mt-2 md:px-3"},[e("h1",{staticClass:"text-sm"},[t._v("Nomor telepon whatsapp")]),t._v(" "),e("p",{staticClass:"font-bold"},[t._v(t._s(t.dataOrder.whatsapp))])]),t._v(" "),e("div",{staticClass:"mt-2 md:px-3"},[e("h1",{staticClass:"text-sm"},[t._v("Email")]),t._v(" "),e("p",{staticClass:"font-bold"},[t._v(t._s(t.dataOrder.email))])]),t._v(" "),e("div",{staticClass:"mt-2 md:px-3"},[e("h1",{staticClass:"text-sm"},[t._v("Nama lengkap yang berqurban")]),t._v(" "),e("p",{staticClass:"font-bold"},[t._v(t._s(t.dataOrder.qurban_fullname))])]),t._v(" "),e("div",{staticClass:"mt-2 md:px-3"},[e("h1",{staticClass:"text-sm"},[t._v("Nama ayah kandung yang berqurban")]),t._v(" "),e("p",{staticClass:"font-bold"},[t._v(t._s(t.dataOrder.qurban_father_name))])]),t._v(" "),e("div",{staticClass:"mt-2 md:px-3"},[e("h1",{staticClass:"text-sm"},[t._v("Alamat pengiriman daging qurban")]),t._v(" "),e("p",{staticClass:"font-bold"},[t._v(t._s(t.dataOrder.address))])]),t._v(" "),e("div",{staticClass:"mt-2 md:px-3"},[e("h1",{staticClass:"text-sm"},[t._v("Kota / Kecamatan")]),t._v(" "),e("p",{staticClass:"font-bold"},[t._v(t._s(t.dataOrder.city))])]),t._v(" "),e("div",{staticClass:"mt-2 md:px-3"},[e("h1",{staticClass:"text-sm"},[t._v("Kode pos")]),t._v(" "),e("p",{staticClass:"font-bold"},[t._v(t._s(t.dataOrder.postal_code))])]),t._v(" "),e("div",{staticClass:"h-1 w-full bg-gray-300 my-2"}),t._v(" "),e("Button",{staticClass:"w-full mt-2 py-2",attrs:{variant:"primary",label:"Daftar","is-loading":t.isLoading},on:{click:function(l){return t.$emit("clickSubmit")}}}),t._v(" "),e("Button",{staticClass:"w-full mt-2",attrs:{variant:"secondary",label:"Kembali"},on:{click:t.onClose}})],1)}),[],!1,null,null,null);l.default=component.exports}}]);