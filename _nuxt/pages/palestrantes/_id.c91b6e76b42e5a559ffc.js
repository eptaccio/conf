webpackJsonp([1],{"/yRl":function(t,e,a){var i={"./carlos.jpg":"fFEq","./daniel.jpg":"CuV1","./elder.jpg":"akWD","./guilherme.jpg":"jJhY","./heitor.jpg":"AbW2","./paulo.jpg":"Vo40","./pedro.jpg":"brj+","./turicas.jpg":"kI/x"};function s(t){return a(r(t))}function r(t){var e=i[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}s.keys=function(){return Object.keys(i)},s.resolve=r,t.exports=s,s.id="/yRl"},AbW2:function(t,e,a){t.exports=a.p+"img/heitor.dba214b.jpg"},CuV1:function(t,e,a){t.exports=a.p+"img/daniel.748e549.jpg"},P1XI:function(t,e,a){var i=a("oIFC");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("827cd22a",i,!1,{sourceMap:!1})},Vo40:function(t,e,a){t.exports=a.p+"img/paulo.6edeb92.jpg"},akWD:function(t,e,a){t.exports=a.p+"img/elder.e11b0dc.jpg"},"brj+":function(t,e,a){t.exports=a.p+"img/pedro.539fc78.jpg"},fFEq:function(t,e,a){t.exports=a.p+"img/carlos.3d3be47.jpg"},isPQ:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{},[i("div",{staticClass:"relative container wrap"},[t._m(0),i("div",{staticClass:"flex-basis-500 flex-grow-1 speakers container wrap align-center"},t._l(t.speakers,function(e){return i("div",{key:e.id,staticClass:"speakers--item col-lg-6 col-12",class:{active:t.speakerSelected===e.id}},[i("div",{staticClass:"speakers--item--content",on:{click:function(a){t.speakerSelected=e.id},mouseover:function(a){t.speakerSelected=e.id}}},[i("div",{staticClass:"speakers--item--content--image"},[i("img",{attrs:{src:a("/yRl")("./"+e.image+".jpg"),width:"100%"}}),i("div",{staticClass:"speakers--item--content--description"},[i("p",[t._v(t._s(e.description))]),t._m(1,!0)])]),i("div",{staticClass:"speakers--item--content--title"},[i("p",[i("strong",[t._v(t._s(e.name))])]),i("p",[t._v(t._s(e.role))])])])])}),0)]),i("div",{staticClass:"padding-bottom-100 padding-top-50 size margin container align-center"},[i("nuxt-link",{staticClass:"btn btn-primary",attrs:{to:{name:"home"}}},[i("i",{staticClass:"fas fa-arrow-left margin-right-10"}),t._v(" Voltar")])],1)])};i._withStripped=!0;var s={render:i,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"rotate--box-title"},[e("div",{staticClass:"box-title"},[e("h2",[this._v("Palestrantes")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"social container align-items-center"},[e("li",[e("a",{attrs:{href:"#",target:"_blank"}},[e("i",{staticClass:"fa fa-link"})])]),e("li",[e("a",{attrs:{href:"#",target:"_blank"}},[e("i",{staticClass:"fab fa-github"})])]),e("li",[e("a",{attrs:{href:"#",target:"_blank"}},[e("i",{staticClass:"fab fa-facebook"})])]),e("li",[e("a",{attrs:{href:"#",target:"_blank"}},[e("i",{staticClass:"fab fa-instagram"})])])])}]};e.a=s},jJhY:function(t,e,a){t.exports=a.p+"img/guilherme.a451a96.jpg"},"kI/x":function(t,e,a){t.exports=a.p+"img/turicas.d79cac7.jpg"},"mh+C":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("pGT5"),s=a("isPQ"),r=!1;var n=function(t){r||a("P1XI")},c=a("VU/8")(i.a,s.a,!1,n,null,null);c.options.__file="pages/palestrantes/_id.vue",e.default=c.exports},oIFC:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"",""])},pGT5:function(t,e,a){"use strict";var i=a("Dd8w"),s=a.n(i),r=a("NYxO");e.a={data:function(){return{speakerSelected:0}},computed:s()({},Object(r.mapState)(["speakers"]))}}});