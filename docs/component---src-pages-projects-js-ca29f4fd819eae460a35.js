(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{142:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(153),i=n(154),s=n.n(i),l=function(e){return r.a.createElement("li",{className:s.a.list},r.a.createElement("div",null,r.a.createElement("p",null,"Title: ",e.title),r.a.createElement("p",null,"URL: ",e.url),r.a.createElement("p",null,"Description: ",e.description)))},u=[{url:"https://github.com/HeyParkerJ/summit_melee_video_sort",title:"melee_video_sort",description:'Someone on Reddit said "Sorting them into folders could be possible but is a lot of work, unless someone is down to write a script for it!". Needing something to do while washing down my coffee - I wrote that script.'}],c=function(){return r.a.createElement("section",{className:s.a.projects},r.a.createElement("ul",{className:s.a.nav},u.map(function(e){return r.a.createElement(l,{url:e.url,title:e.title,description:e.description})})))},d=n(159),p=n.n(d);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement("h1",{className:p.a.header},"Projects"),r.a.createElement(c,null))}},143:function(e,t,n){"use strict";var a=n(8);t.__esModule=!0,t.withPrefix=f,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(148)),o=a(n(149)),i=a(n(7)),s=a(n(52)),l=a(n(53)),u=a(n(4)),c=a(n(0)),d=n(18),p=n(144);function f(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var m={activeClassName:u.default.string,activeStyle:u.default.object},h=function(e){function t(t){var n;n=e.call(this,t)||this,(0,l.default)((0,s.default)((0,s.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),n.state={IOSupported:a},n.handleRef=n.handleRef.bind((0,s.default)((0,s.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,p.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,i=void 0===a?this.defaultGetProps:a,s=t.onClick,l=t.onMouseEnter,u=(t.activeClassName,t.activeStyle,t.innerRef,t.state),m=t.replace,h=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","innerRef","state","replace"]);var v=f(n);return c.default.createElement(d.Link,(0,o.default)({to:v,state:u,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){l&&l(e),___loader.hovering((0,p.parsePath)(n).pathname)},onClick:function(t){return s&&s(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(n,{state:u,replace:m})),!0}},h))},t}(c.default.Component);h.propTypes=(0,o.default)({},m,{innerRef:u.default.func,onClick:u.default.func,to:u.default.string.isRequired,replace:u.default.bool});var v=c.default.forwardRef(function(e,t){return c.default.createElement(h,(0,o.default)({innerRef:t},e))});t.default=v;var g=function(e,t){window.___navigate(f(e),t)};t.navigate=g;var w=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(f(e))};t.push=w;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(f(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),w(e)}},144:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),s=n(143),l=n.n(s);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var u=n(145),c=n.n(u);n.d(t,"PageRenderer",function(){return c.a});var d=n(32);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},145:function(e,t,n){var a;e.exports=(a=n(150))&&a.default||a},146:function(e,t,n){"use strict";n(147)("link",function(e){return function(t){return e(this,"a","href",t)}})},147:function(e,t,n){var a=n(11),r=n(16),o=n(17),i=/"/g,s=function(e,t,n,a){var r=String(o(e)),s="<"+t;return""!==n&&(s+=" "+n+'="'+String(a).replace(i,"&quot;")+'"'),s+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(s),a(a.P+a.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},148:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r},e.exports.__esModule=!0,e.exports.default=e.exports},149:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,n.apply(this,arguments)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},150:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),s=n(54),l=n(2),u=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},151:function(e,t,n){e.exports={colors:"'colors.module.css'",orangeText:"#FF5A09",whiteText:"#dcdcdc",cream:"#1d1e22",header:"header-module--header--2Q3RK",nav:"header-module--nav--3m-_Y",list:"header-module--list--1wDFI",link:"header-module--link--1TPaE",activeLink:"header-module--activeLink--1_G11 header-module--link--1TPaE"}},152:function(e,t,n){e.exports={layout:"layout-module--layout--WT_lX"}},153:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=(n(146),n(144)),i=n(151),s=n.n(i),l=function(e){return r.a.createElement("li",{className:s.a.list},r.a.createElement(o.Link,{to:e.to,className:s.a.link,activeClassName:s.a.activeLink},e.children))},u=function(e){return r.a.createElement("li",{className:s.a.list},r.a.createElement(o.Link,{to:e.to,className:s.a.link,activeClassName:s.a.activeLink,getProps:function(e){return e.isPartiallyCurrent?{className:s.a.activeLink}:{className:s.a.link}}},e.children))},c=function(){return r.a.createElement("nav",{className:s.a.header},r.a.createElement("ul",{className:s.a.nav},r.a.createElement(l,{to:"/"},"Home"),r.a.createElement(u,{to:"/blog"},"Blog"),r.a.createElement(l,{to:"/projects"},"Projects"),r.a.createElement(l,{to:"/about"},"About")))},d=n(152),p=n.n(d);t.a=function(e){var t=e.children;return r.a.createElement("div",{className:p.a.layout},r.a.createElement(c,null),t)}},154:function(e,t,n){e.exports={list:"Projects-module--list--ZJUxI"}},159:function(e,t,n){e.exports={colors:"'colors.module.css'",orangeText:"#FF5A09",whiteText:"#dcdcdc",cream:"#1d1e22",header:"projects-module--header--2fadY",bodyText:"projects-module--bodyText--23jc-"}}}]);
//# sourceMappingURL=component---src-pages-projects-js-ca29f4fd819eae460a35.js.map