(function(e){function t(t){for(var r,i,o=t[0],c=t[1],u=t[2],d=0,m=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&m.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(m.length)m.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},s=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1d95":function(e,t,n){e.exports=n.p+"img/bookmark-with-shadow.125c3e5e.png"},"2b56":function(e,t,n){"use strict";var r=n("84dc"),a=n.n(r);a.a},"349d":function(e,t,n){"use strict";var r=n("e312"),a=n.n(r);a.a},"3ad4":function(e,t,n){},"535d":function(e,t,n){e.exports={smallScreen:"900px"}},"56a3":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:e.transitionName,mode:"out-in"}},[n("router-view")],1)],1)},s=[],i=(n("7f7f"),{name:"app",data:function(){return{transitionName:null}},watch:{$route:function(e,t){"login"===t.name||"register"===t.name?this.transitionName="from-login":"login"===e.name?this.transitionName="to-login":this.transitionName=null}}}),o=i,c=(n("5c0b"),n("2877")),u=Object(c["a"])(o,a,s,!1,null,null,null),l=u.exports,d=n("8c4f"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-container"},[e._m(0),n("div",{staticClass:"disclaimer-container"},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[e.isError||e.isSuccess?e.isError?n("div",{key:"error",staticClass:"is-error"},[e._v("Kirjautuminen epäonnistui.")]):e.isSuccess?n("div",{key:"success",staticClass:"is-success"},[e._v("Tervetuloa.")]):e._e():n("div",{key:"neutral"},[e._v("Syötä nimesi ja koodikuviosi.")])])],1),n("div",{staticClass:"username-container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],ref:"usernameInput",attrs:{placeholder:"Nimi",type:"text",spellcheck:"false"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),n("div",{staticClass:"patternlock-container"},[n("PatternLock",{attrs:{"is-error":e.isError,"is-success":e.isSuccess},on:{"on-draw":function(t){return e.checkPattern(t)},"on-reset":e.resetState}})],1),n("div",{staticClass:"new-user-button-container",on:{click:e.register}},[n("div",[e._v("Olen uusi jäsen")])])])},p=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"logo-container"},[r("img",{attrs:{src:n("c6c8")}})])}],f=(n("96cf"),n("3b8d")),h=n("bc3a"),v=n.n(h),b=function(){var e=v.a.create();return e},g=b(),w=function(){return"localhost:8080"===window.location.host?"http://localhost:3001/":"/"},k=function(e){throw new Error(e.response.status)},S=function(e,t){return g.get("".concat(w(),"api/").concat(e),t).then((function(e){var t=e.data;return t})).catch((function(e){return k(e)}))},R=function(e,t){return g.post("".concat(w(),"api/").concat(e),t).then((function(e){var t=e.data;return t})).catch((function(e){return k(e)}))},y=function(e){var t=e.username,n=e.password,r=e.motto,a=e.favoriteAuthor;return R("users",{username:t,password:n,motto:r,favoriteAuthor:a})},O=function(){return S("users")},E=function(e){var t=e.username,n=e.password;return R("login",{username:t.toLowerCase(),password:n})},_=function(){return S("login/verify-token/".concat(localStorage.getItem("token")))},A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.resetPattern,expression:"resetPattern"}],staticClass:"patt-holder",class:{"is-error":e.isError,"is-success":e.isSuccess},attrs:{id:"pattern-lock"}})},N=[],x=n("0d62"),P=n.n(x),j={bind:function(e,t){var n=t.modifiers.bubble,r=function(r){(n||!e.contains(r.target)&&e!==r.target)&&t.value(r)};e.clickOutside=r,document.addEventListener("click",r)},unbind:function(e){document.removeEventListener("click",e.clickOutside),e.clickOutside=null}},C={name:"PatternLock",props:{isError:Boolean,isSuccess:Boolean,callResetOnSuccess:{type:Boolean,default:!1}},directives:{ClickOutside:j},data:function(){return{patternLock:null}},mounted:function(){var e=this;this.patternLock=new P.a("#pattern-lock",{onDraw:function(t){e.$emit("on-draw",t),setTimeout(e.resetPattern,1e3)}})},methods:{resetPattern:function(){this.isSuccess&&!this.callResetOnSuccess||(this.patternLock.reset(),this.$emit("on-reset"))}}},T=C,$=(n("8334"),Object(c["a"])(T,A,N,!1,null,"519abd0f",null)),M=$.exports,I={name:"Login",components:{PatternLock:M},data:function(){return{isError:!1,isSuccess:!1,username:""}},mounted:function(){this.$refs.usernameInput.focus()},methods:{checkPattern:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(t){var n,r,a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E({username:this.username,password:t});case 3:n=e.sent,r=n.token,this.isSuccess=!0,localStorage.setItem("token",r),this.$nextTick((function(){a.$router.push({name:"mainpage"})})),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),this.isError=!0;case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));function t(t){return e.apply(this,arguments)}return t}(),resetState:function(){this.isError=!1},register:function(){this.$router.push({name:"register"})}}},F=I,D=(n("349d"),Object(c["a"])(F,m,p,!1,null,"5e31f1ec",null)),U=D.exports,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"new-user-container"},[n("div",{staticClass:"disclaimer-container"},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("div",{class:{"is-error":e.showDisclaimerAsError}},[e._v(e._s(e.disclaimerText))])])],1),n("div",{staticClass:"username-container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],ref:"usernameInput",attrs:{placeholder:"Nimi",type:"text",spellcheck:"false"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),n("div",{staticClass:"patternlock-container"},[n("PatternLock",{attrs:{"is-error":e.isError,"is-success":e.isSuccess,"call-reset-on-success":!0},on:{"on-draw":function(t){return e.proceedStage(t)},"on-reset":e.reset}})],1)])},B=[],K={START:1,USERNAME_OK:2,USERNAME_ERROR:3,PASSWORD_OK:4,PASSWORD_AGAIN_ERROR:5,CREATING:6,USERNAME_EXISTS:7,CREATION_ERROR:8},V={name:"Register",components:{PatternLock:M},data:function(){return{isError:!1,isSuccess:!1,stage:K.START,username:"",password:"",passwordAgain:""}},mounted:function(){this.$refs.usernameInput.focus()},computed:{disclaimerText:function(){switch(this.stage){case K.START:return"Syötä oikea etunimesi ja haluamasi koodikuvio.";case K.USERNAME_OK:return"Syötä haluamasi koodi.";case K.USERNAME_ERROR:return"Syötä ensin nimesi, sen jälkeen haluamasi koodi.";case K.PASSWORD_OK:return"Vahvista koodi syöttämällä se uudelleen.";case K.PASSWORD_AGAIN_ERROR:return"Koodit eivät täsmänneet. Syötä haluamasi koodi.";case K.CREATING:return"Luodaan käyttäjää...";case K.USERNAME_EXISTS:return"Nimi on jo varattu. Valitse toinen nimi.";case K.CREATION_ERROR:return"Käyttäjän luonti epäonnistui. Ota yhteyttä Janiin.";default:return""}},isUsernameValid:function(){return this.username&&this.username.length>0},isPasswordValid:function(){return this.password===this.passwordAgain},showDisclaimerAsError:function(){return this.stage===K.USERNAME_ERROR||this.stage===K.PASSWORD_AGAIN_ERROR||this.stage===K.USERNAME_EXISTS||this.stage===K.CREATION_ERROR}},methods:{createUser:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y({username:this.username,password:this.password});case 3:this.$nextTick((function(){t.$router.push({name:"mainpage"})})),e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),this.stage=K.USERNAME_EXISTS;case 9:case"end":return e.stop()}}),e,this,[[0,6]])})));function t(){return e.apply(this,arguments)}return t}(),proceedStage:function(e){switch(this.isError=!1,this.isSuccess=!1,this.stage){case K.START:case K.USERNAME_OK:case K.USERNAME_ERROR:case K.PASSWORD_AGAIN_ERROR:case K.CREATION_ERROR:case K.USERNAME_EXISTS:this.isUsernameValid?(this.password=e,this.stage=K.PASSWORD_OK,this.setStatus(!0)):(this.password="",this.passwordAgain="",this.stage=K.USERNAME_ERROR,this.setStatus(!1));break;case K.PASSWORD_OK:if(!this.isUsernameValid){this.stage=K.USERNAME_ERROR,this.setStatus(!1);break}this.passwordAgain=e,this.setStatus(!0),this.isPasswordValid?(this.stage=K.CREATING,this.setStatus(!0),this.createUser()):(this.stage=K.PASSWORD_AGAIN_ERROR,this.password="",this.passwordAgain="",this.setStatus(!1));break;default:break}},setStatus:function(e){this.isSuccess=e,this.isError=!e},reset:function(){this.isError=!1,this.isSuccess=!1}}},W=V,G=(n("9337"),Object(c["a"])(W,L,B,!1,null,"1fb1b386",null)),H=G.exports,J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mainpage"},[n("navigation",{attrs:{routes:e.routes}}),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n(e.childComponent,{tag:"component"})],1)],1)},X=[],q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"navigation",class:{"no-events":!e.isMenuActive&&e.isSmallScreen}},[e.isSmallScreen?[r("swiper",{ref:"swiper",attrs:{options:e.swiperOptions}},[r("swiper-slide",{staticClass:"route-slide"},[r("div",{staticClass:"top-bar"}),r("div",{staticClass:"route-container"},e._l(e.filteredRoutes,(function(t){return r("div",{key:t.routeName,staticClass:"navigation-item",class:{active:e.isActiveRoute(t.routeName)},on:{click:function(n){return e.navigate(t.routeName)}}},[e._v("\n            "+e._s(t.label)+"\n          ")])})),0),r("img",{staticClass:"swiper-handle",attrs:{src:n("1d95")},on:{click:e.toggleMenu}})]),r("swiper-slide",{staticClass:"empty-slide no-swiping",class:{"background-drop":e.isMenuActive}},[r("div",{staticClass:"empty-slide-top-bar",on:{click:e.closeMenu}},[r("div",[e._v(e._s(e.activeRoute.label))])]),r("div",{staticClass:"empty-slide-middle",on:{click:e.closeMenu}}),r("div",{staticClass:"empty-slide-bottom-bar"})])],1)]:[r("img",{staticClass:"navigation-item",attrs:{src:n("c6c8")},on:{click:function(t){return e.navigate(e.filteredRoutes[0].routeName)}}}),e._l(e.filteredRoutes,(function(t){return r("div",{key:t.routeName,staticClass:"navigation-item",class:{active:e.isActiveRoute(t.routeName)},on:{click:function(n){return e.navigate(t.routeName)}}},[e._v("\n      "+e._s(t.label)+"\n    ")])}))]],2)},z=[],Q=(n("7514"),n("dfa4"),n("7212")),Y=n("535d"),Z={name:"Navigation",components:{swiper:Q["swiper"],swiperSlide:Q["swiperSlide"]},props:{routes:Array},data:function(){return{isMenuActive:!1,isSmallScreen:window.matchMedia("(max-width: ".concat(Y["smallScreen"],")")).matches,smallScreenMatcher:window.matchMedia("(max-width: ".concat(Y["smallScreen"],")")),swiper:null,swiperOptions:{init:!1,direction:"vertical",initialSlide:1,autoHeight:!0,grabCursor:!0,longSwipesRatio:.2,preventInteractionOnTransition:!0,noSwipingClass:"no-swiping",cssMode:!0}}},mounted:function(){this.smallScreenMatcher.addListener(this.updateIsSmallScreen),this.$refs.swiper&&this.initSwiper()},beforeDestroy:function(){this.smallScreenMatcher.removeListener(this.updateIsSmallScreen)},computed:{activeRoute:function(){var e=this;return this.routes.find((function(t){return t.routeName===e.$route.name}))},filteredRoutes:function(){return this.routes.filter((function(e){return!e.hidden}))}},methods:{initSwiper:function(){var e=this;this.swiper=this.$refs.swiper.swiper,this.swiper.init(),this.swiper.on("slideChange",(function(){e.isMenuActive=0===e.$refs.swiper.swiper.activeIndex,e.$forceUpdate()}))},navigate:function(e){this.isActiveRoute(e)||(this.$router.push({name:e}),this.swiper&&this.closeMenu())},isActiveRoute:function(e){return this.$route.name===e},updateIsSmallScreen:function(e){var t=this;this.isSmallScreen=e.matches,this.$forceUpdate(),this.isSmallScreen&&!this.swiper?this.$nextTick((function(){t.initSwiper()})):this.isSmallScreen||(this.swiper=null)},closeMenu:function(){this.swiper.slideTo(1)},toggleMenu:function(){0===this.swiper.activeIndex?this.swiper.slideTo(1):this.swiper.slideTo(0)}}},ee=Z,te=(n("f3c9"),Object(c["a"])(ee,q,z,!1,null,"2c7207ab",null)),ne=te.exports,re={name:"MainPage",components:{Navigation:ne},props:["childComponent"],data:function(){return{routes:[{label:"Nyt",routeName:"news"},{label:"Kirjat",routeName:"books"},{label:"Jäsenluettelo",routeName:"users"},{label:"Profiili",routeName:"profile"},{label:"Uusi kirja",routeName:"new-book",hidden:!0}]}},methods:{}},ae=re,se=(n("88df"),Object(c["a"])(ae,J,X,!1,null,"0ff27a41",null)),ie=se.exports,oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("page-body",[e._v("\n  News\n")])},ce=[],ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-body"},[e._t("default")],2)},le=[],de={name:"PageBody"},me=de,pe=(n("9263"),Object(c["a"])(me,ue,le,!1,null,"7ceaac98",null)),fe=pe.exports,he={name:"NewsPage",components:{PageBody:fe},data:function(){return{}},methods:{}},ve=he,be=(n("2b56"),Object(c["a"])(ve,oe,ce,!1,null,"30c9f91c",null)),ge=be.exports,we=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("page-body",[n("button",{on:{click:function(t){return e.navigateToNewBook()}}},[e._v("Lisää kirja")]),n("basic-table",{attrs:{data:e.books,headers:e.bookHeaders}})],1)},ke=[],Se=(n("8e6e"),n("ac6a"),n("456d"),n("2e37"),n("fca0"),n("c5f6"),n("bd86")),Re=function(e){var t=e.title,n=e.author,r=e.year,a=e.votes;return R("books",{title:t,author:n,year:r,votes:a})},ye=function(){return S("books")},Oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"basic-table-container"},[n("vuetable",{ref:"vuetable",attrs:{"api-mode":!1,fields:e.headers,data:{data:e.data},"data-manager":e.dataManager}})],1)},Ee=[],_e=n("af52"),Ae=n.n(_e),Ne={name:"BasicTable",components:{Vuetable:Ae.a},props:{data:{type:Array,default:function(){return[]}},headers:{type:Array,default:function(){return[]}}},methods:{dataManager:function(e){if(console.log(e),!(this.data.length<1)){var t=this.data;return{data:t}}}}},xe=Ne,Pe=(n("9460"),Object(c["a"])(xe,Oe,Ee,!1,null,"2ba809b2",null)),je=Pe.exports;function Ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ce(n,!0).forEach((function(t){Object(Se["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ce(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var $e={name:"BooksPage",components:{PageBody:fe,BasicTable:je},data:function(){return{books:[],bookHeaders:[{name:"author",sortField:"author",title:"Kirjailija"},{name:"title",sortField:"title",title:"Kirja"},{name:"year",sortField:"year",title:"Vuosi"},{name:"average",sortField:"average",title:"Keskiarvo"}]}},created:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ye();case 2:this.books=e.sent,this.books=this.books.map((function(e){return Te({},e,{average:t.getBookAverage(e)})}));case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{isNumber:function(e){return"number"===typeof e&&e===Number(e)&&Number.isFinite(e)},roundToThreeDecimals:function(e){return Math.round(1e3*e+Number.EPSILON)/1e3},navigateToNewBook:function(){this.$router.push({name:"new-book"})},getBookAverage:function(e){var t=this;return e.votes&&Array.isArray(e.votes)&&e.votes.length>0&&e.votes.every((function(e){return t.isNumber(e.vote)}))?this.roundToThreeDecimals(e.votes.reduce((function(e,t){return e+t.vote}),0)/e.votes.length):0}}},Me=$e,Ie=(n("725b"),Object(c["a"])(Me,we,ke,!1,null,"bea3617e",null)),Fe=Ie.exports,De=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("page-body",{staticClass:"align-center"},[n("form",{staticClass:"new-book-form"},[n("label",{attrs:{for:"new-book-author"}},[e._v("Kirjailija *")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.bookForm.author,expression:"bookForm.author"}],attrs:{id:"new-book-author",type:"text",required:""},domProps:{value:e.bookForm.author},on:{input:function(t){t.target.composing||e.$set(e.bookForm,"author",t.target.value)}}}),n("label",{attrs:{for:"new-book-title"}},[e._v("Kirja *")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.bookForm.title,expression:"bookForm.title"}],attrs:{id:"new-book-title",type:"text",required:""},domProps:{value:e.bookForm.title},on:{input:function(t){t.target.composing||e.$set(e.bookForm,"title",t.target.value)}}}),n("label",{attrs:{for:"new-book-year"}},[e._v("Julkaisuvuosi *")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.bookForm.year,expression:"bookForm.year"}],attrs:{id:"new-book-year",type:"number",required:""},domProps:{value:e.bookForm.year},on:{input:function(t){t.target.composing||e.$set(e.bookForm,"year",t.target.value)}}}),n("label",{attrs:{for:"new-book-reference-date"}},[e._v("Referaatiopäivä")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.bookForm.referenceDate,expression:"bookForm.referenceDate"}],attrs:{id:"new-book-reference-date",type:"date"},domProps:{value:e.bookForm.referenceDate},on:{input:function(t){t.target.composing||e.$set(e.bookForm,"referenceDate",t.target.value)}}}),n("button",{on:{click:function(t){return t.preventDefault(),e.add(t)}}},[e._v("Lisää")])])])},Ue=[],Le={name:"NewBookPage",components:{PageBody:fe},data:function(){return{bookForm:{author:"",title:"",year:null,referenceDate:null}}},computed:{isFormValid:function(){return this.bookForm.author.length>0&&this.bookForm.title.length>0&&this.bookForm.year}},methods:{add:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.isFormValid){e.next=4;break}return e.next=3,Re(this.bookForm);case 3:this.$router.push({name:"books"});case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},Be=Le,Ke=(n("b98e"),Object(c["a"])(Be,De,Ue,!1,null,"63f7488c",null)),Ve=Ke.exports,We=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("page-body",[n("basic-table",{attrs:{data:e.users,headers:e.userHeaders}})],1)},Ge=[],He={name:"UsersPage",components:{PageBody:fe,BasicTable:je},data:function(){return{users:[],userHeaders:[{name:"username",sortField:"username",title:"Nimi"},{name:"motto",title:"Motto"},{name:"favoriteAuthor",title:"Lempikirjailija"}]}},created:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:this.users=e.sent;case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},Je=He,Xe=(n("f608"),Object(c["a"])(Je,We,Ge,!1,null,"e0c42652",null)),qe=Xe.exports,ze=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("page-body",[e._v("\n  Profile\n")])},Qe=[],Ye={name:"ProfilePage",components:{PageBody:fe},data:function(){return{}},methods:{}},Ze=Ye,et=(n("d0d6"),Object(c["a"])(Ze,ze,Qe,!1,null,"ae433d8c",null)),tt=et.exports,nt=[{path:"/",redirect:{name:"login"}},{path:"/login",name:"login",component:U},{path:"/register",name:"register",component:H},{path:"/mainpage",name:"mainpage",redirect:{name:"news"}},{path:"/news",name:"news",component:ie,props:{childComponent:ge}},{path:"/books",name:"books",component:ie,props:{childComponent:Fe}},{path:"/new-book",name:"new-book",component:ie,props:{childComponent:Ve}},{path:"/users",name:"users",component:ie,props:{childComponent:qe}},{path:"/profile",name:"profile",component:ie,props:{childComponent:tt}},{path:"*",redirect:{name:"mainpage"}}],rt=nt,at=["login","register"],st=function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(t,n,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(-1!==at.indexOf(t.name)){e.next=12;break}return e.prev=1,e.next=4,_();case 4:r(),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](1),r({name:"login"});case 10:e.next=13;break;case 12:r();case 13:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n,r){return e.apply(this,arguments)}}();r["a"].use(d["a"]);var it=new d["a"]({mode:"history",routes:rt});it.beforeEach(st);var ot=it;n("31a8");r["a"].config.productionTip=!1,new r["a"]({router:ot,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("e332"),a=n.n(r);a.a},"725b":function(e,t,n){"use strict";var r=n("ee68"),a=n.n(r);a.a},8334:function(e,t,n){"use strict";var r=n("9dd9"),a=n.n(r);a.a},"84dc":function(e,t,n){},"88d0":function(e,t,n){},"88df":function(e,t,n){"use strict";var r=n("3ad4"),a=n.n(r);a.a},9263:function(e,t,n){"use strict";var r=n("56a3"),a=n.n(r);a.a},9337:function(e,t,n){"use strict";var r=n("88d0"),a=n.n(r);a.a},9460:function(e,t,n){"use strict";var r=n("987e"),a=n.n(r);a.a},"987e":function(e,t,n){},"9d9e":function(e,t,n){},"9dd9":function(e,t,n){},a8d3:function(e,t,n){},b205:function(e,t,n){},b98e:function(e,t,n){"use strict";var r=n("9d9e"),a=n.n(r);a.a},c6c8:function(e,t,n){e.exports=n.p+"img/mw-logo-apng-negative.9afcb6d3.png"},d0d6:function(e,t,n){"use strict";var r=n("a8d3"),a=n.n(r);a.a},e312:function(e,t,n){},e332:function(e,t,n){e.exports={smallScreen:"900px"}},ee68:function(e,t,n){},f3c9:function(e,t,n){"use strict";var r=n("b205"),a=n.n(r);a.a},f608:function(e,t,n){"use strict";var r=n("fe82"),a=n.n(r);a.a},fe82:function(e,t,n){}});
//# sourceMappingURL=app.8fa54569.js.map