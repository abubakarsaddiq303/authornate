(this["webpackJsonpmonsterlessons-academy"]=this["webpackJsonpmonsterlessons-academy"]||[]).push([[0],{11:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),o=c(4),s=c.n(o),a=(c(9),c(2)),i=c(0),l={dark:{backgroundColor:"black",color:"white"},light:{backgroundColor:"white",color:"black"}},b=Object(r.createContext)(),j=function(e){var t=e.children,c=Object(r.useState)(!1),n=Object(a.a)(c,2),o=n[0],s=n[1],j=o?l.dark:l.light;return Object(r.useEffect)((function(){var e="true"===localStorage.getItem("isDark");s(e)}),[]),Object(i.jsx)(b.Provider,{value:[{theme:j,isDark:o},function(){localStorage.setItem("isDark",JSON.stringify(!o)),s(!o)}],children:t})},u=(c(11),function(){var e=Object(r.useContext)(b),t=Object(a.a)(e,2),c=t[0],n=c.theme,o=c.isDark,s=t[1];return Object(i.jsxs)("div",{className:"app",style:{backgroundColor:n.backgroundColor,color:n.color},children:[Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:"AUTHORATE"})}),Object(i.jsx)("button",{className:o?"btnDark":"btnLight",type:"button",onClick:s,children:o?Object(i.jsx)("i",{class:"fas fa-sun"}):Object(i.jsx)("i",{class:"fas fa-moon"})}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{})]})});s.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(j,{children:Object(i.jsx)(u,{})})}),document.getElementById("root"))},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.33d0e1ca.chunk.js.map