(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{205:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return o})),r.d(n,"rightToc",(function(){return i})),r.d(n,"default",(function(){return u}));r(75),r(269),r(35),r(28),r(27),r(76),r(0);var t=r(275);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}var o={},i=[],c={rightToc:i},s="wrapper";function u(e){var n=e.components,r=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["components"]);return Object(t.b)(s,a({},c,r,{components:n,mdxType:"MDXLayout"}),Object(t.b)("pre",null,Object(t.b)("code",a({parentName:"pre"},{className:"language-js"}),"import Ajv from 'ajv';\nimport { JSONSchemaBridge } from 'uniforms-bridge-json-schema';\n\nconst ajv = new Ajv({ allErrors: true, useDefaults: true });\n\nconst schema = {\n  title: 'Guest',\n  type: 'object',\n  properties: {\n    pictureUrl: { type: 'string' }\n  }\n};\n\nfunction createValidator(schema) {\n  const validator = ajv.compile(schema);\n\n  return model => {\n    validator(model);\n\n    if (validator.errors && validator.errors.length) {\n      throw { details: validator.errors };\n    }\n  };\n}\n\nconst schemaValidator = createValidator(schema);\n\nconst bridge = new JSONSchemaBridge(schema, schemaValidator);\n\nexport default bridge;\n")))}u.isMDXComponent=!0},269:function(e,n,r){"use strict";var t=r(3),a=r(78)(!1),o=[].indexOf,i=!!o&&1/[1].indexOf(1,-0)<0;t(t.P+t.F*(i||!r(36)(o)),"Array",{indexOf:function(e){return i?o.apply(this,arguments)||0:a(this,e,arguments[1])}})},275:function(e,n,r){"use strict";r.d(n,"a",(function(){return c})),r.d(n,"b",(function(){return p}));var t=r(0),a=r.n(t),o=a.a.createContext({}),i=function(e){var n=a.a.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):Object.assign({},n,e)),r},c=function(e){var n=i(e.components);return a.a.createElement(o.Provider,{value:n},e.children)};var s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},l=Object(t.forwardRef)((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,s=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&-1===n.indexOf(t)&&(r[t]=e[t]);return r}(e,["components","mdxType","originalType","parentName"]),l=i(r),p=t,f=l[c+"."+p]||l[p]||u[p]||o;return r?a.a.createElement(f,Object.assign({},{ref:n},s,{components:r})):a.a.createElement(f,Object.assign({},{ref:n},s))}));function p(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=l;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c[s]="string"==typeof e?e:t,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}l.displayName="MDXCreateElement"}}]);