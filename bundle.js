!function(n){function e(e){for(var r,a,s=e[0],c=e[1],u=e[2],d=0,l=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&l.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(n[r]=c[r]);for(p&&p(e);l.length;)l.shift()();return o.push.apply(o,u||[]),t()}function t(){for(var n,e=0;e<o.length;e++){for(var t=o[e],r=!0,s=1;s<t.length;s++){var c=t[s];0!==i[c]&&(r=!1)}r&&(o.splice(e--,1),n=a(a.s=t[0]))}return n}var r={},i={2:0},o=[];function a(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=n,a.c=r,a.d=function(n,e,t){a.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,e){if(1&e&&(n=a(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)a.d(t,r,function(e){return n[e]}.bind(null,r));return t},a.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(e,"a",e),e},a.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},a.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var p=c;o.push([21,1,0,3]),t()}([,function(n,e,t){"use strict";t.d(e,"d",(function(){return o})),t.d(e,"c",(function(){return i})),t.d(e,"a",(function(){return s})),t.d(e,"b",(function(){return c}));var r=t(0),i=(t(5),t(19),function(n){var e="",t="",i="",o="";return n.categories.forEach((function(n){e+=" ".concat(n.name,";")})),n.menus.foods.forEach((function(n){t+="<li>".concat(n.name,"</li>")})),n.menus.drinks.forEach((function(n){i+="<li>".concat(n.name,"</li>")})),n.customerReviews.forEach((function(n){o+=a(n)})),'\n    <h2 class="resto__title">'.concat(n.name,'</h2>\n    <img class="resto__poster" src="').concat(r.a.BASE_IMAGE_URL+n.pictureId,'" alt="').concat(n.name,'" />\n    <div class="resto__info">\n    <h3>Information</h3>\n        <h4>Address</h4>\n        <p>').concat(n.address,", ").concat(n.city,"</p>\n        <h4>Rating</h4>\n        <p>").concat(n.rating,"</p>\n        <h4>Categories</h4>\n        <p>").concat(e,'</p>\n    </div>\n    <div class="resto__overview">\n        <h3>Description</h3>\n        <p>').concat(n.description,'</p>\n    </div>\n    <div class="resto__info">\n      <h4>Foods</h4>\n      <div class="resto__info_menu">\n        <ul>\n          ').concat(t,'\n        </ul>\n      </div>\n    </div>\n    <div class="resto__info">\n      <h4>Drinks</h4>\n      <div class="resto__info_menu">\n        <ul>\n          ').concat(i,'\n        </ul>\n      </div>\n    </div>\n    </div>\n    <h3 class="resto-review__header">Review</h3>\n    <div class="resto-review__container">\n      ').concat(o,'\n      <div class="resto-review">\n        <div class="resto-review__form">\n          <form id="addReview">\n            <input type="text" id="restoid" name="id" value="').concat(n.id,'" hidden></input>\n            <p>\n              <label class="input-label" for="username">Masukkan nama Anda</label>\n              <input type="text" id="username" name="name" required></input>\n            </p>\n            <p>\n              <label class="textarea-label" for="review">Ceritakan pengalaman Anda </label>\n              <textarea name="review" name="review" required></textarea>\n            </p>\n            <p>\n              <button type="button" id="sendReview">Kirim</button>\n            </p>\n          </form>\n        </div>\n    </div>\n    </div>\n    ')}),o=function(n){return'\n  <div class="resto-item">\n    <div class="resto-item__header">\n        <picture>\n          <source media="(max-width: 600px)" srcset="'.concat(n.pictureId?r.a.BASE_IMAGE_URL_SMALL+n.pictureId:"https://picsum.photos/id/666/800/450?grayscale",'">\n          <img class="resto-item__header__poster lazyload" alt="').concat(n.name||"-",'"\n              data-src="').concat(n.pictureId?r.a.BASE_IMAGE_URL+n.pictureId:"https://picsum.photos/id/666/800/450?grayscale",'"\n              sizes="(max-width: 600px) 480px, 800px">\n        </picture>\n        <div class="resto-item__header__rating">\n            <p>⭐️<span class="resto-item__header__rating__score">').concat(n.rating||"-",'</span></p>\n        </div>\n        <div class="resto-item__header__city">\n            <p><span class="resto-item__header__city_str">').concat(n.city||"-",'</span></p>\n        </div>\n    </div>\n    <div class="resto-item__content">\n        <h3 class="resto__name"><a href="',"/#/detail/".concat(n.id),'">').concat(n.name||"-","</a></h3>\n    </div>\n  </div>\n  ")},a=function(n){return'\n  <div class="resto-review">\n      <div class="resto-review__item">\n        <h5>'.concat(n.date,"</h5>\n        <h4>").concat(n.name,"</h4>\n        <p>").concat(n.review,"</p>\n      </div>\n  </div>")},s=function(){return'\n  <button aria-label="like this resto" id="likeButton" class="like">\n     <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>\n  </button>\n'},c=function(){return'\n  <button aria-label="unlike this resto" id="likeButton" class="like">\n    <i class="fa fa-thumbs-up" aria-hidden="true"></i>\n    <i class="fa fa-thumbs-o-down" aria-hidden="true"></i>\n  </button>\n'}},,,,,,,function(n,e,t){"use strict";var r=t(9),i=t.n(r);function o(n,e,t,r,i,o,a){try{var s=n[o](a),c=s.value}catch(n){return void t(n)}s.done?e(c):Promise.resolve(c).then(r,i)}var a=function(){var n,e=(n=regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!("serviceWorker"in navigator)){n.next=4;break}return n.next=3,i.a.register();case 3:return n.abrupt("return");case 4:console.log("Service worker not supported in this browser");case 5:case"end":return n.stop()}}),n)})),function(){var e=this,t=arguments;return new Promise((function(r,i){var a=n.apply(e,t);function s(n){o(a,r,i,s,c,"next",n)}function c(n){o(a,r,i,s,c,"throw",n)}s(void 0)}))});return function(){return e.apply(this,arguments)}}();e.a=a},,function(n,e,t){"use strict";var r=t(2),i=t(3),o={parseActiveUrlWithCombiner:function(){var n=window.location.hash.slice(1).toLowerCase(),e=this._urlSplitter(n);return this._urlCombiner(e)},parseActiveUrlWithoutCombiner:function(){var n=window.location.hash.slice(1).toLowerCase();return this._urlSplitter(n)},_urlSplitter:function(n){var e=n.split("/");return{resource:e[1]||null,id:e[2]||null,verb:e[3]||null}},_urlCombiner:function(n){return(n.resource?"/".concat(n.resource):"/")+(n.id?"/:id":"")+(n.verb?"/".concat(n.verb):"")}},a=t(1);function s(n,e,t,r,i,o,a){try{var s=n[o](a),c=s.value}catch(n){return void t(n)}s.done?e(c):Promise.resolve(c).then(r,i)}function c(n){return function(){var e=this,t=arguments;return new Promise((function(r,i){var o=n.apply(e,t);function a(n){s(o,r,i,a,c,"next",n)}function c(n){s(o,r,i,a,c,"throw",n)}a(void 0)}))}}var u={init:function(n){var e=this;return c(regeneratorRuntime.mark((function t(){var r,i,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.likeButtonContainer,i=n.favoriteRestos,o=n.resto,e._likeButtonContainer=r,e._resto=o,e._favoriteRestos=i,t.next=6,e._renderButton();case 6:case"end":return t.stop()}}),t)})))()},_renderButton:function(){var n=this;return c(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n._resto.id,e.next=3,n._isRestoExist(t);case 3:if(!e.sent){e.next=7;break}n._renderLiked(),e.next=8;break;case 7:n._renderLike();case 8:case"end":return e.stop()}}),e)})))()},_isRestoExist:function(n){var e=this;return c(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._favoriteRestos.getResto(n);case 2:return r=t.sent,t.abrupt("return",!!r);case 4:case"end":return t.stop()}}),t)})))()},_renderLike:function(){var n=this;this._likeButtonContainer.innerHTML=Object(a.a)(),document.querySelector("#likeButton").addEventListener("click",c(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._favoriteRestos.putResto(n._resto);case 2:n._renderButton();case 3:case"end":return e.stop()}}),e)}))))},_renderLiked:function(){var n=this;this._likeButtonContainer.innerHTML=Object(a.b)(),document.querySelector("#likeButton").addEventListener("click",c(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._favoriteRestos.deleteResto(n._resto.id);case 2:n._renderButton();case 3:case"end":return e.stop()}}),e)}))))}};function p(n,e){var t="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=function(n,e){if(!n)return;if("string"==typeof n)return d(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return d(n,e)}(n))||e&&n&&"number"==typeof n.length){t&&(n=t);var r=0,i=function(){};return{s:i,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){t=t.call(n)},n:function(){var n=t.next();return a=n.done,n},e:function(n){s=!0,o=n},f:function(){try{a||null==t.return||t.return()}finally{if(s)throw o}}}}function d(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function l(n,e,t,r,i,o,a){try{var s=n[o](a),c=s.value}catch(n){return void t(n)}s.done?e(c):Promise.resolve(c).then(r,i)}function h(n){return function(){var e=this,t=arguments;return new Promise((function(r,i){var o=n.apply(e,t);function a(n){l(o,r,i,a,s,"next",n)}function s(n){l(o,r,i,a,s,"throw",n)}a(void 0)}))}}var f={render:function(){return h(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n        <div id="resto" class="resto"></div>\n        <div id="likeButtonContainer"></div>\n      ');case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return h(regeneratorRuntime.mark((function n(){var e,t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=o.parseActiveUrlWithoutCombiner(),n.next=3,r.a.detailResto(e.id);case 3:t=n.sent,document.querySelector("#resto").innerHTML=Object(a.c)(t),u.init({likeButtonContainer:document.querySelector("#likeButtonContainer"),favoriteRestos:i.a,resto:{id:t.id,name:t.name,pictureId:t.pictureId,rating:t.rating,city:t.city}}),document.querySelector("#sendReview").addEventListener("click",(function(n){var e,t={},i=p(new FormData(document.querySelector("#addReview")).entries());try{for(i.s();!(e=i.n()).done;){var o=e.value;t[o[0]]=o[1]}}catch(n){i.e(n)}finally{i.f()}r.a.addNewReview(t).then((function(n){"success"===n&&location.reload(!0)})).catch((function(n){return alert(n)}))}));case 8:case"end":return n.stop()}}),n)})))()}};function m(n,e,t,r,i,o,a){try{var s=n[o](a),c=s.value}catch(n){return void t(n)}s.done?e(c):Promise.resolve(c).then(r,i)}function v(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var _=function(){function n(e){var t=e.favoriteRestos,r=e.view;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this._view=r,this._listenToSearchRequestByUser(),this._favoriteRestos=t}var e,t,r,i,o;return e=n,(t=[{key:"_listenToSearchRequestByUser",value:function(){var n=this;this._view.runWhenUserIsSearching((function(e){n._searchRestos(e)}))}},{key:"_searchRestos",value:(i=regeneratorRuntime.mark((function n(e){var t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(this._latestQuery=e.trim(),!(this.latestQuery.length>0)){n.next=7;break}return n.next=4,this._favoriteRestos.searchRestos(this.latestQuery);case 4:t=n.sent,n.next=10;break;case 7:return n.next=9,this._favoriteRestos.getAllRestos();case 9:t=n.sent;case 10:this._showFoundRestos(t);case 11:case"end":return n.stop()}}),n,this)})),o=function(){var n=this,e=arguments;return new Promise((function(t,r){var o=i.apply(n,e);function a(n){m(o,t,r,a,s,"next",n)}function s(n){m(o,t,r,a,s,"throw",n)}a(void 0)}))},function(n){return o.apply(this,arguments)})},{key:"latestQuery",get:function(){return this._latestQuery}},{key:"_showFoundRestos",value:function(n){this._view.showFavoriteRestos(n)}}])&&v(e.prototype,t),r&&v(e,r),n}();function g(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var x=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,t,r;return e=n,(t=[{key:"getTemplate",value:function(){return'\n          <div class="content">\n            <div class="query-wrapper">\n              <input id="query" type="text" placeholder="Search for Favorite Resto 🔍">\n            </div>\n            <h2 class="content__heading">Your Favorite Resto</h2>\n                <div id="restos" class="restos">\n                </div>\n          </div>\n          '}},{key:"runWhenUserIsSearching",value:function(n){document.getElementById("query").addEventListener("change",(function(e){n(e.target.value)}))}},{key:"showRestos",value:function(n){this.showFavoriteRestos(n)}},{key:"showFavoriteRestos",value:function(){var n,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];n=e.length?e.reduce((function(n,e){return n.concat(Object(a.d)(e))}),""):this._getEmptyRestoTemplate(),document.getElementById("restos").innerHTML=n,document.getElementById("restos").dispatchEvent(new Event("restos:updated"))}},{key:"_getEmptyRestoTemplate",value:function(){return'<div class="resto-item__not__found restos__not__found">Tidak ada Resto untuk ditampilkan</div>'}}])&&g(e.prototype,t),r&&g(e,r),n}();function w(n,e,t,r,i,o,a){try{var s=n[o](a),c=s.value}catch(n){return void t(n)}s.done?e(c):Promise.resolve(c).then(r,i)}function b(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var y=function(){function n(e){var t=e.view,r=e.favoriteRestos;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this._view=t,this._favoriteRestos=r,this._showFavoriteRestos()}var e,t,r,i,o;return e=n,(t=[{key:"_showFavoriteRestos",value:(i=regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this._favoriteRestos.getAllRestos();case 2:e=n.sent,this._displayRestos(e);case 4:case"end":return n.stop()}}),n,this)})),o=function(){var n=this,e=arguments;return new Promise((function(t,r){var o=i.apply(n,e);function a(n){w(o,t,r,a,s,"next",n)}function s(n){w(o,t,r,a,s,"throw",n)}a(void 0)}))},function(){return o.apply(this,arguments)})},{key:"_displayRestos",value:function(n){this._view.showFavoriteRestos(n)}}])&&b(e.prototype,t),r&&b(e,r),n}();function k(n,e,t,r,i,o,a){try{var s=n[o](a),c=s.value}catch(n){return void t(n)}s.done?e(c):Promise.resolve(c).then(r,i)}function R(n){return function(){var e=this,t=arguments;return new Promise((function(r,i){var o=n.apply(e,t);function a(n){k(o,r,i,a,s,"next",n)}function s(n){k(o,r,i,a,s,"throw",n)}a(void 0)}))}}var A=new x;function C(n,e,t,r,i,o,a){try{var s=n[o](a),c=s.value}catch(n){return void t(n)}s.done?e(c):Promise.resolve(c).then(r,i)}function E(n){return function(){var e=this,t=arguments;return new Promise((function(r,i){var o=n.apply(e,t);function a(n){C(o,r,i,a,s,"next",n)}function s(n){C(o,r,i,a,s,"throw",n)}a(void 0)}))}}var S={render:function(){return E(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n        <search-bar></search-bar>\n        <div class="search-content" id="searchResultContainer">\n            <h2 class="content__heading">Search Results</h2>\n            <p id="result_counter">Counter</p>\n            <resto-list class="restos"></resto-list>\n        </div>\n        <div class="content">\n            <h2 class="content__heading">Popular Resto</h2>\n            <div id="restos" class="restos">\n    \n            </div>\n        </div>\n        ');case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return E(regeneratorRuntime.mark((function n(){var e,t,i,o,s,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.a.popularResto();case 2:e=n.sent,t=document.querySelector("#restos"),e.forEach((function(n){t.innerHTML+=Object(a.d)(n)})),i=document.querySelector("search-bar"),o=document.querySelector("#searchResultContainer"),s=document.querySelector("resto-list"),i.style.display="block",i.addEventListener("change",(function(n){i.value?o.style.display="block":o.style.display="none"})),c=function(n){r.a.searchResto(i.value).then((function(n){"none"===o.style.display&&(o.style.display="block"),s.restos=n,document.getElementById("result_counter").innerText="".concat(n.length," resto ditemukan...")})).catch((function(n){s.renderError(n)}))},i.clickEvent=c;case 12:case"end":return n.stop()}}),n)})))()}},P={"/":S,"/popular":S,"/favorite":{render:function(){return R(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",A.getTemplate());case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return R(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:new y({view:A,favoriteRestos:i.a}),new _({view:A,favoriteRestos:i.a});case 2:case"end":return n.stop()}}),n)})))()}},"/detail/:id":f},B={init:function(n){var e=this,t=n.button,r=n.drawer,i=n.content;t.addEventListener("click",(function(n){e._toggleDrawer(n,r)})),i.addEventListener("click",(function(n){e._closeDrawer(n,r)}))},_toggleDrawer:function(n,e){n.stopPropagation(),e.classList.toggle("open")},_closeDrawer:function(n,e){n.stopPropagation(),e.classList.remove("open")}};function D(n,e,t,r,i,o,a){try{var s=n[o](a),c=s.value}catch(n){return void t(n)}s.done?e(c):Promise.resolve(c).then(r,i)}function T(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var j=function(){function n(e){var t=e.button,r=e.drawer,i=e.content;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this._button=t,this._drawer=r,this._content=i,this._initialAppShell()}var e,t,r,i,a;return e=n,(t=[{key:"_initialAppShell",value:function(){B.init({button:this._button,drawer:this._drawer,content:this._content})}},{key:"renderPage",value:(i=regeneratorRuntime.mark((function n(){var e,t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=o.parseActiveUrlWithCombiner(),t=P[e],n.next=4,t.render();case 4:return this._content.innerHTML=n.sent,n.next=7,t.afterRender();case 7:case"end":return n.stop()}}),n,this)})),a=function(){var n=this,e=arguments;return new Promise((function(t,r){var o=i.apply(n,e);function a(n){D(o,t,r,a,s,"next",n)}function s(n){D(o,t,r,a,s,"throw",n)}a(void 0)}))},function(){return a.apply(this,arguments)})}])&&T(e.prototype,t),r&&T(e,r),n}();e.a=j},,,function(n,e,t){var r=t(6),i=t(14);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);n.exports=i.locals||{}},function(n,e,t){var r=t(7),i=t(15),o=t(16);e=r(!1);var a=i(o);e.push([n.i,"* {\n    padding: 0;\n    margin: 0;\n}\n\nbody {\n    font-family: 'Open Sans', sans-serif;\n    background-color: white;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n}\n/* \n* skip to content \n*/\n.skip-link {\n    position: absolute;\n    top: -40px;\n    left: 0;\n    background-color: blue;\n    color: white;\n    padding: 8px;\n    z-index: 100;\n}\n\n.skip-link:focus {\n    top: 0;\n}\n   \n/*\n *  AppBar\n */\n\n.app-bar {\n    padding: 8px 16px;\n    background-color: #C36A2D;\n    display: grid;\n    grid-template-columns: auto 1fr auto;\n    gap: 10px;\n    position: sticky;\n    top: 0;\n    z-index: 99;\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\n}\n\n.app-bar .app-bar__menu {\n    display: flex;\n    align-items: center;\n}\n\n.app-bar .app-bar__menu button {\n    background-color: transparent;\n    border: none;\n    font-size: 18px;\n    padding: 8px;\n    cursor: pointer;\n    color: #EADCA6;\n    min-width: 44px;\n    min-height: 44px;\n}\n\n.app-bar .app-bar__brand {\n    display: flex;\n    align-items: center;\n}\n\n.app-bar .app-bar__brand h1 {\n    color: #EADCA6;\n    text-transform: uppercase;\n    font-size: 22px;\n    user-select: none;\n}\n\n.app-bar .app-bar__brand h1 a {\n    text-decoration: none;\n    color: #EADCA6;\n    /* Anchor, Button, Input Text, Text Area min-height & min-width 44px */\n    min-width: 44px;\n    min-height: 44px;\n    display: flex;\n    align-items: center;\n}\n\n.app-bar .app-bar__navigation {\n    position: absolute;\n    top: 50px;\n    left: -180px;\n    width: 150px;\n    transition: all 0.3s;\n    padding: 8px;\n    background-color: #EADCA6;\n    overflow: hidden;\n}\n\n.app-bar .app-bar__navigation.open {\n    left: 0;\n}\n\n.app-bar .app-bar__navigation ul li a {\n    /* display: inline-block; */\n    text-decoration: none;\n    color: black;\n    padding: 8px;\n    margin-bottom: 5px;\n    /* width: 100%; */\n    /* Anchor, Button, Input Text, Text Area min-height & min-width 44px */\n    min-width: 44px;\n    min-height: 44px;\n    display: flex;\n    align-items: center;\n}\n  \n/*\n * Jumbotron\n */\n\n.hero {\n    display: flex;\n    align-items: center;\n    min-height: 380px;\n    width: 100%;\n    text-align: center;\n    background-image: url("+a+');\n    background-position: center;\n    background-color: green;\n    background-repeat: repeat-x;\n    box-shadow:inset 0 0 0 2000px rgba(0, 0, 0, 0.5);\n    margin: auto;\n}\n\n.hero__inner {\n    margin: 0 auto;\n    /* max-width: 800px; */\n    width: 100%;\n}\n\n.hero__title {\n    color: white;\n    font-weight: 300;\n    font-size: 36px;\n}\n\n.hero__tagline {\n    color: #fff;\n    margin: 16px;\n    font-size: 18px;\n    font-weight: 500;\n}\n\n/*\n *  Search-Bar\n */\n\n.search-container {\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    padding: 16px;\n    margin: 32px;\n    border-radius: 5px;\n    display: flex;\n    background-color: white;\n}\n\n.search-container > input {\n    width: 88%;\n    padding: 16px;\n    border: 0;\n    border-bottom: 1px solid #C36A2D;\n    font-weight: bold;\n    text-align: center;\n}\n\n.search-container > input:focus {\n    outline: 0;\n    border-bottom: 2px solid #C36A2D;\n}\n\n.search-container > input:focus::placeholder {\n    font-weight: bold;\n}\n\n.search-container >  input::placeholder {\n    color: #C36A2D;\n    font-weight: normal;\n}\n\n.search-container > button {\n    width: 10%;\n    cursor: pointer;\n    margin-left: auto;\n    padding: 16px;\n    background-color: #C36A2D;\n    color: white;\n    border: 0;\n    text-transform: uppercase;\n}\n\n/*\n*  Favorite Query\n*/\ndiv.query-wrapper {\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    padding: 16px;\n    margin: 32px;\n    border-radius: 5px;\n    display: flex;\n    background-color: white;\n}\n\ndiv.query-wrapper > input[type="text" i] {\n    width: 100%;\n    padding: 16px;\n    border: 0;\n    border-bottom: 1px solid #C36A2D;\n    font-weight: bold;\n    text-align: center;\n}\n\ndiv.query-wrapper > input[type="text" i]:focus {\n    outline: 0;\n    border-bottom: 2px solid #C36A2D;\n}\n\ndiv.query-wrapper > input[type="text" i]:focus::placeholder {\n    font-weight: bold;\n}\n\ndiv.query-wrapper > input[type="text" i]::placeholder {\n    color: #C36A2D;\n    font-weight: normal;\n}\n\n/*\n*  Main Content\n*/\n\nmain {\n    padding: 32px;\n    flex: 1;\n}\n\n.content {\n    margin: 0 auto;\n    min-height: 100%;\n}\n\n.content .content__heading {\n    font-weight: normal;\n}\n\n.search-content {\n    display: none;\n    padding: 32px;\n    flex: 1;\n}\n   \n   \n/*\n *  restos\n */\n\n.restos {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 16px;\n    margin: 32px 0;\n}\n\n.restos .placeholder {\n    display: block;\n    margin: 32px 0;\n}\n \n\n   \n/*\n *  resto-item\n */\n   \n.resto-item {\n    width: 100%;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    border-radius: 8px;\n    overflow: hidden;\n}\n\n.resto-item__header {\n    position: relative;\n}\n\n.resto-item .resto-item__header .resto-item__header__poster {\n    min-height: 230px;\n    max-height: 230px;\n    width: 100%;\n    object-fit: cover;\n}\n\n.resto-item .resto-item__header .resto-item__header__rating {\n    position: absolute;\n    padding: 8px;\n    bottom: 20px;\n    left: 0;\n    display: inline-block;\n    background-color: #C36A2D;\n    color: #EADCA6;\n}\n\n.resto-item .resto-item__header .resto-item__header__city {\n    position: absolute;\n    padding: 8px;\n    bottom: 60px;\n    left: 0;\n    display: inline-block;\n    background-color: #C36A2D;\n    color: #EADCA6;\n}\n\n.resto-item .resto-item__header .resto-item__header__rating .resto-item__header__rating__score {\n    margin-left: 10px;\n}\n\n.resto-item .resto-item__header .resto-item__header__city .resto-item__header__city_str {\n    margin-left: 10px;\n    margin-top: 10px;\n}\n\n.resto-item .resto-item__content {\n    padding: 16px;\n}\n\n.resto-item .resto-item__content h3 {\n    /* margin: 0 0 10px 0; */\n    text-align: center;\n}\n\n.resto-item .resto-item__content h3 a {\n    color: #C36A2D;\n    text-decoration: none;\n    /* Anchor, Button, Input Text, Text Area min-height & min-width 44px */\n    min-width: 44px;\n    min-height: 44px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.resto-item .resto-item__content p {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 4; /* number of lines to show */\n    -webkit-box-orient: vertical;\n}\n   \n   \n/*\n *  resto\n */\n\n.resto {\n    margin: 0 auto;\n    width: 100%;\n    max-width: 800px;\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 18px 16px;\n}\n\n.resto .resto__poster {\n    width: 100%;\n    max-width: 585px;\n    object-fit: cover;\n}\n\n.resto .resto__title {\n    color: #C36A2D;\n}\n\n.resto .resto__overview h3 {\n    margin: 8px 0;\n}\n\n.resto .resto__info h4 {\n    color: #C36A2D;\n    margin: 8px 0;\n}\n\n.resto .resto__info_menu{\n    padding-left: 25px;\n}\n\n/*\n *  resto-review\n */\n\n.resto-review {\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    border-radius: 8px;\n    overflow: hidden;\n    padding: 20px;\n    margin: 10px;\n}\n\n.resto-review__header {\n    margin-top: 50px;\n    margin-left: 20px;\n    color: #C36A2D;\n}\n\n.resto-review .resto-review__item {\n    position: relative;\n    padding: 10px;\n}\n\n.resto-review .resto-review__item h5 {\n    font-weight: 300;\n    margin-bottom: 5px;\n}\n\n.resto-review .resto-review__form {\n    position: relative;\n    padding: 10px;\n}\n\n.resto-review .resto-review__form p {\n    margin-top: 10px;\n}\n\n.resto-review .resto-review__form p .input-label {\n    display:inline-block;\n    max-width: 250px;\n    min-width: 200px;\n    vertical-align: middle;\n}\n\n.resto-review .resto-review__form p .textarea-label {\n    display:inline-block;\n    max-width: 250px;\n    vertical-align: top;\n}\n\n.resto-review .resto-review__form p input {\n    display:inline-block;\n    width: 70%;\n    min-height: 44px;\n    padding: 5px;\n    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */\n    -moz-box-sizing: border-box;    /* Firefox, other Gecko */\n    box-sizing: border-box;         /* Opera/IE 8+ */\n}\n\n.resto-review .resto-review__form p input[type=\'text\'] {\n    font-size: medium;\n}\n\n.resto-review .resto-review__form p textarea {\n    display:inline-block;\n    width:70%; \n    height:150px;\n    padding: 5px;\n    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */\n    -moz-box-sizing: border-box;    /* Firefox, other Gecko */\n    box-sizing: border-box;         /* Opera/IE 8+ */\n}\n\n.resto-review .resto-review__form p button{\n    margin: 0px;\n    width: 100%;\n    cursor: pointer;\n    margin-left: auto;\n    padding: 16px;\n    background-color: #C36A2D;\n    color: white;\n    border: 0;\n    text-transform: uppercase;\n    min-height: 44px;\n}\n/*\n *    Footer\n */\n\nfooter {\n    padding: 16px;\n}\n\nfooter p {\n    text-align: center;\n    color: #aaaaaa;\n}\n\nfooter p a {\n    color: #C36A2D;\n    text-decoration: none;\n    /* Anchor, Button, Input Text, Text Area min-height & min-width 44px */\n    min-width: 44px;\n    min-height: 44px;\n    display: inline-block;\n}\n\n/*\n   Like\n*/\n.like {\n    font-size: 18px;\n    position: fixed;\n    bottom: 16px;\n    right: 16px;\n    background-color: #C36A2D;\n    color: white;\n    border: 0;\n    border-radius: 50%;\n    width: 55px;\n    height: 55px;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.like:hover .fa-thumbs-up,\n.like .fa-thumbs-o-down {\n    display: none;\n}\n.like:hover .fa-thumbs-o-down {\n    display: inline;\n}\n\n',""]),n.exports=e},,,function(n,e,t){var r=t(6),i=t(18);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);n.exports=i.locals||{}},function(n,e,t){(e=t(7)(!1)).push([n.i,"@media screen and (max-width: 550px){\r\n    .search-container {\r\n        flex-direction: column;\r\n        position: static;\r\n    }\r\n\r\n    .search-container > input {\r\n        width: 100%;\r\n        margin-bottom: 12px;\r\n    }\r\n\r\n    .search-container > button {\r\n        width: 100%;\r\n    }\r\n\r\n    .hero__inner {\r\n        margin: 0 auto;\r\n        width: 100%;\r\n        padding: 16px;\r\n    }\r\n\r\n    .resto {\r\n        display: block;\r\n    }\r\n\r\n    .resto .resto__poster {\r\n        padding: 8px 0px;\r\n    }\r\n\r\n    .resto-review .resto-review__form p .input-label {\r\n        min-width: 0px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 650px) {\r\n    .resto .resto__poster {\r\n        width: 100%;\r\n        max-width: 585px;\r\n        object-fit: cover;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 825px) {\r\n    .app-bar {\r\n        grid-template-columns: 1fr auto;\r\n        padding: 8px 32px;\r\n    }\r\n   \r\n    .app-bar .app-bar__brand h1 {\r\n        font-size: 1.5em;\r\n    }\r\n   \r\n    .app-bar .app-bar__menu {\r\n        display: none;\r\n    }\r\n   \r\n    .app-bar .app-bar__navigation {\r\n        position: static;\r\n        width: 100%;\r\n    }\r\n   \r\n    .app-bar .app-bar__navigation ul li {\r\n        display: inline-block;\r\n    }\r\n   \r\n    .app-bar .app-bar__navigation ul li a {\r\n        align-items: center;\r\n        justify-content: center;\r\n        padding: 8px;\r\n        width: 120px;\r\n        margin: 0;\r\n    }\r\n   \r\n    .restos {\r\n        grid-template-columns: 1fr 1fr;\r\n    }\r\n   \r\n    .resto {\r\n        grid-template-columns: auto 1fr;\r\n    }\r\n   \r\n    .resto .resto__title {\r\n        grid-column-start: 1;\r\n        grid-column-end: 3;\r\n    }\r\n   \r\n    .resto .resto__overview {\r\n        grid-column-start: 1;\r\n        grid-column-end: 3;\r\n    }\r\n\r\n    .resto .resto-review__header {\r\n        grid-column-start: 1;\r\n        grid-column-end: 3;\r\n    }\r\n    \r\n    .resto-review {\r\n        grid-column-start: 1;\r\n        grid-column-end: 3;\r\n    }\r\n\r\n    .resto-review__container {\r\n        grid-column-start: 1;\r\n        grid-column-end: 3;\r\n    }\r\n\r\n    .resto-review .resto-review__item {\r\n        grid-column-start: 1;\r\n        grid-column-end: 3;\r\n    }\r\n\r\n    .resto-review .resto-review__form {\r\n        grid-column-start: 1;\r\n        grid-column-end: 3;\r\n    }\r\n\r\n    .resto-review .resto-review__form p .textarea-label {\r\n        display: inline-block;\r\n        width: 200px;\r\n        vertical-align: top;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 825px) {\r\n    .resto-review .resto-review__form p input {\r\n        width: 100%;\r\n    }\r\n    \r\n    .resto-review .resto-review__form p textarea {\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 850px) {\r\n    .restos {\r\n        grid-template-columns: repeat(3, 1fr);\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n    .restos {\r\n        grid-template-columns: repeat(4, 1fr);\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 1600px) {\r\n    .restos {\r\n        grid-template-columns: repeat(5, 1fr);\r\n    }\r\n}",""]),n.exports=e}]);