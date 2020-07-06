(function(e){function t(t){for(var r,u,i=t[0],l=t[1],s=t[2],c=0,p=[];c<i.length;c++)u=i[c],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);f&&f(t);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var l=n[u];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function u(e){return i.p+"js/"+({album:"album",login:"login",reg:"reg"}[e]||e)+"."+{album:"3203d4f9",login:"05bb3919",reg:"cb3ecc6f"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var s=new Error;a=function(t){l.onerror=l.onload=null,clearTimeout(c);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[e]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:l})}),12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var f=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("0cdd");var r=n("2b0e"),o=n("bc3a"),a=n.n(o),u=n("a7fe"),i=n.n(u),l=n("71a5"),s=n.n(l),c=n("5f5b");n("ab8b"),n("2dd8");r["default"].use(c["a"]);var f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"primary"}},[n("b-container",[n("b-navbar-brand",{attrs:{to:"/"}},[e._v("相簿")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",{staticClass:"ml-auto"},[0===e.user.length?n("b-nav-item",{attrs:{to:"/login"}},[e._v("登入")]):n("b-nav-item",{attrs:{to:"/album"}},[e._v("我的相簿")]),0===e.user.length?n("b-nav-item",{attrs:{to:"/reg"}},[e._v("註冊")]):n("b-nav-item",{on:{click:e.logout}},[e._v("登出")])],1)],1)],1)],1),n("b-container",[n("router-view")],1)],1)},p=[],d={name:"app",computed:{user:function(){return this.$store.getters.user}},methods:{logout:function(){var e=this;this.axios.delete("https://mongodbwithalbum.herokuapp.com//logout").then((function(t){var n=t.data;n.success?(alert("登出成功"),e.$store.commit("logout"),"/"!==e.$route.path&&e.$router.push("/")):alert(n.message)})).catch((function(e){alert(e.response.data.message)}))},heartbeat:function(){var e=this;this.axios.get("https://mongodbwithalbum.herokuapp.com//heartbeat").then((function(t){var n=t.data;e.user.length>0&&(n||(alert("登入時效已過"),e.$store.commit("logout"),"/"!==e.$route.path&&e.$router.push("/")))})).catch((function(){alert("發生錯誤"),e.$store.commit("logout"),"/"!==e.$route.path&&e.$router.push("/")}))}},mounted:function(){var e=this;this.heartbeat(),setInterval((function(){e.heartbeat()}),6e4)}},b=d,g=n("2877"),m=Object(g["a"])(b,f,p,!1,null,null,null),h=m.exports,v=n("2f62"),w=n("0e44");r["default"].use(v["a"]);var y=new v["a"].Store({state:{user:""},mutations:{login:function(e,t){e.user=t},logout:function(e){e.user=""}},getters:{user:function(e){return e.user}},actions:{},modules:{},plugins:[Object(w["a"])()]}),_=(n("b0c0"),n("d3b7"),n("8c4f")),j=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},O=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"home"}},[n("h1",{staticClass:"text-center"},[e._v("歡迎使用線上相簿")])])}],k={},$=Object(g["a"])(k,j,O,!1,null,null,null),x=$.exports;r["default"].use(_["a"]);var E=[{path:"/",name:"Home",component:x,meta:{login:!1,title:"線上相簿"}},{path:"/reg",name:"Reg",component:function(){return n.e("reg").then(n.bind(null,"b8b8"))},meta:{login:!1,title:"線上相簿 | 註冊"}},{path:"/login",name:"Login",component:function(){return n.e("login").then(n.bind(null,"a55b"))},meta:{login:!1,title:"線上相簿 | 登入"}},{path:"/album",name:"Album",component:function(){return n.e("album").then(n.bind(null,"ee18"))},meta:{login:!0}}],P=new _["a"]({routes:E});P.beforeEach((function(e,t,n){e.meta.login&&!y.state.user?n("/login"):n()})),P.afterEach((function(e,t){document.title="Album"!==e.name?e.meta.title:y.state.user+" 的相簿"}));var S=P,A=n("9483");Object(A["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),a.a.defaults.withCredentials=!0,r["default"].use(i.a,a.a),r["default"].use(s.a),r["default"].config.productionTip=!1,new r["default"]({router:S,store:y,render:function(e){return e(h)}}).$mount("#app")}});
//# sourceMappingURL=app.277642ee.js.map