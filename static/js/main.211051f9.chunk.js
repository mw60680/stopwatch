(this.webpackJsonpstopwatch=this.webpackJsonpstopwatch||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),a=n.n(s),o=n(12),r=n.n(o),i=(n(19),n(7)),j=n(3),l=(n(20),n(13)),b=n(4),u=n(5),O=function(e){var t=e.heading,n=Object(s.useState)(!1),a=Object(j.a)(n,2),o=a[0],r=a[1],i=Object(s.useState)(),O=Object(j.a)(i,2),h=O[0],d=O[1],m=Object(s.useState)({hrs:0,min:0,sec:0,ms:0}),f=Object(j.a)(m,2),p=f[0],x=f[1],v=Object(s.useState)({start:"block",stop:"none",reset:"none",lap:"none"}),k=Object(j.a)(v,2),w=k[0],S=k[1],g=Object(s.useState)([]),N=Object(j.a)(g,2),C=N[0],M=N[1],z=function(){r(!0),!h&&d(Date.now()),S({start:"none",stop:"block",reset:"none",lap:"block"})},y=function(){r(!1),S({start:"block",stop:"none",reset:"block",lap:"none"})},D=function(){x({hrs:0,min:0,sec:0,ms:0}),d(),S({start:"block",stop:"none",reset:"none",lap:"none"}),M([])},E=function(){M((function(e){return[].concat(Object(l.a)(e),[p])}))},T=function(e,t){return Object(c.jsx)("div",{style:{display:t},children:e})},F=function(){setTimeout(x(function(){var e=Date.now()-h,t=e%1e3,n=Math.floor(e/1e3%60),c=Math.floor(e/1e3/60%60);return{hrs:Math.floor(e/1e3/60/60),min:c,sec:n,ms:t}}()),10)};Object(s.useEffect)((function(){o&&F()}),[p,o]);return Object(c.jsxs)(s.Fragment,{children:[Object(c.jsx)("div",{className:"heading",children:Object(c.jsx)("h1",{children:t})}),Object(c.jsxs)("div",{className:"timer",children:[Object(c.jsx)("span",{className:"timer-values",children:p.hrs}),Object(c.jsx)("span",{className:"timer-values",children:" : "}),Object(c.jsx)("span",{className:"timer-values",children:p.min}),Object(c.jsx)("span",{className:"timer-values",children:" : "}),Object(c.jsx)("span",{className:"timer-values",children:p.sec}),Object(c.jsx)("span",{className:"timer-values",children:" : "}),Object(c.jsx)("span",{className:"timer-values",children:p.ms})]}),Object(c.jsxs)("div",{className:"timer-controls",children:[T(Object(c.jsx)(b.a,{icon:u.a,onClick:z,size:"2x"}),w.start),T(Object(c.jsx)(b.a,{icon:u.c,onClick:y,size:"2x"}),w.stop),T(Object(c.jsx)(b.a,{icon:u.b,onClick:D,size:"2x"}),w.reset),T(Object(c.jsx)(b.a,{icon:u.d,onClick:E,size:"2x"}),w.lap)]}),C.length>0&&Object(c.jsx)("div",{className:"lap-times",children:C.map((function(e,t){return Object(c.jsxs)("div",{children:[t,". ",e.hrs,":",e.min,":",e.sec,":",e.ms]},t)}))})]})};O.defaultProps={heading:"Stopwatch Timer"};var h=O,d=function(e,t){return Object(c.jsx)("div",{style:{display:t},children:e})},m=function(e,t){return d(Object(c.jsx)(b.a,{icon:u.c,onClick:e,size:"2x"}),t)},f=function(e,t){return d(Object(c.jsx)(b.a,{icon:u.b,onClick:e,size:"2x"}),t)},p=function(e){var t,n,a=e.heading,o=Object(s.useState)(),r=Object(j.a)(o,2),l=r[0],O=r[1],h=Object(s.useState)({hrs:0,mins:0,secs:0}),p=Object(j.a)(h,2),x=p[0],v=p[1],k=Object(s.useState)(),w=Object(j.a)(k,2),S=w[0],g=w[1],N=Object(s.useState)(x),C=Object(j.a)(N,2),M=C[0],z=C[1],y=Object(s.useState)(!1),D=Object(j.a)(y,2),E=D[0],T=D[1],F=Object(s.useState)(!1),I=Object(j.a)(F,2),J=I[0],P=I[1],B=Object(s.useState)({start:"block",stop:"none",reset:"none"}),H=Object(j.a)(B,2),q=H[0],A=H[1],G=function(e){e.target.name;var t=Object(i.a)({},x);t[e.target.name]=parseInt(e.target.value),v(t)},K=function(e,t,n){return Object(c.jsx)("input",{type:"number",name:e,placeholder:t,value:n,disabled:J,onChange:G})},L=function(){T(!1),O(),A({start:"block",stop:"none",reset:"block"})},Q=function(){0===x.hrs&&0===x.mins&&0===x.secs&&L(),setTimeout((function(){v(function(){var e=Date.now()-l,t=Math.floor(e/1e3%60),n=Math.floor(e/1e3/60%60),c=Math.floor(e/1e3/60/60),s=S-(60*c*60+60*n+t);return{hrs:Math.floor(s/60/60),mins:Math.floor(s/60%60),secs:s%60}}())}),10)};return Object(s.useEffect)((function(){z(x)}),[x]),Object(s.useEffect)((function(){E&&Q()}),[E,M]),Object(c.jsxs)("div",{children:[a,Object(c.jsx)("div",{className:"timer",children:Object(c.jsxs)("form",{children:[K("hrs","Hours",x.hrs),K("mins","Minutes",x.mins),K("secs","Seconds",x.secs)]})}),Object(c.jsxs)("div",{className:"timer-controls",children:[(t=function(){x.hrs<1&&x.mins<1&&x.secs<1||(P(!0),g(60*x.hrs*60+60*x.mins+x.secs),T(!0),!l&&O(Date.now()),A({start:"none",stop:"block",reset:"block"}))},n=q.start,d(Object(c.jsx)(b.a,{icon:u.a,onClick:t,size:"2x"}),n)),m(L,q.stop),f((function(){P(!1),L(),A({start:"block",stop:"none",reset:"none"}),v({hrs:0,mins:0,secs:0})}),q.reset)]})]})};p.defaultProps={heading:"Countdown"};var x=p,v=function(e){return Object(c.jsxs)("header",{children:[Object(c.jsx)("div",{onClick:function(t){return e.onSelect("stopwatch")},name:"stopwatch",children:"Stopwatch"}),Object(c.jsx)("div",{onClick:function(t){return e.onSelect("countdown")},name:"countdown",children:"Countdown"})]})};var k=function(){var e={countdown:"none",stopwatch:"none"},t=Object(s.useState)(Object(i.a)(Object(i.a)({},e),{},{stopwatch:"block"})),n=Object(j.a)(t,2),a=n[0],o=n[1];return Object(c.jsxs)(s.Fragment,{children:[Object(c.jsx)(v,{onSelect:function(t){var n=e;console.debug(t),n[t]="block",o(n)}}),Object(c.jsxs)("div",{className:"timer-container",children:[d(Object(c.jsx)(x,{}),a.countdown),d(Object(c.jsx)(h,{}),a.stopwatch)]})]})};r.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(k,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.211051f9.chunk.js.map