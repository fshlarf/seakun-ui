(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{222:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return l}));n(139),n(53),n(14),n(72),n(73),n(229);function r(t){for(var e=t.toLowerCase().split(" "),i=0;i<e.length;i++)e[i]=e[i].charAt(0).toUpperCase()+e[i].substring(1);return e.join(" ")}function o(t){return t||0==t?"Rp".concat(t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1.")):void 0}function l(t){switch(t){case"netflix":return"Netflix";case"spotify":return"Spotify";case"youtube":return"Youtube";case"gramedia":return"Gramedia";case"microsoft":case"microsoft365":return"Microsoft 365";case"canva":return"Canva";case"disney-hotstar":return"Disney+ Hotstar";case"apple-one":return"Apple One";case"apple-one-premium":return"Apple One Premium";case"wattpad":return"Wattpad";case"nintendo":return"Nintendo Switch";case"google-one":return"Google One";default:return t}}},228:function(t,e,n){var r=n(15),o=n(141),l=n(35);t.exports=function(t,e,n,c){var d=String(l(t)),f=d.length,v=void 0===n?" ":String(n),x=r(e);if(x<=f||""==v)return d;var m=x-f,h=o.call(v,Math.ceil(m/v.length));return h.length>m&&(h=h.slice(0,m)),c?h+d:d+h}},229:function(t,e,n){"use strict";var r=n(2),o=n(228),l=n(140),c=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(l);r(r.P+r.F*c,"String",{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},395:function(t,e,n){"use strict";var r=n(222);n.d(e,"a",(function(){return r.b}))},496:function(t,e,n){"use strict";n.r(e);var r=n(395),o={props:{product:{type:Object,default:{}}},data:function(){return{tooltipShow:!1}},methods:{formatMoneyRupiah:function(t){return Object(r.a)(t)},toggleTooltip:function(){this.tooltipShow=!this.tooltipShow}}},l=n(6),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"!w-72 h-full border-none bg-white shadow-xl rounded-3xl overflow-hidden text-gray-900 md:pb-3"},[n("div",{staticClass:"h-48"},[n("img",{staticClass:"object-cover max-h-[185px] w-full md:h-auto",attrs:{src:t.product.img,alt:"image not found"}})]),t._v(" "),n("div",{staticClass:"w-full h-full relative tn:px-2 tn:pb-2 md:py-0 md:px-4 grid flex-rows content-between"},[n("div",{staticClass:"h-full"},[n("div",{staticClass:"flex tn:pt-2 items-center mb-2 px-2"},[n("img",{staticClass:"w-8 ml-1",attrs:{src:t.product.icon,alt:"#"}}),t._v(" "),n("h1",{staticClass:"text-xl font-bold mx-2"},[t._v("\n          "+t._s(t.product.name)+"\n        ")])]),t._v(" "),t.product.preview?n("div",{staticClass:"tn:mb-1 tn:px-2 tn:mt-3 lg:px-4"},[n("div",{staticClass:"text-base mt-1"},[n("p",{},[t._v("\n            "+t._s(t.product.preview)+"\n          ")])])]):t._e(),t._v(" "),n("div",{staticClass:"tn:mb-1 tn:px-2 tn:mt-3 lg:px-4"},[n("div",{staticClass:"flex space-x-2 items-center mb-2"},[n("p",[t._v("Dibeli oleh:")]),t._v(" "),t._l(t.product.users,(function(e,r){return n("div",{key:r,staticClass:"rounded-full relative cursor-pointer border border-px border-white bg-primary text-white w-7 h-7 flex justify-center items-center text-xs",on:{mouseenter:function(e){return t.toggleTooltip()},mouseleave:function(e){return t.toggleTooltip()}}},[t._v("\n            "+t._s(e.initial)+"\n            "),n("div",{staticClass:"absolute z-10 tn:-top-7 md:-top-8 tn:-left-8 md:-left-12",class:{hidden:!t.tooltipShow,block:t.tooltipShow}},[n("div",{staticClass:"relative mx-2"},[n("div",{staticClass:"bg-third text-black text-center text-xs rounded py-1 px-2 left-0 w-24"},[t._v("\n                  "+t._s(e.name)+"\n                  "),n("svg",{staticClass:"absolute h-2 w-full left-0 top-full",attrs:{x:"0px",y:"0px",viewBox:"0 0 255 255","xml:space":"preserve"}},[n("polygon",{staticClass:"fill-current text-third tn:hidden md:block",attrs:{points:"0,0 127.5,127.5 255,0"}})])])])])])}))],2),t._v(" "),n("p",{staticClass:"text-secondary text-xl font-bold"},[t._v("\n          "+t._s(t.formatMoneyRupiah(t.product.price))+"\n        ")])])])])])}),[],!1,null,"3a931652",null);e.default=component.exports}}]);