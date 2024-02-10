!function(e){"use strict";const t=setInterval((()=>{window.ST_GLOBALS&&(clearInterval(t),g().then((()=>console.info("ST Product Badge loaded"))))}));class i{constructor(t){this.editor=t,this.badgeElement=e.createElement("div"),this.badgeItemElement=e.createElement("div"),this.imageBadgeElement=null}render(){const{id:t,name:i,status:n,property:{positions:s=[],size:l,animation:o},badgeType:d,displayPosition:r,positionImage:c,hasDynamicData:m}=this.editor;this.badgeElement.style.display="none",this.badgeElement.classList.add("shine-trust-icon-wrap"),this.badgeElement.classList.add(`item-${t}`);const p=s.length?s[0]:null;let g="";switch(window.ST_GLOBALS.pageType){case"index":g="in-home";break;case"product":g="in-single-product";break;case"cart":g="in-cart";break;case"list-collections":g="in-list-collections";break;case"collection":g="in-collection";break;case"search":g="in-search"}if(g&&this.badgeElement.classList.add(g),this.badgeItemElement.classList.add("badgeItem"),this.badgeItemElement.classList.add(o),p){const e=p?.preset||"top-left";if("%"===(p?.unit||"%"))this.badgeItemElement.style.left=`${p.axisX}%`,this.badgeItemElement.style.top=`${p.axisY}%`;else switch(e){case"top-left":default:this.badgeItemElement.style.left=`${p.axisX}px`,this.badgeItemElement.style.top=`${p.axisY}px`;break;case"top-right":this.badgeItemElement.style.right=`${p.axisX}px`,this.badgeItemElement.style.top=`${p.axisY}px`;break;case"bottom-left":this.badgeItemElement.style.left=`${p.axisX}px`,this.badgeItemElement.style.bottom=`${p.axisY}px`;break;case"bottom-right":this.badgeItemElement.style.right=`${p.axisX}px`,this.badgeItemElement.style.bottom=`${p.axisY}px`}}if("image-badge"===d){this.imageBadgeElement=e.createElement("img"),window.ST_META_DATA.resizeBadge?(this.badgeItemElement.style.width=`${window.ST_META_DATA.resizeBadge}%`,this.badgeItemElement.style.maxWidth=`${l}px`):this.badgeItemElement.style.width=`${l}px`,this.badgeItemElement.style.height="auto";const i=p.imageURL,n=i.lastIndexOf("/");if(this.imageBadgeElement.setAttribute("src",a+"/assets/"+i.substring(n+1)),this.imageBadgeElement.setAttribute("alt",t),this.imageBadgeElement.setAttribute("data-src",i),this.imageBadgeElement.style.width="100%",this.imageBadgeElement.setAttribute("style","height : auto !important"),this.imageBadgeElement.style.objectFit="unset",p){"%"===(p?.unit||"%")?(this.imageBadgeElement.style.transform=`translate(${-1*p.axisX}%, ${-1*p.axisY}%)`,this.imageBadgeElement.style.WebkitTransform=`translate(${-1*p.axisX}%, ${-1*p.axisY}%)`):(this.imageBadgeElement.style.transform="translate(0)",this.imageBadgeElement.style.WebkitTransform="translate(0)")}this.badgeItemElement.appendChild(this.imageBadgeElement)}else if("text-badge"===d){const{patternID:t,patternBadgeData:{badgeHtml:i,badgeCss:a,badgeName:n},badgeEditData:{labelText:s,fontFamily:l},patternBadgeCSSRender:o,hasDynamicData:d}=this.editor;if(this.imageBadgeElement=e.createElement("div"),this.imageBadgeElement.classList.add("patternBadgeItem"),p){"%"===(p?.unit||"%")?(this.imageBadgeElement.style.transform=`translate(${-1*p.axisX}%, ${-1*p.axisY}%)`,this.imageBadgeElement.style.WebkitTransform=`translate(${-1*p.axisX}%, ${-1*p.axisY}%)`):(this.imageBadgeElement.style.transform="translate(0)",this.imageBadgeElement.style.WebkitTransform="translate(0)")}let r=i;if(!d){const e=window.ST_GLOBALS.translate(s);r=r.replace("{{TEXT_BADGE}}",e)}this.imageBadgeElement.innerHTML=r,this.badgeItemElement.classList.add("badgeItemPattern"),this.badgeItemElement.appendChild(this.imageBadgeElement),this.badgeElement.classList.add(t.substring(1))}return this.badgeElement.appendChild(this.badgeItemElement),{id:t,badgeEl:this.badgeElement,badgeType:d,displayPosition:r,hasDynamicData:m,positionImage:c,labelText:this.editor?.badgeEditData?.labelText,patternName:this.editor?.patternBadgeData?.badgeName,patternCss:this.editor?.patternBadgeData?.badgeCss,badgeCss:this.editor?.patternBadgeCSSRender,filters:window.ST_GLOBALS.convertFilters(this.editor?.productFilters,this.editor?.selectedProducts),fontFamily:this.editor?.badgeEditData?.fontFamily}}}let a=null,n=!1,s="",l=null,o=!1,d=null;const r=["absolute","fixed","sticky"];let c="";const m={},p={default:null,custom:null,customPosition:null},g=async function(){if(!window.ST_PLAN||"ACTIVE"!==window.ST_PLAN?.status)return;let t=[...window.ST_PRODUCT_BADGES,...window.ST_AUTOMATION_BADGES]||[];if(0===t.length)return;"Free"===window.ST_PLAN?.name&&(t=t.splice(0,2)),a=window.ST_GLOBALS.getBaseCDN(),n=window.ST_META_DATA.fixMultiLanguage||!1,o=window.ST_META_DATA.prefixLanguageCode||!1,s=window.ST_META_DATA.mainLanguageCode||"",l=window.ST_GLOBALS.currentLanguage,c=window.ST_META_DATA?.excludedLinks||'a[href*="/products/"]:not(.stBadgeLoaded),[data-href]:not(.stBadgeLoaded)',p.default=E(),p.custom=A(),p.customPosition=L();const r=[],g={},h={};if(t.map((e=>{const{status:t=!1,property:{startDateStatus:a,endDateStatus:n,startDate:s,endDate:l},badgeEditData:o}=e;if(t){let t=!1;if(a||n){const e=window.ST_GLOBALS.dateWithTimeZone(new Date,window.ST_META_DATA.timeZone),i=window.ST_GLOBALS.dateWithTimeZone(s,window.ST_META_DATA.timeZone),o=window.ST_GLOBALS.dateWithTimeZone(l,window.ST_META_DATA.timeZone);(!a&&n&&o.getTime()>=e.getTime()||a&&!n&&i.getTime()<=e.getTime()||a&&n&&i.getTime()<=e.getTime()&&o.getTime()>=e.getTime())&&(t=!0)}else t=!0;if(t){const{targeting:t={}}=o;if(B(window.ST_GLOBALS.pageType,t?.pageShow,t?.collections)){const t=new i(e).render();m[t.id]=t;const a=t.fontFamily;if("object"==typeof a&&a?.fontFamily){0===r.filter((e=>e.fontFamily===a.fontFamily&&parseInt(e.fontWeight)===parseInt(a.fontWeight))).length&&r.push(a)}t?.patternCss&&!g.hasOwnProperty(t.patternName)&&(g[t.patternName]=t.patternCss),t?.badgeCss&&(h[t.id]=t.badgeCss)}}}})),r.length&&r.map((e=>{window.ST_LOADED_FONTS.includes(e.fontFamily)||window.ST_GLOBALS.loadFont(e)})),Object.keys(g).length){let e="";for(const t in g)e+=g[t];window.ST_GLOBALS.addStyle(e)}if(Object.keys(h).length){let e="";for(const t in h)e+=h[t];window.ST_GLOBALS.addStyle(e)}let f=e.URL;const b=new URL(f);d=b.searchParams.get("variant")||null,e.addEventListener("change",(function(t){const i=e.URL,a=new URL(i);d=a.searchParams.get("variant")||null,d&&f!==i&&(f=i);const n=e.body.querySelectorAll(".single-product-badge.has-dynamic-data");for(let e=0;e<n.length;e++)try{const t=n[e];t.classList.remove("none-variant");const i=JSON.parse(t.dataset.badge_id).id,a=JSON.parse(t.dataset.variants);if(a&&a.hasOwnProperty(d)&&m.hasOwnProperty(i)){const e=t.querySelector(".st-label-text"),n=a[d];let{labelText:s}=m[i],l=window.ST_GLOBALS.translate(s);T(l,n)||t.classList.add("none-variant"),l=w(l,n),e.innerHTML=l}}catch(e){console.log(e)}})),u(),setInterval((()=>{u()}),500)},u=async function(){const t=v();let i=[];const a={};for(let e=0;e<t.length;e++){const n=t[e],s=n.getAttribute("href")||n.getAttribute("data-href"),l=D(s);a.hasOwnProperty(l)?a[l].push(n):a[l]=[n],i.push(l),n.classList.add("stBadgeLoaded")}if("product"===window.ST_GLOBALS.pageType&&window.ST_GLOBALS.productHandle&&!e.body.classList.contains("st-single-loaded")&&(a.hasOwnProperty(window.ST_GLOBALS.productHandle)?a[window.ST_GLOBALS.productHandle].push(null):a[window.ST_GLOBALS.productHandle]=[null],i.push(window.ST_GLOBALS.productHandle),e.body.classList.add("st-single-loaded")),i=[...new Set(i)],i.length){let e="";const t=i.length;i.map(((i,a)=>{e+=n&&l!==s?`${i}${a<t-1?" OR ":""}`:`handle:"${i}"${a<t-1?" OR ":""}`}));let d="";d=n&&l!==s?o?`${window.ST_GLOBALS.shopUrl}/search.js?q=${e}&view=shinetrust.product-handles`:`${window.ST_GLOBALS.shopUrl}/${l}/search.js?q=${e}&view=shinetrust.product-handles`:`${window.ST_GLOBALS.shopUrl}/search.js?q=${e}&view=shinetrust.product-handles`;try{const e=await fetch(d,{mode:"no-cors"}),t=await e.json();for(const e in m){const i=m[e],{filters:n}=i;t.map((e=>{let{handle:t,published_at:s,on_sale:l,inventory:o,collections:d,tags:r,title:c,id:m,featured_image:p,available:g,price:u,price_min:f,price_max:b,compare_at_price:w,vendor:y,type:T,variant:_,variants:S}=e;if(u=window.ST_GLOBALS.fixPrice(u),f=window.ST_GLOBALS.fixPrice(f),b=window.ST_GLOBALS.fixPrice(b),w=window.ST_GLOBALS.fixPrice(w),a.hasOwnProperty(t))if(!n?.type&&n.select_all&&0===Object.keys(n.filters).length&&null===n.collection)h(a[t],i,{variant:_,variants:S,badge_id:{id:i.id}},{title:c,featured_image:p});else if(n.select_all&&n.collection&&d.includes(n.collection))h(a[t],i,{variant:_,variants:S,badge_id:{id:i.id}},{title:c,featured_image:p});else if(!n.select_all&&n.products.size)n.products.has(m)&&h(a[t],i,{variant:_,variants:S,badge_id:{id:i.id}},{title:c,featured_image:p});else if(n.select_all&&Object.keys(n.filters).length){let e=0,s=Object.keys(n.filters).length;for(const t in n.filters)"_s"===t&&c.toString().toLowerCase().includes(n.filters[t])&&(e+=1),"price"===t&&!isNaN(f)&&!isNaN(b)&&f>=n.filters[t].min&&b<=n.filters[t].max&&(e+=1),"tag"===t&&r.includes(`${n.filters.tag}`)&&(e+=1),"vendor"===t&&y===n.filters.vendor&&(e+=1),"type"===t&&T===n.filters.type&&(e+=1),"inventory"===t&&("instock"===n.filters.inventory.type&&g&&(e+=1),"outstock"!==n.filters.inventory.type||g||(e+=1),"less-than"===n.filters.inventory.type&&g&&!isNaN(o)&&o<=n.filters.inventory.lte&&(e+=1),"great-than"===n.filters.inventory.type&&g&&!isNaN(o)&&o>=n.filters.inventory.gte&&(e+=1));e===s&&h(a[t],i,{variant:_,variants:S,badge_id:{id:i.id}},{title:c,featured_image:p})}else if(n.type)if("new-arrival"===n.type){const e=window.ST_GLOBALS.dateWithTimeZone(s,window.ST_META_DATA.timeZone),l=window.ST_GLOBALS.dateWithTimeZone(new Date(n.date),window.ST_META_DATA.timeZone);e.getTime()>=l.getTime()&&h(a[t],i,{variant:_,variants:S,badge_id:{id:i.id}},{title:c,featured_image:p})}else"on-sale"===n.type&&l||"low-stock"===n.type&&o>0&&o<=n.quantity?h(a[t],i,{variant:_,variants:S,badge_id:{id:i.id}},{title:c,featured_image:p}):"out-stock"!==n.type||g||h(a[t],i,{variant:_,variants:S,badge_id:{id:i.id}},{title:c,featured_image:p})}))}}catch(e){console.log(e)}}},h=function(t,i,a={},n={}){const{badgeType:s,displayPosition:l,positionImage:o,id:d,badgeEl:c,hasDynamicData:m,labelText:g}=i;if(p.default)for(let e=0;e<t.length;e++){const i=t[e];if(null===i){if("product_image"===l)if(p.customPosition&&p.customPosition.hasOwnProperty(d)&&p.customPosition[d].single){const{parent:e,child:t,await:n}=p.customPosition[d].single;f({linkEl:i,parent:e,child:t,badgeEl:c,id:d,badgeType:s,hasDynamicData:m,labelText:g,attrs:a,_await:n})}else{let e=[];p.custom?e=p.custom?.single.thumbnail:p.default&&(e=p.default?.single.thumbnail),e.map((e=>{const{parent:t,child:n,await:l=!1}=e;f({linkEl:i,parent:t,child:n,badgeEl:c,id:d,badgeType:s,hasDynamicData:m,labelText:g,attrs:a,_await:l})}))}else if("product_information"===l){let e="below";if(o.includes("above")&&(e="above"),p.customPosition&&p.customPosition.hasOwnProperty(d)&&p.customPosition[d].single){const{parent:t,child:n,await:l}=p.customPosition[d].single;f({linkEl:i,parent:t,child:n,badgeEl:c,id:d,badgeType:s,hasDynamicData:m,labelText:g,position:e,attrs:a,_await:l})}else{let t=[],n=[];p.default&&(t=p.default?.single.title,n=p.default?.single.price),p.custom&&(t=p.custom?.single.title,n=p.custom?.single.price);let l=t;"below_price"!==o&&"above_price"!==o||(l=n),l.map((t=>{const{parent:n,child:l,await:o=!1}=t;f({linkEl:i,parent:n,child:l,badgeEl:c,id:d,badgeType:s,hasDynamicData:m,labelText:g,position:e,attrs:a,_await:o})}))}}}else if("product_image"===l)if(p.customPosition&&p.customPosition.hasOwnProperty(d)&&p.customPosition[d].loop){const{parent:e,child:t,await:n}=p.customPosition[d].loop;f({linkEl:i,parent:e,child:t,badgeEl:c,id:d,badgeType:s,hasDynamicData:m,labelText:g,attrs:a,_await:n})}else{let e=[];p.custom?e=p.custom?.loop.thumbnail:p.default&&(e=p.default?.loop.thumbnail),e.map((e=>{const{parent:t,child:n,await:l=!1}=e;f({linkEl:i,parent:t,child:n,badgeEl:c,id:d,badgeType:s,hasDynamicData:m,labelText:g,attrs:a,_await:l})}))}else if("product_information"===l){let e="below";if(o.includes("above")&&(e="above"),p.customPosition&&p.customPosition.hasOwnProperty(d)&&p.customPosition[d].loop){const{parent:t,child:n,await:l}=p.customPosition[d].loop;f({linkEl:i,parent:t,child:n,badgeEl:c,id:d,badgeType:s,hasDynamicData:m,labelText:g,position:e,attrs:a,_await:l})}else{let t=[],n=[];p.default&&(t=p.default?.loop.title,n=p.default?.loop.price),p.custom&&(t=p.custom?.loop.title,n=p.custom?.loop.price);let l=t;"below_price"!==o&&"above_price"!==o||(l=n),l.map((t=>{const{parent:n,child:l,await:o=!1}=t;f({linkEl:i,parent:n,child:l,badgeEl:c,id:d,badgeType:s,hasDynamicData:m,labelText:g,position:e,attrs:a,_await:o})}))}}}else if("product_image"===l){let{featured_image:t}=n;if(!t)return;t=t.split("?")[0];const i=e.body.querySelectorAll('div[data-bg*="'+t+'"], div[data-bgset*="'+t+'"],img[src*="'+t+'"], img[srcset*="'+t+'"]');for(let e=0;e<i.length;e++){const t=i[e].parentElement;if(t&&!t.classList.contains(`item-${d}`)){const e=getComputedStyle(t);r.includes(e.position)||(t.style.position="relative");const i=S(c);if(Object.keys(a).length)for(const e in a)i.dataset[e]=JSON.stringify(a[e]);"text-badge"===s&&b(m,i,g),m&&i.classList.add("has-dynamic-data"),t.appendChild(i),i.classList.add("loaded"),t.classList.add(`item-${d}`)}}}else if("product_information"===l){const{title:e}=n;let t="below";o.includes("above")&&(t="above");const i=_(e);for(let e=0;e<i.length;e++){const n=i[e].parentNode;if(n&&!n.classList.contains(`item-${d}`)){const l=S(c);if(Object.keys(a).length)for(const e in a)l.dataset[e]=JSON.stringify(a[e]);if("text-badge"===s&&b(m,l,g),"below"===t){const t=i[e].nextSibling;null===t?n.appendChild(l):n.insertBefore(l,t)}"above"===t&&n.insertBefore(l,i[e]),m&&l.classList.add("has-dynamic-data"),l.classList.add("in-product-information"),l.classList.add("loaded"),n.classList.add(`item-${d}`)}}}},f=async function(t){const{linkEl:i,parent:a,child:n,badgeEl:s,id:l,badgeType:o,hasDynamicData:d,labelText:c,attrs:m={},position:p=null,_await:g=!1}=t;let u;if(u=a?i?i.closest(a):e.body.querySelector(a):e.body,u&&!u.classList.contains(`item-${l}`)){let e=u.querySelectorAll(n);if(0===e.length&&g){let t=0;for(;t<=5;)e=u.querySelectorAll(n),0===e.length?(await new Promise((e=>setTimeout(e,300))),t++):t=6}for(let t=0;t<e.length;t++){const a=e[t],n=getComputedStyle(a);r.includes(n.position)||(a.style.position="relative");const g=S(s);if(Object.keys(m).length)for(const e in m)g.dataset[e]=JSON.stringify(m[e]);if("text-badge"===o&&b(d,g,c),p){const e=a.parentNode;if("below"===p){const t=a.nextSibling;null===t?e.appendChild(g):e.insertBefore(g,t)}else"above"===p&&e.insertBefore(g,a)}else a.appendChild(g);p&&g.classList.add("in-product-information"),i||g.classList.add("single-product-badge"),d&&g.classList.add("has-dynamic-data"),g.classList.add("loaded"),u.classList.add(`item-${l}`)}}},b=function(e,t,i,a=!1){const n=t.querySelector(".st-label-text");let s=window.ST_GLOBALS.translate(i);if(e){t.classList.remove("none-variant");try{let e=JSON.parse(t.dataset.variant);if(d){const i=JSON.parse(t.dataset.variants);i.hasOwnProperty(d)&&(e=i[d])}e&&(T(s,e)||t.classList.add("none-variant"),s=w(s,e),n.innerHTML=s)}catch(e){console.log(e)}}},w=function(e,t){return e=e.replace(/{{sale_amount}}|{{sale_percent}}|{{inventory}}/g,(function(e){return y(e,t)}))},y=function(e,t){const{sale_amount:i,sale_percent:a,inventory_quantity:n}=t;switch(e){case"{{sale_amount}}":return i;case"{{sale_percent}}":return`${a}%`;case"{{inventory}}":return n;default:return""}},T=function(e,t){let{price:i,compare_at_price:a,inventory_quantity:n,inventory_management:s}=t;i=parseFloat(i),a=parseFloat(a),n=parseInt(n),s=""===s?null:s;const l=e.match(/{{sale_amount}}|{{sale_percent}}|{{inventory}}/gm);return null!==l&&(l.includes("{{sale_amount}}")||l.includes("{{sale_percent}}")?a>i:!!l.includes("{{inventory}}")&&(null!==s&&n>0))},_=function(t,i=null){const a=[],n=null===i?e:i;for(const e of n.querySelectorAll("div, h1, h2, h3, h4, h5, h6, h1 a, h2 a, h3 a, h4 a, h5 a, h6 a"))e.textContent.trim()===t&&0===e.children.length&&a.push(e);return a},S=function(e){const t=e.cloneNode(!0),i=t.querySelector("img");return null!==i&&(i.onerror=function(){return this.onerror="",this.src=this.getAttribute("data-src"),!0}),t},L=function(){if(window.ST_META_DATA.customBadgePosition){const e=window.ST_META_DATA.customBadgePosition.replace(/[\n\r\t]+/g,"").split(","),t={};return e.map((e=>{const i=e.split("||");i.length>=4&&(t.hasOwnProperty(i[0])||(t[i[0]]={single:null,loop:null}),t[i[0]][i[1]]={parent:i[2],child:i[3],await:!(void 0===i[4]||"1"!==i[4])})})),t}return null},A=function(){if(window.ST_META_DATA.customCompatibleTheme){const e=window.ST_META_DATA.customCompatibleTheme.replace(/[\n\r\t]+/g,"").trim().split(";;"),t={loop:{thumbnail:[],title:[],price:[]},single:{thumbnail:[],title:[],price:[]}};return e.map((e=>{if(""!==e){const i=e.split(":");if(2===i.length){i[1].split(",").map((e=>{const a=e.split("||"),n={parent:a[0],child:a[1],await:3===a.length};switch(i[0]){case"image":t.loop.thumbnail.push(n);break;case"title":t.loop.title.push(n);break;case"price":t.loop.price.push(n);break;case"imageSingle":t.single.thumbnail.push(n);break;case"titleSingle":t.single.title.push(n);break;case"priceSingle":t.single.price.push(n)}}))}}})),t}return null},E=function(){if(window.ST_META_DATA.compatibleData){const{selectors:{image:e,imageSingleProduct:t,detail:{title:i,price:a,titleSingleProduct:n,priceSingleProduct:s}}}=window.ST_META_DATA.compatibleData,l={loop:{thumbnail:[],title:[],price:[]},single:{thumbnail:[],title:[],price:[]}};return e.map((e=>{const t=e.split("||");l.loop.thumbnail.push({parent:t[0],child:t[1]})})),t.map((e=>{l.single.thumbnail.push({parent:null,child:e,await:1})})),i.map((e=>{const t=e.split("||");l.loop.title.push({parent:t[0],child:t[1]})})),n.map((e=>{l.single.title.push({parent:null,child:e})})),a.map((e=>{const t=e.split("||");l.loop.price.push({parent:t[0],child:t[1]})})),s.map((e=>{l.single.price.push({parent:null,child:e})})),l}return null},B=function(e,t,i=[]){let a=!1,n="";switch(t){case"collection_page":n="collection";break;case"collection_list":n="list-collections";break;case"product_page":n="product";break;case"homepage":n="index";break;case"cart":n="cart"}if("collection"===e&&"collection"===n){const e=`gid://shopify/Collection/${window.ST_GLOBALS.collectionID}`;(i.includes("selectall")||window.ST_GLOBALS.collectionID&&i.includes(e)||!window.ST_GLOBALS.collectionID&&i.includes("all"))&&(a=!0)}else"all"!==t&&e!==n||(a=!0);return a},v=function(){return c?e.querySelectorAll(c):e.querySelectorAll('a[href*="/products/"]:not(.stBadgeLoaded),[data-href]:not(.stBadgeLoaded)')},D=function(e){const t=e.split("#")[0].split("?")[0].split("/products/");return decodeURIComponent(t[1])}}(window.document);