(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,n){e.exports=n(60)},34:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(6),c=n.n(r),i=(n(34),n(7)),s=n(8),l=n(10),u=n(9),h=n(11),p=function(e){return o.a.createElement("header",{className:"app__header"},o.a.createElement("h1",{className:"app__header--title"},"SPACER"),o.a.createElement("p",null,"Begin your journey through aour amazing galaxy, ans discover places you never even heard of."),o.a.createElement("form",{className:"app__search",onSubmit:e.searchInit,autoComplete:"off"},o.a.createElement("label",{htmlFor:"search"},"Type anything space-related to start."),o.a.createElement("input",{type:"text",id:"search",name:"searchItem",autoComplete:"off"})))},d=n(3),f=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"renderList",value:function(){console.log(this.props.items)}},{key:"render",value:function(){return o.a.createElement("div",null,this.renderList(),";")}}]),t}(a.Component),m=n(16),v=n.n(m),g=n(25),w=n(26),b=n.n(w),y=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={search:""},n.handleChange=function(e){n.setState({search:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),n.props.searchResult(n.state.search)},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"app"},o.a.createElement(p,{searchInit:this.searchInit}),o.a.createElement("footer",null,void 0!==this.props.items?o.a.createElement(f,{items:this.props.items}):null))}}]),t}(a.Component),E=Object(d.b)(function(e){return{items:e.items}},{searchResult:function(e){return function(){var t=Object(g.a)(v.a.mark(function t(n){var a;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("https://images-api.nasa.gov/search?q=".concat(e));case 2:a=t.sent,console.log(a),n({type:"SEARCH_RESULT",payload:a.data.collection.items});case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}})(y),j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var k=n(4),R=n(28),A=n(27),C=Object(k.c)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_RESULT":return console.log(t.payload),[].concat(Object(R.a)(e),[t.payload]);default:return e}},Object(k.a)(A.a));c.a.render(o.a.createElement(d.a,{store:C},o.a.createElement(E,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/SPA_with_REACT-REDUX/bild",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/SPA_with_REACT-REDUX/bild","/service-worker.js");j?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):O(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):O(t,e)})}}()}},[[29,1,2]]]);
//# sourceMappingURL=main.73c24f0f.chunk.js.map