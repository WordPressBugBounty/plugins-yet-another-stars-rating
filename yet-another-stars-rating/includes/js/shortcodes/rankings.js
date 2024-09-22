(()=>{"use strict";var e={98:function(e,t,a){var r;!function(n){if("function"!=typeof o){var o=function(e){return e};o.nonNative=!0}const l=o("plaintext"),s=o("html"),i=o("comment"),c=/<(\w*)>/g,u=/<\/?([^\s\/>]+)/;function d(e,t,a){return f(e=e||"",m(t=t||[],a=a||""))}function m(e,t){return{allowable_tags:e=function(e){let t=new Set;if("string"==typeof e){let a;for(;a=c.exec(e);)t.add(a[1])}else o.nonNative||"function"!=typeof e[o.iterator]?"function"==typeof e.forEach&&e.forEach(t.add,t):t=new Set(e);return t}(e),tag_replacement:t,state:l,tag_buffer:"",depth:0,in_quote_char:""}}function f(e,t){if("string"!=typeof e)throw new TypeError("'html' parameter must be a string");let a=t.allowable_tags,r=t.tag_replacement,n=t.state,o=t.tag_buffer,c=t.depth,u=t.in_quote_char,d="";for(let t=0,m=e.length;t<m;t++){let m=e[t];if(n===l)if("<"===m)n=s,o+=m;else d+=m;else if(n===s)switch(m){case"<":if(u)break;c++;break;case">":if(u)break;if(c){c--;break}u="",n=l,o+=">",a.has(g(o))?d+=o:d+=r,o="";break;case'"':case"'":u=m===u?"":u||m,o+=m;break;case"-":"<!-"===o&&(n=i),o+=m;break;case" ":case"\n":if("<"===o){n=l,d+="< ",o="";break}o+=m;break;default:o+=m}else if(n===i)if(">"===m)"--"==o.slice(-2)&&(n=l),o="";else o+=m}return t.state=n,t.tag_buffer=o,t.depth=c,t.in_quote_char=u,d}function g(e){let t=u.exec(e);return t?t[1].toLowerCase():null}d.init_streaming_mode=function(e,t){let a=m(e=e||[],t=t||"");return function(e){return f(e||"",a)}},void 0===(r=function(){return d}.call(t,a,t,e))||(e.exports=r)}()}},t={};function a(r){var n=t[r];if(void 0!==n)return n.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,a),o.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{let e;var t,r=function(t){var a=t.colClass,r=t.post,n=r.link,o=r.title;return React.createElement("td",{className:a},React.createElement("a",{href:n},function(t){if("string"!=typeof t||-1===t.indexOf("&"))return t;void 0===e&&(e=document.implementation&&document.implementation.createHTMLDocument?document.implementation.createHTMLDocument("").createElement("textarea"):document.createElement("textarea")),e.innerHTML=t;const a=e.textContent;return e.innerHTML="",a}(o)))},n=new Uint8Array(16);function o(){if(!t&&!(t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return t(n)}const l=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;const s=function(e){return"string"==typeof e&&l.test(e)};for(var i=[],c=0;c<256;++c)i.push((c+256).toString(16).substr(1));const u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=(i[e[t+0]]+i[e[t+1]]+i[e[t+2]]+i[e[t+3]]+"-"+i[e[t+4]]+i[e[t+5]]+"-"+i[e[t+6]]+i[e[t+7]]+"-"+i[e[t+8]]+i[e[t+9]]+"-"+i[e[t+10]]+i[e[t+11]]+i[e[t+12]]+i[e[t+13]]+i[e[t+14]]+i[e[t+15]]).toLowerCase();if(!s(a))throw TypeError("Stringified UUID is invalid");return a};const d=function(e,t,a){var r=(e=e||{}).random||(e.rng||o)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){a=a||0;for(var n=0;n<16;++n)t[a+n]=r[n];return t}return u(r)};var m=a(98),f=a.n(m),g=function(e){var t=e.html;return React.createElement("div",{dangerouslySetInnerHTML:{__html:f()(t,"<strong><p>")}})},p=function(e){var t=e.post,a=t.number_of_votes,r=t.rating,n=e.text;if(void 0!==a){var o=JSON.parse(yasrWindowVar.textAfterVr);return o=(o=o.replace("%total_count%",a)).replace("%average%",r),React.createElement("div",{className:"yasr-most-rated-text"},React.createElement(g,{html:o}))}return React.createElement("span",null,n," ",r)},y=function(e){var t=e.size,a=e.htmlId,r=e.element,n=e.step,o=e.readonly,l=e.rating;return React.createElement("div",{id:a,ref:function(){return yasrSetRaterValue(t,a,r,n,o,l)}})},h=function(e){var t=e.rankingParams,a=e.tableId,r=e.colClass,n=e.post,o="after",l=JSON.parse(yasrWindowVar.textRating),s=new URLSearchParams(t);null!==s.get("text_position")&&(o=s.get("text_position")),null!==s.get("custom_txt")&&(l=s.get("custom_txt"));var i={rating:n.rating,htmlId:"yasr-ranking-element-"+d(),size:document.getElementById(a).dataset.rankingSize};return"before"===o?React.createElement("td",{className:r},React.createElement(p,{post:n,text:l}),React.createElement(y,i)):React.createElement("td",{className:r},React.createElement(y,i),React.createElement(p,{post:n,text:l}))},v=function(e){var t={colClass:e.leftClass,post:e.post},a={rankingParams:e.rankingParams,tableId:e.tableId,colClass:e.rightClass,post:e.post};return React.createElement("tr",{className:e.trClass},React.createElement(r,t),React.createElement(h,a))},_=function(e){var t=e.tBodyId,a=e.show,r=e.data,n=e.source,o=e.rankingParams,l=e.tableId;return React.createElement("tbody",{id:t,style:{display:a}},r.map((function(e,t){var a="yasr-rankings-td-colored",r="yasr-top-10-most-highest-left",s="yasr-top-10-most-highest-right";return"author_ranking"===n&&(a="yasr-rankings-td-white",r="yasr-top-10-overall-left",s="yasr-top-10-overall-right"),t%2==0&&(a="yasr-rankings-td-white","author_ranking"===n&&(a="yasr-rankings-td-colored")),React.createElement(v,{key:e.post_id,source:n,tableId:l,rankingParams:o,post:e,trClass:a,leftClass:r,rightClass:s})})))},E=function(e){return function(t){t.preventDefault();var a=t.target.id,r=e.tableId,n="link-most-rated-posts-"+r,o="link-highest-rated-posts-"+r,l="most-rated-posts-"+r,s="highest-rated-posts-"+r,i=document.getElementById(a),c=document.createElement("span");c.innerHTML=i.innerHTML,c.id=i.id,i.parentNode.replaceChild(c,i),a===n&&(document.getElementById(s).style.display="none",document.getElementById(l).style.display="",c=document.getElementById(o),i.innerHTML=c.innerHTML,i.id=c.id,c.parentNode.replaceChild(i,c)),a===o&&(document.getElementById(l).style.display="none",document.getElementById(s).style.display="",c=document.getElementById(n),i.innerHTML=c.innerHTML,i.id=c.id,c.parentNode.replaceChild(i,c))}},b=function(e){var t=e.tableId,a=e.source,r=e.defaultView,n="link-most-rated-posts-"+t,o="link-highest-rated-posts-"+t;if("author_ranking"!==a){var l=React.createElement("span",null,React.createElement("span",{id:n},JSON.parse(yasrWindowVar.textMostRated))," | ",React.createElement("a",{href:"#",id:o,onClick:E(e)},JSON.parse(yasrWindowVar.textHighestRated)));return"highest"===r&&(l=React.createElement("span",null,React.createElement("span",{id:o},JSON.parse(yasrWindowVar.textHighestRated))," | ",React.createElement("a",{href:"#",id:n,onClick:E(e)},JSON.parse(yasrWindowVar.textMostRated)))),React.createElement("thead",null,React.createElement("tr",{className:"yasr-rankings-td-colored yasr-rankings-heading"},React.createElement("th",null,JSON.parse(yasrWindowVar.textLeftColumnHeader)),React.createElement("th",null,JSON.parse(yasrWindowVar.textOrderBy),":  ",l)))}return React.createElement(React.Fragment,null)},R=function(e){var t=e.error,a=e.isLoaded,r=e.data,n=e.source,o=e.rankingParams,l=e.tableId;if(t)return React.createElement("tbody",null,React.createElement("tr",null,React.createElement("td",null,console.log(t),"Error")));if(!1===a)return React.createElement("tbody",null,React.createElement("tr",null,React.createElement("td",null,JSON.parse(yasrWindowVar.textLoadRanking))));if("overall_rating"===n||"author_multi"===n)return React.createElement(_,{data:r,tableId:l,tBodyId:"overall_"+l,rankingParams:o,show:"table-row-group",source:n});var s=r.most,i=r.highest,c="table-row-group",u="none",d="most",m=c,f=u,g=new URLSearchParams(o);return null!==g.get("view")&&(d=g.get("view")),"highest"===d&&(m=u,f=c),React.createElement(React.Fragment,null,React.createElement(b,{tableId:l,source:n,defaultView:d}),React.createElement(_,{data:s,tableId:l,tBodyId:"most-rated-posts-"+l,rankingParams:o,show:m,source:n}),React.createElement(_,{data:i,tableId:l,tBodyId:"highest-rated-posts-"+l,rankingParams:o,show:f,source:n}))};function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)({}).hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},w.apply(null,arguments)}function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var r,n,o,l,s=[],i=!0,c=!1;try{if(o=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;i=!1}else for(;!(i=(r=o.call(a)).done)&&(s.push(r.value),s.length!==t);i=!0);}catch(e){c=!0,n=e}finally{try{if(!i&&null!=a.return&&(l=a.return(),Object(l)!==l))return}finally{if(c)throw n}}return s}}(e,t)||function(e,t){if(e){if("string"==typeof e)return x(e,t);var a={}.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?x(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=Array(t);a<t;a++)r[a]=e[a];return r}var I=wp.element,S=I.useState,C=I.useEffect,N=function(e){var t=e.tableId,a=e.source,r=e.params,n=e.nonce,o={tableId:t,source:a,rankingParams:r},l=k(S(null),2),s=l[0],i=l[1],c=k(S(!1),2),u=c[0],d=c[1],m=k(S([]),2),f=m[0],g=m[1],p=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=JSON.parse(document.getElementById(t).dataset.rankingData);!0===e&&console.info("Ajax Disabled, getting data from source"),g(a)},y=function(){var e=[],t=function(e,t,a){var r,n=t,o="&nonce_rankings="+a,l=""!==e?e:"";""!==l&&!1!==l&&(l=new URLSearchParams(l));var s=function(e,t){var a="";return""!==e&&!1!==e&&(null!==e.get("order_by")&&(a+="order_by="+e.get("order_by")),null!==e.get("limit")&&(a+="&limit="+e.get("limit")),null!==e.get("start_date")&&"0"!==e.get("start_date")&&(a+="&start_date="+e.get("start_date")),null!==e.get("end_date")&&"0"!==e.get("end_date")&&(a+="&end_date="+e.get("end_date")),null!==e.get("ctg")?a+="&ctg="+e.get("ctg"):null!==e.get("cpt")&&(a+="&cpt="+e.get("cpt")),""!==a&&(a="&"+(a=a.replace(/\s+/g,""))),"visitor_multi"!==t&&"author_multi"!==t||null!==e.get("setid")&&(a+="&setid="+e.get("setid"))),a}(l,n);if("author_ranking"===n||"author_multi"===n||"overall_rating"===n)r=[yasrWindowVar.ajaxurl+"?action=yasr_load_rankings&source="+n+s+o];else{var i="",c="";null!==l.get("required_votes[most]")&&(i="&required_votes="+l.get("required_votes[most]")),null!==l.get("required_votes[highest]")&&(c="&required_votes="+l.get("required_votes[highest]")),r=[yasrWindowVar.ajaxurl+"?action=yasr_load_rankings&show=most&source=".concat(n).concat(s).concat(i).concat(o),yasrWindowVar.ajaxurl+"?action=yasr_load_rankings&show=highest&source=".concat(n).concat(s).concat(c).concat(o)]}return r}(r,a,n);Promise.all(t.map((function(t){return fetch(t).then((function(e){return!0===e.ok?e.json():(console.info("Ajax Call Failed. Getting data from source"),"KO")})).then((function(t){"KO"===t?p():("overall_rating"===t.source||"author_multi"===t.source?e="overall_rating"===t.source?t.data_overall:t.data_mv:e[t.show]=t.data_vv,g(e))})).catch((function(e){p(),console.info(e)}))}))).then((function(e){d(!0)})).catch((function(e){p(),console.info(e)}))};return C((function(){"yes"!==yasrWindowVar.ajaxEnabled?(p(!0),d(!0)):a?y():i("Invalid Data Source")}),[]),React.createElement(React.Fragment,null,React.createElement(R,w({error:s,isLoaded:u,data:f},o)))},O=wp.element.render;!function(){var e=document.getElementsByClassName("yasr-stars-rankings");if(e.length>0)for(var t=0;t<e.length;t++){var a=e.item(t).id,r=JSON.parse(e.item(t).dataset.rankingSource),n=JSON.parse(e.item(t).dataset.rankingParams),o=JSON.parse(e.item(t).dataset.rankingNonce),l=document.getElementById(a);O(React.createElement(N,{source:r,tableId:a,params:n,nonce:o}),l)}}()})()})();