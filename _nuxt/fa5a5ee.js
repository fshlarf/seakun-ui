(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{222:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return c}));r(139),r(53),r(14),r(72),r(73),r(229);function n(t){for(var e=t.toLowerCase().split(" "),i=0;i<e.length;i++)e[i]=e[i].charAt(0).toUpperCase()+e[i].substring(1);return e.join(" ")}function o(t){return t||0==t?"Rp".concat(t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1.")):void 0}function c(t){switch(t){case"netflix":return"Netflix";case"spotify":return"Spotify";case"youtube":return"Youtube";case"gramedia":return"Gramedia";case"microsoft":case"microsoft365":return"Microsoft 365";case"canva":return"Canva";case"disney-hotstar":return"Disney+ Hotstar";case"apple-one":return"Apple One";case"apple-one-premium":return"Apple One Premium";case"wattpad":return"Wattpad";case"nintendo":return"Nintendo Switch";case"google-one":return"Google One";default:return t}}},228:function(t,e,r){var n=r(15),o=r(141),c=r(35);t.exports=function(t,e,r,l){var d=String(c(t)),f=d.length,m=void 0===r?" ":String(r),v=n(e);if(v<=f||""==m)return d;var _=v-f,h=o.call(m,Math.ceil(_/m.length));return h.length>_&&(h=h.slice(0,_)),l?h+d:d+h}},229:function(t,e,r){"use strict";var n=r(2),o=r(228),c=r(140),l=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(c);n(n.P+n.F*l,"String",{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},231:function(t,e,r){"use strict";var n=r(5),o=r(29),c=r(30),l=r(142),d=r(74),f=r(10),m=r(54).f,v=r(55).f,_=r(12).f,h=r(236).trim,N="Number",y=n.Number,x=y,I=y.prototype,S=c(r(91)(I))==N,w="trim"in String.prototype,C=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var r,n,o,c=(e=w?e.trim():h(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+e}for(var code,l=e.slice(2),i=0,f=l.length;i<f;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,n)}}return+e};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof y&&(S?f((function(){I.valueOf.call(r)})):c(r)!=N)?l(new x(C(e)),r,y):C(e)};for(var E,A=r(8)?m(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),F=0;A.length>F;F++)o(x,E=A[F])&&!o(y,E)&&_(y,E,v(x,E));y.prototype=I,I.constructor=y,r(16)(n,N,y)}},236:function(t,e,r){var n=r(2),o=r(35),c=r(10),l=r(237),d="["+l+"]",f=RegExp("^"+d+d+"*"),m=RegExp(d+d+"*$"),v=function(t,e,r){var o={},d=c((function(){return!!l[t]()||"​"!="​"[t]()})),f=o[t]=d?e(_):l[t];r&&(o[r]=f),n(n.P+n.F*d,"String",o)},_=v.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(m,"")),t};t.exports=v},237:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},417:function(t,e,r){"use strict";r.r(e);r(231);var n=r(222),o={name:"ProductHighlight",props:{provider:{type:String,default:""},isLoading:{type:Boolean,dafault:!1},packageName:{type:String,default:""},orderNumber:{type:String,default:""},grandTotal:{type:Number|String,default:null},totalMonth:{type:Number,default:null}},data:function(){return{currencyFormat:n.b,setNameProvider:n.c}}},c=r(6),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"order-detail bg-white shadow-md mt-2 rounded-md items-center"},[r("div",{staticClass:"order-detail__product px-4 pt-4 pb-2 grid tn:grid-cols-7 md:grid-cols-5 gap-2 items-center"},[t.provider?r("div",{staticClass:"tn:col-span-2 md:col-span-1"},[r("img",{staticClass:"detail-product__image w-full",attrs:{src:"/images/"+t.provider+".png",alt:"Image not found"}})]):t._e(),t._v(" "),r("div",{staticClass:"detail-product__price tn:col-span-5 md:col-span-4 ml-4 space-y-1"},[t.isLoading?r("p",{staticClass:"font-bold shimmer w-9/12"}):r("p",{staticClass:"md:text-lg tn:text-sm font-bold"},[t._v("\n        "+t._s(t.packageName)+"\n      ")]),t._v(" "),t.orderNumber?r("p",{staticClass:"md:text-lg tn:text-sm font-semibold text-[#66738F] uppercase"},[t._v("\n        "+t._s(t.orderNumber)+"\n      ")]):t._e(),t._v(" "),12===t.totalMonth?r("p",{staticClass:"md:text-lg tn:text-sm font-normal"},[t._v("\n        "+t._s(t.currencyFormat(t.grandTotal))+" / 1 Tahun\n      ")]):r("p",{staticClass:"md:text-lg tn:text-sm font-normal"},[t._v("\n        "+t._s(t.currencyFormat(t.grandTotal))+" / "+t._s(t.totalMonth)+" Bulan\n      ")])])]),t._v(" "),r("div",{staticClass:"order-detail__payment flex justify-between px-4 py-3 border-t border-gray-50"},[r("div",[t._v("Total Pembayaran")]),t._v(" "),r("div",[t.isLoading?r("p",{staticClass:"shimmer w-4/12"}):[t._v("\n        "+t._s(t.currencyFormat(t.grandTotal))+"\n      ")]],2)])])}),[],!1,null,null,null);e.default=component.exports}}]);