(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{11:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var n=c(4),s=c.n(n),a=c(5),o=c(1),l=(c(10),c(11),c(2)),i=c.n(l),r=c(0),d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],u=function(){var e=Object(o.useState)("Jam"),t=Object(a.a)(e,2),c=t[0],n=t[1],s=c.length>0?"".concat(c," is selected"):"No goods selected";return Object(r.jsxs)("main",{className:"section container",children:[Object(r.jsxs)("h1",{className:i()("title",{"title is-flex is-align-items-center":c.length>0}),children:[s,c.length>0&&Object(r.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:function(){n("")}})]}),Object(r.jsx)("table",{className:"table",children:Object(r.jsx)("tbody",{children:d.map((function(e){return Object(r.jsxs)("tr",{"data-cy":"Good",className:i()("",{"has-background-success-light":c===e}),children:[Object(r.jsx)("td",{children:Object(r.jsx)("button",{"data-cy":"".concat(c===e?"RemoveButton":"AddButton"),type:"button",className:i()("button",{" is-info":c===e}),onClick:c===e?function(){return n("")}:function(){return n(e)},children:c===e?"-":"+"})}),Object(r.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:e})]})}))})})]})};s.a.render(Object(r.jsx)(u,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.07a98e20.chunk.js.map