(function(e){function t(t){for(var c,a,u=t[0],l=t[1],i=t[2],b=0,d=[];b<u.length;b++)a=u[b],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(c in l)Object.prototype.hasOwnProperty.call(l,c)&&(e[c]=l[c]);s&&s(t);while(d.length)d.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,u=1;u<n.length;u++){var l=n[u];0!==r[l]&&(c=!1)}c&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var c={},r={app:0},o=[];function a(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=c,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)a.d(n,c,function(t){return e[t]}.bind(null,c));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/vue-component-adv/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var s=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"00e8":function(e,t,n){},"10cc":function(e,t,n){"use strict";n("ffce")},"23bc":function(e,t,n){},2663:function(e,t,n){},"43d7":function(e,t,n){"use strict";n("ce68")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");n("b0c0"),n("a4d3"),n("e01a");function r(e,t,n,r,o,a){var u=Object(c["p"])("the-header"),l=Object(c["p"])("badge-list"),i=Object(c["p"])("user-info"),s=Object(c["p"])("course-goals");return Object(c["k"])(),Object(c["g"])("div",null,[Object(c["i"])(u),Object(c["h"])("button",{onClick:t[0]||(t[0]=function(e){return a.selectThisComp("active-goals")})},"Active Goals"),Object(c["h"])("button",{onClick:t[1]||(t[1]=function(e){return a.selectThisComp("manage-goals")})},"Manage Goals"),(Object(c["k"])(),Object(c["e"])(c["b"],null,[(Object(c["k"])(),Object(c["e"])(Object(c["q"])(o.selectedComponent)))],1024)),Object(c["i"])(l),Object(c["i"])(i,{"full-name":o.activeUser.name,"info-text":o.activeUser.description,role:o.activeUser.role},null,8,["full-name","info-text","role"]),Object(c["i"])(s,null,{default:Object(c["s"])((function(e){return[Object(c["h"])("h2",null,Object(c["r"])(e.item),1),Object(c["h"])("p",null,Object(c["r"])(e["anotherprop"]),1)]})),_:1})])}var o=function(e){return Object(c["m"])("data-v-4c406704"),e=e(),Object(c["l"])(),e},a=o((function(){return Object(c["h"])("h1",null,"More on Vue Components",-1)})),u=[a];function l(e,t){return Object(c["k"])(),Object(c["g"])("header",null,u)}n("8f00");var i=n("6b0d"),s=n.n(i);const b={},d=s()(b,[["render",l],["__scopeId","data-v-4c406704"]]);var f=d,O=function(e){return Object(c["m"])("data-v-0e338785"),e=e(),Object(c["l"])(),e},j=O((function(){return Object(c["h"])("h2",null,"Available Badges",-1)}));function p(e,t){var n=Object(c["p"])("base-badge"),r=Object(c["p"])("base-card");return Object(c["k"])(),Object(c["g"])("section",null,[Object(c["i"])(r,null,{header:Object(c["s"])((function(){return[j]})),default:Object(c["s"])((function(){return[Object(c["h"])("ul",null,[Object(c["h"])("li",null,[Object(c["i"])(n,{type:"admin",caption:"ADMIN"})]),Object(c["h"])("li",null,[Object(c["i"])(n,{type:"author",caption:"AUTHOR"})])])]})),_:1})])}n("43d7");const h={},v=s()(h,[["render",p],["__scopeId","data-v-0e338785"]]);var g=v;function m(e,t,n,r,o,a){var u=Object(c["p"])("base-badge"),l=Object(c["p"])("base-card");return Object(c["k"])(),Object(c["g"])("section",null,[Object(c["i"])(l,null,{header:Object(c["s"])((function(){return[Object(c["h"])("h3",null,Object(c["r"])(n.fullName),1),Object(c["i"])(u,{type:n.role,caption:n.role.toUpperCase()},null,8,["type","caption"])]})),default:Object(c["s"])((function(){return[Object(c["h"])("p",null,Object(c["r"])(n.infoText),1)]})),_:1})])}var y=function(e){return Object(c["m"])("data-v-30e50c96"),e=e(),Object(c["l"])(),e},k={key:0},_=y((function(){return Object(c["h"])("h2",null,"Default Content",-1)}));function C(e,t,n,r,o,a){return Object(c["k"])(),Object(c["g"])("div",null,[e.$slots.header?(Object(c["k"])(),Object(c["g"])("header",k,[Object(c["o"])(e.$slots,"header",{},(function(){return[_]}),!0)])):Object(c["f"])("",!0),Object(c["o"])(e.$slots,"default",{},void 0,!0)])}var I={mounted:function(){console.log(this.$slots),console.log(this.$slots.header)}};n("10cc");const w=s()(I,[["render",C],["__scopeId","data-v-30e50c96"]]);var x=w,G={components:{BaseCard:x},props:["fullName","infoText","role"]};const M=s()(G,[["render",m]]);var T=M;function A(e,t,n,r,o,a){return Object(c["k"])(),Object(c["g"])("ul",null,[(Object(c["k"])(!0),Object(c["g"])(c["a"],null,Object(c["n"])(o.goals,(function(t){return Object(c["k"])(),Object(c["g"])("li",{key:t},[Object(c["o"])(e.$slots,"default",{item:t,anotherprop:"..."})])})),128))])}var P={data:function(){return{goals:["Finish the course","Learn Vue"]}}};const $=s()(P,[["render",A]]);var U=$;function S(e,t){return Object(c["k"])(),Object(c["g"])("h2",null," Active Goals ")}const V={},E=s()(V,[["render",S]]);var B=E,N=Object(c["h"])("h2",null," Manage Goals ",-1),D={type:"text",ref:"goal"},H=Object(c["h"])("h2",null,"Input is invalid!",-1),J=Object(c["h"])("p",null,"Please enter atleast some characters...",-1);function L(e,t,n,r,o,a){var u=Object(c["p"])("error-alert");return Object(c["k"])(),Object(c["g"])(c["a"],null,[N,Object(c["h"])("div",null,[Object(c["h"])("input",D,null,512),Object(c["h"])("button",{onClick:t[0]||(t[0]=function(){return a.setGoal&&a.setGoal.apply(a,arguments)})},"set goal")]),(Object(c["k"])(),Object(c["e"])(c["c"],{to:"body"},[o.isValueInvalid?(Object(c["k"])(),Object(c["e"])(u,{key:0},{default:Object(c["s"])((function(){return[H,J,Object(c["h"])("button",{onClick:t[1]||(t[1]=function(){return a.confirmError&&a.confirmError.apply(a,arguments)})},"Okay")]})),_:1})):Object(c["f"])("",!0)]))],64)}n("498a");var R={open:""};function q(e,t){return Object(c["k"])(),Object(c["g"])("dialog",R,[Object(c["o"])(e.$slots,"default",{},void 0,!0)])}n("94ed");const F={},z=s()(F,[["render",q],["__scopeId","data-v-6650f35e"]]);var K=z,Q={components:{ErrorAlert:K},data:function(){return{isValueInvalid:!1}},methods:{setGoal:function(){var e=this.$refs.goal.value;""===e.trim()&&(this.isValueInvalid=!0)},confirmError:function(){this.isValueInvalid=!1}}};const W=s()(Q,[["render",L]]);var X=W,Y={components:{TheHeader:f,BadgeList:g,UserInfo:T,CourseGoals:U,ActiveGoals:B,ManageGoals:X},data:function(){return{activeUser:{name:"Anand Raja",description:"Site owner and admin",role:"admin"},selectedComponent:"active-goals"}},methods:{selectThisComp:function(e){this.selectedComponent=e}}};n("be15");const Z=s()(Y,[["render",r]]);var ee=Z;function te(e,t,n,r,o,a){return Object(c["k"])(),Object(c["g"])("span",{class:Object(c["j"])(["badge",a.classes])},Object(c["r"])(n.caption),3)}var ne={props:["type","caption"],computed:{classes:function(){return{"badge--admin":"admin"===this.type,"badge--author":"author"===this.type}}}};n("a2de");const ce=s()(ne,[["render",te],["__scopeId","data-v-7f932c9d"]]);var re=ce,oe=Object(c["d"])(ee);oe.component("base-badge",re),oe.component("base-card",x),oe.mount("#app")},"769a":function(e,t,n){},"8f00":function(e,t,n){"use strict";n("769a")},"94ed":function(e,t,n){"use strict";n("23bc")},a2de:function(e,t,n){"use strict";n("2663")},be15:function(e,t,n){"use strict";n("00e8")},ce68:function(e,t,n){},ffce:function(e,t,n){}});
//# sourceMappingURL=app.ead8956c.js.map