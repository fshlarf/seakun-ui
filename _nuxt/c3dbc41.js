(window.webpackJsonp=window.webpackJsonp||[]).push([[111,51,52,109],{222:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return o}));n(139),n(53),n(14),n(72),n(73),n(229);function r(t){for(var e=t.toLowerCase().split(" "),i=0;i<e.length;i++)e[i]=e[i].charAt(0).toUpperCase()+e[i].substring(1);return e.join(" ")}function l(t){return t||0==t?"Rp".concat(t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1.")):void 0}function o(t){switch(t){case"netflix":return"Netflix";case"spotify":return"Spotify";case"youtube":return"Youtube";case"gramedia":return"Gramedia";case"microsoft":case"microsoft365":return"Microsoft 365";case"canva":return"Canva";case"disney-hotstar":return"Disney+ Hotstar";case"apple-one":return"Apple One";case"apple-one-premium":return"Apple One Premium";case"wattpad":return"Wattpad";case"nintendo":return"Nintendo Switch";case"google-one":return"Google One";default:return t}}},228:function(t,e,n){var r=n(15),l=n(141),o=n(35);t.exports=function(t,e,n,d){var c=String(o(t)),m=c.length,f=void 0===n?" ":String(n),v=r(e);if(v<=m||""==f)return c;var _=v-m,y=l.call(f,Math.ceil(_/f.length));return y.length>_&&(y=y.slice(0,_)),d?y+c:c+y}},229:function(t,e,n){"use strict";var r=n(2),l=n(228),o=n(140),d=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);r(r.P+r.F*d,"String",{padStart:function(t){return l(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},231:function(t,e,n){"use strict";var r=n(5),l=n(29),o=n(30),d=n(142),c=n(74),m=n(10),f=n(54).f,v=n(55).f,_=n(12).f,y=n(236).trim,h="Number",x=r.Number,k=x,C=x.prototype,w=o(n(91)(C))==h,S="trim"in String.prototype,N=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){var n,r,l,o=(e=S?e.trim():y(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:r=2,l=49;break;case 79:case 111:r=8,l=55;break;default:return+e}for(var code,d=e.slice(2),i=0,m=d.length;i<m;i++)if((code=d.charCodeAt(i))<48||code>l)return NaN;return parseInt(d,r)}}return+e};if(!x(" 0o1")||!x("0b1")||x("+0x1")){x=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof x&&(w?m((function(){C.valueOf.call(n)})):o(n)!=h)?d(new k(N(e)),n,x):N(e)};for(var P,L=n(8)?f(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;L.length>E;E++)l(k,P=L[E])&&!l(x,P)&&_(x,P,v(k,P));x.prototype=C,C.constructor=x,n(16)(r,h,x)}},236:function(t,e,n){var r=n(2),l=n(35),o=n(10),d=n(237),c="["+d+"]",m=RegExp("^"+c+c+"*"),f=RegExp(c+c+"*$"),v=function(t,e,n){var l={},c=o((function(){return!!d[t]()||"​"!="​"[t]()})),m=l[t]=c?e(_):d[t];n&&(l[n]=m),r(r.P+r.F*c,"String",l)},_=v.trim=function(t,e){return t=String(l(t)),1&e&&(t=t.replace(m,"")),2&e&&(t=t.replace(f,"")),t};t.exports=v},237:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},378:function(t,e,n){"use strict";n.r(e);var r={name:"detailOrderLoading"},l=n(6),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"order-detail bg-white shadow-md  mt-8 rounded-md items-center mx-2"},[n("div",{staticClass:"order-detail__product px-4 pt-4 pb-2 grid grid-cols-5 gap-2 items-center"},[n("div",{staticClass:"flex-1"},[n("div",{staticClass:"shimmer w-full h-24"})]),t._v(" "),n("div",{staticClass:"detail-product__price col-span-4 ml-4"},[n("p",{staticClass:"font-bold shimmer w-full my-2"}),t._v(" "),n("p",{staticClass:"font-bold shimmer w-full my-2"}),t._v(" "),n("p",{staticClass:"font-bold shimmer w-full my-2"})])]),t._v(" "),n("div",{staticClass:"order-detail__payment flex justify-between  px-4 py-3 border-t border-gray-50 "},[n("div",{staticClass:"shimmer w-4/12"}),t._v(" "),n("div",{staticClass:"shimmer w-4/12"})]),t._v(" "),n("div",{staticClass:"order-detail__payment flex justify-between  px-4 pb-3 border-t border-gray-50 "},[n("div",{staticClass:"shimmer w-4/12"}),t._v(" "),n("div",{staticClass:"shimmer w-4/12"})])])}],!1,null,null,null);e.default=component.exports},417:function(t,e,n){"use strict";n.r(e);n(231);var r=n(222),l={name:"ProductHighlight",props:{provider:{type:String,default:""},isLoading:{type:Boolean,dafault:!1},packageName:{type:String,default:""},orderNumber:{type:String,default:""},grandTotal:{type:Number|String,default:null},totalMonth:{type:Number,default:null}},data:function(){return{currencyFormat:r.b,setNameProvider:r.c}}},o=n(6),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"order-detail bg-white shadow-md mt-2 rounded-md items-center"},[n("div",{staticClass:"order-detail__product px-4 pt-4 pb-2 grid tn:grid-cols-7 md:grid-cols-5 gap-2 items-center"},[t.provider?n("div",{staticClass:"tn:col-span-2 md:col-span-1"},[n("img",{staticClass:"detail-product__image w-full",attrs:{src:"/images/"+t.provider+".png",alt:"Image not found"}})]):t._e(),t._v(" "),n("div",{staticClass:"detail-product__price tn:col-span-5 md:col-span-4 ml-4 space-y-1"},[t.isLoading?n("p",{staticClass:"font-bold shimmer w-9/12"}):n("p",{staticClass:"md:text-lg tn:text-sm font-bold"},[t._v("\n        "+t._s(t.packageName)+"\n      ")]),t._v(" "),t.orderNumber?n("p",{staticClass:"md:text-lg tn:text-sm font-semibold text-[#66738F] uppercase"},[t._v("\n        "+t._s(t.orderNumber)+"\n      ")]):t._e(),t._v(" "),12===t.totalMonth?n("p",{staticClass:"md:text-lg tn:text-sm font-normal"},[t._v("\n        "+t._s(t.currencyFormat(t.grandTotal))+" / 1 Tahun\n      ")]):n("p",{staticClass:"md:text-lg tn:text-sm font-normal"},[t._v("\n        "+t._s(t.currencyFormat(t.grandTotal))+" / "+t._s(t.totalMonth)+" Bulan\n      ")])])]),t._v(" "),n("div",{staticClass:"order-detail__payment flex justify-between px-4 py-3 border-t border-gray-50"},[n("div",[t._v("Total Pembayaran")]),t._v(" "),n("div",[t.isLoading?n("p",{staticClass:"shimmer w-4/12"}):[t._v("\n        "+t._s(t.currencyFormat(t.grandTotal))+"\n      ")]],2)])])}),[],!1,null,null,null);e.default=component.exports},604:function(t,e,n){var content=n(732);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("843a382e",content,!0,{sourceMap:!1})},659:function(t,e,n){"use strict";n.r(e);n(231);var r=n(222),l={name:"DetailOrderSeakunQurban",props:{provider:{type:String,default:""},isLoading:{type:Boolean,dafault:!1},image:{type:String,default:""},type:{type:String,default:""},packageCode:{type:String,default:""},unitWeight:{type:String,default:""},weight:{type:Number,default:null},downPayment:{type:Number,default:null},totalCost:{type:Number,default:null}},data:function(){return{currencyFormat:r.b}}},o=n(6),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"order-detail bg-white shadow-md mt-8 rounded-md items-center mx-2"},[n("div",{staticClass:"order-detail__product px-4 pt-4 pb-2 grid grid-cols-5 gap-2 items-center"},[n("div",{staticClass:"flex-1"},[n("img",{staticClass:"detail-product__image w-9/12",attrs:{src:""+t.image,alt:"Image not found"}})]),t._v(" "),n("div",{staticClass:"detail-product__price col-span-4 ml-4"},[t._m(0),t._v(" "),n("p",{staticClass:"font-normal py-2"},[t._v("\n        Tipe "+t._s(t.packageCode)+" - "+t._s(t.type)+" ("+t._s(t.weight+" "+t.unitWeight)+")\n      ")]),t._v(" "),n("p",{staticClass:"font-normal"},[t._v(t._s(t.currencyFormat(t.totalCost)))])])]),t._v(" "),n("div",{staticClass:"order-detail__payment flex justify-between px-4 pt-3 pb-2 border-t border-gray-5-60"},[n("div",[t._v("Total down payment (uang muka)")]),t._v(" "),n("div",[[t._v("\n        "+t._s(t.currencyFormat(t.downPayment))+"\n      ")]],2)]),t._v(" "),n("div",{staticClass:"order-detail__payment flex justify-between px-4 pb-3"},[n("div",[t._v("Sisa pembayaran (**dibayar setelah grup penuh)")]),t._v(" "),n("div",[[t._v("\n        "+t._s(t.currencyFormat(t.totalCost-t.downPayment))+"\n      ")]],2)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"font-bold"},[n("span",{staticClass:"capitalize"},[t._v("Sequrban (Seakun x Wadiqibas) ")])])}],!1,null,null,null);e.default=component.exports},731:function(t,e,n){"use strict";n(604)},732:function(t,e,n){var r=n(18)((function(i){return i[1]}));r.push([t.i,".payment-thankyou[data-v-4b916d9e]{font-size:32px}.payment-order p.title[data-v-4b916d9e]{font-size:16px;font-weight:400}.payment-detail__label[data-v-4b916d9e]{font-style:normal;font-weight:700;font-size:16px;line-height:21px;color:rgba(54,54,54,.5)}.payment-detail__price[data-v-4b916d9e]{font-style:normal;font-weight:800;font-size:24px;line-height:31px;color:#2f2a32}.payment-detail__price span[data-v-4b916d9e]{color:#8dcabe}.payment-detail__price svg[data-v-4b916d9e]{width:16px;height:auto;display:inline-block;fill:#8dcabe;margin-top:-8px;cursor:pointer}.payment-detail__alert[data-v-4b916d9e]{font-style:normal;font-weight:600;font-size:14px;line-height:18px;color:#363636}.payment-options__norek span[data-v-4b916d9e]{display:inline-block}.payment-options__norek svg[data-v-4b916d9e]{width:12px;height:auto;display:inline-block;fill:#8dcabe;margin-top:-8px;cursor:pointer}.detail-product__image[data-v-4b916d9e]{width:120px;height:80px;-o-object-fit:contain;object-fit:contain}",""]),r.locals={},t.exports=r},776:function(t,e,n){"use strict";n.r(e);n(231);var r=n(222),l=n(659),o=n(378),d=n(417),c={name:"headerPayment",components:{DetailOrderSequrban:l.default,ProductHighLight:d.default,ProductHighLightLoading:o.default},props:{isLoading:{type:Boolean,default:!1},provider:{type:String,default:""},packageId:{type:Number,default:null},detailPaymentSequrban:{type:Object,default:function(){return{}}},detailPaymentDigital:{type:Object,default:function(){return{}}},packageName:{type:String,default:""},total:{type:String|Number,default:null}},data:function(){return{currencyFormat:r.b}}},m=(n(731),n(6)),component=Object(m.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"payment-order w-auto tn:mt-4 md:mt-8 box-border px-2"},[t.isLoading?n("div",{staticClass:"text-center"},[n("p",{staticClass:"shimmer w-full"}),t._v(" "),n("p",{staticClass:"shimmer w-9/12"}),t._v(" "),n("p",{staticClass:"shimmer w-8/12"})]):"sequrban"===t.provider.toLowerCase()?n("div",[n("p",{staticClass:"title text-center text-lg px-2"},[t._v("\n        Segera lakukan pembayaran agar Sequrban dapat mengumpulkan kamu ke\n        grup yang sama dan memberikan informasi tentang proses qurban hingga\n        pada hari H penyembelihan.\n      ")])]):"netflix"===t.provider.toLowerCase()?n("div",[t.detailPaymentDigital?n("p",{staticClass:"title text-center text-lg px-2"},[t._v("\n        Segera lakukan pembayaran agar Seakun.id bisa langsung mengalokasikan\n        kamu pada grup Netflix yang available, mencarikan teman berlangganan\n        dan memproses akun Netflix untuk kamu.\n        "),n("b",[t._v("Informasi Akun")]),t._v(", "),n("b",[t._v("Password")]),t._v(" dan "),n("b",[t._v("Pin Profile")]),t._v(" akan\n        dikirim ke Email dan Whatsapp yang kamu daftarkan.\n      ")]):n("p",{staticClass:"title text-center text-lg px-2"},[t._v("\n        Segera lakukan pembayaran agar Seakun.id dapat langsung memproses akun\n        Netflix untuk kamu.\n        "),n("b",[t._v("Informasi Akun")]),t._v(", "),n("b",[t._v("Password")]),t._v(" "),n("b",[t._v("dan Pin Profile")]),t._v(" akan\n        dikirim ke Email dan Whatsapp yang kamu daftarkan.\n      ")])]):"spotify"===t.provider.toLowerCase()?n("div",[t._m(0)]):t._e(),t._v(" "),t.isLoading?n("ProductHighLightLoading"):t.provider&&"sequrban"===t.provider.toLowerCase()?n("DetailOrderSequrban",{attrs:{isLoading:t.isLoading,image:t.detailPaymentSequrban.images[0],type:t.detailPaymentSequrban.type,packageCode:t.detailPaymentSequrban.packageCode,unitWeight:t.detailPaymentSequrban.unitWeight,weight:t.detailPaymentSequrban.weight,downPayment:t.detailPaymentSequrban.downPayment,totalCost:t.detailPaymentSequrban.totalCost}}):n("ProductHighLight",{attrs:{provider:t.provider,isLoading:t.isLoading,packageName:t.detailPaymentDigital.name,grandTotal:t.detailPaymentDigital.price,totalMonth:t.detailPaymentDigital.duration,"order-number":t.detailPaymentDigital.orderNumber}})],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"title text-center text-lg px-2"},[t._v("\n        Segera lakukan pembayaran agar Seakun.id dapat langsung mengirimkan\n        "),n("b",[t._v("Link invitation")]),t._v(" plan paket Grup Spotify.\n        "),n("b",[t._v("Link invitation")]),t._v(" akan dikirim ke Email dan Whatsapp yang kamu\n        daftarkan.\n      ")])}],!1,null,"4b916d9e",null);e.default=component.exports}}]);