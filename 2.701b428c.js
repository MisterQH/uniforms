(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{553:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a(471);var n=a(458);function r(e){var t=(Object(n.a)().siteConfig||{}).baseUrl,a=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?a+e.slice(1):a+e}},566:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(82),c=a(458),o=a(553),i=(a(75),a(121),a(50),a(796)),s=a.n(i),u=a(473),d=a(268),h=a.n(d),m=a(81),f=(a(800),function(e){var t=Object(n.useState)(!0),l=t[0],c=t[1],o=Object(n.useRef)(null),i=Object(n.useContext)(m.a);Object(n.useEffect)((function(){var e=i.siteConfig,t=(void 0===e?{}:e).themeConfig.algolia;"undefined"!=typeof window?a.e(70).then(a.t.bind(null,1265,7)).then((function(e){(0,e.default)({appId:t.appId,apiKey:t.apiKey,indexName:t.indexName,inputSelector:"#search_input_react",algoliaOptions:t.algoliaOptions})})):(console.warn("Search has failed to load and now is being disabled"),c(!1))}),[]);var s=Object(n.useCallback)((function(t){o.current.contains(t.target)||o.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return l?r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{role:"button",className:h()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:s,onKeyDown:s,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:h()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onFocus:s,onBlur:s,ref:o})):null}),p=function(){var e=n.useState("undefined"!=typeof document?document.querySelector("html").getAttribute("data-theme"):""),t=e[0],a=e[1];return n.useEffect((function(){try{a(localStorage.getItem("theme"))}catch(e){console.error(e)}}),[a]),[t,n.useCallback((function(e){try{localStorage.setItem("theme",e),a(e)}catch(t){console.error(t)}}),[a])]},v=a(801),g=a.n(v);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function k(e){var t=Object(o.a)(e.to);return r.a.createElement(u.a,b({className:"navbar__item navbar__link"},e,e.href?{target:"_blank",rel:"noopener noreferrer",href:e.href}:{activeClassName:"navbar__link--active",to:t}),e.label)}var E=function(){return r.a.createElement("span",{className:h()(g.a.toggle,g.a.moon)})},y=function(){return r.a.createElement("span",{className:h()(g.a.toggle,g.a.sun)})};var _=function(){var e=Object(c.a)(),t=Object(n.useState)(!1),a=t[0],i=t[1],d=Object(n.useState)(!1),m=d[0],v=d[1],_=p(),N=_[0],O=_[1],w=e.siteConfig,C=void 0===w?{}:w,j=C.baseUrl,x=C.themeConfig,S=(void 0===x?{}:x).navbar,T=void 0===S?{}:S,M=T.title,B=T.logo,P=void 0===B?{}:B,F=T.links,I=void 0===F?[]:F,X=Object(n.useCallback)((function(){i(!0)}),[i]),L=Object(n.useCallback)((function(){i(!1)}),[i]),D=Object(n.useCallback)((function(e){return O(e.target.checked?"dark":"")}),[O]),K=Object(o.a)(P.src);return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,r.a.createElement("html",{lang:"en","data-theme":N})),r.a.createElement("nav",{className:h()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":a})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:X,onKeyDown:X},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(u.a,{className:"navbar__brand",to:j},null!=P&&r.a.createElement("img",{className:"navbar__logo",src:K,alt:P.alt}),null!=M&&r.a.createElement("strong",{className:m?g.a.hideLogoText:""},M)),I.filter((function(e){return"right"!==e.position})).map((function(e,t){return r.a.createElement(k,b({},e,{key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},I.filter((function(e){return"right"===e.position})).map((function(e,t){return r.a.createElement(k,b({},e,{key:t}))})),r.a.createElement(s.a,{className:g.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:"dark"===N,onChange:D,icons:{checked:r.a.createElement(E,null),unchecked:r.a.createElement(y,null)}}),r.a.createElement(f,{handleSearchBarToggle:v,isSearchBarExpanded:m}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:function(){i(!1)}}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(u.a,{className:"navbar__brand",onClick:L,to:j},null!=P&&r.a.createElement("img",{className:"navbar__logo",src:K,alt:P.alt}),null!=M&&r.a.createElement("strong",null,M)),a&&r.a.createElement(s.a,{"aria-label":"Dark mode toggle in sidebar",checked:"dark"===N,onChange:D,icons:{checked:r.a.createElement(E,null),unchecked:r.a.createElement(y,null)}})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},I.map((function(e,t){return r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(k,b({className:"menu__link"},e,{onClick:L})))}))))))))};a(123);function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function O(e){var t=e.item,a=Object(o.a)(t.to);return r.a.createElement(u.a,N({className:"footer__link-item"},t,t.href?{target:"_blank",rel:"noopener noreferrer",href:t.href}:{to:a}),t.label)}var w=function(){var e=Object(c.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,n=a||{},l=n.copyright,i=n.links,s=void 0===i?[]:i,u=n.logo,d=void 0===u?{}:u,m=Object(o.a)(d.src);return a?r.a.createElement("footer",{className:h()("footer",{"footer--dark":"dark"===a.style})},r.a.createElement("div",{className:"container"},s&&s.length>0&&r.a.createElement("div",{className:"row footer__links"},s.map((function(e,t){return r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(O,{item:e}))}))):null)}))),(d||l)&&r.a.createElement("div",{className:"text--center"},d&&d.src&&r.a.createElement("div",{className:"margin-bottom--sm"},r.a.createElement("img",{className:"footer__logo",alt:d.alt,src:m})),l))):null};a(802);t.a=function(e){var t=Object(c.a)().siteConfig,a=void 0===t?{}:t,n=a.favicon,i=a.tagline,s=a.title,u=a.themeConfig.image,d=a.url,h=e.children,m=e.title,f=e.noFooter,p=e.description,v=e.image,g=e.keywords,b=e.permalink,k=m||s+" \xb7 "+i,E=v||u,y=d+Object(o.a)(E),N=Object(o.a)(n);return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),r.a.createElement("meta",{name:"viewport",content:"width=device-width"}),k&&r.a.createElement("title",null,k),k&&r.a.createElement("meta",{property:"og:title",content:k}),n&&r.a.createElement("link",{rel:"shortcut icon",href:N}),p&&r.a.createElement("meta",{name:"description",content:p}),p&&r.a.createElement("meta",{property:"og:description",content:p}),g&&g.length&&r.a.createElement("meta",{name:"keywords",content:g.join(",")}),E&&r.a.createElement("meta",{property:"og:image",content:y}),E&&r.a.createElement("meta",{property:"twitter:image",content:y}),E&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+k}),b&&r.a.createElement("meta",{property:"og:url",content:d+b}),r.a.createElement("meta",{name:"twitter:card",content:"summary"})),r.a.createElement(_,null),r.a.createElement("main",{className:"main"},h),!f&&r.a.createElement(w,null))}},796:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),l=a(0),c=h(l),o=h(a(268)),i=h(a(16)),s=h(a(797)),u=h(a(798)),d=a(799);function h(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),l=(0,o.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return c.default.createElement("div",{className:l,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},c.default.createElement("div",{className:"react-toggle-track"},c.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),c.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),c.default.createElement("div",{className:"react-toggle-thumb"}),c.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(l.PureComponent);t.default=m,m.displayName="Toggle",m.defaultProps={icons:{checked:c.default.createElement(s.default,null),unchecked:c.default.createElement(u.default,null)}},m.propTypes={checked:i.default.bool,disabled:i.default.bool,defaultChecked:i.default.bool,onChange:i.default.func,onFocus:i.default.func,onBlur:i.default.func,className:i.default.string,name:i.default.string,value:i.default.string,id:i.default.string,"aria-labelledby":i.default.string,"aria-label":i.default.string,icons:i.default.oneOfType([i.default.bool,i.default.shape({checked:i.default.node,unchecked:i.default.node})])}},797:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),l=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return l.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},l.default.createElement("title",null,"switch-check"),l.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},798:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),l=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return l.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},l.default.createElement("title",null,"switch-x"),l.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},799:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},800:function(e,t,a){},801:function(e,t,a){e.exports={displayOnlyInLargeViewport:"displayOnlyInLargeViewport_3J-v",toggle:"toggle_Q9cy",moon:"moon_1D9f",sun:"sun_1k0k",hideLogoText:"hideLogoText_EVDg"}},802:function(e,t,a){}}]);