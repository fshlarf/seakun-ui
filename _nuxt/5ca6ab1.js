(window.webpackJsonp=window.webpackJsonp||[]).push([[7,14,118],{220:function(t,e,r){var content=r(224);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("f7e4c7e6",content,!0,{sourceMap:!1})},221:function(t,e,r){"use strict";r.r(e);var n={name:"Button",props:{variant:{type:String,default:null},size:{type:String,default:null},label:{type:String,default:""},isLoading:{type:Boolean,default:!1},shape:{type:String,default:""},addClass:{type:String,default:""}},data:function(){return{classBtn:"btn btn-".concat(this.variant," ").concat(this.size?"btn-"+this.size:""," ").concat("pill"===this.shape?"!rounded-full":""," ").concat(this.addClass?this.addClass:"")}},methods:{handleOnClick:function(t){this.$emit("click",t)}}},o=(r(223),r(6)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",t._b({class:t.classBtn,attrs:{type:"button",disabled:t.isLoading},on:{click:t.handleOnClick}},"button",t.$props,!1),[t.isLoading?r("div",[t._m(0)]):r("div",[t._v("\n    "+t._s(t.label)+"\n  ")])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("i",{staticClass:"fa fa-circle-o-notch fa-spin"}),t._v("\n      Loading...\n    ")])}],!1,null,"20743f99",null);e.default=component.exports},222:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return c}));r(139),r(53),r(14),r(72),r(73),r(229);function n(t){for(var e=t.toLowerCase().split(" "),i=0;i<e.length;i++)e[i]=e[i].charAt(0).toUpperCase()+e[i].substring(1);return e.join(" ")}function o(t){return t||0==t?"Rp".concat(t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1.")):void 0}function c(t){switch(t){case"netflix":return"Netflix";case"spotify":return"Spotify";case"youtube":return"Youtube";case"gramedia":return"Gramedia";case"microsoft":case"microsoft365":return"Microsoft 365";case"canva":return"Canva";case"disney-hotstar":return"Disney+ Hotstar";case"apple-one":return"Apple One";case"apple-one-premium":return"Apple One Premium";case"wattpad":return"Wattpad";case"nintendo":return"Nintendo Switch";case"google-one":return"Google One";default:return t}}},223:function(t,e,r){"use strict";r(220)},224:function(t,e,r){var n=r(18)((function(i){return i[1]}));n.push([t.i,"button[data-v-20743f99]:disabled,button[data-v-20743f99]:hover:disabled{border:1px solid #a9e0d5!important;background-color:#a9e0d5!important;color:#fff!important}.fa[data-v-20743f99]{margin-left:-12px;margin-right:8px}",""]),n.locals={},t.exports=n},226:function(t,e){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t},t.exports.default=t.exports,t.exports.__esModule=!0},227:function(t,e,r){var n=r(238);t.exports=function(source,t){if(null==source)return{};var e,i,r=n(source,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(source);for(i=0;i<o.length;i++)e=o[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(source,e)&&(r[e]=source[e])}return r},t.exports.default=t.exports,t.exports.__esModule=!0},228:function(t,e,r){var n=r(15),o=r(141),c=r(35);t.exports=function(t,e,r,l){var d=String(c(t)),f=d.length,j=void 0===r?" ":String(r),m=n(e);if(m<=f||""==j)return d;var h=m-f,v=o.call(j,Math.ceil(h/j.length));return v.length>h&&(v=v.slice(0,h)),l?v+d:d+v}},229:function(t,e,r){"use strict";var n=r(2),o=r(228),c=r(140),l=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(c);n(n.P+n.F*l,"String",{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},231:function(t,e,r){"use strict";var n=r(5),o=r(29),c=r(30),l=r(142),d=r(74),f=r(10),j=r(54).f,m=r(55).f,h=r(12).f,v=r(236).trim,y="Number",x=n.Number,w=x,C=x.prototype,O=c(r(91)(C))==y,_="trim"in String.prototype,k=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var r,n,o,c=(e=_?e.trim():v(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+e}for(var code,l=e.slice(2),i=0,f=l.length;i<f;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,n)}}return+e};if(!x(" 0o1")||!x("0b1")||x("+0x1")){x=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof x&&(O?f((function(){C.valueOf.call(r)})):c(r)!=y)?l(new w(k(e)),r,x):k(e)};for(var S,P=r(8)?j(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;P.length>E;E++)o(w,S=P[E])&&!o(x,S)&&h(x,S,m(w,S));x.prototype=C,C.constructor=x,r(16)(n,y,x)}},236:function(t,e,r){var n=r(2),o=r(35),c=r(10),l=r(237),d="["+l+"]",f=RegExp("^"+d+d+"*"),j=RegExp(d+d+"*$"),m=function(t,e,r){var o={},d=c((function(){return!!l[t]()||"​"!="​"[t]()})),f=o[t]=d?e(h):l[t];r&&(o[r]=f),n(n.P+n.F*d,"String",o)},h=m.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(j,"")),t};t.exports=m},237:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},238:function(t,e){t.exports=function(source,t){if(null==source)return{};var e,i,r={},n=Object.keys(source);for(i=0;i<n.length;i++)e=n[i],t.indexOf(e)>=0||(r[e]=source[e]);return r},t.exports.default=t.exports,t.exports.__esModule=!0},382:function(t,e,r){r(28),r(23),r(27),r(43),r(44);var n=r(226),o=r(227),c=["class","staticClass","style","staticStyle","attrs"];function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),d=e.children,f=void 0===d?[]:d,j=data.class,m=data.staticClass,style=data.style,h=data.staticStyle,v=data.attrs,y=void 0===v?{}:v,x=o(data,c);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){n(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[j,m],style:[style,h],attrs:Object.assign({width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},y)},x),f.concat([r("rect",{attrs:{width:"24",height:"24",rx:"4",fill:"#4BAC99"}}),r("rect",{attrs:{width:"24",height:"24",rx:"4",stroke:"#D9D9D9"}}),r("path",{attrs:{d:"M8.71996 12.0001C8.5323 11.8313 8.28778 11.7397 8.03543 11.7437C7.78308 11.7477 7.54158 11.847 7.35936 12.0216C7.17715 12.1962 7.0677 12.4333 7.05297 12.6853C7.03825 12.9372 7.11933 13.1854 7.27996 13.3801L9.49996 15.7101C9.5929 15.8076 9.70459 15.8853 9.82832 15.9386C9.95204 15.9918 10.0853 16.0195 10.22 16.0201C10.3539 16.0208 10.4867 15.9947 10.6104 15.9432C10.7341 15.8916 10.8462 15.8158 10.94 15.7201L17.72 8.72006C17.8119 8.62551 17.8843 8.51378 17.933 8.39124C17.9818 8.26871 18.0059 8.13778 18.004 8.00592C18.0022 7.87406 17.9744 7.74386 17.9222 7.62275C17.87 7.50163 17.7945 7.39199 17.7 7.30006C17.6054 7.20814 17.4937 7.13573 17.3711 7.08699C17.2486 7.03824 17.1177 7.01411 16.9858 7.01597C16.854 7.01783 16.7238 7.04564 16.6026 7.09781C16.4815 7.14999 16.3719 7.22551 16.28 7.32006L10.23 13.5801L8.71996 12.0001Z",fill:"white"}})]))}}},383:function(t,e,r){r(28),r(23),r(27),r(43),r(44);var n=r(226),o=r(227),c=["class","staticClass","style","staticStyle","attrs"];function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),d=e.children,f=void 0===d?[]:d,j=data.class,m=data.staticClass,style=data.style,h=data.staticStyle,v=data.attrs,y=void 0===v?{}:v,x=o(data,c);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){n(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[j,m],style:[style,h],attrs:Object.assign({width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},y)},x),f.concat([r("rect",{attrs:{x:"0.5",y:"0.5",width:"23",height:"23",rx:"3.5",fill:"white",stroke:"#D9D9D9"}})]))}}},384:function(t,e,r){r(28),r(23),r(27),r(43),r(44);var n=r(226),o=r(227),c=["class","staticClass","style","staticStyle","attrs"];function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),d=e.children,f=void 0===d?[]:d,j=data.class,m=data.staticClass,style=data.style,h=data.staticStyle,v=data.attrs,y=void 0===v?{}:v,x=o(data,c);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){n(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[j,m],style:[style,h],attrs:Object.assign({width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},y)},x),f.concat([r("g",{attrs:{opacity:"0.56"}},[r("rect",{attrs:{width:"24",height:"24",rx:"4",fill:"#8DCABE"}}),r("rect",{attrs:{width:"24",height:"24",rx:"4",stroke:"#D9D9D9"}}),r("path",{attrs:{d:"M8.71996 12.0001C8.5323 11.8313 8.28778 11.7397 8.03543 11.7437C7.78308 11.7477 7.54158 11.847 7.35936 12.0216C7.17715 12.1962 7.0677 12.4333 7.05297 12.6852C7.03825 12.9372 7.11933 13.1854 7.27996 13.3801L9.49996 15.7101C9.5929 15.8076 9.70459 15.8853 9.82832 15.9386C9.95204 15.9918 10.0853 16.0195 10.22 16.0201C10.3539 16.0208 10.4867 15.9947 10.6104 15.9432C10.7341 15.8916 10.8462 15.8158 10.94 15.7201L17.72 8.72006C17.8119 8.62551 17.8843 8.51378 17.933 8.39124C17.9818 8.26871 18.0059 8.13778 18.004 8.00592C18.0022 7.87406 17.9744 7.74386 17.9222 7.62275C17.87 7.50163 17.7945 7.39199 17.7 7.30006C17.6054 7.20814 17.4937 7.13573 17.3711 7.08699C17.2486 7.03824 17.1177 7.01411 16.9858 7.01597C16.854 7.01783 16.7238 7.04564 16.6026 7.09781C16.4815 7.14999 16.3719 7.22551 16.28 7.32006L10.23 13.5801L8.71996 12.0001Z",fill:"white"}})])]))}}},391:function(t,e,r){var map={"./af":241,"./af.js":241,"./ar":242,"./ar-dz":243,"./ar-dz.js":243,"./ar-kw":244,"./ar-kw.js":244,"./ar-ly":245,"./ar-ly.js":245,"./ar-ma":246,"./ar-ma.js":246,"./ar-sa":247,"./ar-sa.js":247,"./ar-tn":248,"./ar-tn.js":248,"./ar.js":242,"./az":249,"./az.js":249,"./be":250,"./be.js":250,"./bg":251,"./bg.js":251,"./bm":252,"./bm.js":252,"./bn":253,"./bn-bd":254,"./bn-bd.js":254,"./bn.js":253,"./bo":255,"./bo.js":255,"./br":256,"./br.js":256,"./bs":257,"./bs.js":257,"./ca":258,"./ca.js":258,"./cs":259,"./cs.js":259,"./cv":260,"./cv.js":260,"./cy":261,"./cy.js":261,"./da":262,"./da.js":262,"./de":263,"./de-at":264,"./de-at.js":264,"./de-ch":265,"./de-ch.js":265,"./de.js":263,"./dv":266,"./dv.js":266,"./el":267,"./el.js":267,"./en-au":268,"./en-au.js":268,"./en-ca":269,"./en-ca.js":269,"./en-gb":270,"./en-gb.js":270,"./en-ie":271,"./en-ie.js":271,"./en-il":272,"./en-il.js":272,"./en-in":273,"./en-in.js":273,"./en-nz":274,"./en-nz.js":274,"./en-sg":275,"./en-sg.js":275,"./eo":276,"./eo.js":276,"./es":277,"./es-do":278,"./es-do.js":278,"./es-mx":279,"./es-mx.js":279,"./es-us":280,"./es-us.js":280,"./es.js":277,"./et":281,"./et.js":281,"./eu":282,"./eu.js":282,"./fa":283,"./fa.js":283,"./fi":284,"./fi.js":284,"./fil":285,"./fil.js":285,"./fo":286,"./fo.js":286,"./fr":287,"./fr-ca":288,"./fr-ca.js":288,"./fr-ch":289,"./fr-ch.js":289,"./fr.js":287,"./fy":290,"./fy.js":290,"./ga":291,"./ga.js":291,"./gd":292,"./gd.js":292,"./gl":293,"./gl.js":293,"./gom-deva":294,"./gom-deva.js":294,"./gom-latn":295,"./gom-latn.js":295,"./gu":296,"./gu.js":296,"./he":297,"./he.js":297,"./hi":298,"./hi.js":298,"./hr":299,"./hr.js":299,"./hu":300,"./hu.js":300,"./hy-am":301,"./hy-am.js":301,"./id":302,"./id.js":302,"./is":303,"./is.js":303,"./it":304,"./it-ch":305,"./it-ch.js":305,"./it.js":304,"./ja":306,"./ja.js":306,"./jv":307,"./jv.js":307,"./ka":308,"./ka.js":308,"./kk":309,"./kk.js":309,"./km":310,"./km.js":310,"./kn":311,"./kn.js":311,"./ko":312,"./ko.js":312,"./ku":313,"./ku.js":313,"./ky":314,"./ky.js":314,"./lb":315,"./lb.js":315,"./lo":316,"./lo.js":316,"./lt":317,"./lt.js":317,"./lv":318,"./lv.js":318,"./me":319,"./me.js":319,"./mi":320,"./mi.js":320,"./mk":321,"./mk.js":321,"./ml":322,"./ml.js":322,"./mn":323,"./mn.js":323,"./mr":324,"./mr.js":324,"./ms":325,"./ms-my":326,"./ms-my.js":326,"./ms.js":325,"./mt":327,"./mt.js":327,"./my":328,"./my.js":328,"./nb":329,"./nb.js":329,"./ne":330,"./ne.js":330,"./nl":331,"./nl-be":332,"./nl-be.js":332,"./nl.js":331,"./nn":333,"./nn.js":333,"./oc-lnc":334,"./oc-lnc.js":334,"./pa-in":335,"./pa-in.js":335,"./pl":336,"./pl.js":336,"./pt":337,"./pt-br":338,"./pt-br.js":338,"./pt.js":337,"./ro":339,"./ro.js":339,"./ru":340,"./ru.js":340,"./sd":341,"./sd.js":341,"./se":342,"./se.js":342,"./si":343,"./si.js":343,"./sk":344,"./sk.js":344,"./sl":345,"./sl.js":345,"./sq":346,"./sq.js":346,"./sr":347,"./sr-cyrl":348,"./sr-cyrl.js":348,"./sr.js":347,"./ss":349,"./ss.js":349,"./sv":350,"./sv.js":350,"./sw":351,"./sw.js":351,"./ta":352,"./ta.js":352,"./te":353,"./te.js":353,"./tet":354,"./tet.js":354,"./tg":355,"./tg.js":355,"./th":356,"./th.js":356,"./tk":357,"./tk.js":357,"./tl-ph":358,"./tl-ph.js":358,"./tlh":359,"./tlh.js":359,"./tr":360,"./tr.js":360,"./tzl":361,"./tzl.js":361,"./tzm":362,"./tzm-latn":363,"./tzm-latn.js":363,"./tzm.js":362,"./ug-cn":364,"./ug-cn.js":364,"./uk":365,"./uk.js":365,"./ur":366,"./ur.js":366,"./uz":367,"./uz-latn":368,"./uz-latn.js":368,"./uz.js":367,"./vi":369,"./vi.js":369,"./x-pseudo":370,"./x-pseudo.js":370,"./yo":371,"./yo.js":371,"./zh-cn":372,"./zh-cn.js":372,"./zh-hk":373,"./zh-hk.js":373,"./zh-mo":374,"./zh-mo.js":374,"./zh-tw":375,"./zh-tw.js":375};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=391},630:function(t,e,r){"use strict";r.r(e);var n=r(222),o=r(382),c=r.n(o),l=r(383),d=r.n(l),f=r(384),j=r.n(f),m=r(221),h=(r(219),{name:"OrderCard",components:{CheckedBox:c.a,UncheckBox:d.a,DisableCheckbox:j.a,Button:m.default},props:{order:{type:Object,default:{}}},methods:{formatMoneyRupiah:function(t){return Object(n.b)(t)}}}),v=r(6),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex border-[1px] border-green-seakun py-3 px-6 bg-white mt-3 rounded-xl items-center"},[r("div",{staticClass:"flex flex-column w-full"},[r("div",{staticClass:"flex items-center"},[r("div",{staticClass:"w-20 mr-4"},[r("img",{attrs:{alt:"image-product",src:"/images/product/brand/"+t.order.provider.slug+".png"}})]),t._v(" "),r("div",{staticClass:"flex justify-between flex-wrap items-center w-full"},[r("div",[r("p",{staticClass:"text-base font-bold"},[t._v("\n            "+t._s(t.order.provider.name)+" -\n            "+t._s(t.order.provider.package.variant.name)+"\n          ")]),t._v(" "),r("p",{staticClass:"text-base font-bold"},[t._v(t._s(t.order.orderNumber))]),t._v(" "),12===t.order.provider.package.variant.duration?r("p",{staticClass:"text-base font-normal mt-1 opacity-80"},[t._v("\n            "+t._s(t.formatMoneyRupiah(t.order.payment.totalPrice))+"\n            x (1 Tahun)\n          ")]):r("p",{staticClass:"text-base font-normal mt-1 opacity-80"},[t._v("\n            "+t._s(t.formatMoneyRupiah(t.order.payment.totalPrice))+" x ("+t._s(t.order.provider.package.variant.duration)+"\n            Bulan)\n          ")])])])]),t._v(" "),r("div",{staticClass:"my-3 border-b border-[#E5E5E5]"}),t._v(" "),t._m(0)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex justify-between items-center"},[r("p",{staticClass:"text-base font-normal opacity-50"},[t._v("Status Pembayaran")]),t._v(" "),r("p",{staticClass:"text-primary font-bold"},[t._v("SUKSES")])])}],!1,null,null,null);e.default=component.exports},745:function(t,e,r){"use strict";r.r(e);r(231);var n=r(221),o=r(630),c=r(222),l=r(219),d=r.n(l),f={name:"thankyou-page",layout:"new",props:{dataOrder:{type:Array,default:function(){return[]}},totalTransfer:{type:Number,default:null}},data:function(){return{currencyFormat:c.b,moment:d.a}},components:{Button:n.default,OrderCard:o.default},methods:{toHomePage:function(){this.$router.push("/")}}},j=r(6),component=Object(j.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"thankyou max-w-2xl w-full mx-auto pt-4 tn:-mb-4 md:mb-0"},[r("div",{staticClass:"md:rounded-3xl md:shadow-md tn:px-3 md:px-8 lg:px-16 md:py-8 w-full pt-4"},[r("img",{staticClass:"w-1/3 mx-auto",attrs:{src:"/images/thank-you-new.png",alt:"Image not found"}}),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"tn:px-4 md:px-6 tn:py-4 md:py-8 mt-2 bg-gray-50 shadow-md tn:rounded-xl md:rounded-3xl"},[r("div",[r("p",{staticClass:"font-bold text-lg"},[t._v("Detail Pesanan")]),t._v(" "),t._l(t.dataOrder,(function(t,e){return r("OrderCard",{key:e,attrs:{order:t}})}))],2),t._v(" "),r("div",{staticClass:"mt-4 md:space-y-1"},[r("div",{staticClass:"text-center"},[r("p",[t._v("Total Pembayaran")]),t._v(" "),r("p",{staticClass:"font-bold text-xl"},[t._v(t._s(t.currencyFormat(t.totalTransfer)))])])])]),t._v(" "),t._m(1),t._v(" "),r("Button",{staticClass:"w-full bg-green-seakun text-white tn:mt-5 md:mt-6 py-[12px] rounded-2xl",attrs:{label:"Kembali ke beranda"},on:{click:function(e){return t.toHomePage()}}})],1)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-center tn:px-4 md:px-12"},[r("h3",{staticClass:"font-bold text-3xl mt-4 text-center"},[t._v("Terima Kasih!")]),t._v(" "),r("p",{staticClass:"text-center md:text-lg mt-4 text-gray-500"},[t._v("\n        Selamat, pembayaran kamu berhasil dikonfirmasi. pesanan kamu akan\n        segera diproses oleh admin Seakun.\n      ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("p",{staticClass:"tn:mt-4 md:mt-6 lg:mt-8"},[t._v("\n        Mohon menunggu 1 x 24 jam, jika melewati rentang waktu tersebut dan\n        pesanan kamu belum diproses, harap hubungi admin via whatsapp\n        "),r("a",{staticClass:"text-primary",attrs:{href:"https://api.whatsapp.com/send/?phone=6282124852232",target:"_blank"}},[t._v("+6282124852232")]),t._v(".\n      ")])])}],!1,null,null,null);e.default=component.exports}}]);