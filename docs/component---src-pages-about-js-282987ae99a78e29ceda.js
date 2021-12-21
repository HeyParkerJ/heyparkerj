(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{138:function(e,t,n){"use strict";n.r(t);n(146);var a=n(0),r=n.n(a),o=n(153),i=n(144),u=n(154),l=n.n(u);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement("h1",{className:l.a.header},"About"),r.a.createElement("div",{className:l.a.bodyText},r.a.createElement("p",null,"I'm a full stack engineer with production experience in ReactJS, Node, Java, SQL, and of course the ever lovely trio of HTML, Javascript and CSS. I pride myself on thinking about the bigger picture and applying critical thinking, context, and clear goals before proposing a solution."),r.a.createElement("p",null,"Outside the office, I've tinkered with a small handful of ",r.a.createElement(i.Link,{to:"/projects",className:l.a.link},"projects")," and had the pleasure of building a landing page for an Arizona Barcade."),r.a.createElement("p",null,"For the fun parts - I love beer, burritos, geeking out about ancient Sith lore (it's still canon to me, dammit), keeping up with tech news, and fragging out with friends on the PC.")))}},143:function(e,t,n){"use strict";var a=n(8);t.__esModule=!0,t.withPrefix=f,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(148)),o=a(n(149)),i=a(n(7)),u=a(n(52)),l=a(n(53)),s=a(n(4)),c=a(n(0)),d=n(18),p=n(144);function f(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var h={activeClassName:s.default.string,activeStyle:s.default.object},m=function(e){function t(t){var n;n=e.call(this,t)||this,(0,l.default)((0,u.default)((0,u.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),n.state={IOSupported:a},n.handleRef=n.handleRef.bind((0,u.default)((0,u.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,p.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,i=void 0===a?this.defaultGetProps:a,u=t.onClick,l=t.onMouseEnter,s=(t.activeClassName,t.activeStyle,t.innerRef,t.state),h=t.replace,m=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","innerRef","state","replace"]);var v=f(n);return c.default.createElement(d.Link,(0,o.default)({to:v,state:s,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){l&&l(e),___loader.hovering((0,p.parsePath)(n).pathname)},onClick:function(t){return u&&u(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(n,{state:s,replace:h})),!0}},m))},t}(c.default.Component);m.propTypes=(0,o.default)({},h,{innerRef:s.default.func,onClick:s.default.func,to:s.default.string.isRequired,replace:s.default.bool});var v=c.default.forwardRef(function(e,t){return c.default.createElement(m,(0,o.default)({innerRef:t},e))});t.default=v;var g=function(e,t){window.___navigate(f(e),t)};t.navigate=g;var y=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(f(e))};t.push=y;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(f(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),y(e)}},144:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),u=n(143),l=n.n(u);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var s=n(145),c=n.n(s);n.d(t,"PageRenderer",function(){return c.a});var d=n(32);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},145:function(e,t,n){var a;e.exports=(a=n(150))&&a.default||a},146:function(e,t,n){"use strict";n(147)("link",function(e){return function(t){return e(this,"a","href",t)}})},147:function(e,t,n){var a=n(11),r=n(16),o=n(17),i=/"/g,u=function(e,t,n,a){var r=String(o(e)),u="<"+t;return""!==n&&(u+=" "+n+'="'+String(a).replace(i,"&quot;")+'"'),u+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(u),a(a.P+a.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},148:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r},e.exports.__esModule=!0,e.exports.default=e.exports},149:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,n.apply(this,arguments)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},150:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),u=n(54),l=n(2),s=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},151:function(e,t,n){e.exports={colors:"'colors.module.css'",orangeText:"#FF5A09",whiteText:"#dcdcdc",cream:"#1d1e22",header:"header-module--header--2Q3RK",nav:"header-module--nav--3m-_Y",list:"header-module--list--1wDFI",link:"header-module--link--1TPaE",activeLink:"header-module--activeLink--1_G11 header-module--link--1TPaE"}},152:function(e,t,n){e.exports={layout:"layout-module--layout--WT_lX"}},153:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=(n(146),n(144)),i=n(151),u=n.n(i),l=function(e){return r.a.createElement("li",{className:u.a.list},r.a.createElement(o.Link,{to:e.to,className:u.a.link,activeClassName:u.a.activeLink},e.children))},s=function(e){return r.a.createElement("li",{className:u.a.list},r.a.createElement(o.Link,{to:e.to,className:u.a.link,activeClassName:u.a.activeLink,getProps:function(e){return e.isPartiallyCurrent?{className:u.a.activeLink}:{className:u.a.link}}},e.children))},c=function(){return r.a.createElement("nav",{className:u.a.header},r.a.createElement("ul",{className:u.a.nav},r.a.createElement(l,{to:"/"},"Home"),r.a.createElement(s,{to:"/blog"},"Blog"),r.a.createElement(l,{to:"/projects"},"Projects"),r.a.createElement(l,{to:"/about"},"About")))},d=n(152),p=n.n(d);t.a=function(e){var t=e.children;return r.a.createElement("div",{className:p.a.layout},r.a.createElement(c,null),t)}},154:function(e,t,n){e.exports={colors:"'colors.module.css'",orangeText:"#FF5A09",whiteText:"#dcdcdc",cream:"#1d1e22",header:"about-module--header--2Gxwb",link:"about-module--link--5uLO_",bodyText:"about-module--bodyText--2Mfel"}}}]);
//# sourceMappingURL=component---src-pages-about-js-282987ae99a78e29ceda.js.map