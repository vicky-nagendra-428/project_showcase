(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e){e.exports=JSON.parse('{"projects":{"Project Planner":{"technologies":["React","JS","SASS","CSS3","HTML5"],"description":"A project planner for beginners to help them plan out projects step by step. Helps junior developers start projects from scratch, with all things in mind before they even start coding. Focuses on project planning, setup, testing, and design.\\n\\nA project showcase for beginners to show off their work/projects to recruiters and friends. It helps the developer to really pick out and show the \\"sparkles\\" in each and every project.","goals":["Create an all-in-one platform to plan projects","Be able to organize and showcase projects","Have a platform that forces planning beforehand"],"targetAudience":["Job Seekers","Students","Junior Developers","Project Managers"],"impacts":["Help out struggling young developers","Create a planner mindset","Relieve having to worry about the details","Reduce stress when starting a new project"]}}}')},24:function(e,t,a){e.exports=a(41)},29:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(19),i=a.n(r),o=a(4),l=a(3),s=a(9),u=a(1),d=a(13),m=function(){var e={projects:{}},t=function(){var t=JSON.stringify(e);localStorage.setItem("projects_data",t)},a={getJSON:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.staticData,n=void 0!==a&&a;return n?JSON.stringify(d,null,2):JSON.stringify(e,null,2)},getProjects:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.staticData,n=void 0!==a&&a;return n?Object.keys(d.projects):Object.keys(e.projects)},addProject:function(a){e.projects[a]||(e.projects[a]={},t())},project:function(a){var n,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=c.staticData,i=void 0!==r&&r;if(!(n=i?function(){return d.projects[a]}:function(){return e.projects[a]})())return null;var o={getTech:function(){return n().technologies||[]},getDescription:function(){return n().description||""},getGoals:function(){return n().goals||[]},getTargetAudience:function(){return n().targetAudience||[]},getImpacts:function(){return n().impacts||[]},setTech:function(e){n().technologies=e,t()},setDescription:function(e){n().description=e,t()},setGoals:function(e){n().goals=e,t()},setTargetAudience:function(e){n().targetAudience=e,t()},setImpacts:function(e){n().impacts=e,t()}};return o}};return localStorage.getItem("projects_data")?e=JSON.parse(localStorage.getItem("projects_data")):t(),a}(),p=(a(29),function(){var e=Object(n.useContext)(T),t=e.mode,a=e.setMode,r=Object(n.useState)(null),i=Object(l.a)(r,2),s=i[0],d=i[1];Object(n.useEffect)((function(){d(m.getProjects({staticData:"static"===t}).map((function(e){return{text:e,editing:!1}})))}),[t]);var p=function(e){return function(t){s[e].text=t.target.value,d(Object(u.a)(s))}},f=function(e){return function(){if(s[e].editing=!1,""===s[e].text.trim())return s.splice(e,1),d(Object(u.a)(s));d(Object(u.a)(s)),m.addProject(s[e].text)}};return s?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"navbar--links"},s.map((function(e,t){return e.editing?c.a.createElement("input",{key:t,value:e.text,className:"navlink navlink--edit",onChange:p(t),onBlur:f(t),autoFocus:!0}):c.a.createElement(o.b,{key:t,to:"/".concat(e.text,"/"),className:"navlink"},e.text)}))),c.a.createElement("div",{className:"navbar--footer"},"edit"===t&&c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{className:"navlink navlink--add",onClick:function(){d([].concat(Object(u.a)(s),[{text:"",editing:!0}]))}},"+ New Project"),c.a.createElement(o.b,{to:"/?export",className:"navlink navlink--export"},"Export Data")),c.a.createElement("button",{className:"navlink navlink--mode navlink--mode__".concat(t),onClick:function(){"static"===t?a("edit"):"edit"===t&&a("static")}},"MODE: ",c.a.createElement("span",{className:"navlink--mode__type"},t)))):null}),f=function(){var e=Object(s.g)().project;return c.a.createElement("div",{className:"navbar--links"},c.a.createElement(o.b,{to:"/".concat(e,"/"),className:"navlink",activeClassName:"navlink--active",replace:!0,exact:!0},"Dashboard"),c.a.createElement(o.b,{to:"/".concat(e,"/design/ideas"),className:"navlink",activeClassName:"navlink--active",replace:!0,exact:!0},"Design Ideas"),c.a.createElement(o.b,{to:"/".concat(e,"/react-components"),className:"navlink",activeClassName:"navlink--active",replace:!0,exact:!0},"React Components"),c.a.createElement(o.b,{to:"/".concat(e,"/timeline"),className:"navlink",activeClassName:"navlink--active",replace:!0,exact:!0},"Timeline"),c.a.createElement(o.b,{to:"/".concat(e,"/uml"),className:"navlink",activeClassName:"navlink--active",replace:!0,exact:!0},"UML"),c.a.createElement(o.b,{to:"/".concat(e,"/tasks"),className:"navlink",activeClassName:"navlink--active",replace:!0,exact:!0},"Tasks"),c.a.createElement(o.b,{to:"/".concat(e,"/statistics"),className:"navlink",activeClassName:"navlink--active",replace:!0,exact:!0},"Statistics"),c.a.createElement(o.b,{to:"/".concat(e,"/settings"),className:"navlink",activeClassName:"navlink--active",replace:!0,exact:!0},"Settings"))},v=function(){return c.a.createElement("div",{className:"navbar"},c.a.createElement(s.a,{path:"/",exact:!0},c.a.createElement(p,null)),c.a.createElement(s.a,{path:"/:project"},c.a.createElement(f,null)))},g=a(22),b=(a(35),function(e){var t=e.title,a=e.sectionStyle,n=void 0===a?{}:a,r=e.bodyStyle,i=void 0===r?{}:r,o=e.children;return c.a.createElement("div",{className:"section",style:n},c.a.createElement("h6",{className:"section--title"},t),c.a.createElement("div",{className:"section--body",style:i},o))}),j=function(){},h=function(e){var t=e.color,a=e.styles,n=void 0===a?{}:a,r=e.first,i=void 0!==r&&r,o=e.last,l=void 0!==o&&o,s=e.editing,u=void 0!==s&&s,d=e.onChange,m=void 0===d?j:d,p=e.setValue,f=void 0===p?j:p,v=e.setEditing,b=void 0===v?j:v,h=e.onClick,E=void 0!==h&&h,x=e.children,k=Object(g.a)({},n);t&&(k.backgroundColor=t),i&&(k.marginLeft="0"),l&&(k.marginRight="0");return c.a.createElement("div",{className:"dashboard--techtab",style:k,onClick:E||b},u?c.a.createElement("input",{type:"text",value:x,className:"dashboard--techtab__edit",style:{width:"".concat(10*x.length,"px")},onChange:function(e){return m(e.target.value)},onKeyDown:function(e){var t=e.key;return("Enter"===t||"Return"===t)&&f()},onBlur:f,autoFocus:!0}):x)},E=function(e){var t=e.store,a=Object(n.useContext)(T).mode,r=Object(n.useState)(t.getTech().map((function(e){return{text:e,editing:!1}}))),i=Object(l.a)(r,2),o=i[0],s=i[1],d=Object(n.useState)(!1),m=Object(l.a)(d,2),p=m[0],f=m[1],v=function(e){return function(t){o[e].text=t,s(Object(u.a)(o))}},g=function(e){return function(){"edit"===a&&(o[e].editing=!0,f(!0))}},j=function(e){return function(){""===o[e].text.trim()?o.splice(e,1):o[e].editing=!1,s(Object(u.a)(o)),f(!1),t.setTech(o.map((function(e){return e.text})))}};return c.a.createElement(b,{title:"Technologies Used"},o&&o.map((function(e,t){return c.a.createElement(h,{key:t,first:0===t,color:"#705CF1",editing:e.editing,onChange:v(t),setEditing:g(t),setValue:j(t)},e.text)})),"edit"===a&&!p&&c.a.createElement(h,{last:!0,color:"transparent",styles:{color:"#705CF1",paddingLeft:"20px",paddingRight:"20px",border:"2px solid #705CF1",cursor:"pointer"},onClick:function(){return s([].concat(Object(u.a)(o),[{text:"",editing:!0}])),void f(!0)}},"+"))},x=a(23),k=(a(36),function(){}),O=function(e){var t=e.style,a=void 0===t?{}:t,n=e.onClick,r=void 0===n?k:n,i=e.children;return c.a.createElement("div",{style:a,className:"card",onClick:r},i)},N=function(e){var t=e.store,a=Object(n.useContext)(T).mode,r=Object(n.useState)(t.getDescription()),i=Object(l.a)(r,2),o=i[0],s=i[1],u=Object(n.useState)(!1),d=Object(l.a)(u,2),m=d[0],p=d[1];return c.a.createElement(b,{title:"Project Description"},c.a.createElement(O,{onClick:function(){return p("edit"===a)}},c.a.createElement("h4",{className:"dashboard--description"},m&&c.a.createElement(x.a,{value:o,className:"dashboard--description__edit",onChange:function(e){return s(e.target.value)},onBlur:function(){p(!1),t.setDescription(o)},autoFocus:!0}),!m&&o.split("\n\n").map((function(e,t){return c.a.createElement("p",{key:t},e)})))))},y=function(e){var t=e.store,a=Object(n.useContext)(T).mode,r=Object(n.useState)(t.getGoals().map((function(e){return{text:e,editing:!1}}))),i=Object(l.a)(r,2),o=i[0],s=i[1],d=Object(n.useState)(!1),m=Object(l.a)(d,2),p=m[0],f=m[1],v=function(e){return function(t){o[e].text=t.target.value,s(Object(u.a)(o))}},g=function(e){return function(){"edit"===a&&(o[e].editing=!0,s(Object(u.a)(o)))}},j=function(e){return function(){f(!1),o[e].editing=!1,""===o[e].text.trim()&&o.splice(e,1),s(Object(u.a)(o)),t.setGoals(o.map((function(e){return e.text})))}};return c.a.createElement(b,{title:"Goal",sectionStyle:{flex:"1"},bodyStyle:{paddingRight:"12.5px"}},c.a.createElement(O,null,c.a.createElement("ul",{className:"dashboard--list"},o.map((function(e,t){return c.a.createElement("li",{key:t,onClick:g(t)},e.editing&&c.a.createElement("input",{className:"dashboard--list__edit",value:e.text,onChange:v(t),onBlur:j(t),autoFocus:!0}),!e.editing&&e.text)}))),"edit"===a&&!p&&c.a.createElement("button",{className:"dashboard--list__add",onClick:function(){f(!0),s([].concat(Object(u.a)(o),[{text:"",editing:!0}]))}},"+")))},C=function(e){var t=e.store,a=Object(n.useContext)(T).mode,r=Object(n.useState)(t.getTargetAudience().map((function(e){return{text:e,editing:!1}}))),i=Object(l.a)(r,2),o=i[0],s=i[1],d=Object(n.useState)(!1),m=Object(l.a)(d,2),p=m[0],f=m[1],v=function(e){return function(t){o[e].text=t.target.value,s(Object(u.a)(o))}},g=function(e){return function(){"edit"===a&&(o[e].editing=!0,s(Object(u.a)(o)))}},j=function(e){return function(){f(!1),o[e].editing=!1,""===o[e].text.trim()&&o.splice(e,1),s(Object(u.a)(o)),t.setTargetAudience(o.map((function(e){return e.text})))}};return c.a.createElement(b,{title:"Target Audience",sectionStyle:{flex:"1"},bodyStyle:{paddingLeft:"12.5px"}},c.a.createElement(O,null,c.a.createElement("ul",{className:"dashboard--list"},o.map((function(e,t){return c.a.createElement("li",{key:t,onClick:g(t)},e.editing&&c.a.createElement("input",{className:"dashboard--list__edit",value:e.text,onChange:v(t),onBlur:j(t),autoFocus:!0}),!e.editing&&e.text)}))),"edit"===a&&!p&&c.a.createElement("button",{className:"dashboard--list__add",onClick:function(){f(!0),s([].concat(Object(u.a)(o),[{text:"",editing:!0}]))}},"+")))},S=function(e){var t=e.store,a=Object(n.useContext)(T).mode,r=Object(n.useState)(t.getImpacts().map((function(e){return{text:e,editing:!1}}))),i=Object(l.a)(r,2),o=i[0],s=i[1],d=Object(n.useState)(!1),m=Object(l.a)(d,2),p=m[0],f=m[1],v=function(e){return function(t){o[e].text=t.target.value,s(Object(u.a)(o))}},g=function(e){return function(){"edit"===a&&(o[e].editing=!0,s(Object(u.a)(o)))}},j=function(e){return function(){f(!1),o[e].editing=!1,""===o[e].text.trim()&&o.splice(e,1),s(Object(u.a)(o)),t.setImpacts(o.map((function(e){return e.text})))}};return c.a.createElement(b,{title:"Impact",sectionStyle:{flex:"1"},bodyStyle:{paddingLeft:"12.5px"}},c.a.createElement(O,null,c.a.createElement("ul",{className:"dashboard--list"},o.map((function(e,t){return c.a.createElement("li",{key:t,onClick:g(t)},e.editing&&c.a.createElement("input",{className:"dashboard--list__edit",value:e.text,onChange:v(t),onBlur:j(t),autoFocus:!0}),!e.editing&&e.text)}))),"edit"===a&&!p&&c.a.createElement("button",{className:"dashboard--list__add",onClick:function(){f(!0),s([].concat(Object(u.a)(o),[{text:"",editing:!0}]))}},"+")))},_=(a(37),function(e){var t=e.children;return c.a.createElement("div",{className:"dashboard--header-title"},c.a.createElement("h3",{className:"dashboard--header-title__h4"},t))}),w=function(){var e=Object(n.useContext)(T).mode,t=Object(s.g)().project,a=Object(s.e)(),r=m.project(t,{staticData:"static"===e});return r?c.a.createElement("div",{className:"dashboard"},c.a.createElement("div",{className:"dashboard--header"},c.a.createElement(_,null,t),c.a.createElement("div",{className:"dashboard--header-links"})),c.a.createElement(E,{store:r}),c.a.createElement(N,{store:r}),c.a.createElement("div",{style:{display:"flex"}},c.a.createElement(y,{store:r}),c.a.createElement(C,{store:r}),c.a.createElement(S,{store:r}))):(a.replace("/"),null)},D=(a(38),function(){return c.a.createElement("div",{className:"design-ideas"})}),T=(a(39),c.a.createContext("static"));var A=function(){var e=Object(n.useState)("static"),t=Object(l.a)(e,2),a=t[0],r=t[1],i=Object(s.f)().search;return c.a.createElement(T.Provider,{value:{mode:a,setMode:r}},c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"container"},c.a.createElement(v,null),c.a.createElement(s.a,{path:"/",exact:!0},"?export"===i?c.a.createElement("div",{style:{flex:"4",overflow:"scroll",margin:"25px"}},c.a.createElement("pre",null,m.getJSON({staticData:"static"===a}))):c.a.createElement("div",{style:{flex:"4"}})),c.a.createElement(s.a,{path:"/:project/",exact:!0},c.a.createElement(w,null)),c.a.createElement(s.a,{path:"/:project/design/ideas",exact:!0},c.a.createElement(D,null)),c.a.createElement(s.a,{path:"/:project/react/components",exact:!0}),c.a.createElement(s.a,{path:"/:project/timeline",exact:!0}),c.a.createElement(s.a,{path:"/:project/uml",exact:!0}),c.a.createElement(s.a,{path:"/:project/tasks",exact:!0}),c.a.createElement(s.a,{path:"/:project/statistics",exact:!0}),c.a.createElement(s.a,{path:"/:project/settings",exact:!0}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(40);i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(o.a,null,c.a.createElement(A,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.e4793fd5.chunk.js.map