(this.webpackJsonpconjugador=this.webpackJsonpconjugador||[]).push([[0],{84:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(27),c=n.n(i),o=(n(84),n(13)),s=n(56),l=n(143),j=n(140),b=n(142),d=n(148),u=n(145),h=n(150),x=n(64),m=n.n(x),O=n(147),f=n(149),p=n(65),v=n(146),g=n(2);function y(e){return Object(g.jsxs)(O.a,Object(s.a)(Object(s.a)({variant:"body2",color:"text.secondary",align:"center"},e),{},{children:["Copyright \xa9 ",Object(g.jsx)(d.a,{color:"inherit",href:"https://vk.com/damir",children:"Damir Sattarov"})," ",(new Date).getFullYear(),"."]}))}var I=Object(p.a)(),C=["Perfecto","Indefinido","Imperfecto"],P=["hablar","tomar","correr","vivir"],W=["Yo","Tu","El","Nosotros","Vosotros","Ellos"];function S(e,t,n){return"Indefinido"===e?function(e,t){var n=e.slice(0,-2);return e.endsWith("ar")?n+["\xe9","aste","\xf3","amos","asteis","aron"][t]:n+["\xed","iste","i\xf3","imos","isteis","ieron"][t]}(t,n):"Imperfecto"===e?function(e,t){var n=e.slice(0,-2);return e.endsWith("ar")?n+["aba","abas","aba","\xe1bamos","abais","aban"][t]:n+["\xeda","\xedas","\xeda","\xedamos","\xedais","\xedan"][t]}(t,n):"Perfecto"===e?function(e,t){return["he","has","ha","hemos","hab\xe9is","han"][t]+" "+function(e){var t=e.slice(0,-2);return e.endsWith("ar")?t+"ado":t+"ido"}(e)}(t,n):void 0}function k(e){return Math.floor(Math.random()*e)}function F(){return{tiempo:C[k(C.length)],verbo:P[k(P.length)],persona:k(W.length)}}function T(e){return e.charAt(0).toUpperCase()+e.slice(1)}function D(){var e=Object(a.useState)(F()),t=Object(o.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(""),c=Object(o.a)(i,2),s=c[0],d=c[1];return Object(g.jsx)(v.a,{theme:I,children:Object(g.jsxs)(f.a,{component:"main",maxWidth:"xs",children:[Object(g.jsx)(j.a,{}),Object(g.jsx)(h.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:Object(g.jsxs)(u.a,{container:!0,spacing:2,children:[Object(g.jsxs)(u.a,{container:!0,justifyContent:"center",item:!0,xs:12,children:[Object(g.jsx)(m.a,{fontSize:"large",color:"secondary"}),Object(g.jsx)(O.a,{component:"h1",variant:"h5",children:"Conjugador"})]}),Object(g.jsx)(u.a,{item:!0,xs:12,children:Object(g.jsx)(b.a,{id:"tiempo-text",fullWidth:!0,label:"Tiempo",value:n.tiempo,InputProps:{readOnly:!0}})}),Object(g.jsx)(u.a,{item:!0,xs:5,children:Object(g.jsx)(b.a,{id:"persona-text",label:"Persona",value:W[n.persona],InputProps:{readOnly:!0}})}),Object(g.jsx)(u.a,{item:!0,xs:7,children:Object(g.jsx)(b.a,{id:"verbo-text",label:"Verbo",value:T(n.verbo),InputProps:{readOnly:!0}})}),Object(g.jsx)(u.a,{container:!0,item:!0,xs:12,children:Object(g.jsxs)(O.a,{variant:"h6",children:["Hint: ",T(s)]})}),Object(g.jsx)(u.a,{item:!0,xs:5,children:Object(g.jsx)(l.a,{type:"submit",fullWidth:!0,variant:"contained",onClick:function(){return d(function(e){return S(e.tiempo,e.verbo,e.persona)}(n))},children:"Hint"})}),Object(g.jsx)(u.a,{item:!0,xs:7,children:Object(g.jsx)(l.a,{type:"submit",fullWidth:!0,variant:"contained",onClick:function(){d(""),r(F())},children:"Next"})})]})}),Object(g.jsx)(y,{sx:{mt:4,mb:4}})]})})}var w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,151)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))};c.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(D,{})}),document.getElementById("root")),w()}},[[94,1,2]]]);
//# sourceMappingURL=main.c4d80e42.chunk.js.map