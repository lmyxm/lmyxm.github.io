(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7bbdd8de"],{"02f4":function(t,e,n){var r=n("4588"),i=n("be13");t.exports=function(t){return function(e,n){var c,o,a=String(i(e)),u=r(n),s=a.length;return u<0||u>=s?t?"":void 0:(c=a.charCodeAt(u),c<55296||c>56319||u+1===s||(o=a.charCodeAt(u+1))<56320||o>57343?t?a.charAt(u):c:t?a.slice(u,u+2):o-56320+(c-55296<<10)+65536)}}},"0390":function(t,e,n){"use strict";var r=n("02f4")(!0);t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"07e3":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},"0bfb":function(t,e,n){"use strict";var r=n("cb7c");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"1bc3":function(t,e,n){var r=n("f772");t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},"1ec9":function(t,e,n){var r=n("f772"),i=n("e53d").document,c=r(i)&&r(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},"214f":function(t,e,n){"use strict";n("b0c5");var r=n("2aba"),i=n("32e9"),c=n("79e5"),o=n("be13"),a=n("2b4c"),u=n("520a"),s=a("species"),f=!c(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),l=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var v=a(t),h=!c(function(){var e={};return e[v]=function(){return 7},7!=""[t](e)}),d=h?!c(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[s]=function(){return n}),n[v](""),!e}):void 0;if(!h||!d||"replace"===t&&!f||"split"===t&&!l){var p=/./[v],g=n(o,v,""[t],function(t,e,n,r,i){return e.exec===u?h&&!i?{done:!0,value:p.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),b=g[0],x=g[1];r(String.prototype,t,b),i(RegExp.prototype,v,2==e?function(t,e){return x.call(t,this,e)}:function(t){return x.call(t,this)})}}},"294c":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"35e8":function(t,e,n){var r=n("d9f6"),i=n("aebd");t.exports=n("8e60")?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},"454f":function(t,e,n){n("46a7");var r=n("584a").Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},"46a7":function(t,e,n){var r=n("63b6");r(r.S+r.F*!n("8e60"),"Object",{defineProperty:n("d9f6").f})},"520a":function(t,e,n){"use strict";var r=n("0bfb"),i=RegExp.prototype.exec,c=String.prototype.replace,o=i,a="lastIndex",u=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t[a]||0!==e[a]}(),s=void 0!==/()??/.exec("")[1],f=u||s;f&&(o=function(t){var e,n,o,f,l=this;return s&&(n=new RegExp("^"+l.source+"$(?!\\s)",r.call(l))),u&&(e=l[a]),o=i.call(l,t),u&&o&&(l[a]=l.global?o.index+o[0].length:e),s&&o&&o.length>1&&c.call(o[0],n,function(){for(f=1;f<arguments.length-2;f++)void 0===arguments[f]&&(o[f]=void 0)}),o}),t.exports=o},5778:function(t,e,n){"use strict";var r=n("84dc"),i=n.n(r);i.a},"584a":function(t,e){var n=t.exports={version:"2.6.5"};"number"==typeof __e&&(__e=n)},"5f1b":function(t,e,n){"use strict";var r=n("23c6"),i=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var c=n.call(t,e);if("object"!==typeof c)throw new TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"63b6":function(t,e,n){var r=n("e53d"),i=n("584a"),c=n("d864"),o=n("35e8"),a=n("07e3"),u="prototype",s=function(t,e,n){var f,l,v,h=t&s.F,d=t&s.G,p=t&s.S,g=t&s.P,b=t&s.B,x=t&s.W,y=d?i:i[e]||(i[e]={}),w=y[u],m=d?r:p?r[e]:(r[e]||{})[u];for(f in d&&(n=e),n)l=!h&&m&&void 0!==m[f],l&&a(y,f)||(v=l?m[f]:n[f],y[f]=d&&"function"!=typeof m[f]?n[f]:b&&l?c(v,r):x&&m[f]==v?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[u]=t[u],e}(v):g&&"function"==typeof v?c(Function.call,v):v,g&&((y.virtual||(y.virtual={}))[f]=v,t&s.R&&w&&!w[f]&&o(w,f,v)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},"794b":function(t,e,n){t.exports=!n("8e60")&&!n("294c")(function(){return 7!=Object.defineProperty(n("1ec9")("div"),"a",{get:function(){return 7}}).a})},"79aa":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},"84dc":function(t,e,n){},"85f2":function(t,e,n){t.exports=n("454f")},"8e60":function(t,e,n){t.exports=!n("294c")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"9b55":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"header"},[n("i",{staticClass:"icon",on:{click:t.toback}}),n("p",{staticClass:"title"},[t._v("签字")])]),n("p",{staticClass:"hello"},[n("canvas",{attrs:{id:"canvas",width:"350",height:"300"}},[t._v("Canvas画板")]),n("i",{staticClass:"sendbtn mt",on:{click:t.clear}},[t._v("清除")]),n("i",{staticClass:"sendbtn mt",on:{click:t.save}},[t._v("保存")]),n("img",{attrs:{src:t.url,alt:""}})])])},i=[];n("a481");function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o,a=n("85f2"),u=n.n(a);function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),u()(t,r.key,r)}}function f(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}var l=function(t){t.preventDefault()},v=function(){function t(e){c(this,t),this.el=e,this.canvas=document.getElementById(this.el),this.cxt=this.canvas.getContext("2d"),this.stage_info=canvas.getBoundingClientRect(),this.path={beginX:0,beginY:0,endX:0,endY:0}}return f(t,[{key:"init",value:function(t){var e=this;this.canvas.addEventListener("touchstart",function(t){document.addEventListener("touchstart",l,!1),e.drawBegin(t)}),this.canvas.addEventListener("touchend",function(t){document.addEventListener("touchend",l,!1),e.drawEnd()}),this.clear(t)}},{key:"drawBegin",value:function(t){var e=this;window.getSelection()?window.getSelection().removeAllRanges():document.selection.empty(),this.cxt.strokeStyle="#000",this.cxt.beginPath(),this.cxt.moveTo(t.changedTouches[0].clientX-this.stage_info.left,t.changedTouches[0].clientY-this.stage_info.top),this.path.beginX=t.changedTouches[0].clientX-this.stage_info.left,this.path.beginY=t.changedTouches[0].clientY-this.stage_info.top,canvas.addEventListener("touchmove",function(){e.drawing(event)})}},{key:"drawing",value:function(t){this.cxt.lineTo(t.changedTouches[0].clientX-this.stage_info.left,t.changedTouches[0].clientY-this.stage_info.top),this.path.endX=t.changedTouches[0].clientX-this.stage_info.left,this.path.endY=t.changedTouches[0].clientY-this.stage_info.top,this.cxt.stroke()}},{key:"drawEnd",value:function(){document.removeEventListener("touchstart",l,!1),document.removeEventListener("touchend",l,!1),document.removeEventListener("touchmove",l,!1)}},{key:"clear",value:function(t){this.cxt.clearRect(0,0,350,300)}},{key:"save",value:function(){return canvas.toDataURL("image/png")}}]),t}(),h={data:function(){return{msg:"Welcome to Your Vue.js App",val:!0,url:""}},mounted:function(){o=new v("canvas"),o.init()},methods:{toback:function(){this.$router.go(-1)},clear:function(){o.clear()},save:function(){this.$router.replace({path:"/toreport",query:{src:o.save()}})}}},d=h,p=(n("5778"),n("2877")),g=Object(p["a"])(d,r,i,!1,null,"73fd6a67",null);e["default"]=g.exports},a481:function(t,e,n){"use strict";var r=n("cb7c"),i=n("4bf8"),c=n("9def"),o=n("4588"),a=n("0390"),u=n("5f1b"),s=Math.max,f=Math.min,l=Math.floor,v=/\$([$&`']|\d\d?|<[^>]*>)/g,h=/\$([$&`']|\d\d?)/g,d=function(t){return void 0===t?t:String(t)};n("214f")("replace",2,function(t,e,n,p){return[function(r,i){var c=t(this),o=void 0==r?void 0:r[e];return void 0!==o?o.call(r,c,i):n.call(String(c),r,i)},function(t,e){var i=p(n,t,this,e);if(i.done)return i.value;var l=r(t),v=String(this),h="function"===typeof e;h||(e=String(e));var b=l.global;if(b){var x=l.unicode;l.lastIndex=0}var y=[];while(1){var w=u(l,v);if(null===w)break;if(y.push(w),!b)break;var m=String(w[0]);""===m&&(l.lastIndex=a(v,c(l.lastIndex),x))}for(var E="",_=0,k=0;k<y.length;k++){w=y[k];for(var S=String(w[0]),T=s(f(o(w.index),v.length),0),C=[],R=1;R<w.length;R++)C.push(d(w[R]));var j=w.groups;if(h){var $=[S].concat(C,T,v);void 0!==j&&$.push(j);var O=String(e.apply(void 0,$))}else O=g(S,v,T,C,j,e);T>=_&&(E+=v.slice(_,T)+O,_=T+S.length)}return E+v.slice(_)}];function g(t,e,r,c,o,a){var u=r+t.length,s=c.length,f=h;return void 0!==o&&(o=i(o),f=v),n.call(a,f,function(n,i){var a;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(u);case"<":a=o[i.slice(1,-1)];break;default:var f=+i;if(0===f)return n;if(f>s){var v=l(f/10);return 0===v?n:v<=s?void 0===c[v-1]?i.charAt(1):c[v-1]+i.charAt(1):n}a=c[f-1]}return void 0===a?"":a})}})},aebd:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},b0c5:function(t,e,n){"use strict";var r=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},d864:function(t,e,n){var r=n("79aa");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},d9f6:function(t,e,n){var r=n("e4ae"),i=n("794b"),c=n("1bc3"),o=Object.defineProperty;e.f=n("8e60")?Object.defineProperty:function(t,e,n){if(r(t),e=c(e,!0),r(n),i)try{return o(t,e,n)}catch(a){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},e4ae:function(t,e,n){var r=n("f772");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},e53d:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},f772:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}}}]);