"use strict";(self.webpackChunkflash=self.webpackChunkflash||[]).push([[691],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,n=/^[\p{Lu}](?![\p{Lu}])/gu,r=/([\p{Alpha}\p{N}_]|$)/u,o=/[_.\- ]+/,i=new RegExp("^"+o.source),l=new RegExp(o.source+r.source,"gu"),s=new RegExp("\\d+"+r.source,"gu"),c=(e,r)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(r={pascalCase:!1,preserveConsecutiveUppercase:!1,...r},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const o=!1===r.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(r.locale),c=!1===r.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(r.locale);if(1===e.length)return r.pascalCase?c(e):o(e);return e!==o(e)&&(e=((e,n,r)=>{let o=!1,i=!1,l=!1;for(let s=0;s<e.length;s++){const c=e[s];o&&t.test(c)?(e=e.slice(0,s)+"-"+e.slice(s),o=!1,l=i,i=!0,s++):i&&l&&a.test(c)?(e=e.slice(0,s-1)+"-"+e.slice(s-1),l=i,i=!1,o=!0):(o=n(c)===c&&r(c)!==c,l=i,i=r(c)===c&&n(c)!==c)}return e})(e,o,c)),e=e.replace(i,""),e=r.preserveConsecutiveUppercase?((e,t)=>(n.lastIndex=0,e.replace(n,(e=>t(e)))))(e,o):o(e),r.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(l.lastIndex=0,s.lastIndex=0,e.replace(l,((e,a)=>t(a))).replace(s,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{G:function(){return F},L:function(){return f},M:function(){return C},P:function(){return x},_:function(){return l},a:function(){return i},b:function(){return m},c:function(){return c},g:function(){return u},h:function(){return s}});var n=a(7294),r=(a(3204),a(5697)),o=a.n(r);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t.indexOf(a=o[n])>=0||(r[a]=e[a]);return r}const s=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function d(e,t,a){const n={};let r="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:n}}function m(e,t,a,n,r){return void 0===r&&(r={}),i({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:i({},r,{opacity:t?1:0})})}function u(e,t,a,n,r,o,l,s){const c={};o&&(c.backgroundColor=o,"fixed"===a?(c.width=n,c.height=r,c.backgroundColor=o,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),s&&(c.objectPosition=s);const d=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const p=["children"],g=function(e){let{layout:t,width:a,height:r}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${r}'%20width='${a}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},f=function(e){let{children:t}=e,a=l(e,p);return n.createElement(n.Fragment,null,n.createElement(g,i({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],b=function(e){let{src:t,srcSet:a,loading:r,alt:o="",shouldLoad:s}=e,c=l(e,h);return n.createElement("img",i({},c,{decoding:"async",loading:r,src:s?t:void 0,"data-src":s?void 0:t,srcSet:s?a:void 0,"data-srcset":s?void 0:a,alt:o}))},w=function(e){let{fallback:t,sources:a=[],shouldLoad:r=!0}=e,o=l(e,y);const s=o.sizes||(null==t?void 0:t.sizes),c=n.createElement(b,i({},o,t,{sizes:s,shouldLoad:r}));return a.length?n.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:o}=e;return n.createElement("source",{key:`${t}-${o}-${a}`,type:o,media:t,srcSet:r?a:void 0,"data-srcset":r?void 0:a,sizes:s})})),c):c};var E;b.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},w.displayName="Picture",w.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};const v=["fallback"],x=function(e){let{fallback:t}=e,a=l(e,v);return t?n.createElement(w,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",i({},a))};x.displayName="Placeholder",x.propTypes={fallback:r.string,sources:null==(E=w.propTypes)?void 0:E.sources,alt:function(e,t,a){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${a}\`. Validation failed.`):null}};const C=function(e){return n.createElement(n.Fragment,null,n.createElement(w,i({},e)),n.createElement("noscript",null,n.createElement(w,i({},e,{shouldLoad:!0}))))};C.displayName="MainImage",C.propTypes=w.propTypes;const k=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],I=["style","className"],L=e=>e.replace(/\n/g,""),_=function(e,t,a){for(var n=arguments.length,r=new Array(n>3?n-3:0),i=3;i<n;i++)r[i-3]=arguments[i];return e.alt||""===e.alt?o().string.apply(o(),[e,t,a].concat(r)):new Error(`The "alt" prop is required in ${a}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},N={image:o().object.isRequired,alt:_},S=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],$=["style","className"],Z=new Set;let j,T;const P=function(e){let{as:t="div",image:r,style:o,backgroundColor:c,className:m,class:u,onStartLoad:p,onLoad:g,onError:f}=e,h=l(e,S);const{width:y,height:b,layout:w}=r,E=d(y,b,w),{style:v,className:x}=E,C=l(E,$),k=(0,n.useRef)(),I=(0,n.useMemo)((()=>JSON.stringify(r.images)),[r.images]);u&&(m=u);const L=function(e,t,a){let n="";return"fullWidth"===e&&(n=`<div aria-hidden="true" style="padding-top: ${a/t*100}%;"></div>`),"constrained"===e&&(n=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${a}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),n}(w,y,b);return(0,n.useEffect)((()=>{j||(j=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return T=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=k.current.querySelector("[data-gatsby-image-ssr]");if(e&&s())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void Z.add(I);if(T&&Z.has(I))return;let t,n;return j.then((e=>{let{renderImageToString:a,swapPlaceholderImage:l}=e;k.current&&(k.current.innerHTML=a(i({isLoading:!0,isLoaded:Z.has(I),image:r},h)),Z.has(I)||(t=requestAnimationFrame((()=>{k.current&&(n=l(k.current,I,Z,o,p,g,f))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[r]),(0,n.useLayoutEffect)((()=>{Z.has(I)&&T&&(k.current.innerHTML=T(i({isLoading:Z.has(I),isLoaded:Z.has(I),image:r},h)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[r]),(0,n.createElement)(t,i({},C,{style:i({},v,o,{backgroundColor:c}),className:`${x}${m?` ${m}`:""}`,ref:k,dangerouslySetInnerHTML:{__html:L},suppressHydrationWarning:!0}))},F=(0,n.memo)((function(e){return e.image?(0,n.createElement)(P,e):null}));F.propTypes=N,F.displayName="GatsbyImage";const H=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function O(e){return function(t){let{src:a,__imageData:r,__error:o}=t,s=l(t,H);return o&&console.warn(o),r?n.createElement(e,i({image:r},s)):(console.warn("Image not loaded",a),null)}}const z=O((function(e){let{as:t="div",className:a,class:r,style:o,image:s,loading:c="lazy",imgClassName:p,imgStyle:g,backgroundColor:h,objectFit:y,objectPosition:b}=e,w=l(e,k);if(!s)return console.warn("[gatsby-plugin-image] Missing image prop"),null;r&&(a=r),g=i({objectFit:y,objectPosition:b,backgroundColor:h},g);const{width:E,height:v,layout:_,images:N,placeholder:S,backgroundColor:$}=s,Z=d(E,v,_),{style:j,className:T}=Z,P=l(Z,I),F={fallback:void 0,sources:[]};return N.fallback&&(F.fallback=i({},N.fallback,{srcSet:N.fallback.srcSet?L(N.fallback.srcSet):void 0})),N.sources&&(F.sources=N.sources.map((e=>i({},e,{srcSet:L(e.srcSet)})))),n.createElement(t,i({},P,{style:i({},j,o,{backgroundColor:h}),className:`${T}${a?` ${a}`:""}`}),n.createElement(f,{layout:_,width:E,height:v},n.createElement(x,i({},u(S,!1,_,E,v,$,y,b))),n.createElement(C,i({"data-gatsby-image-ssr":"",className:p},w,m("eager"===c,!1,F,c,g)))))})),q=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?o().number.apply(o(),[e,t].concat(n)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},A=new Set(["fixed","fullWidth","constrained"]),R={src:o().string.isRequired,alt:_,width:q,height:q,sizes:o().string,layout:e=>{if(void 0!==e.layout&&!A.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};z.displayName="StaticImage",z.propTypes=R;const D=O(F);D.displayName="StaticImage",D.propTypes=R},3476:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294),r=a(394);const o=r.default.div.withConfig({displayName:"CommonPageContainer__Container",componentId:"sc-l6dl01-0"})(["width:100%;"]),i=(0,r.createGlobalStyle)(['body{font-family:"Noto Sans KR";padding:0;margin:0;div{box-sizing:border-box;}}a{text-decoration:none;color:black;}h1,h2,h3,h4,h5,h6,p{margin:0;}']);function l(e){let{children:t}=e;return n.createElement(o,null,n.createElement(i,null),t)}},9878:function(e,t,a){var n=a(7294);const r="https://classic-95.com";t.Z=e=>{let{title:t,description:a,pathname:o,created_at:i,updated_at:l,image:s,children:c}=e;const d={title:t||"Flash의 블로그",description:a||"누구나 쉽게 따라할 수 있는, 남녀노소 모두를 위한 개발 블로그",image:`${r}${s||"/icon.png"}`,url:`${r}${o||""}`};return n.createElement(n.Fragment,null,n.createElement("title",null,d.title),n.createElement("meta",{name:"description",content:d.description}),n.createElement("meta",{name:"twitter:url",content:d.url}),n.createElement("meta",{name:"twitter:title",content:d.title}),n.createElement("meta",{name:"twitter:url",content:d.url}),n.createElement("meta",{name:"twitter:description",content:d.description}),n.createElement("meta",{name:"twitter:card",content:"summary"}),n.createElement("meta",{property:"twitter:image",content:d.image}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{property:"og:title",content:d.title}),n.createElement("meta",{property:"og:description",content:d.description}),n.createElement("meta",{property:"og:site_name",content:d.title}),n.createElement("meta",{property:"og:image",content:d.image}),n.createElement("meta",{name:"robots",content:"index,follow"}),n.createElement("link",{rel:"apple-touch-icon",href:"/favicon.ico"}),void 0!==i&&n.createElement("script",{type:"application/ld+json"},JSON.stringify({"@context":"http://schema.org","@type":"BlogPosting",author:{"@type":"Person",name:"flash",logo:null},url:d.url,headline:d.title,description:d.description,datePublished:i,dateModified:l||i,image:d.image})),n.createElement("script",{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3926462216067158",crossOrigin:"anonymous"}),c)}},2742:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(1883),r=a(7294),o=a(394),i=a(4764),l=a(4428);const s=o.default.div.withConfig({displayName:"CommonHeader__Container",componentId:"sc-41bxr4-0"})(["width:100%;border-bottom:1px solid #e6e6e6;","{padding:0 34px;}","{padding:0 20px;}"],l.Z.custom(1199),l.Z.custom(767)),c=o.default.div.withConfig({displayName:"CommonHeader__InnerContainer",componentId:"sc-41bxr4-1"})(["max-width:1200px;width:100%;height:80px;margin:auto;display:flex;flex-direction:column;justify-content:center;","{height:68px;}","{height:60px;}"],l.Z.custom(1023),l.Z.custom(767)),d=o.default.h1.withConfig({displayName:"CommonHeader__Label",componentId:"sc-41bxr4-2"})(["font-size:1.25em;color:",";"],i.Z.viloet[6]);function m(){return r.createElement(s,null,r.createElement(c,null,r.createElement(n.Link,{to:"/"},r.createElement(d,null,"잡학다식 블로그"))))}},1006:function(e,t){const a=e=>e<10?`0${e}`:e;t.Z=e=>{const t=new Date(e),n=t.getUTCFullYear()%100,r=t.getMonth()+1,o=t.getDate(),i=t.getHours(),l=t.getMinutes();return`${a(n)}.${a(r)}.${a(o)} ${a(i)}:${a(l)}`}},4428:function(e,t,a){const n=e=>`\n  @media (max-width: ${e}px)\n`,r={xxlarge:n(1920),xlarge:n(1440),large:n(1200),medium:n(1024),small:n(768),xsmall:n(375),custom:n};t.Z=r},4764:function(e,t){t.Z={gray:["#F8F9FA","#F1F3F5","#E9ECEF","#DEE2E6","#CED4DA","#ADB5BD","#868E96","#495057","#343A40","#212529"],viloet:["#f3f0ff","#e5dbff","#d0bfff","#b197fc","#9775fa","#845ef7","#7950f2","#7048e8","#6741d9","#5f3dc4"]}},2174:function(e,t,a){a.r(t),a.d(t,{Head:function(){return k},default:function(){return C}});var n=a(7294),r=a(2742),o=a(3476),i=a(1883),l=a(394),s=a(8032),c=a(4764),d=a(4428),m=a(1006);const u=l.default.div.withConfig({displayName:"HomePostItem__Container",componentId:"sc-1ajofy8-0"})(["width:100%;display:flex;align-items:center;justify-content:space-between;padding:28px 0;border-bottom:1px solid ",";.thumbnail{width:180px;","{width:100px;}}&:hover{h4{color:",";transition:color 0.2s;}span{color:black;transition:color 0.2s;}.more{color:",";transition:color 0.2s;}}"],c.Z.gray[3],d.Z.custom(767),c.Z.viloet[6],c.Z.viloet[6]),p=l.default.div.withConfig({displayName:"HomePostItem__LabelContainer",componentId:"sc-1ajofy8-1"})(["flex:1;margin-right:78px;","{margin-right:60px;}"],d.Z.custom(767)),g=l.default.h4.withConfig({displayName:"HomePostItem__TitleLabel",componentId:"sc-1ajofy8-2"})(["font-size:1.125em;margin-bottom:10px;overflow:hidden;white-space:normal;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;word-break:keep-all;","{font-size:1em;margin-bottom:2px;}"],d.Z.custom(1023)),f=l.default.span.withConfig({displayName:"HomePostItem__Label",componentId:"sc-1ajofy8-3"})(["font-size:0.875em;line-height:1.375rem;color:#666;overflow:hidden;white-space:normal;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;word-break:keep-all;","{font-size:0.75em;}","{-webkit-line-clamp:2;}"],d.Z.custom(1023),d.Z.custom(767)),h=(0,l.default)(f).withConfig({displayName:"HomePostItem__DateLabel",componentId:"sc-1ajofy8-4"})(["margin-bottom:16px;","{margin-bottom:9px;}"],d.Z.custom(1023)),y=l.default.span.withConfig({displayName:"HomePostItem__MoreLabel",componentId:"sc-1ajofy8-5"})(["font-size:0.75em;color:",";"],c.Z.viloet[2]);function b(e){let{slug:t,post:a}=e;const r=(0,n.useMemo)((()=>a.thumbnail?(0,s.c)(a.thumbnail):null),[a.thumbnail]);return n.createElement(i.Link,{to:t},n.createElement(u,null,n.createElement(p,null,n.createElement(g,null,a.title),n.createElement(f,null,a.description),n.createElement(h,{className:"date"},(0,m.Z)(a.created_at)),n.createElement(y,{className:"more"},"더보기 >")),r&&n.createElement(s.G,{className:"thumbnail",image:r,alt:"post thumbnail"})))}const w=l.default.div.withConfig({displayName:"HomeBody__Container",componentId:"sc-1q3u9td-0"})(["width:100%;"]),E=l.default.div.withConfig({displayName:"HomeBody__InnerContainer",componentId:"sc-1q3u9td-1"})(["max-width:860px;margin:auto;padding-top:75px;","{max-width:928px;padding:75px 34px 0;}","{max-width:928px;padding-top:50px;}"],d.Z.custom(1199),d.Z.custom(1023));function v(){const e=(0,i.useStaticQuery)("1301466447");return n.createElement(w,null,n.createElement(E,null,e.allMdx.nodes.map((e=>n.createElement(b,{key:e.id,slug:e.fields.slug,post:e.frontmatter})))))}var x=a(9878);function C(){return n.createElement(o.Z,null,n.createElement(r.Z,null),n.createElement(v,null))}const k=()=>n.createElement(x.Z,{title:"Flash의 블로그"})}}]);
//# sourceMappingURL=component---src-pages-index-tsx-061b2e0bc088f26d2e0b.js.map