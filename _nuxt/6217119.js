(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{447:function(t,e,n){var content=n(520);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("4d908028",content,!0,{sourceMap:!1})},519:function(t,e,n){"use strict";n(447)},520:function(t,e,n){var d=n(18)((function(i){return i[1]}));d.push([t.i,".event-detail[data-v-2a50a928]{width:50%;margin:20px;border:1px solid #86d0c1;height:-webkit-fill-available;border-radius:8px;padding:0 10px 20px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}.event-detail img[data-v-2a50a928]{width:100%;padding:16px}.event-detail__info[data-v-2a50a928]{display:flex;padding:2px 16px}.event-detail__info--key[data-v-2a50a928]{width:18%;margin-right:16px}.event-detail__info--value[data-v-2a50a928]{width:70%;margin-left:16px}.desktop[data-v-2a50a928]{display:block!important}.mobile[data-v-2a50a928]{display:none!important}@media(max-width:800px){.event[data-v-2a50a928]{display:block;width:100%!important;padding:80px 10px!important;font-size:14px!important}.event-reg[data-v-2a50a928]{padding:0 4px}.event-detail[data-v-2a50a928],.event-reg[data-v-2a50a928]{width:100%!important;margin:0}.event-detail[data-v-2a50a928]{padding:0 0 16px}.event-detail__info--key[data-v-2a50a928]{width:28%!important}.desktop[data-v-2a50a928]{display:none!important}.mobile[data-v-2a50a928]{display:block!important}}.bold[data-v-2a50a928]{font-weight:700!important}",""]),d.locals={},t.exports=d},618:function(t,e,n){"use strict";n.r(e);n(139);var d={props:{extendClass:{type:String,default:"desktop"},dataEvent:{type:Object,default:{}}},data:function(){return{test:"Ingelora Loudia Anggita (HR Practitioner & Member HR Migas Community)#Faishal Arief (Founder & CEO Seakun.id)#Batara Indra (Risk Management Practitioner)"}},methods:{handleDataNarasumber:function(data){return data&&data.split("#")}}},v=(n(519),n(6)),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.dataEvent?n("div",{class:"event-detail "+t.extendClass},[n("h5",{staticClass:"bold",staticStyle:{padding:"20px 16px 0px 16px"}},[t._v("\n    Detail Acara "+t._s(t.dataEvent.type_event)+"\n  ")]),t._v(" "),n("img",{attrs:{src:t.dataEvent.url_banner,alt:t.dataEvent.title_event}}),t._v(" "),n("div",{staticClass:"event-detail__info"},[n("div",{staticClass:"event-detail__info--key"},[t._v("Jenis Acara")]),t._v("\n    :\n    "),n("div",{staticClass:"event-detail__info--value bold"},[t._v("\n      "+t._s(t.dataEvent.type_event)+"\n    ")])]),t._v(" "),n("div",{staticClass:"event-detail__info"},[n("div",{staticClass:"event-detail__info--key"},[t._v("Topik")]),t._v("\n    :\n    "),n("div",{staticClass:"event-detail__info--value bold"},[t._v("\n      "+t._s(t.dataEvent.title_event)+"\n    ")])]),t._v(" "),n("div",{staticClass:"event-detail__info"},[n("div",{staticClass:"event-detail__info--key"},[t._v("Pembicara")]),t._v("\n    :\n    "),n("div",{staticClass:"event-detail__info--value"},[n("ul",{staticStyle:{"padding-left":"10px","margin-bottom":"0"}},t._l(t.handleDataNarasumber(t.dataEvent.narasumber),(function(e,d){return n("li",{key:d},[t._v("\n          "+t._s(e)+"\n        ")])})),0)])]),t._v(" "),t.dataEvent.host?n("div",{staticClass:"event-detail__info"},[n("div",{staticClass:"event-detail__info--key"},[t._v("Host")]),t._v("\n    :\n    "),n("div",{staticClass:"event-detail__info--value"},[t._v(t._s(t.dataEvent.host))])]):t._e(),t._v(" "),n("div",{staticClass:"event-detail__info"},[n("div",{staticClass:"event-detail__info--key"},[t._v("Waktu")]),t._v("\n    :\n    "),n("div",{staticClass:"event-detail__info--value"},[t._v(t._s(t.dataEvent.date))])]),t._v(" "),n("div",{staticClass:"event-detail__info"},[n("div",{staticClass:"event-detail__info--key"}),t._v(" "),n("div",{staticClass:"event-detail__info--value"},[t._v(t._s(t.dataEvent.time))])]),t._v(" "),n("div",{staticClass:"event-detail__info"},[n("div",{staticClass:"event-detail__info--key"},[t._v("Lokasi")]),t._v("\n    :\n    "),n("div",{staticClass:"event-detail__info--value"},[t._v(t._s(t.dataEvent.location))])]),t._v(" "),t.dataEvent.giveaway?n("div",{staticClass:"event-detail__info"},[n("div",{staticClass:"event-detail__info--key"},[t._v("Giveaway")]),t._v("\n    :\n    "),n("div",{staticClass:"event-detail__info--value"},[t._v(t._s(t.dataEvent.giveaway))])]):t._e()]):t._e()}),[],!1,null,"2a50a928",null);e.default=component.exports}}]);