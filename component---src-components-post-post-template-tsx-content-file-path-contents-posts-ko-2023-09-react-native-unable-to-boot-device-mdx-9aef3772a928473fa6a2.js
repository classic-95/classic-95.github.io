"use strict";(self.webpackChunkClassic95=self.webpackChunkClassic95||[]).push([[928],{5332:function(e,t,a){var n=a(1151),l=a(7294),o=a(6911);function i(e){const t=Object.assign({span:"span",p:"p",code:"code",hr:"hr",h2:"h2",a:"a",h3:"h3",ul:"ul",li:"li"},(0,n.a)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 530px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/d11db51c6197afc62acb4312f1aeecd9/bc521/boot-0.webp"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 100%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/webp;base64,UklGRpgAAABXRUJQVlA4IIwAAABwBACdASoUABQAPtFgqU+oJSOjKAgBABoJYwDE2BEdGJRK25+aoulNv6SOAAD+2OrdImC+QAUduNrO9KxSmGvFFnQzYCgShr4/v3Lc0M2k1t+jvJ6wdchrOt6MjcYa5mnn7rDTX+KGoAQ1jn9O8ZOZHfxJ9HdklwYAGKADl5ZS8r6m4fBrdjB5BoAAAA==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="ios simulator Unable to boot device in current state: Booted"\n        title=""\n        src="/static/d11db51c6197afc62acb4312f1aeecd9/bc521/boot-0.webp"\n        srcset="/static/d11db51c6197afc62acb4312f1aeecd9/192c4/boot-0.webp 215w,\n/static/d11db51c6197afc62acb4312f1aeecd9/b65b2/boot-0.webp 430w,\n/static/d11db51c6197afc62acb4312f1aeecd9/bc521/boot-0.webp 530w"\n        sizes="(max-width: 530px) 100vw, 530px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",l.createElement(t.p,null,"오늘은 react-native에서 ios simulator를 실행시킬 때 종종 발생하는 ",l.createElement(t.code,null,"unable to boot device in current state: Booted")," 오류를 해결하는 방법에 대해 알아봐요."),"\n",l.createElement(t.p,null,"오류가 나는 이유부터 알아보자면 시뮬레이터가 실행 상태"),"\n",l.createElement(t.p,null,"그럼 이제 해결 방법에 대해 알아볼까요?"),"\n",l.createElement(t.hr),"\n",l.createElement(t.h2,{id:"1-해결-방법",style:{position:"relative"}},l.createElement(t.a,{href:"#1-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95","aria-label":"1 해결 방법 permalink",className:"anchor-header before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"1. 해결 방법"),"\n",l.createElement(t.h3,{id:"1-1-ios-simulator-settings-켜기",style:{position:"relative"}},l.createElement(t.a,{href:"#1-1-ios-simulator-settings-%EC%BC%9C%EA%B8%B0","aria-label":"1 1 ios simulator settings 켜기 permalink",className:"anchor-header before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"1-1. ios simulator settings 켜기"),"\n",l.createElement(t.p,null,"ios 시뮬레이터를 켠 상태에서 아래의 이미지와 같이 좌측 상단의 메뉴바에서 ",l.createElement(t.code,null,"Simulator -> Settings...")," 를 클릭해주세요."),"\n",l.createElement(t.p,null,"혹은 시뮬레이터를 켠 상태에서 ",l.createElement(t.code,null,"⌘ + ,"),"를 함께 눌러주세요."),"\n",l.createElement("img",{src:o.Z,style:{width:250,margin:"auto",display:"block",marginBottom:20},alt:"ios simulator settings"}),"\n",l.createElement(t.h3,{id:"1-2-simulator-lifetime-변경",style:{position:"relative"}},l.createElement(t.a,{href:"#1-2-simulator-lifetime-%EB%B3%80%EA%B2%BD","aria-label":"1 2 simulator lifetime 변경 permalink",className:"anchor-header before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"1-2. Simulator lifetime 변경"),"\n",l.createElement(t.p,null,"아래의 이미지와 같이 Simulator lifetime 부분의 ",l.createElement(t.code,null,"When Simulator starts boot the most recently used simulator"),"를 체크 해제해주세요."),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 860px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/d9dd05d3715a62bee68ee7e5f4e754cb/f6943/boot-2.webp"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 100%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/webp;base64,UklGRmgAAABXRUJQVlA4IFwAAAAQBACdASoUABQAPtFaqE4oJSQiKAqpABoJZxifJ3qQ784TiMnN+e+0AAD+7oDE7f6yDDSQC/qYPC6b4mXcvzUSP3e1alxoSVf3VtK/f07qJw+vRZ+Yr/xsEw4AAA==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="ios simulator lifetime &quot;When Simulator starts boot the most recently used simulator&quot;"\n        title=""\n        src="/static/d9dd05d3715a62bee68ee7e5f4e754cb/e5dae/boot-2.webp"\n        srcset="/static/d9dd05d3715a62bee68ee7e5f4e754cb/192c4/boot-2.webp 215w,\n/static/d9dd05d3715a62bee68ee7e5f4e754cb/b65b2/boot-2.webp 430w,\n/static/d9dd05d3715a62bee68ee7e5f4e754cb/e5dae/boot-2.webp 860w,\n/static/d9dd05d3715a62bee68ee7e5f4e754cb/f6943/boot-2.webp 1152w"\n        sizes="(max-width: 860px) 100vw, 860px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",l.createElement(t.hr),"\n",l.createElement(t.h2,{id:"참고",style:{position:"relative"}},l.createElement(t.a,{href:"#%EC%B0%B8%EA%B3%A0","aria-label":"참고 permalink",className:"anchor-header before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"참고"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://stackoverflow.com/questions/24135067/unable-to-boot-device-in-current-state-booted/71249396#71249396"},"stack overflow")),"\n"),"\n",l.createElement(t.hr),"\n",l.createElement(t.h2,{id:"정리하며",style:{position:"relative"}},l.createElement(t.a,{href:"#%EC%A0%95%EB%A6%AC%ED%95%98%EB%A9%B0","aria-label":"정리하며 permalink",className:"anchor-header before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"정리하며"),"\n",l.createElement(t.p,null,"오늘은 react-native에서 ios simulator를 실행시킬 때 종종 발생하는 ",l.createElement(t.code,null,"unable to boot device in current state: Booted")," 오류를 해결하는 방법에 대해 알아봤어요."),"\n",l.createElement(t.p,null,"이미지와 함께 보면서 따라오면 큰 어려움 없이 해결하실 수 있으니 차근차근 따라해서 해결하셨으면 좋겠어요."))}t.Z=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.a)(),e.components);return t?l.createElement(t,e,l.createElement(i,e)):i(e)}},6249:function(e,t,a){a.a(e,(async function(e,n){try{a.r(t),a.d(t,{Head:function(){return _},default:function(){return C}});var l=a(5332),o=a(7294),i=a(394),r=a(1151),c=a(1006),s=a(4428),d=a(4764),m=a(7526),p=a(9878),h=a(6337),u=a(9420),b=e([m]);m=(b.then?(await b)():b)[0];const f=i.default.div.withConfig({displayName:"PostTemplate__Container",componentId:"sc-1y3rc8p-0"})(["width:100%;"]),v=i.default.div.withConfig({displayName:"PostTemplate__BodyContainer",componentId:"sc-1y3rc8p-1"})(["width:100%;"]),E=i.default.div.withConfig({displayName:"PostTemplate__ContentContainer",componentId:"sc-1y3rc8p-2"})(["width:100%;max-width:860px;margin:auto;padding-top:78px;margin-bottom:40px;","{max-width:928px;padding:78px 34px 0;}","{padding:78px 20px 0;}"],s.Z.custom(1199),s.Z.custom(767)),w=i.default.h1.withConfig({displayName:"PostTemplate__TitleLabel",componentId:"sc-1y3rc8p-3"})(["font-size:1.5em;font-weight:400;color:",";margin-bottom:10px;"],d.Z.viloet[6]),x=i.default.div.withConfig({displayName:"PostTemplate__DateContainer",componentId:"sc-1y3rc8p-4"})(["margin-bottom:12px;time{display:block;color:",";font-size:0.8em;}"],d.Z.gray[6]),y=i.default.div.withConfig({displayName:"PostTemplate__MdxContainer",componentId:"sc-1y3rc8p-5"})(["width:100%;margin-bottom:66px;h2,h3,h4,h5,h6{font-weight:400;}.h2-div{margin:29px 0 22px;padding-left:10px;padding-bottom:2px;border-left:5px solid ",";border-top-left-radius:2px;border-bottom-left-radius:2px;}h2{font-size:1.5em;","{font-size:1.25em;}.anchor-header{left:-15px;}}.anchor-header{svg{width:20px;height:20px;fill:",";}}h3{margin:22px 0 15px;}h4{margin-bottom:10px;}h6{color:",";}a:not(.anchor-header){color:",";&:hover{color:",";font-weight:500;font-size:1.05em;transition:0.5s;}}p{font-size:1em;margin-bottom:22px;line-height:1.6;}hr{background-color:",";height:1px;border:0;margin:20px 0 40px;}.gatsby-resp-image-wrapper{margin-bottom:20px;}li{font-size:1em;margin-bottom:6px;}pre{margin:0;}"],d.Z.viloet[6],s.Z.custom(767),d.Z.viloet[6],d.Z.gray[5],d.Z.viloet[5],d.Z.viloet[7],d.Z.gray[2]),A=i.default.div.withConfig({displayName:"PostTemplate__FooterContainer",componentId:"sc-1y3rc8p-6"})(["width:100%;"]),S={h2:e=>o.createElement("div",{className:"h2-div"},o.createElement("h2",e)),code:m.Z};function B(e){let{data:t,children:a,location:n,pageContext:l}=e;const i=(0,o.useMemo)((()=>n.pathname.includes("/en/")?"en":"ko"),[n.pathname]);return o.createElement(f,null,o.createElement(v,null,o.createElement(E,null,o.createElement(w,null,t.mdx.frontmatter.title),o.createElement(x,null,o.createElement("time",{dateTime:t.mdx.frontmatter.created_at},(0,c.Z)(t.mdx.frontmatter.created_at)),t.mdx.frontmatter.updated_at&&o.createElement("time",{dateTime:t.mdx.frontmatter.updated_at},"ko"===i?"수정: ":"edited at ",(0,c.Z)(t.mdx.frontmatter.updated_at))),o.createElement(y,null,o.createElement(r.Z,{components:S},a)),o.createElement(u.Z,{prev:l.prev,next:l.next,lang:i}))),o.createElement(A,null,o.createElement(h.Z,null)))}function C(e){return o.createElement(B,e,o.createElement(l.Z,e))}const _=e=>{let{data:t}=e;return o.createElement(p.Z,{title:t.mdx.frontmatter.title,description:t.mdx.frontmatter.description,pathname:t.mdx.fields.slug,image:t.mdx.frontmatter.thumbnail.childImageSharp.fixed.src,created_at:t.mdx.frontmatter.created_at,updated_at:t.mdx.frontmatter.updated_at})};n()}catch(g){n(g)}}))},6911:function(e,t,a){t.Z=a.p+"static/boot-1-1a7492d4628ff856d2f0e263273a5463.webp"}}]);
//# sourceMappingURL=component---src-components-post-post-template-tsx-content-file-path-contents-posts-ko-2023-09-react-native-unable-to-boot-device-mdx-9aef3772a928473fa6a2.js.map