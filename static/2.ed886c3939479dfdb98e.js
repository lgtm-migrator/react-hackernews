webpackJsonp([2],{220:function(e,t,n){var r=n(221);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(106)("55c34f04",r,!0)},221:function(e,t,n){(e.exports=n(105)(!1)).push([e.i,".user-view{background-color:#fff;box-sizing:border-box;padding:2em 3em}.user-view h1{margin:0;font-size:1.5em}.user-view .meta{list-style-type:none;padding:0}.user-view .label{display:inline-block;min-width:4em}.user-view .about{margin:1em 0}.user-view .links a{text-decoration:underline}",""])},224:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return y});var r,o,a,s=n(2),u=n.n(s),i=n(107),c=n(108),l=n(104),f=n(220),p=n.n(f);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=(r=Object(i.b)(function(e){return{users:e.users}},function(e,t){return{fetchUser:function(){return e(Object(c.f)(t.match.params.id))}}}),o=Object(l.d)(p.a,!1,function(e){var t=e.props,n=t.users,r=t.match.params.id,o=n[r];return o?r:!1===o?"User Not Found":e.props.fetchUser().then(function(){return e.props.users[r]?r:"User Not Found"})}),r(a=o(a=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.a.PureComponent);function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}n=t,o=void 0,(r=[{key:"asyncBootstrap",value:function(){return null!=this.user||this.props.fetchUser().then(function(){return!0})}},{key:"componentDidMount",value:function(){this.asyncBootstrap()}},{key:"render",value:function(){var e=this.user;return u.a.createElement("div",{className:"user-view"},e?u.a.createElement(u.a.Fragment,null,u.a.createElement("h1",null,"User : ",e.id),u.a.createElement("ul",{className:"meta"},u.a.createElement("li",null,u.a.createElement("span",{className:"label"},"Created:")," ",Object(l.c)(e.created)," ","ago"),u.a.createElement("li",null,u.a.createElement("span",{className:"label"},"Karma:")," ",e.karma),e.about?u.a.createElement("li",{className:"about",dangerouslySetInnerHTML:{__html:e.about}}):null),u.a.createElement("p",{className:"links"},u.a.createElement("a",{href:"https://news.ycombinator.com/submitted?id="+e.id},"submissions")," ","|",u.a.createElement("a",{href:"https://news.ycombinator.com/threads?id="+e.id},"comments"))):!1===e?u.a.createElement("h1",null,"User not found."):null)}},{key:"user",get:function(){var e=this.props,t=e.match;return e.users[t.params.id]}}])&&b(n.prototype,r),o&&b(n,o);var n,r,o;return t}())||a)||a)}});