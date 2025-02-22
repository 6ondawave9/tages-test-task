(function(){"use strict";var e={753:function(e,t,r){var i=r(751),a=r(641);function c(e,t){return(0,a.uX)(),(0,a.CE)("nav",null,t[0]||(t[0]=[(0,a.Lk)("a",{class:"nav-element"},"Главная",-1),(0,a.Lk)("a",{class:"nav-element"},"Системы хранения",-1),(0,a.Lk)("a",{class:"nav-element selected"},"Комплекты стеллажных систем",-1)]))}var o=r(262);const n={},s=(0,o.A)(n,[["render",c],["__scopeId","data-v-78bdd75f"]]);var l=s,d=r(33),p=r(953),u=r(278);const v={class:"card"},m={key:0,class:"card-tag"},C=["src"],f={class:"card-info"},_={class:"card-info-code"},g={class:"card-info-title"},L={class:"card-bottom"},h={class:"card-bottom-price"},k={key:0,class:"card-bottom-price-old"},E={class:"card-bottom-price-current"},O={class:"card-bottom-btns"},b={width:"20",height:"19",viewBox:"0 0 20 19",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var T={__name:"Card",props:["item"],setup(e){const t=(0,u.Pj)(),r=(0,p.KR)(t.getters.checkIfInCart(e.item.id)),i=(0,p.KR)(t.getters.checkIfInFavorites(e.item.id));function c(){r.value?t.dispatch("removeFromCart",e.item.id):t.dispatch("addToCart",e.item),r.value=!r.value}function o(){i.value?t.dispatch("removeFromFavorites",e.item.id):t.dispatch("addToFavorites",e.item),i.value=!i.value}return(t,n)=>((0,a.uX)(),(0,a.CE)("div",v,[e.item.price.old_price?((0,a.uX)(),(0,a.CE)("div",m,"Скидка")):(0,a.Q3)("",!0),(0,a.Lk)("img",{src:e.item.image.url},null,8,C),(0,a.Lk)("div",f,[(0,a.Lk)("div",_,(0,d.v_)(e.item.code),1),(0,a.Lk)("div",g,(0,d.v_)(e.item.name),1)]),(0,a.Lk)("div",L,[(0,a.Lk)("div",h,[e.item.price.old_price?((0,a.uX)(),(0,a.CE)("div",k,(0,d.v_)(e.item.price.old_price),1)):(0,a.Q3)("",!0),(0,a.Lk)("div",E,(0,d.v_)(e.item.price.current_price),1)]),(0,a.Lk)("div",O,[r.value?(0,a.Q3)("",!0):((0,a.uX)(),(0,a.CE)("button",{key:0,class:"card-bottom-btns-cart",onClick:c},n[0]||(n[0]=[(0,a.Lk)("svg",{width:"19",height:"18",viewBox:"0 0 19 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,a.Lk)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3.66412 1.80229C3.50428 1.80194 3.3502 1.82003 3.20378 1.85443C3.00307 1.41204 2.73794 1.01515 2.4364 0.713604C1.92459 0.201799 1.1174 0 0 0V1.8C0.682603 1.8 1.07541 1.8982 1.1636 1.9864C1.50378 2.32657 1.8 3.01776 1.8 3.6L1.80905 3.72728L2.69093 9.90046C1.21532 9.97702 0.0721779 11.1229 0.00110572 12.5554L0 13.5C0.0871391 14.9795 1.22648 16.1177 2.64892 16.1985L2.85323 16.1989C3.22356 17.2481 4.22398 18 5.4 18C6.5756 18 7.57571 17.2487 7.94636 16.2H10.0536C10.4243 17.2487 11.4244 18 12.6 18C14.0912 18 15.3 16.7912 15.3 15.3C15.3 13.8088 14.0912 12.6 12.6 12.6C11.4244 12.6 10.4243 13.3513 10.0536 14.4H7.94636C7.57571 13.3513 6.5756 12.6 5.4 12.6C4.2244 12.6 3.22429 13.3513 2.85364 14.4H2.7C2.24101 14.3725 1.82928 13.9612 1.79838 13.4461L1.8 12.6C1.82427 12.1332 2.23318 11.7243 2.7446 11.6989L4.52132 11.6993L4.5342 11.7H13.6052L13.738 11.6578C14.4204 11.4413 14.9667 10.9275 15.2253 10.2623L15.3201 10.0746L15.6282 9.46429C15.9469 8.83253 16.2656 8.19968 16.5762 7.58142C17.3369 6.06697 17.8153 5.1045 17.9213 4.86815C18.4654 3.65441 17.3632 2.72022 16.2366 2.70032L3.66412 1.80229ZM13.2924 9.89997H4.60154C4.54375 9.88391 4.49972 9.83495 4.4911 9.77399L3.60919 3.60063L16.104 4.4954C15.8854 4.94126 15.4879 5.73762 14.9676 6.77345L14.9546 6.79941C14.6576 7.39065 14.3393 8.02262 14.0211 8.65354L13.7134 9.26309L13.5968 9.49393L13.5529 9.59597C13.5058 9.72695 13.4125 9.83459 13.2924 9.89997ZM12.6 16.1999C13.097 16.1999 13.5 15.797 13.5 15.2999C13.5 14.8029 13.097 14.3999 12.6 14.3999C12.1029 14.3999 11.7 14.8029 11.7 15.2999C11.7 15.797 12.1029 16.1999 12.6 16.1999ZM6.3 15.2999C6.3 15.797 5.89706 16.1999 5.4 16.1999C4.90294 16.1999 4.5 15.797 4.5 15.2999C4.5 14.8029 4.90294 14.3999 5.4 14.3999C5.89706 14.3999 6.3 14.8029 6.3 15.2999Z",fill:"black"})],-1)]))),r.value?((0,a.uX)(),(0,a.CE)("button",{key:1,class:"card-bottom-btns-cart-added",onClick:c},n[1]||(n[1]=[(0,a.Lk)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,a.Lk)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M9.99997 19.8999C4.53235 19.8999 0.099968 15.4676 0.099968 9.99994C0.099968 4.53233 4.53235 0.0999451 9.99997 0.0999451C15.4676 0.0999451 19.9 4.53233 19.9 9.99994C19.9 15.4676 15.4676 19.8999 9.99997 19.8999ZM9.99997 18.0999C14.4735 18.0999 18.1 14.4734 18.1 9.99994C18.1 5.52644 14.4735 1.89994 9.99997 1.89994C5.52646 1.89994 1.89997 5.52644 1.89997 9.99994C1.89997 14.4734 5.52646 18.0999 9.99997 18.0999ZM12.9636 6.66355L8.19997 11.4272L6.13637 9.36355L4.86358 10.6363L8.19997 13.9727L14.2364 7.93635L12.9636 6.66355Z",fill:"#27AE60"})],-1)]))):(0,a.Q3)("",!0),(0,a.Lk)("button",{class:"card-bottom-btns-fav",onClick:o},[((0,a.uX)(),(0,a.CE)("svg",b,[(0,a.Lk)("path",{class:(0,d.C4)({favorite:i.value}),"fill-rule":"evenodd","clip-rule":"evenodd",d:"M14.0979 1.44916e-05C12.795 0 11.9551 0.155217 10.9924 0.626465C10.6359 0.800937 10.3015 1.01105 9.99095 1.25618C9.69235 1.0248 9.37131 0.824326 9.0296 0.655321C8.04816 0.169898 7.16523 0 5.90907 0C2.54477 0 0.0999756 2.78754 0.0999756 6.40789C0.0999756 9.14198 1.62442 11.7831 4.46393 14.3369C5.95438 15.6774 7.85737 17.004 9.22022 17.7097L9.99998 18.1135L10.7797 17.7097C12.1426 17.004 14.0456 15.6774 15.536 14.3369C18.3755 11.7831 19.9 9.14198 19.9 6.40789C19.9 2.82586 17.4321 0.0138225 14.0979 1.44916e-05ZM18.1 6.40793C18.1 8.54995 16.8276 10.7544 14.3324 12.9986C12.972 14.2221 11.2231 15.4449 10 16.0864C8.77695 15.4449 7.02806 14.2221 5.66767 12.9986C3.17246 10.7544 1.90002 8.54995 1.90002 6.40793C1.90002 3.73298 3.5953 1.80004 5.90911 1.80004C6.90787 1.80004 7.52333 1.91847 8.23164 2.2688C8.65002 2.47573 9.01981 2.74897 9.3399 3.09043L10.0021 3.79687L10.6583 3.08483C10.9856 2.72969 11.3608 2.45023 11.7837 2.24322C12.4713 1.90668 13.0483 1.80004 14.0942 1.80004C16.3794 1.80952 18.1 3.7701 18.1 6.40793Z",fill:"black"},null,2)]))])])])]))}};const F=(0,o.A)(T,[["__scopeId","data-v-050cf847"]]);var A=F;const I={class:"catalog"};var R={__name:"Catalog",setup(e){const t=(0,u.Pj)(),r=(0,a.EW)((()=>t.getters.getItems));return(e,t)=>((0,a.uX)(),(0,a.CE)("div",I,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(r.value,(e=>((0,a.uX)(),(0,a.Wv)(A,{key:e.id,item:e},null,8,["item"])))),128))]))}};const w=R;var S=w;const y={class:"select-wrapper"},M={hidden:""},X=["value"];var j={__name:"Select",props:["options","placeholder","state"],setup(e){const t=(0,p.KR)(e.placeholder),r=(0,u.Pj)();function c(){r.commit(`CHANGE_${e.state}`,t.value)}return(r,o)=>((0,a.uX)(),(0,a.CE)("div",y,[(0,a.bo)((0,a.Lk)("select",{"onUpdate:modelValue":o[0]||(o[0]=e=>t.value=e),onChange:c},[(0,a.Lk)("option",M,(0,d.v_)(e.placeholder),1),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.options,(e=>((0,a.uX)(),(0,a.CE)("option",{key:e.id,value:e.id},(0,d.v_)(e.name),9,X)))),128))],544),[[i.u1,t.value]])]))}};const D=(0,o.A)(j,[["__scopeId","data-v-3749827a"]]);var N=D;const V={class:"settings"},P={class:"settings-section"},x={class:"settings-section"};var H={__name:"Settings",setup(e){const t=(0,u.Pj)(),r=(0,a.EW)((()=>t.getters.getSortTypes)),i=(0,a.EW)((()=>t.getters.getMaterials));return(e,t)=>((0,a.uX)(),(0,a.CE)("div",V,[(0,a.Lk)("div",P,[t[0]||(t[0]=(0,a.Lk)("div",{class:"settings-title"},"Сортировать по:",-1)),(0,a.bF)(N,{class:"settings-select",state:"SORT_TYPE",placeholder:"По умолчанию",options:r.value},null,8,["options"])]),(0,a.Lk)("div",x,[t[1]||(t[1]=(0,a.Lk)("div",{class:"settings-title"},"Материал",-1)),(0,a.bF)(N,{class:"settings-select",state:"MATERIAL_FILTER",placeholder:"По умолчанию",options:i.value},null,8,["options"])])]))}};const W=(0,o.A)(H,[["__scopeId","data-v-0a14c8cb"]]);var Z=W;const J={class:"main"};var K={__name:"App",setup(e){const t=(0,u.Pj)();return(0,a.KC)((()=>{t.dispatch("loadCart"),t.dispatch("loadFavorites")})),(e,t)=>((0,a.uX)(),(0,a.CE)("div",J,[(0,a.bF)(l),t[0]||(t[0]=(0,a.Lk)("h1",null,"Комплекты стеллажных систем",-1)),(0,a.bF)(Z),(0,a.bF)(S)]))}};const Q=(0,o.A)(K,[["__scopeId","data-v-7fa0e11a"]]);var B=Q,G=JSON.parse('[{"id":"1","name":"Ручка дверная","code":"L422WH","price":{"old_price":400,"current_price":355},"image":{"url":"/pic/pic1.png"},"material":1},{"id":"2","name":"Ручка, нержавеющ сталь","code":"L423WH","price":{"old_price":400.9,"current_price":355.555},"image":{"url":"/pic/pic2.png"},"material":2},{"id":"3","name":"Стандартные петли","code":"P424WN","price":{"old_price":null,"current_price":75},"image":{"url":"/pic/pic3.png"},"material":2},{"id":"4","name":"Петля со стопором","code":"PW5AC","price":{"old_price":270,"current_price":200},"image":{"url":"/pic/pic4.png"},"material":2},{"id":"5","name":"Ручка дверная","code":"LM352","price":{"old_price":null,"current_price":720},"image":{"url":"/pic/pic1.png"},"material":1},{"id":"6","name":"Ручка, нержавеющ сталь","code":null,"price":{"old_price":null,"current_price":355.555},"image":{"url":"/pic/pic2.png"},"material":2},{"id":"7","name":"Стандартные петли","code":"WD14LK","price":{"old_price":null,"current_price":75},"image":{"url":"/pic/pic3.png"},"material":2},{"id":"8","name":"Петля со стопором","code":null,"price":{"old_price":1200,"current_price":900},"image":{"url":"/pic/pic4.png"},"material":2}]'),Y=JSON.parse('[{"id":"1","name":"Дерево"},{"id":"2","name":"Металл"}]'),$=(0,u.y$)({state:{sortType:0,materialFilter:0,sortTypes:[{id:1,name:"Цена по возрастанию"},{id:2,name:"Цена по убыванию"}],items:G,materials:Y,cart:[],favorites:[]},getters:{getSortTypes(e){return e.sortTypes},getMaterials(e){return e.materials},getItems(e){const t=e.items.filter((t=>!e.materialFilter||t.material==e.materialFilter));switch(e.sortType){case 0:return t;case 1:return t.toSorted(((e,t)=>e.price.current_price-t.price.current_price));case 2:return t.toSorted(((e,t)=>t.price.current_price-e.price.current_price))}},checkIfInCart:e=>t=>!!e.cart.filter((e=>e.id==t)).length,checkIfInFavorites:e=>t=>!!e.favorites.filter((e=>e.id==t)).length},mutations:{CHANGE_SORT_TYPE(e,t){e.sortType=t},CHANGE_MATERIAL_FILTER(e,t){e.materialFilter=t},ADD_TO_CART(e,t){e.cart.push(t)},REMOVE_FROM_CART(e,t){e.cart=e.cart.filter((e=>e.id!=t))},ADD_TO_FAVORITES(e,t){e.favorites.push(t)},REMOVE_FROM_FAVORITES(e,t){e.favorites=e.favorites.filter((e=>e.id!=t))},LOAD_CART(e,t){e.cart=t??[]},LOAD_FAVORITES(e,t){e.favorites=t??[]}},actions:{addToCart({commit:e,state:t},r){e("ADD_TO_CART",r),localStorage.setItem("cart",JSON.stringify(t.cart))},removeFromCart({commit:e,state:t},r){e("REMOVE_FROM_CART",r),localStorage.setItem("cart",JSON.stringify(t.cart))},addToFavorites({commit:e,state:t},r){e("ADD_TO_FAVORITES",r),localStorage.setItem("favorites",JSON.stringify(t.favorites))},removeFromFavorites({commit:e,state:t},r){e("REMOVE_FROM_FAVORITES",r),localStorage.setItem("favorites",JSON.stringify(t.favorites))},loadCart({commit:e}){e("LOAD_CART",JSON.parse(localStorage.getItem("cart")))},loadFavorites({commit:e}){e("LOAD_FAVORITES",JSON.parse(localStorage.getItem("favorites")))}},modules:{}});(0,i.Ef)(B).use($).mount("#app")}},t={};function r(i){var a=t[i];if(void 0!==a)return a.exports;var c=t[i]={exports:{}};return e[i](c,c.exports,r),c.exports}r.m=e,function(){var e=[];r.O=function(t,i,a,c){if(!i){var o=1/0;for(d=0;d<e.length;d++){i=e[d][0],a=e[d][1],c=e[d][2];for(var n=!0,s=0;s<i.length;s++)(!1&c||o>=c)&&Object.keys(r.O).every((function(e){return r.O[e](i[s])}))?i.splice(s--,1):(n=!1,c<o&&(o=c));if(n){e.splice(d--,1);var l=a();void 0!==l&&(t=l)}}return t}c=c||0;for(var d=e.length;d>0&&e[d-1][2]>c;d--)e[d]=e[d-1];e[d]=[i,a,c]}}(),function(){r.d=function(e,t){for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};r.O.j=function(t){return 0===e[t]};var t=function(t,i){var a,c,o=i[0],n=i[1],s=i[2],l=0;if(o.some((function(t){return 0!==e[t]}))){for(a in n)r.o(n,a)&&(r.m[a]=n[a]);if(s)var d=s(r)}for(t&&t(i);l<o.length;l++)c=o[l],r.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return r.O(d)},i=self["webpackChunkproject"]=self["webpackChunkproject"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=r.O(void 0,[504],(function(){return r(753)}));i=r.O(i)})();
//# sourceMappingURL=app.61e11bf8.js.map