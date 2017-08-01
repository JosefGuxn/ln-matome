webpackJsonp([1],{215:function(t,e,s){"use strict";var a=s(35),n=s(351),i=s(333),r=s.n(i),l=s(340),o=s.n(l),c=s(332),u=s.n(c),v=s(337),d=s.n(v),f=s(338),p=s.n(f),m=s(335),_=s.n(m),x=s(334),h=s.n(x),g=s(336),j=s.n(g),b=s(339),y=s.n(b);a.a.use(n.a),e.a=new n.a({routes:[{path:"/",component:r.a,children:[{path:"/",component:u.a},{path:"novels",component:d.a},{path:"series/:seriesId",component:p.a},{path:"series/:seriesId/addrelease",component:h.a},{path:"addseries",component:_.a},{path:"finder",component:j.a},{path:"signup",component:y.a}]},{path:"/reader/:chapterId",name:"Reader",component:o.a}],mode:"history"})},216:function(t,e,s){"use strict";var a=s(35),n=s(214),i=s(220),r=s(221),l=(s.n(r),s(223)),o=s(222),c=s.n(o);a.a.use(n.a),e.a=new n.a.Store({actions:i,getters:r,modules:{novels:l.a,chapters:c.a}})},217:function(t,e,s){s(263);var a=s(10)(s(224),s(345),null,null);t.exports=a.exports},219:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(35),n=s(218),i=s.n(n),r=s(217),l=s.n(r),o=s(215),c=s(216),u=s(53);s.n(u);a.a.use(i.a),a.a.config.productionTip=!1,o.a.beforeEach(function(t,e,s){window.scrollTo(0,0),s()}),new a.a({el:"#app",router:o.a,store:c.a,template:"<App/>",components:{App:l.a},created:function(){u.initializeApp({apiKey:"AIzaSyD-coZaZBG_LCjCbJ0ajDNptG7F37NUOtg",authDomain:"ln-matome.firebaseapp.com",databaseURL:"https://ln-matome.firebaseio.com",projectId:"ln-matome",storageBucket:""})}})},220:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),s.d(e,"addSeries",function(){return n});var a=s(54),n=function(t,e){(0,t.commit)(a.b,{newSeries:e})}},221:function(t,e){},222:function(t,e){},223:function(t,e,s){"use strict";var a,n=s(235),i=s.n(n),r=s(234),l=s.n(r),o=s(53),c=(s.n(o),s(54)),u=s(213),v=s.n(u),d={all:[]},f={allNovels:function(t){return t.all},allNovelsArr:function(t){return v.a.sortBy(l()(t.all),"title")},getSeriesInfo:function(t,e){return function(e){return v.a.findWhere(l()(t.all),{id:e})}}},p={loadNovels:function(t){var e=t.commit;o.database().ref("novels").on("value",function(t){e(c.a,{novels:t})})}},m=(a={},i()(a,c.a,function(t,e){var s=e.novels;t.all=s.val()}),i()(a,c.b,function(t,e){var s=e.newSeries;s.lastupdate=o.database.ServerValue.TIMESTAMP;var a={};a["/novels/"+s.id]=s,o.database().ref().update(a)}),a);e.a={state:d,getters:f,actions:p,mutations:m}},224:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}}}},225:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},226:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{mini:!0,items:[{icon:"import_contacts",title:"Novels",link:"/novels"},{icon:"search",title:"Finder",link:"/finder"},{icon:"face",title:"Sign up",link:"/signup"},{icon:"input",title:"Sign in",link:"/signin"}],title:"Ln-matome"}},created:function(){this.$store.dispatch("loadNovels")}}},227:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{seriesId:this.$route.params.seriesId}}}},228:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(213),n=s.n(a);e.default={data:function(){return{imagelink:"",title:"",author:"",artist:null,description:"",associatedNames:null,year:null,language:"",languagesList:["Japanese","Chinese","Korean"],status:"",statusList:["Ongoing","Completed","Dropped","Stalled"],genre:"",dialog:!1,rules:{required:function(t){return!!t||"Required."}}}},computed:{rand:function(){return n.a.random(100,999).toString()},id:function(){return this.rand+"-"+this.title.toLowerCase().replace(/[^0-9a-z]/gi," ").split(" ").join("-")}},methods:{Submit:function(){this.imagelink=""===this.imagelink?"http://www.novelupdates.com/img/noimagefound.jpg":this.imagelink;var t={id:this.id,imagelink:this.imagelink,title:this.title,author:this.author,artist:this.artist||"N/A",associatedNames:this.associatedNames||"N/A",description:this.description,year:this.year||"N/A",language:this.language,status:this.status,release:[],lastupdate:{},rating:[]};this.$store.dispatch("addSeries",t),this.dialog=!0}}}},229:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},230:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(214);e.default={data:function(){return{pagination:{}}},computed:s.i(a.b)({novels:"allNovels",novelsArr:"allNovelsArr"})}},231:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(0),n=s.n(a);e.default={data:function(){return{headers:[{text:"Release",align:"left",sortable:!1,value:"release"}],seriesId:this.$route.params.seriesId}},computed:{seriesInfo:function(){return this.$store.getters.getSeriesInfo(this.seriesId)},lastUpdateDate:function(){var t=new Date(0);return t.setUTCSeconds(0,this.seriesInfo.lastupdate),n()(t).format("DD/MM/YYYY H:mm:ss")}},created:function(){}}},232:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},263:function(t,e){},329:function(t,e,s){function a(t){return s(n(t))}function n(t){var e=i[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var i={"./af":97,"./af.js":97,"./ar":104,"./ar-dz":98,"./ar-dz.js":98,"./ar-kw":99,"./ar-kw.js":99,"./ar-ly":100,"./ar-ly.js":100,"./ar-ma":101,"./ar-ma.js":101,"./ar-sa":102,"./ar-sa.js":102,"./ar-tn":103,"./ar-tn.js":103,"./ar.js":104,"./az":105,"./az.js":105,"./be":106,"./be.js":106,"./bg":107,"./bg.js":107,"./bn":108,"./bn.js":108,"./bo":109,"./bo.js":109,"./br":110,"./br.js":110,"./bs":111,"./bs.js":111,"./ca":112,"./ca.js":112,"./cs":113,"./cs.js":113,"./cv":114,"./cv.js":114,"./cy":115,"./cy.js":115,"./da":116,"./da.js":116,"./de":119,"./de-at":117,"./de-at.js":117,"./de-ch":118,"./de-ch.js":118,"./de.js":119,"./dv":120,"./dv.js":120,"./el":121,"./el.js":121,"./en-au":122,"./en-au.js":122,"./en-ca":123,"./en-ca.js":123,"./en-gb":124,"./en-gb.js":124,"./en-ie":125,"./en-ie.js":125,"./en-nz":126,"./en-nz.js":126,"./eo":127,"./eo.js":127,"./es":129,"./es-do":128,"./es-do.js":128,"./es.js":129,"./et":130,"./et.js":130,"./eu":131,"./eu.js":131,"./fa":132,"./fa.js":132,"./fi":133,"./fi.js":133,"./fo":134,"./fo.js":134,"./fr":137,"./fr-ca":135,"./fr-ca.js":135,"./fr-ch":136,"./fr-ch.js":136,"./fr.js":137,"./fy":138,"./fy.js":138,"./gd":139,"./gd.js":139,"./gl":140,"./gl.js":140,"./gom-latn":141,"./gom-latn.js":141,"./he":142,"./he.js":142,"./hi":143,"./hi.js":143,"./hr":144,"./hr.js":144,"./hu":145,"./hu.js":145,"./hy-am":146,"./hy-am.js":146,"./id":147,"./id.js":147,"./is":148,"./is.js":148,"./it":149,"./it.js":149,"./ja":150,"./ja.js":150,"./jv":151,"./jv.js":151,"./ka":152,"./ka.js":152,"./kk":153,"./kk.js":153,"./km":154,"./km.js":154,"./kn":155,"./kn.js":155,"./ko":156,"./ko.js":156,"./ky":157,"./ky.js":157,"./lb":158,"./lb.js":158,"./lo":159,"./lo.js":159,"./lt":160,"./lt.js":160,"./lv":161,"./lv.js":161,"./me":162,"./me.js":162,"./mi":163,"./mi.js":163,"./mk":164,"./mk.js":164,"./ml":165,"./ml.js":165,"./mr":166,"./mr.js":166,"./ms":168,"./ms-my":167,"./ms-my.js":167,"./ms.js":168,"./my":169,"./my.js":169,"./nb":170,"./nb.js":170,"./ne":171,"./ne.js":171,"./nl":173,"./nl-be":172,"./nl-be.js":172,"./nl.js":173,"./nn":174,"./nn.js":174,"./pa-in":175,"./pa-in.js":175,"./pl":176,"./pl.js":176,"./pt":178,"./pt-br":177,"./pt-br.js":177,"./pt.js":178,"./ro":179,"./ro.js":179,"./ru":180,"./ru.js":180,"./sd":181,"./sd.js":181,"./se":182,"./se.js":182,"./si":183,"./si.js":183,"./sk":184,"./sk.js":184,"./sl":185,"./sl.js":185,"./sq":186,"./sq.js":186,"./sr":188,"./sr-cyrl":187,"./sr-cyrl.js":187,"./sr.js":188,"./ss":189,"./ss.js":189,"./sv":190,"./sv.js":190,"./sw":191,"./sw.js":191,"./ta":192,"./ta.js":192,"./te":193,"./te.js":193,"./tet":194,"./tet.js":194,"./th":195,"./th.js":195,"./tl-ph":196,"./tl-ph.js":196,"./tlh":197,"./tlh.js":197,"./tr":198,"./tr.js":198,"./tzl":199,"./tzl.js":199,"./tzm":201,"./tzm-latn":200,"./tzm-latn.js":200,"./tzm.js":201,"./uk":202,"./uk.js":202,"./ur":203,"./ur.js":203,"./uz":205,"./uz-latn":204,"./uz-latn.js":204,"./uz.js":205,"./vi":206,"./vi.js":206,"./x-pseudo":207,"./x-pseudo.js":207,"./yo":208,"./yo.js":208,"./zh-cn":209,"./zh-cn.js":209,"./zh-hk":210,"./zh-hk.js":210,"./zh-tw":211,"./zh-tw.js":211};a.keys=function(){return Object.keys(i)},a.resolve=n,t.exports=a,a.id=329},332:function(t,e,s){var a=s(10)(s(225),s(341),null,null);t.exports=a.exports},333:function(t,e,s){var a=s(10)(s(226),s(344),null,null);t.exports=a.exports},334:function(t,e,s){var a=s(10)(s(227),s(342),null,null);t.exports=a.exports},335:function(t,e,s){var a=s(10)(s(228),s(349),null,null);t.exports=a.exports},336:function(t,e,s){var a=s(10)(s(229),s(343),null,null);t.exports=a.exports},337:function(t,e,s){var a=s(10)(s(230),s(347),null,null);t.exports=a.exports},338:function(t,e,s){var a=s(10)(s(231),s(350),null,null);t.exports=a.exports},339:function(t,e,s){var a=s(10)(s(232),s(346),null,null);t.exports=a.exports},340:function(t,e,s){var a=s(10)(null,s(348),null,null);t.exports=a.exports},341:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{fluid:""}},[s("v-slide-y-transition",{attrs:{mode:"out-in"}},[s("v-layout",{attrs:{column:"","align-center":""}},[s("img",{staticClass:"mb-5",attrs:{src:"/static/v.png",alt:"Vuetify.js"}}),t._v(" "),s("blockquote",[t._v("\n        “First, solve the problem. Then, write the code.”\n        "),s("footer",[s("small",[s("em",[t._v("—John Johnson")])])])])])],1)],1)},staticRenderFns:[]}},342:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{fluid:""}},[s("v-layout",{attrs:{row:"","justify-center":""}},[s("v-flex",{attrs:{xs12:"",md6:""}})],1)],1)},staticRenderFns:[]}},343:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-container",[t._v("\n  Series Finder\n")])},staticRenderFns:[]}},344:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",{attrs:{light:""}},[s("v-toolbar",{staticClass:"hidden-xs-only",attrs:{fixed:""}},[s("v-toolbar-title",[s("router-link",{staticStyle:{cursor:"pointer"},attrs:{to:"/",tag:"span"}},[t._v(t._s(t.title))])],1),t._v(" "),s("v-spacer"),t._v(" "),s("v-toolbar-items",t._l(t.items,function(e){return s("v-btn",{key:e.title,attrs:{light:"",flat:"",router:"",to:e.link}},[s("v-icon",{attrs:{left:"",medium:""}},[t._v(t._s(e.icon))]),t._v("\n        "+t._s(e.title)+"\n      ")],1)}))],1),t._v(" "),s("main",[s("router-view")],1),t._v(" "),s("v-bottom-nav",{staticClass:"teal hidden-sm-and-up",attrs:{fixed:"",shift:"",value:"true"}},t._l(t.items,function(e){return s("v-btn",{key:e.title,attrs:{dark:"",flat:"",router:"",to:e.link}},[s("span",[t._v(t._s(e.title))]),t._v(" "),s("v-icon",[t._v(t._s(e.icon))])],1)})),t._v(" "),s("v-footer",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticClass:"mt-5"},[s("span",[t._v("© 2017")])])],1)},staticRenderFns:[]}},345:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("router-view")},staticRenderFns:[]}},346:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-container",[t._v("\n  Sign up\n")])},staticRenderFns:[]}},347:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{fluid:""}},[s("v-layout",{attrs:{row:"","justify-center":""}},[s("v-flex",{attrs:{xs12:"",md6:""}},[s("v-card",[s("v-card-title",[s("div",{staticClass:"headline"},[t._v("Novels Listing")]),t._v(" "),s("v-btn",{directives:[{name:"tooltip",rawName:"v-tooltip:right",value:{html:"Add series"},expression:"{ html: 'Add series' }",arg:"right"}],staticClass:"hidden-sm-and-down",attrs:{icon:"",to:"addseries"}},[s("v-icon",[t._v("library_add")])],1)],1),t._v(" "),s("v-data-table",{attrs:{items:t.novelsArr,pagination:t.pagination,"hide-actions":""},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"headers",fn:function(t){return[s("tr",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]})]}},{key:"items",fn:function(e){return[s("td",{staticStyle:{"vertical-align":"text-top"}},[s("v-layout",{staticClass:"mt-3",attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm2:""}},[s("router-link",{attrs:{to:"series/"+e.item.id}},[s("img",{attrs:{src:e.item.imagelink,height:"120px",width:"80px"}})])],1),t._v(" "),s("v-flex",{attrs:{xs12:"",sm10:""}},[s("v-layout",{attrs:{column:""}},[s("v-flex",{staticClass:"text-xs-center text-sm-left"},[s("router-link",{staticClass:"title mb-2",staticStyle:{"text-decoration":"none"},attrs:{to:"series/"+e.item.id}},[t._v("\n                        "+t._s(e.item.title)+"\n                      ")])],1),t._v(" "),s("v-flex",{staticClass:"text-xs-center text-sm-left"},[s("p",[t._v("by "),s("span",{staticClass:"body-1"},[t._v(t._s(e.item.author))])])]),t._v(" "),s("v-flex",["Completed"==e.item.status?s("v-chip",{staticClass:"primary white--text"},[t._v("\n                          Completed\n                        ")]):"Stalled"==e.item.status?s("v-chip",{staticClass:"secondary white--text"},[t._v("\n                        Stalled\n                      ")]):"Dropped"==e.item.status?s("v-chip",{staticClass:"red white--text"},[t._v("\n                        Dropped\n                      ")]):s("v-chip",{staticClass:"green white--text"},[t._v("Ongoing")])],1),t._v(" "),s("v-flex",[s("v-divider"),t._v(" "),s("p",[t._v("Latest Release: ")])],1)],1)],1)],1)],1)]}}])}),t._v(" "),s("div",{staticClass:"text-xs-center pt-2"},[s("v-pagination",{attrs:{length:Math.ceil(this.novelsArr.length/t.pagination.rowsPerPage)},model:{value:t.pagination.page,callback:function(e){t.pagination.page=e},expression:"pagination.page"}})],1)],1)],1)],1)],1)},staticRenderFns:[]}},348:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("div",[t._v("Read mode")])])},staticRenderFns:[]}},349:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{fluid:""}},[s("v-layout",{attrs:{row:"","justify-center":""}},[s("v-flex",{attrs:{xs12:"",md6:""}},[s("v-card",[s("v-card-title",{staticClass:"primary",attrs:{"primary-title":""}},[s("div",{staticClass:"white--text display-1 mb-1"},[t._v("\n            Add Series\n          ")])]),t._v(" "),s("v-card-text",{staticClass:"title mt-2"},[s("v-container",{attrs:{fluid:""}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{label:"Id",readonly:""},model:{value:t.id,callback:function(e){t.id=e},expression:"id"}})],1),t._v(" "),s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{label:"Image link"},model:{value:t.imagelink,callback:function(e){t.imagelink=e},expression:"imagelink"}})],1),t._v(" "),s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{label:"Series Name",rules:[t.rules.required]},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),t._v(" "),s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{label:"Author",rules:[t.rules.required],rows:"3",hint:"One entry per line","multi-line":"","persistent-hint":""},model:{value:t.author,callback:function(e){t.author=e},expression:"author"}})],1),t._v(" "),s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{label:"Artist",rows:"3",hint:"One entry per line","multi-line":"","persistent-hint":""},model:{value:t.artist,callback:function(e){t.artist=e},expression:"artist"}})],1),t._v(" "),s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{label:"Description",rules:[t.rules.required],"multi-line":"",rows:"6"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1),t._v(" "),s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{label:"Associated Names",rows:"3",hint:"One entry per line","multi-line":"","persistent-hint":""},model:{value:t.associatedNames,callback:function(e){t.associatedNames=e},expression:"associatedNames"}})],1),t._v(" "),s("v-flex",{attrs:{xs12:""}},[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs4:""}},[s("v-text-field",{attrs:{label:"Year"},model:{value:t.year,callback:function(e){t.year=e},expression:"year"}})],1),t._v(" "),s("v-flex",{attrs:{xs4:""}},[s("v-select",{attrs:{items:t.languagesList,label:"Language",rules:[t.rules.required]},model:{value:t.language,callback:function(e){t.language=e},expression:"language"}})],1),t._v(" "),s("v-flex",{attrs:{xs4:""}},[s("v-select",{attrs:{items:t.statusList,label:"Status",rules:[t.rules.required]},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}})],1)],1)],1),t._v(" "),s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{label:"Genre"},model:{value:t.genre,callback:function(e){t.genre=e},expression:"genre"}})],1),t._v(" "),s("v-flex",{attrs:{xs12:""}},[s("v-btn",{directives:[{name:"show",rawName:"v-show",value:""!==t.title&&""!==t.author&&""!==t.description&&""!==t.language&&""!==t.status,expression:"title!=='' && author!=='' && description!=='' && language!=='' && status!==''"}],attrs:{primary:"",large:"",block:""},nativeOn:{click:function(e){e.stopPropagation(),t.Submit(e)}}},[t._v("\n                Submit\n                ")])],1)],1)],1)],1)],1)],1)],1),t._v(" "),s("v-layout",{attrs:{row:"","justify-center":""}},[s("v-dialog",{attrs:{width:"600",persistent:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[s("v-card",[s("v-card-title",{staticClass:"headline"},[t._v("New series has been successfully added.")]),t._v(" "),s("v-card-actions",[s("v-btn",{attrs:{success:"",block:"",to:"/novels"}},[t._v("Ok")])],1)],1)],1)],1)],1)},staticRenderFns:[]}},350:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{fluid:""}},[s("v-layout",{attrs:{row:"","justify-center":""}},[s("v-flex",{attrs:{xs12:"",md9:""}},[s("v-card",{staticClass:"grey lighten-4 elevation-3"},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:"",sm3:""}},[s("v-card-media",{staticClass:"ma-2 elevation-1",attrs:{src:t.seriesInfo.imagelink,height:"300px",contain:""}})],1),t._v(" "),s("v-flex",{attrs:{xs12:"",sm9:""}},[s("v-layout",{staticClass:"text-xs-center text-sm-left",attrs:{column:""}},[s("v-flex",{staticClass:"hidden-xs-only"},["Completed"==t.seriesInfo.status?s("v-chip",{staticClass:"primary white--text"},[t._v("\n                  Completed\n                ")]):"Stalled"==t.seriesInfo.status?s("v-chip",{staticClass:"secondary white--text"},[t._v("\n                  Stalled\n                ")]):"Dropped"==t.seriesInfo.status?s("v-chip",{staticClass:"red white--text"},[t._v("\n                  Dropped\n                ")]):s("v-chip",{staticClass:"green white--text"},[t._v("Ongoing")]),t._v(" "),s("v-chip",{directives:[{name:"tooltip",rawName:"v-tooltip:right",value:{html:"Last Update"},expression:"{ html: 'Last Update' }",arg:"right"}],staticClass:"green ml-0 grey--text text--darken-4",attrs:{outline:""}},[s("v-icon",{staticClass:"green--text text--darken-4",attrs:{left:"",medium:""}},[t._v("date_range")]),t._v("\n                  "+t._s(t.lastUpdateDate)+"\n                ")],1)],1),t._v(" "),s("v-flex",[s("div",{staticClass:"display-1 ma-2 primary--text"},[t._v("\n                  "+t._s(t.seriesInfo.title)+"\n                ")])]),t._v(" "),s("v-flex",{staticClass:"hidden-xs-only"},[s("div",{staticClass:"subheading ml-3 pr-4",staticStyle:{"text-align":"justify","text-justify":"auto"}},[t._v("             \n                  "+t._s(t.seriesInfo.description)+"\n                ")])]),t._v(" "),s("v-flex",{staticClass:"hidden-sm-and-up mb-2"},[s("v-layout",{attrs:{"justify-center":""}},[s("v-flex",{attrs:{xs11:""}},[s("v-expansion-panel",{staticClass:"elevation-0"},[s("v-expansion-panel-content",[s("div",{staticClass:"title",slot:"header"},[t._v("Description")]),t._v(" "),s("div",{staticClass:"subheading ml-3 pt-2 pr-4",staticStyle:{"text-align":"justify","text-justify":"auto"}},[t._v("             \n                          "+t._s(t.seriesInfo.description)+"\n                        ")])])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1),t._v(" "),s("v-layout",{staticClass:"mt-3",attrs:{row:"","justify-center":""}},[s("v-flex",{attrs:{xs12:"",md9:""}},[s("v-card",[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"hidden-xs-only",attrs:{xs3:""}},[s("v-layout",{staticClass:"text-sm-left ma-3",attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("div",{staticClass:"title"},[t._v("\n                  Author(s)\n                ")]),t._v(" "),s("div",{staticClass:"subheading mt-2 ml-3"},[t._v("\n                  "+t._s(t.seriesInfo.author)+"\n                ")])]),t._v(" "),s("v-flex",{staticClass:"mt-4",attrs:{xs12:""}},[s("div",{staticClass:"title"},[t._v("\n                  Artist(s)\n                ")]),t._v(" "),s("div",{staticClass:"subheading mt-2 ml-3"},[t._v("\n                  "+t._s(t.seriesInfo.artist)+"\n                ")])]),t._v(" "),s("v-flex",{staticClass:"mt-4",attrs:{xs12:""}},[s("div",{staticClass:"title"},[t._v("\n                  Language\n                ")]),t._v(" "),s("div",{staticClass:"subheading mt-2 ml-3"},[t._v("\n                  "+t._s(t.seriesInfo.language)+"\n                ")])]),t._v(" "),s("v-flex",{staticClass:"mt-4",attrs:{xs12:""}},[s("div",{staticClass:"title"},[t._v("\n                  Year\n                ")]),t._v(" "),s("div",{staticClass:"subheading mt-2 ml-3"},[t._v("\n                  "+t._s(t.seriesInfo.year)+"\n                ")])]),t._v(" "),s("v-flex",{staticClass:"mt-4",attrs:{xs12:""}},[s("div",{staticClass:"title"},[t._v("\n                  Associated Names\n                ")]),t._v(" "),s("div",{staticClass:"subheading mt-2 ml-3"},[t._v("\n                  "+t._s(t.seriesInfo.associatedNames)+"\n                ")])]),t._v(" "),s("v-flex",{staticClass:"mt-4",attrs:{xs12:""}},[s("div",{staticClass:"title"},[t._v("\n                  Rating\n                ")]),t._v(" "),s("div",{staticClass:"subheading mt-2 ml-3"},[t._v("\n                  "+t._s(t.seriesInfo.year)+"\n                ")])])],1)],1),t._v(" "),s("v-flex",{staticClass:"hidden-sm-and-up mt-2",attrs:{xs12:""}},[s("v-layout",{attrs:{"justify-center":""}},[s("v-flex",{attrs:{xs11:""}},[s("v-expansion-panel",{staticClass:"grey lighten-4 elevation-0"},[s("v-expansion-panel-content",[s("div",{staticClass:"title",slot:"header"},[t._v("Details")]),t._v(" "),s("v-layout",{staticClass:"text-xs-center pt-3",attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("div",{staticClass:"title"},[t._v("\n                          Author(s)\n                        ")]),t._v(" "),s("div",{staticClass:"subheading mt-2"},[t._v("\n                          "+t._s(t.seriesInfo.author)+"\n                        ")])]),t._v(" "),s("v-flex",{staticClass:"mt-3",attrs:{xs12:""}},[s("div",{staticClass:"title"},[t._v("\n                          Artist(s)\n                        ")]),t._v(" "),s("div",{staticClass:"subheading mt-2 ml-3"},[t._v("\n                          "+t._s(t.seriesInfo.artist)+"\n                        ")])]),t._v(" "),s("v-flex",{staticClass:"mt-3",attrs:{xs12:""}},[s("div",{staticClass:"title"},[t._v("\n                          Language\n                        ")]),t._v(" "),s("div",{staticClass:"subheading mt-2"},[t._v("\n                          "+t._s(t.seriesInfo.language)+"\n                        ")])]),t._v(" "),s("v-flex",{staticClass:"mt-3",attrs:{xs12:""}},[s("div",{staticClass:"title"},[t._v("\n                          Year\n                        ")]),t._v(" "),s("div",{staticClass:"subheading mt-2"},[t._v("\n                          "+t._s(t.seriesInfo.year)+"\n                        ")])]),t._v(" "),s("v-flex",{staticClass:"mt-3",attrs:{xs12:""}},[s("div",{staticClass:"title"},[t._v("\n                          Associated Names\n                        ")]),t._v(" "),s("div",{staticClass:"subheading mt-2"},[t._v("\n                          "+t._s(t.seriesInfo.associatedNames)+"\n                        ")])]),t._v(" "),s("v-flex",{staticClass:"mt-3",attrs:{xs12:""}},[s("div",{staticClass:"title"},[t._v("\n                          Rating\n                        ")]),t._v(" "),s("div",{staticClass:"subheading mt-2"},[t._v("\n                          "+t._s(t.seriesInfo.year)+"\n                        ")])])],1)],1)],1)],1)],1)],1),t._v(" "),s("v-flex",[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"mb-3 pl-3 pr-3",attrs:{xs12:""}},[s("v-btn",{attrs:{flat:"",block:"",outline:"",to:t.seriesId+"/addrelease"}},[s("v-icon",{attrs:{left:"",medium:""}},[t._v("\n                    add\n                  ")]),t._v("\n                  Add Chapter\n                ")],1)],1),t._v(" "),t._l(5,function(e){return s("v-flex",{key:e,class:{"grey lighten-4":e%2==1,"mr-2 ml-2":!0},attrs:{xs12:""}},[s("router-link",{attrs:{to:"/reader/tmp",replace:""}},[s("div",[t._v("Chapter "+t._s(e)+" Đôi khi đến cả một hiệp sĩ gan dạ cũng có lúc dễ thương vô cùng")])])],1)})],2)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]}},54:function(t,e,s){"use strict";s.d(e,"a",function(){return a}),s.d(e,"b",function(){return n});var a="RECEIVE_NOVELS",n="ADD_SERIES"}},[219]);
//# sourceMappingURL=app.896a5f03af3a4386ddf6.js.map