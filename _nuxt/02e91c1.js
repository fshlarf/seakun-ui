(window.webpackJsonp=window.webpackJsonp||[]).push([[6,36,55,58,114,115],{222:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return c}));n(139),n(53),n(14),n(72),n(73),n(229);function r(t){for(var e=t.toLowerCase().split(" "),i=0;i<e.length;i++)e[i]=e[i].charAt(0).toUpperCase()+e[i].substring(1);return e.join(" ")}function o(t){return t||0==t?"Rp".concat(t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1.")):void 0}function c(t){switch(t){case"netflix":return"Netflix";case"spotify":return"Spotify";case"youtube":return"Youtube";case"gramedia":return"Gramedia";case"microsoft":case"microsoft365":return"Microsoft 365";case"canva":return"Canva";case"disney-hotstar":return"Disney+ Hotstar";case"apple-one":return"Apple One";case"apple-one-premium":return"Apple One Premium";case"wattpad":return"Wattpad";case"nintendo":return"Nintendo Switch";case"google-one":return"Google One";default:return t}}},225:function(t,e,n){var content=n(234);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("9610f45c",content,!0,{sourceMap:!1})},226:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},t.exports.default=t.exports,t.exports.__esModule=!0},227:function(t,e,n){var r=n(238);t.exports=function(source,t){if(null==source)return{};var e,i,n=r(source,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(source);for(i=0;i<o.length;i++)e=o[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(source,e)&&(n[e]=source[e])}return n},t.exports.default=t.exports,t.exports.__esModule=!0},228:function(t,e,n){var r=n(15),o=n(141),c=n(35);t.exports=function(t,e,n,l){var d=String(c(t)),f=d.length,m=void 0===n?" ":String(n),h=r(e);if(h<=f||""==m)return d;var y=h-f,v=o.call(m,Math.ceil(y/m.length));return v.length>y&&(v=v.slice(0,y)),l?v+d:d+v}},229:function(t,e,n){"use strict";var r=n(2),o=n(228),c=n(140),l=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(c);r(r.P+r.F*l,"String",{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},231:function(t,e,n){"use strict";var r=n(5),o=n(29),c=n(30),l=n(142),d=n(74),f=n(10),m=n(54).f,h=n(55).f,y=n(12).f,v=n(236).trim,x="Number",_=r.Number,k=_,C=_.prototype,w=c(n(91)(C))==x,S="trim"in String.prototype,P=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,c=(e=S?e.trim():v(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,l=e.slice(2),i=0,f=l.length;i<f;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,r)}}return+e};if(!_(" 0o1")||!_("0b1")||_("+0x1")){_=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof _&&(w?f((function(){C.valueOf.call(n)})):c(n)!=x)?l(new k(P(e)),n,_):P(e)};for(var N,M=n(8)?m(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),O=0;M.length>O;O++)o(k,N=M[O])&&!o(_,N)&&y(_,N,h(k,N));_.prototype=C,C.constructor=_,n(16)(r,x,_)}},232:function(t,e,n){"use strict";n.r(e);n(233);var r=n(6),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("div",{staticClass:"card-body"},[n("div",{staticClass:"wrapper w-full"},[n("div",{staticClass:"grid grid-cols-6 gap-2 items-center"},[n("div",{staticClass:"col-span-2"},[n("div",{staticClass:"shimmer h-24 w-full"})]),t._v(" "),n("div",{staticClass:"col-span-4"},[n("div",{staticClass:"shimmer h-4 w-full my-1"}),t._v(" "),n("div",{staticClass:"shimmer w-8/12 my-1"}),t._v(" "),n("div",{staticClass:"shimmer w-9/12 my-1"}),t._v(" "),n("div",{staticClass:"shimmer w-full my-1"})])])])])])}],!1,null,"8b5e9a08",null);e.default=component.exports},233:function(t,e,n){"use strict";n(225)},234:function(t,e,n){var r=n(18)((function(i){return i[1]}));r.push([t.i,".card[data-v-8b5e9a08]{border:none;box-shadow:0 4px 20px rgba(0,0,0,.08)}",""]),r.locals={},t.exports=r},236:function(t,e,n){var r=n(2),o=n(35),c=n(10),l=n(237),d="["+l+"]",f=RegExp("^"+d+d+"*"),m=RegExp(d+d+"*$"),h=function(t,e,n){var o={},d=c((function(){return!!l[t]()||"​"!="​"[t]()})),f=o[t]=d?e(y):l[t];n&&(o[n]=f),r(r.P+r.F*d,"String",o)},y=h.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(m,"")),t};t.exports=h},237:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},238:function(t,e){t.exports=function(source,t){if(null==source)return{};var e,i,n={},r=Object.keys(source);for(i=0;i<r.length;i++)e=r[i],t.indexOf(e)>=0||(n[e]=source[e]);return n},t.exports.default=t.exports,t.exports.__esModule=!0},379:function(t,e,n){var content=n(393);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("449637d7",content,!0,{sourceMap:!1})},388:function(t,e,n){"use strict";n.r(e);var r={props:{text:{type:String,default:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis praesentium nostrum ad nobis tempora quae nam velit. Maxime mollitia accusamus, rerum, enim placeat, voluptatem aperiam itaque unde fugit suscipit dicta."}}},o=(n(392),n(6)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:"bg-red-100 rounded-xl p-3"},[n("div",{staticClass:"flex justify-center gap-3 items-center"},[n("div",{},[n("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M11.9998 8.99996V13M11.9998 17H12.0098M10.2898 3.85996L1.81978 18C1.64514 18.3024 1.55274 18.6453 1.55177 18.9945C1.55079 19.3437 1.64127 19.6871 1.8142 19.9905C1.98714 20.2939 2.2365 20.5467 2.53748 20.7238C2.83847 20.9009 3.18058 20.9961 3.52978 21H20.4698C20.819 20.9961 21.1611 20.9009 21.4621 20.7238C21.7631 20.5467 22.0124 20.2939 22.1854 19.9905C22.3583 19.6871 22.4488 19.3437 22.4478 18.9945C22.4468 18.6453 22.3544 18.3024 22.1798 18L13.7098 3.85996C13.5315 3.56607 13.2805 3.32308 12.981 3.15444C12.6814 2.98581 12.3435 2.89722 11.9998 2.89722C11.656 2.89722 11.3181 2.98581 11.0186 3.15444C10.7191 3.32308 10.468 3.56607 10.2898 3.85996Z",stroke:"rgb(239 68 68)","stroke-linecap":"round","stroke-linejoin":"round"}})])]),t._v(" "),n("div",[n("p",{staticClass:"tn:text-xs md:text-base text-red-500",domProps:{innerHTML:t._s(t.text)}})])])])}),[],!1,null,null,null);e.default=component.exports},392:function(t,e,n){"use strict";n(379)},393:function(t,e,n){var r=n(18)((function(i){return i[1]}));r.push([t.i,".alert-card{background-color:#fff8ec}.alert-text{color:#ffc801}",""]),r.locals={},t.exports=r},394:function(t,e,n){var content=n(420);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("347dfb40",content,!0,{sourceMap:!1})},403:function(t,e,n){"use strict";n.r(e);var r={name:"snackbar",data:function(){return{show:!1,tempTimeOut:null,color:"",message:"",duration:3500}},methods:{showSnackbar:function(t){var e=t.color,n=t.className,r=t.message,o=t.duration;this.color=e||"green-seakun",this.className=n,this.message=r,this.show=!0,this.duration=o||3500,this.hideSnackbar()},hideSnackbar:function(){this.show&&setTimeout(function(){this.show=!1}.bind(this),this.duration)}}},o=(n(419),n(6)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"snackbar flex items-center p-2 space-x-4 rounded-md text-white",class:["snackbar",{snackbar__show:t.show},{"bg-red-400":"bg-red-400"==t.color},"bg-"+t.color]},[n("div",{staticClass:"flex items-center justify-center w-1/12"},[n("svg",{staticClass:"w-8 h-8",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z","clip-rule":"evenodd"}})])]),t._v(" "),n("span",[t._v(t._s(t.message))])])}),[],!1,null,"43d30992",null);e.default=component.exports},414:function(t,e,n){n(28),n(23),n(27),n(43),n(44);var r=n(226),o=n(227),c=["class","staticClass","style","staticStyle","attrs"];function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}t.exports={functional:!0,render:function(t,e){var n=e._c,data=(e._v,e.data),d=e.children,f=void 0===d?[]:d,m=data.class,h=data.staticClass,style=data.style,y=data.staticStyle,v=data.attrs,x=void 0===v?{}:v,_=o(data,c);return n("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){r(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[m,h],style:[style,y],attrs:Object.assign({height:"512pt",viewBox:"-21 0 512 512",width:"512pt",xmlns:"http://www.w3.org/2000/svg"},x)},_),f.concat([n("path",{attrs:{d:"m325.332031 512h-266.664062c-32.363281 0-58.667969-26.304688-58.667969-58.667969v-288c0-32.363281 26.304688-58.664062 58.667969-58.664062h10.664062c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16h-10.664062c-14.699219 0-26.667969 11.964843-26.667969 26.664062v288c0 14.699219 11.96875 26.667969 26.667969 26.667969h266.664062c14.699219 0 26.667969-11.96875 26.667969-26.667969v-10.664062c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v10.664062c0 32.363281-26.304688 58.667969-58.667969 58.667969zm0 0"}}),n("path",{attrs:{d:"m410.667969 384h-224c-32.363281 0-58.667969-26.304688-58.667969-58.667969v-266.664062c0-32.363281 26.304688-58.667969 58.667969-58.667969h224c32.363281 0 58.664062 26.304688 58.664062 58.667969v266.664062c0 32.363281-26.300781 58.667969-58.664062 58.667969zm-224-352c-14.699219 0-26.667969 11.96875-26.667969 26.667969v266.664062c0 14.699219 11.96875 26.667969 26.667969 26.667969h224c14.699219 0 26.664062-11.96875 26.664062-26.667969v-266.664062c0-14.699219-11.964843-26.667969-26.664062-26.667969zm0 0"}})]))}}},419:function(t,e,n){"use strict";n(394)},420:function(t,e,n){var r=n(18)((function(i){return i[1]}));r.push([t.i,".snackbar[data-v-43d30992]{max-height:100px;position:fixed;z-index:900;width:50%;min-width:320px;bottom:-100px;height:auto;left:50%;transform:translateX(-50%);transition:all .5s linear}.snackbar__show[data-v-43d30992]{bottom:30px}",""]),r.locals={},t.exports=r},455:function(t,e,n){var content=n(534);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("5a028835",content,!0,{sourceMap:!1})},533:function(t,e,n){"use strict";n(455)},534:function(t,e,n){var r=n(18)((function(i){return i[1]}));r.push([t.i,".payment-detail__label[data-v-3847a66e]{font-style:normal;font-weight:700;font-size:16px;line-height:21px;color:rgba(54,54,54,.5)}.payment-detail__price p[data-v-3847a66e]{font-style:normal;font-weight:800;font-size:24px;line-height:31px;color:#2f2a32}.payment-detail__price p span[data-v-3847a66e]{color:#8dcabe}.payment-detail__price svg[data-v-3847a66e]{width:16px;height:auto;display:inline-block;fill:#8dcabe;margin-top:-8px;cursor:pointer}.payment-detail__alert[data-v-3847a66e]{font-style:normal;font-weight:700;font-size:14px;line-height:18px;color:#363636}.payment-options img[data-v-3847a66e]{height:60px;width:120px;-o-object-fit:contain;object-fit:contain}.payment-options__norek span[data-v-3847a66e]{display:inline-block}.payment-options__norek svg[data-v-3847a66e]{width:12px;height:auto;display:inline-block;fill:#8dcabe;margin-top:-8px;cursor:pointer}",""]),r.locals={},t.exports=r},586:function(t,e,n){var content=n(698);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("1cc27b50",content,!0,{sourceMap:!1})},626:function(t,e,n){"use strict";n.r(e);var r=n(414),o={name:"PaymentMethod",components:{CopyIcon:n.n(r).a},props:{PaymentMethodList:{type:Array,default:function(){return[]}}}},c=(n(533),n(6)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"payment-method__options flex flex-wrap justify-center my-3"},t._l(t.PaymentMethodList,(function(e,r){return n("div",{key:r,staticClass:"payment-options bg-white shadow-md w-[45%] tn:rounded-xl md:rounded-lg tn:p-3 md:p-6 tn:m-1 md:m-2 flex flex-column justify-center items-center text-center"},[n("img",{staticClass:"w-8/12 my-2",attrs:{src:"/images/payment/"+e.bank.toLowerCase()+".png"}}),t._v(" "),n("p",{staticClass:"tn:mt-2 md:mt-4 payment-options__norek tn:text-xs md:text-base font-bold",on:{click:function(n){return t.$emit("clickCopyHandler","Rekening",e.bankAccountNumber)}}},[t._v("\n      "+t._s(e.bankAccountNumber)+"\n      "),n("span",{staticClass:"ml-1"},[n("CopyIcon",{on:{click:function(n){return t.$emit("clickCopyHandler","Rekening",e.bankAccountNumber)}}})],1)]),t._v(" "),n("p",{staticClass:"my-1 payment-options__account-name tn:text-xs md:text-base"},[t._v("\n      "+t._s(e.bankAccountName)+"\n    ")])])})),0)}),[],!1,null,"3847a66e",null);e.default=component.exports},627:function(t,e,n){"use strict";n.r(e);var r={name:"PaymentMethodLoading",components:{CardShimmer:n(232).default}},o=n(6),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"payment-method__options grid grid-cols-2 tn:gap-3 md:gap-4 px-4 py-6"},[n("CardShimmer"),t._v(" "),n("CardShimmer")],1)}),[],!1,null,null,null);e.default=component.exports},697:function(t,e,n){"use strict";n(586)},698:function(t,e,n){var r=n(18)((function(i){return i[1]}));r.push([t.i,".payment-detail__label[data-v-40a404fb]{font-style:normal;font-weight:700;font-size:16px;line-height:21px;color:rgba(54,54,54,.5)}.payment-detail__price p[data-v-40a404fb]{font-style:normal;font-weight:800;font-size:24px;line-height:31px;color:#2f2a32}.payment-detail__price p span[data-v-40a404fb]{color:#8dcabe}.payment-detail__price svg[data-v-40a404fb]{width:16px;height:auto;display:inline-block;fill:#8dcabe;margin-top:-8px;cursor:pointer}.payment-detail__alert[data-v-40a404fb]{font-style:normal;font-size:14px;line-height:18px;color:#363636}.payment-options img[data-v-40a404fb]{height:60px;width:120px;-o-object-fit:contain;object-fit:contain}.payment-options__norek span[data-v-40a404fb]{display:inline-block}.payment-options__norek svg[data-v-40a404fb]{width:12px;height:auto;display:inline-block;fill:#8dcabe;margin-top:-8px;cursor:pointer}",""]),r.locals={},t.exports=r},744:function(t,e,n){"use strict";n.r(e);n(231);var r=n(403),o=n(388),c=n(414),l=n.n(c),d=n(626),f=n(627),m=n(222),h={name:"DetailPayment",components:{Snackbar:r.default,CopyIcon:l.a,PaymentMethodList:d.default,PaymentMethodListLoading:f.default,WarningInfo:o.default},props:{isLoading:{type:Boolean,default:!1},provider:{type:String,default:""},totalPaymentDigital:{type:Number,default:0},packageName:{type:String,default:""},paymentSeakunList:{type:Array,default:function(){return[]}},paymentSeakunListLoading:{type:Boolean,default:!1},total:{type:String|Number,default:null},detailPaymentDigital:{type:Object,default:function(){return{}}},detailPaymentSequrban:{type:Object,default:function(){return{}}}},data:function(){return{currencyFormat:m.b,paymetnMethod:[{bankName:"mandiri",bankAccountNumber:"1150046427383",bankAccountName:"PT. Seakun Global"},{bankName:"bca",bankAccountNumber:"7660777738",bankAccountName:"PT. Seakun Global"}],paymentMethodSekurban:[{bankName:"mandiri",bankAccountNumber:"1150046427383",bankAccountName:"PT. Seakun Global"},{bankName:"bca",bankAccountNumber:"7660777738",bankAccountName:"PT. Seakun Global"}]}},methods:{clickCopyHandler:function(t,e){var n=this;navigator.clipboard?navigator.clipboard.writeText(e).then((function(){n.$refs.snackbar.showSnackbar({color:"black",message:"".concat(t," berhasil disalin"),className:""})}),(function(t){return console.log(t)})):this.fallbackCopyText(t,e)},fallbackCopyText:function(t,e){var n=document.createElement("textarea");n.value=e,n.style.top="0",n.style.left="0",n.style.position="fixed",document.body.appendChild(n),n.focus(),n.select();try{document.execCommand("copy")&&this.$refs.snackbar.showSnackbar({color:"black",message:"".concat(t," berhasil disalin"),className:""})}catch(t){console.error("Fallback: Oops, unable to copy",t)}document.body.removeChild(n)},formatCodePayment:function(t){if(t){var e=this.currencyFormat(t),n=e.substring(0,e.length-3),r=e.substring(e.length-3,e.length);return"".concat(n,'<span class="text-green-seakun">').concat(r,"</span>")}return"-"}}},y=(n(697),n(6)),component=Object(y.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("Snackbar",{ref:"snackbar"}),t._v(" "),n("div",{staticClass:"payment-detail text-center tn:mt-10 md:mt-16"},["sequrban"===t.provider.toLowerCase()&&t.detailPaymentSequrban?n("p",{staticClass:"payment-detail__label my-3 text-xl"},[t._v("\n      Transfer DP (uang muka)\n    ")]):n("p",{staticClass:"payment-detail__label tn:my-1 md:my-3 text-xl"},[t._v("\n      Total transfer\n    ")]),t._v(" "),n("div",{staticClass:"total-payment flex align-items-center justify-center"},[t.isLoading?n("div",{staticClass:"payment-detail__price flex align-items-center justify-center"},[n("p",{staticClass:"shimmer w-6/12"})]):"sequrban"===t.provider.toLowerCase()&&t.detailPaymentSequrban?n("div",{staticClass:"payment-detail__price flex align-items-center justify-center",on:{click:function(e){return t.clickCopyHandler("Nominal",t.detailPaymentSequrban.downPayment)}}},[n("p",{staticClass:"my-3 text-xl mr-2 cursor-pointer",domProps:{innerHTML:t._s(t.formatCodePayment(t.detailPaymentSequrban.downPayment))}}),t._v(" "),n("CopyIcon")],1):n("div",{staticClass:"payment-detail__price flex align-items-center justify-center cursor-pointer",on:{click:function(e){return t.clickCopyHandler("Nominal",t.totalPaymentDigital)}}},[n("p",{staticClass:"my-3 text-xl mr-2 cursor-pointer",domProps:{innerHTML:t._s(t.formatCodePayment(t.totalPaymentDigital))}}),t._v(" "),n("CopyIcon")],1)]),t._v(" "),n("div",{staticClass:"px-2"},[n("WarningInfo",{staticClass:"w-full",attrs:{text:"Pastikan nominal sesuai hingga 3 digit terakhir"}})],1)]),t._v(" "),n("div",{staticClass:"payment-method"},[n("h3",{staticClass:"payment-method__title text-center font-bold mt-10"},[t._v("\n      Transfer Ke\n    ")]),t._v(" "),"sequrban"===t.provider.toLowerCase()?n("div",[n("PaymentMethodList",{attrs:{PaymentMethodList:t.paymentMethodSekurban},on:{clickCopyHandler:t.clickCopyHandler}})],1):n("div",[t.paymentSeakunListLoading?n("PaymentMethodListLoading"):n("PaymentMethodList",{attrs:{PaymentMethodList:t.paymentSeakunList.length>0?t.paymentSeakunList:t.paymetnMethod},on:{clickCopyHandler:t.clickCopyHandler}})],1)])],1)}),[],!1,null,"40a404fb",null);e.default=component.exports}}]);