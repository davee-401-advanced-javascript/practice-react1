(this["webpackJsonppractice-react1"]=this["webpackJsonppractice-react1"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},32:function(e,t,n){},36:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(1),r=n.n(a),c=n(12),i=n.n(c),h=n(2),u=n(3),j=n(5),o=n(4);n(20),n(21);var d=function(){return Object(s.jsx)("header",{children:Object(s.jsx)("h1",{children:"RESTy"})})},l=n(9),b=n.n(l),O=n(13),p=n(14),m=n.n(p),x=(n(32),function(e){Object(j.a)(n,e);var t=Object(o.a)(n);function n(e){var s;return Object(h.a)(this,n),(s=t.call(this,e)).handleSubmit=function(){var e=Object(O.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,m.a.get("".concat(s.state.url));case 3:n=e.sent,s.props.update(n.headers,n.body.count,n.body.results),s.props.changeSubmit();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s.handleUrlChange=function(e){var t=e.target.value;s.setState({url:t})},s.handleMethod=function(e){var t=e.target.value;s.setState({method:t})},s.state={url:"",method:"get"},s}return Object(u.a)(n,[{key:"render",value:function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("main",{children:Object(s.jsxs)("form",{onSubmit:this.handleSubmit,children:["URL",Object(s.jsx)("input",{name:"url",required:!0,onChange:this.handleUrlChange}),Object(s.jsx)("button",{type:"submit",children:"GO!"}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsxs)("label",{children:[Object(s.jsx)("input",{onChange:this.handleMethod,type:"radio",name:"method",value:"get"}),Object(s.jsx)("span",{children:"GET"})]}),Object(s.jsxs)("label",{children:[Object(s.jsx)("input",{onChange:this.handleMethod,type:"radio",name:"method",value:"post"}),Object(s.jsx)("span",{children:"POST"})]}),Object(s.jsxs)("label",{children:[Object(s.jsx)("input",{onChange:this.handleMethod,type:"radio",name:"method",value:"put"}),Object(s.jsx)("span",{children:"PUT"})]}),Object(s.jsxs)("label",{children:[Object(s.jsx)("input",{onChange:this.handleMethod,type:"radio",name:"method",value:"delete"}),Object(s.jsx)("span",{children:"DELETE"})]})]})})})}}]),n}(r.a.Component)),f=n(6),v=n.n(f),g=(n(36),n(37)),y=function(e){Object(j.a)(n,e);var t=Object(o.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"results",children:[Object(s.jsx)("h1",{children:"Headers"}),Object(s.jsx)(v.a,{className:"json-pretty",data:JSON.stringify(this.props.headers),theme:g}),Object(s.jsx)("h1",{children:"Results"}),Object(s.jsxs)("div",{children:["COUNT:",Object(s.jsx)(v.a,{className:"json-pretty",data:JSON.stringify(this.props.count),theme:g})]}),Object(s.jsxs)("div",{children:["RESULTS:",Object(s.jsx)(v.a,{className:"json-pretty",data:JSON.stringify(this.props.results),theme:g})]})]})})}}]),n}(r.a.Component);n(38);var S=function(){return Object(s.jsx)("footer",{children:Object(s.jsx)("div",{className:"footer",children:Object(s.jsx)("h3",{children:"\xa9 Kory & Davee, Code Fellows 2020"})})})},C=function(e){Object(j.a)(n,e);var t=Object(o.a)(n);function n(e){var s;return Object(h.a)(this,n),(s=t.call(this,e)).changeSubmit=function(){s.setState({submit:!0})},s.update=function(e,t,n){s.setState({headers:e,count:t,results:n})},s.state={submit:!1,headers:"",count:0,results:[]},s}return Object(u.a)(n,[{key:"render",value:function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(d,{}),Object(s.jsx)(x,{changeSubmit:this.changeSubmit,update:this.update}),this.state.submit?Object(s.jsx)(y,{submit:this.state.submit,headers:this.state.headers,count:this.state.count,results:this.state.results}):"",";",Object(s.jsx)(S,{})]})}}]),n}(r.a.Component);i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(C,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.e4924d99.chunk.js.map