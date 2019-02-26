(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,a,t){e.exports=t(67)},60:function(e,a,t){},67:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(28),o=t.n(c),l=t(5),s=t(6),i=t(8),m=t(7),u=t(9),p=t(10),d=t.n(p),h=t(14),b=t(68),f=t(15),v=t.n(f),E=t(31),y=t(4),g=r.a.createContext(),j=function(e,a){switch(a.type){case"DELETE_CONTACT":return Object(y.a)({},e,{contacts:e.contacts.filter(function(e){return e.id!==a.payload})});case"ADD_CONTACT":return Object(y.a)({},e,{contacts:[a.payload].concat(Object(E.a)(e.contacts))});case"UPDATE_CONTACT":return Object(y.a)({},e,{contacts:e.contacts.map(function(e){return e.id===a.payload.id?a.payload:e})});default:return e}},O=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={contacts:[],dispatch:function(e){t.setState(function(a){return j(a,e)})}},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(h.a)(d.a.mark(function e(){var a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://jsonplaceholder.typicode.com/users");case 2:a=e.sent,this.setState({contacts:a.data});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(g.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),C=g.Consumer,N=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},t.onShowClick=function(e){t.setState({showContactInfo:!t.state.showContactInfo})},t.onDeleteClick=function(){var e=Object(h.a)(d.a.mark(function e(a,t){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.delete("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a({type:"DELETE_CONTACT",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}},e,this,[[0,6]])}));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.props.contact,t=a.id,n=a.name,c=a.email,o=a.phone,l=this.state.showContactInfo?["fas","ml-2","fa-sort-up"]:["fas","ml-2","fa-sort-down"],s=this.state.showContactInfo?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email: ",c," "),r.a.createElement("li",{className:"list-group-item"},"Phone: ",o," ")):null;return r.a.createElement(C,null,function(a){var c=a.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",{className:"card-title"},n,r.a.createElement("i",{className:l.join(" "),style:{cursor:"pointer"},onClick:e.onShowClick}),r.a.createElement("i",{className:"fas fa-times text-danger",style:{cursor:"pointer",float:"right"},onClick:function(){return e.onDeleteClick(c,t)}}),r.a.createElement(b.a,{to:"/contact/edit/".concat(t)},r.a.createElement("i",{className:"fas fa-pencil-alt",style:{color:"black",marginRight:"1rem",float:"right",cursor:"pointer"}}))),s)})}}]),a}(n.Component),k=function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(C,null,function(e){var a=e.contacts;return r.a.createElement(n.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-danger"},"Contact")," List"),a.map(function(e){return r.a.createElement(N,{key:e.id,contact:e})}))})}}]),a}(n.Component),w=t(16),x=t(29),A=t.n(x),S=function(e){var a=e.type,t=e.label,n=e.id,c=e.value,o=e.placeholder,l=e.onChange,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:n},t),r.a.createElement("input",{type:a,className:A()("form-control form-control-lg",{"is-invalid":s}),placeholder:o,id:n,value:c,onChange:l}),s?r.a.createElement("div",{className:"invalid-feedback"},s):null)};S.defaultProps={type:"text"};var P=S,T=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},t.onSubmit=function(){var e=Object(h.a)(d.a.mark(function e(a,n){var r,c,o,l,s,i,m;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),r=t.state,c=r.name,o=r.email,l=r.phone,s={},""===c&&(s=Object(y.a)({},s,{name:"Name is Required"})),""===o?s=Object(y.a)({},s,{email:"Email is Required"}):/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(o)||(s=Object(y.a)({},s,{email:"Please input a valid email address"})),""===l?s=Object(y.a)({},s,{phone:"Phone is Required"}):/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/g.test(l)||(s=Object(y.a)({},s,{phone:"Please input a valid phone number"})),!(Object.keys(s).length>0)){e.next=9;break}return t.setState({errors:s}),e.abrupt("return");case 9:return i={name:c,email:o,phone:l},e.next=12,v.a.post("https://jsonplaceholder.typicode.com/users",i);case 12:m=e.sent,n({type:"ADD_CONTACT",payload:m.data}),t.setState({name:"",email:"",phone:"",errors:{}}),t.props.history.push("/");case 16:case"end":return e.stop()}},e,this)}));return function(a,t){return e.apply(this,arguments)}}(),t.onChange=function(e){t.setState(Object(w.a)({},e.target.id,e.target.value))},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,o=a.errors;return r.a.createElement(C,null,function(a){var l=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h3",null,"Add Contact")),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:function(a){return e.onSubmit(a,l)}},r.a.createElement(P,{id:"name",label:"Name",placeholder:"Enter Name...",value:t,onChange:e.onChange,error:o.name}),r.a.createElement(P,{id:"email",label:"Email",placeholder:"Enter Email...",type:"email",value:n,onChange:e.onChange,error:o.email}),r.a.createElement(P,{id:"phone",label:"Phone",placeholder:"Enter Phone...",value:c,onChange:e.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-danger btn-block"}))))})}}]),a}(n.Component),D=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},t.onSubmit=function(){var e=Object(h.a)(d.a.mark(function e(a,n){var r,c,o,l,s,i,m;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),r=t.state,c=r.name,o=r.email,l=r.phone,s={},""===c&&(s=Object(y.a)({},s,{name:"Name is Required"})),""===o?s=Object(y.a)({},s,{email:"Email is Required"}):/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(o)||(s=Object(y.a)({},s,{email:"Please input a valid email address"})),""===l?s=Object(y.a)({},s,{phone:"Phone is Required"}):/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/g.test(l)||(s=Object(y.a)({},s,{phone:"Please input a valid phone number"})),!(Object.keys(s).length>0)){e.next=9;break}return t.setState({errors:s}),e.abrupt("return");case 9:return i=t.props.match.params.id,e.next=12,v.a.put("https://jsonplaceholder.typicode.com/users/".concat(i),{name:c,email:o,phone:l});case 12:m=e.sent,n({type:"UPDATE_CONTACT",payload:Object(y.a)({},m.data,{errors:s})}),t.setState({name:"",email:"",phone:"",errors:{}}),t.props.history.push("/");case 16:case"end":return e.stop()}},e,this)}));return function(a,t){return e.apply(this,arguments)}}(),t.onChange=function(e){t.setState(Object(w.a)({},e.target.id,e.target.value))},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(h.a)(d.a.mark(function e(){var a,t,n,r,c,o;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.match.params.id,e.next=3,v.a.get("http://jsonplaceholder.typicode.com/users/".concat(a));case 3:t=e.sent,n=t.data,r=n.name,c=n.email,o=n.phone,this.setState({name:r,email:c,phone:o});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,o=a.errors;return r.a.createElement(C,null,function(a){var l=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h3",null,"Edit Contact")),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:function(a){return e.onSubmit(a,l)}},r.a.createElement(P,{id:"name",label:"Name",placeholder:"Enter Name...",value:t,onChange:e.onChange,error:o.name}),r.a.createElement(P,{id:"email",label:"Email",placeholder:"Enter Email...",type:"email",value:n,onChange:e.onChange,error:o.email}),r.a.createElement(P,{id:"phone",label:"Phone",placeholder:"Enter Phone...",value:c,onChange:e.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Edit Contact",className:"btn btn-danger btn-block"}))))})}}]),a}(n.Component),q=function(e){var a=e.branding;return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-sm bg-danger navbar-dark mb-3"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},a),r.a.createElement("button",{className:"navbar-toggler","data-toggle":"collapse","data-target":"#navbarCollapse"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"navbar-collapse collapse",id:"navbarCollapse"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.a,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home mr-1"}),"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.a,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus mr-1"}),"Add")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.a,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question mr-1"}),"About")))))))};q.defaultProps={branding:"My App"};var R=q;function I(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About Contact Manger"),r.a.createElement("p",{className:"lead"},"Simple app to manage contacts"),r.a.createElement("p",{className:"text-secondary"},"Version 1.0.0"))}function M(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},r.a.createElement("span",{className:"text-danger"},"404")," Page Not Found"),r.a.createElement("p",{className:"lead"},"This Page does not Exist"))}var _=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:""},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users/1").then(function(e){return e.json()}).then(function(a){return e.setState({name:a.name,email:a.email})})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Test Component"))}}]),a}(n.Component),$=t(69),z=t(70),Z=t(71),F=(t(60),function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(O,null,r.a.createElement($.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(R,{branding:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(z.a,null,r.a.createElement(Z.a,{exact:!0,path:"/",component:k}),r.a.createElement(Z.a,{exact:!0,path:"/contact/add",component:T}),r.a.createElement(Z.a,{exact:!0,path:"/contact/edit/:id",component:D}),r.a.createElement(Z.a,{exact:!0,path:"/about",component:I}),r.a.createElement(Z.a,{exact:!0,path:"/test",component:_}),r.a.createElement(Z.a,{component:M}))))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(64),t(65);o.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.b54c8256.chunk.js.map