(window.webpackJsonp=window.webpackJsonp||[]).push([[68,14],{220:function(t,n,e){var content=e(224);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(19).default)("f7e4c7e6",content,!0,{sourceMap:!1})},221:function(t,n,e){"use strict";e.r(n);var l={name:"Button",props:{variant:{type:String,default:null},size:{type:String,default:null},label:{type:String,default:""},isLoading:{type:Boolean,default:!1},shape:{type:String,default:""},addClass:{type:String,default:""}},data:function(){return{classBtn:"btn btn-".concat(this.variant," ").concat(this.size?"btn-"+this.size:""," ").concat("pill"===this.shape?"!rounded-full":""," ").concat(this.addClass?this.addClass:"")}},methods:{handleOnClick:function(t){this.$emit("click",t)}}},r=(e(223),e(6)),component=Object(r.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("button",t._b({class:t.classBtn,attrs:{type:"button",disabled:t.isLoading},on:{click:t.handleOnClick}},"button",t.$props,!1),[t.isLoading?e("div",[t._m(0)]):e("div",[t._v("\n    "+t._s(t.label)+"\n  ")])])}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("i",{staticClass:"fa fa-circle-o-notch fa-spin"}),t._v("\n      Loading...\n    ")])}],!1,null,"20743f99",null);n.default=component.exports},223:function(t,n,e){"use strict";e(220)},224:function(t,n,e){var l=e(18)((function(i){return i[1]}));l.push([t.i,"button[data-v-20743f99]:disabled,button[data-v-20743f99]:hover:disabled{border:1px solid #a9e0d5!important;background-color:#a9e0d5!important;color:#fff!important}.fa[data-v-20743f99]{margin-left:-12px;margin-right:8px}",""]),l.locals={},t.exports=l},682:function(t,n,e){"use strict";e.r(n);var l={components:{Button:e(221).default}},r=e(6),component=Object(r.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container iner tn:mt-2 lg:pt-10 pt-10 -mb-16"},[e("div",{staticClass:"bg-pink-seakun rounded-3xl md:flex md:flex-row tn:px-6 lg:px-16 py-6 items-center"},[t._m(0),t._v(" "),e("div",{staticClass:"flex-1 md:px-8"},[e("h1",{staticClass:"text-3xl lg:text-5xl font-bold text-secondary tn:text-center md:text-left tn:my-2 md:my-4"},[t._v("\n        Mengalami kendala?\n      ")]),t._v(" "),e("p",{staticClass:"my-2"},[t._v("\n        Segera laporkan jika kamu mengalami kendala pada saat pendaftaran,\n        pembayaran, atau terjadi masalah dengan akun langganan kamu. Kami akan\n        segera menghubungi kamu untuk membantu menyelesaikan kendala yang kamu\n        hadapi.\n      ")]),t._v(" "),e("a",{staticClass:"tn:pt-3",attrs:{href:"https://forms.gle/t1AbaxnjEtJr8NAPA",target:"_blank"}},[e("Button",{staticClass:"w-full py-2",attrs:{variant:"primary",label:"Ajukan Laporan"}})],1)])])])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{},[n("img",{staticClass:"tn:h-44 md:h-56 w-auto mx-auto",attrs:{src:"/images/illustration-seakun-help-banner.svg"}})])}],!1,null,null,null);n.default=component.exports}}]);