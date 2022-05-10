(window.webpackJsonp=window.webpackJsonp||[]).push([[79,14,26,36],{220:function(t,e,l){var content=l(224);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(19).default)("f7e4c7e6",content,!0,{sourceMap:!1})},221:function(t,e,l){"use strict";l.r(e);var n={name:"Button",props:{variant:{type:String,default:null},size:{type:String,default:null},label:{type:String,default:""},isLoading:{type:Boolean,default:!1},shape:{type:String,default:""},addClass:{type:String,default:""}},data:function(){return{classBtn:"btn btn-".concat(this.variant," ").concat(this.size?"btn-"+this.size:""," ").concat("pill"===this.shape?"!rounded-full":""," ").concat(this.addClass?this.addClass:"")}},methods:{handleOnClick:function(t){this.$emit("click",t)}}},o=(l(223),l(6)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("button",t._b({class:t.classBtn,attrs:{type:"button",disabled:t.isLoading},on:{click:t.handleOnClick}},"button",t.$props,!1),[t.isLoading?l("div",[t._m(0)]):l("div",[t._v("\n    "+t._s(t.label)+"\n  ")])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("i",{staticClass:"fa fa-circle-o-notch fa-spin"}),t._v("\n      Loading...\n    ")])}],!1,null,"20743f99",null);e.default=component.exports},223:function(t,e,l){"use strict";l(220)},224:function(t,e,l){var n=l(18)((function(i){return i[1]}));n.push([t.i,"button[data-v-20743f99]:disabled,button[data-v-20743f99]:hover:disabled{border:1px solid #a9e0d5!important;background-color:#a9e0d5!important;color:#fff!important}.fa[data-v-20743f99]{margin-left:-12px;margin-right:8px}",""]),n.locals={},t.exports=n},225:function(t,e,l){var content=l(234);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(19).default)("9610f45c",content,!0,{sourceMap:!1})},226:function(t,e){t.exports=function(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t},t.exports.default=t.exports,t.exports.__esModule=!0},227:function(t,e,l){var n=l(238);t.exports=function(source,t){if(null==source)return{};var e,i,l=n(source,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(source);for(i=0;i<o.length;i++)e=o[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(source,e)&&(l[e]=source[e])}return l},t.exports.default=t.exports,t.exports.__esModule=!0},230:function(t,e,l){var content=l(240);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(19).default)("6a2cdb88",content,!0,{sourceMap:!1})},232:function(t,e,l){"use strict";l.r(e);l(233);var n=l(6),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"card"},[l("div",{staticClass:"card-body"},[l("div",{staticClass:"wrapper w-full"},[l("div",{staticClass:"grid grid-cols-6 gap-2 items-center"},[l("div",{staticClass:"col-span-2"},[l("div",{staticClass:"shimmer h-24 w-full"})]),t._v(" "),l("div",{staticClass:"col-span-4"},[l("div",{staticClass:"shimmer h-4 w-full my-1"}),t._v(" "),l("div",{staticClass:"shimmer w-8/12 my-1"}),t._v(" "),l("div",{staticClass:"shimmer w-9/12 my-1"}),t._v(" "),l("div",{staticClass:"shimmer w-full my-1"})])])])])])}],!1,null,"8b5e9a08",null);e.default=component.exports},233:function(t,e,l){"use strict";l(225)},234:function(t,e,l){var n=l(18)((function(i){return i[1]}));n.push([t.i,".card[data-v-8b5e9a08]{border:none;box-shadow:0 4px 20px rgba(0,0,0,.08)}",""]),n.locals={},t.exports=n},235:function(t,e,l){"use strict";l.r(e);var n=l(232),o={name:"Modal",data:function(){return{classModal:"".concat(this.size?"".concat(this.size):"xl:w-1/2")}},props:{isShow:{type:Boolean,default:!1},size:{type:String,default:null},isLoading:{type:Boolean,default:!1}},components:{CardShimmer:n.default},methods:{onClose:function(){this.$emit("onClose")}}},r=(l(239),l(6)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[t.isShow?l("div",{staticClass:"z-40 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed",attrs:{tabindex:"0"}},[l("div",{staticClass:"z-50 relative p-3 mx-auto my-0 w-full"},[l("div",{staticClass:"modal-popup bg-white rounded-2xl shadow-lg border flex flex-col overflow-hidden tn:w-full md:w-4/5 lg:w-3/5",class:t.classModal},[l("button",{staticClass:"fill-current h-6 w-6 absolute right-0 top-0 tn:m-3 xl:m-4 font-3xl font-bold primary focus:outline-none",on:{click:t.onClose}},[l("svg",{staticClass:"w-6 h-6 primary",attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[l("path",{attrs:{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"}})])]),t._v(" "),l("div",{staticClass:"px-6 py-3"},[t._t("header")],2),t._v(" "),l("div",{staticClass:"scroll-bar tn:px-3 tn:py-0 md:px-6 overflow-y-auto overscroll-auto"},[t.isLoading?l("div",{staticClass:"space-y-2"},[l("CardShimmer"),t._v(" "),l("CardShimmer"),t._v(" "),l("CardShimmer")],1):l("div",[t._t("default")],2)]),t._v(" "),l("div",{staticClass:"px-6 py-3"},[t._t("footer")],2)])]),t._v(" "),l("div",{staticClass:"z-40 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed bg-black opacity-50",on:{click:t.onClose}})]):t._e()])}),[],!1,null,null,null);e.default=component.exports},238:function(t,e){t.exports=function(source,t){if(null==source)return{};var e,i,l={},n=Object.keys(source);for(i=0;i<n.length;i++)e=n[i],t.indexOf(e)>=0||(l[e]=source[e]);return l},t.exports.default=t.exports,t.exports.__esModule=!0},239:function(t,e,l){"use strict";l(230)},240:function(t,e,l){var n=l(18)((function(i){return i[1]}));n.push([t.i,".modal-popup{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);max-height:95%;max-width:95%;min-width:20rem}.scroll-bar-hidden::-webkit-scrollbar{display:none}.scroll-bar-hidden{-ms-overflow-style:none;scrollbar-width:none}.scroll-bar::-webkit-scrollbar{width:5px}.scroll-bar::-webkit-scrollbar-thumb{background:#86d0c1;border-radius:2px;margin-right:5px}.scroll-bar{scrollbar-width:thin!important;scrollbar-color:#86d0c1 #fff!important;border-radius:2px}",""]),n.locals={},t.exports=n},432:function(t,e,l){l(28),l(23),l(27),l(43),l(44);var n=l(226),o=l(227),r=["class","staticClass","style","staticStyle","attrs"];function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,l)}return e}t.exports={functional:!0,render:function(t,e){var l=e._c,data=(e._v,e.data),d=e.children,f=void 0===d?[]:d,m=data.class,v=data.staticClass,style=data.style,h=data.staticStyle,x=data.attrs,C=void 0===x?{}:x,y=o(data,r);return l("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){n(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[m,v],style:[style,h],attrs:Object.assign({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},C)},y),f.concat([l("path",{attrs:{d:"M12 14L2 14C0.89543 14 -1.75377e-09 13.1046 -1.60594e-09 12L-2.67657e-10 2C-1.19834e-10 0.89543 0.89543 1.19834e-10 2 2.67657e-10L12 1.60594e-09C13.1046 1.75377e-09 14 0.89543 14 2L14 12C14 13.1046 13.1046 14 12 14ZM2 2L2 12L12 12L12 2L2 2ZM6 10.362L3.3 7.715L4.7 6.285L6 7.556L9.3 4.289L10.7 5.711L6 10.361L6 10.362Z",fill:"#4BAC99"}})]))}}},616:function(t,e,l){"use strict";l.r(e);var n=l(235),o=l(432),r=l.n(o),c=l(221),d={name:"ModalPayment",components:{Modal:n.default,CheckBox:r.a,Button:c.default},props:{showModal:{type:Boolean,default:!1},dataPaymentMethodOtomatis:{type:Array,default:function(){return["qris","ovo","dana","shopee pay","link aja","mandiri","bni","bri","permata","alfamart"]}},dataPaymentMethodManual:{type:Array,default:function(){return["bca","mandiri","jenius"]}},onClickManual:{type:Function,default:function(){}},onClickOtomatis:{type:Function,default:function(){}}},methods:{onClose:function(){this.$emit("onClose")}}},f=l(6),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("Modal",{attrs:{"is-show":t.showModal,size:"xl:w-2/4"},on:{onClose:t.onClose},scopedSlots:t._u([{key:"header",fn:function(){return[l("div",{staticClass:"font-bold text-lg"},[t._v("Pilih Tipe Pembayaran")])]},proxy:!0}])},[t._v(" "),l("div",{staticClass:"inline-grid md:grid-cols-2 gap-4 py-2"},[l("div",{staticClass:"flex-1 shadow-md rounded-md p-1"},[l("p",{staticClass:"text-lg font-bold text-center"},[t._v("Pembayaran Otomatis")]),t._v(" "),l("div",{staticClass:"mt-3 px-3"},[l("img",{staticClass:"w-full",attrs:{src:"/images/payment/auto-payment.png"}})]),t._v(" "),l("div",{staticClass:"flex flex-row mb-2 mt-4 mx-2"},[l("div",{staticClass:"mt-1"},[l("CheckBox")],1),t._v(" "),l("div",[l("p",{staticClass:"ml-2 text-base font-normal"},[t._v("\n            QRIS, E-Wallet, berlaku disemua durasi berlangganan\n          ")])])]),t._v(" "),l("div",{staticClass:"flex flex-row mb-2 mx-2"},[l("div",{staticClass:"mt-1"},[l("CheckBox")],1),t._v(" "),l("div",[l("p",{staticClass:"ml-2 text-base font-normal"},[t._v("\n            Virtual Account dan Retail hanya berlaku untuk durasi di atas 3\n            bulan berlangganan\n          ")])])]),t._v(" "),l("div",{staticClass:"flex flex-row mb-3 mx-2"},[l("div",{staticClass:"mt-1"},[l("CheckBox")],1),t._v(" "),l("div",[l("p",{staticClass:"ml-2 text-base font-normal"},[t._v("\n            Konfirmasi pembayaran otomatis\n          ")])])]),t._v(" "),l("div",{staticClass:"px-2 pb-2"},[l("Button",{staticClass:"w-full bg-green-seakun text-base text-white font-bold",attrs:{label:"Bayar Otomatis"},on:{click:t.onClickOtomatis}})],1)]),t._v(" "),l("div",{staticClass:"flex-1 shadow-md rounded-md p-1"},[l("p",{staticClass:"text-lg font-bold text-center"},[t._v("Pembayaran Manual")]),t._v(" "),l("div",{staticClass:"mt-3 px-3"},[l("img",{staticClass:"mx-auto",attrs:{src:"/images/payment/manual-payment.png"}})]),t._v(" "),l("div",{staticClass:"flex flex-row mb-2 mt-4 mx-2"},[l("div",{staticClass:"mt-1"},[l("CheckBox",{staticClass:"w-4"})],1),t._v(" "),l("div",[l("p",{staticClass:"ml-2 text-base font-normal"},[t._v("\n            Transfer manual ke Bank BCA, Mandiri dan jenius\n          ")])])]),t._v(" "),l("div",{staticClass:"flex flex-row mb-3 mx-2"},[l("div",{staticClass:"mt-1"},[l("CheckBox")],1),t._v(" "),l("div",[l("p",{staticClass:"ml-2 text-base font-normal"},[t._v("\n            Konfirmasi pembayaran manual (upload bukti transfer di website)\n          ")])])]),t._v(" "),l("div",{staticClass:"px-2 pb-2"},[l("Button",{staticClass:"w-full bg-green-seakun text-base text-white font-bold",attrs:{label:"Bayar Manual"},on:{click:t.onClickManual}})],1)])])])}),[],!1,null,null,null);e.default=component.exports}}]);