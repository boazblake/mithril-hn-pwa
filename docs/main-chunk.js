(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(t,e,n){"use strict";(function(r){n.d(e,"a",function(){return t});var t={limits:[30,40,50,60,70,80,90,100],data:{},state:{url:"",route:"",scrollPos:1,limit:30,profile:""},reqs:{urls:["/posts","/comments","/albums","/photos","/todos","/users"].reduce(function(t,e){var n;return t[e]=(n=e,function(t,e){return"https://jsonplaceholder.typicode.com".concat(n,"?_start=").concat(t,"&_limit=").concat(e)}),t},{}),http:function(n){return function(e){return function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;return r.request({url:n,method:e,data:t})}}}},showModes:!1,showLimits:!1,showTabs:function(t){t.tabsShowing=!t.tabsShowing},tabsShowing:!1}}).call(this,n(0))},,function(t,e,n){"use strict";(function(n){var t={view:function(t){var e=t.attrs.children;return n("section.content",{id:"content"},e)}};e.a=t}).call(this,n(0))},function(t,e,n){"use strict";(function(n){var t={view:function(t){var e=t.children;return n(".navigationModal",e)}};e.a=t}).call(this,n(0))},,,,function(t,e){},function(t,e){},function(t,e){},function(t,e,n){"use strict";n.r(e);var r=n(0),l=n.n(r),o=n(1),i=function(t){var e=t.attrs.model,n="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z",r="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z",o=function(t){return l.a.render(t,l()("path",{xmlns:"http://www.w3.org/2000/svg",d:e.tabsShowing?n:r}))};return{oncreate:function(t){var e=t.dom;return o(e)},onupdate:function(t){var e=t.dom;return o(e)},view:function(t){var e=t.attrs.model;return l()("svg.btn.hamburger",{style:{fill:e.tabsShowing?"white":"inherit"},onclick:function(){return e.showTabs(e)}})}}};function a(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var s=function(t){var e=t.dom;e.style.opacity=0,e.classList.toggle("slideRight"),e.style.opacity=1},c=function(n){return function(t){var e=t.dom;e.style.opacity=0,setTimeout(function(){e.classList.toggle("slideDown"),e.style.opacity=1},200*(n+1))}},u=function(n){return function(t){var e=t.dom;e.style.opacity=0,setTimeout(function(){e.classList.toggle(n),e.style.opacity=1},200)}},d={onbeforeremove:function(t){var e=t.dom;return new Promise(function(){a(e.children).reverse().map(function(t,e){return setTimeout(function(){t.style.display="none"},100*e)})})},view:function(t){var n=t.attrs.model;return l()(".limits",n.limits.map(function(t,e){return l()("button.btn.limit",{oncreate:c(e),onclick:function(){n.state.limit=t,n.showLimits=!1},key:e},t)}))}},m={view:function(t){var e=t.attrs.model;return l()(".changeLimits",[l()("button.changeLimitBtn",{onclick:function(){return e.showLimits=!e.showLimits}},"Change Limit"),e.showLimits&&l()(d,{model:e})])}},f={oncreate:u("slideDown"),view:function(t){var e=t.attrs.model;return l()("header.header",{id:"header"},[l()(i,{model:e}),l()(m,{model:e})])}},h={oncreate:u("slideUp"),view:function(){return l()("footer.footer",{oncreate:c,id:"footer"},"Footer")}},p=n(3),v=function(t){var n=t.attrs.key;return{oncreate:s,view:function(t){var e=t.attrs.tab;return l()("a.tab",{key:n,id:"".concat(e),href:"".concat(e),oncreate:l.a.route.link},e.split("/")[1])}}},w=function(t){var e=t.attrs.model,r=Object.keys(e.reqs.urls);return{oncreate:s,view:function(t){var n=t.attrs.model;return l()("aside.sidebar slide-left",{id:"sidebar"},r.map(function(t,e){return l()(v,{key:e,active:n.state.route==t,tab:t})}))}}},y=n(4),g=function(t){var n=t.attrs.model;return{view:function(t){var e=t.children;return l()("section.layout",{id:"layout"},e?[l()(f,{model:n}),"phone"==n.state.profile?n.tabsShowing?l()(y.a,l()(w,{model:n})):null:l()(w,{model:n}),l()(p.a,{model:n,children:e}),l()(h,{model:n})]:[])}}},b=function(i){return function(t){i.state.route=t,i.data[t]?i.data[t]:i.data[t]={data:[],limit:1};var e,n,r,o=i.data[t].data.length;n=(r=i).reqs.urls[t](o,i.state.limit),e=t,l.a.request({url:n,method:"GET",extract:function(t){return r.data[e].limit=parseInt(t.getResponseHeader("x-total-count")),JSON.parse(t.responseText)}}).then(function(t){return r.data[e].data=r.data[e].data.concat(t),r})}},k=l()(".holder",{style:{width:"100%",height:"100%"}},[l()(".preloader",[l()("div"),l()("div"),l()("div"),l()("div"),l()("div"),l()("div"),l()("div")])]),L={view:function(t){var e=t.attrs,n=e.key,r=e.item,o=r.title,i=r.body;return l()(".grid-item.row.post",{style:{flexFlow:"row wrap",width:"60vw",display:"flex"},id:"post-".concat(n)},[l()("h1.left",o),l()("p.right",i)])}},x={view:function(t){var e=t.attrs,n=e.key,r=e.item,o=r.email,i=r.name,a=r.body;return l()(".grid-item.row.comment",{id:"comment-".concat(n),style:{flexFlow:"column wrap",width:"60vw",display:"flex"}},[l()("h1.left",i),l()("p.left",o),l()("p.left",a)])}},T={view:function(t){var e=t.attrs,n=e.key,r=e.item.title;return l()(".grid-item.album",{id:"album-".concat(n)},[l()("h1",r)])}},S={view:function(t){var e=t.attrs,n=e.key,r=e.item,o=r.title,i=r.thumbnailUrl;return l()(".grid-item.photo",{id:"photo-".concat(n),style:{flexFlow:"row wrap",width:"60vw",display:"flex"}},[l()("h1",{style:{padding:"4px",right:"auto",flex:3}},o),l()("img.left",{src:i})])}},q=function(t){var o=t.attrs.item.completed;return{view:function(t){var e=t.attrs,n=e.key,r=e.item.title;return l()(".grid-item.todo",{id:"todo-".concat(n),key:n},[l()("h1.left",r),l()("input[type=checkbox].right",{onclick:function(){o=!o},checked:o},"Done")])}}},A={view:function(){return l()("")},oncreate:function(t){var e=t.dom,n=t.attrs,r=n.key,o=n.item,i=o.email,a=o.name,s=o.phone,c=o.username,u=o.website;l.a.render(e,l()(".grid-item.user",{id:"user-".concat(r),key:r},[l()(".row",[l()("p.left",{for:"name"},"name"),l()("p.right.bold",{name:"name"},a)]),l()(".row",[l()("p.left",{for:"email"},"email"),l()("p.right.bold",{name:"email"},i)]),l()(".row",[l()("p.left",{for:"phone"},"phone"),l()("p.right.bold",{name:"phone"},s)]),l()(".row",[l()("p.left",{for:"username"},"username"),l()("p.right.bold",{name:"username"},c)]),l()(".row",[l()("p.left",{for:"website"},"website"),l()("p.right.bold",{name:"website"},u)])]))}},P={view:function(t){var o,r=t.attrs.model,e=r.state.route,i=function(t){switch(t){case"/posts":return L;case"/comments":return x;case"/albums":return T;case"/photos":return S;case"/todos":return q;case"/users":return A}}(e),n=r.data[e].data;return l()("section.component",{id:"component",route:r.state.route,onscroll:(o=r,function(t){var e=o.state.route,n=o.data[e].data.length,r=10*n*o.state.scrollPos;t.target.scrollTop-o.state.scrollPos>=r&&(o.state.scrollPos++,t.target.scrollTop,n<o.data[e].limit&&b(o)(e))})},0==n.length?l()(".loader",k):n.map(function(t,e){return l()(i,{oncreate:(n=e,function(t){var e=t.dom;return e.style.opacity=0,setTimeout(function(){e.classList.toggle("stretchRight"),e.style.opacity=1},100*n+20)}),key:e,item:t,model:r});var n}))}},j=function(o){return{onmatch:function(t,e){return n=e,(r=o).state.scrollPos=1,r.tabsShowing=!1,b(r)(n);var n,r},render:function(){return l()(g,{model:o},l()(P,{model:o}))}}},F=(n(8),n(9),n(10),document.body);function z(t){return t<668?"phone":t<920?"tablet":"desktop"}var H,M=window.innerWidth;o.a.state.profile=z(M),function t(){var e=window.innerWidth;if(M!==e){M=e;var n=o.a.state.profile;o.a.state.profile=z(e),n!=o.a.state.profile&&l.a.redraw()}requestAnimationFrame(t)}(),l.a.route(F,"/posts",(H=o.a,{"/posts":j(H),"/comments":j(H),"/albums":j(H),"/photos":j(H),"/todos":j(H),"/users":j(H)}))}],[[11,1,2]]]);
//# sourceMappingURL=main-chunk.js.map