"use strict";(self.webpackChunkClassic95=self.webpackChunkClassic95||[]).push([[827],{3839:function(e,t,a){var n=a(1151),l=a(7294);function r(e){const t=Object.assign({p:"p",a:"a",hr:"hr",h2:"h2",span:"span",h3:"h3",pre:"pre",code:"code"},(0,n.a)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.p,null,"markdown, md 또는 mdx 기반의 블로그를 만들 때 가장 많은 선택을 받는 프레임워크들은 크게 세 가지가 있죠."),"\n",l.createElement(t.p,null,"바로 ",l.createElement(t.a,{href:"https://jekyllrb-ko.github.io/"},"jekyll"),", ",l.createElement(t.a,{href:"https://gohugo.io/"},"Hugo"),", ",l.createElement(t.a,{href:"https://www.gatsbyjs.com/"},"Gatsby"),"인데요."),"\n",l.createElement(t.p,null,"이 중 오늘은 Gatsby를 사용해서 블로그를 만드는 방법에 대해 알아보도록 해요."),"\n",l.createElement(t.hr),"\n",l.createElement(t.h2,{id:"1-gatsby-설치-환경-만들기",style:{position:"relative"}},l.createElement(t.a,{href:"#1-gatsby-%EC%84%A4%EC%B9%98-%ED%99%98%EA%B2%BD-%EB%A7%8C%EB%93%A4%EA%B8%B0","aria-label":"1 gatsby 설치 환경 만들기 permalink",className:"anchor-header before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"1. Gatsby 설치 환경 만들기"),"\n",l.createElement(t.p,null,"macOS와 Windows로 나눠서 설명을 할 예정인데 각 항목별로 이미 설치하신 경우에는 바로 스크롤을 아래로 내려주세요."),"\n",l.createElement(t.p,null,"물론 ",l.createElement(t.a,{href:"https://www.gatsbyjs.com/docs/tutorial/getting-started/part-0/#installation-guide"},"공식문서"),"에도 이미 잘 정리되어 있으니 공식문서를 보고 진행하셔도 무방해요."),"\n",l.createElement(t.h3,{id:"1-1-1-macos-nodejs-설치하기",style:{position:"relative"}},l.createElement(t.a,{href:"#1-1-1-macos-nodejs-%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0","aria-label":"1 1 1 macos nodejs 설치하기 permalink",className:"anchor-header before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"1-1-1. macOS Node.js 설치하기"),"\n",l.createElement(t.p,null,"우선 Homebrew가 설치됐다고 가정하고 시작할게요."),"\n",l.createElement(t.p,null,"만약 아직 설치하기 전이라면 ",l.createElement(t.a,{href:"/posts/2023/09/install-homebrew"},"이 포스팅"),"을 보고 따라하시면 되요."),"\n",l.createElement(t.p,null,"brew가 설치된 상태에서 터미널을 열고 아래의 명령어를 실행 시켜요."),"\n",l.createElement(t.p,null,"(만약 설치 중 오류가 발생하면 ",l.createElement(t.a,{href:"https://developer.apple.com/download/more/"},"애플 사이트"),"에서 맥에 로그인한 계정으로 다시 로그인한 후 터미널에서 다시 진행해주세요.)"),"\n",l.createElement(t.p,null,"이후에 소프트웨어 라이센스 동의 여부를 물어보면 동의하고 진행해주세요."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"xcode-select --install\n")),"\n",l.createElement(t.p,null,"이후 homebrew를 사용해서 node.js를 설치해줘요."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"brew install node\n")),"\n",l.createElement(t.h3,{id:"1-1-2-macos-git-설치하기",style:{position:"relative"}},l.createElement(t.a,{href:"#1-1-2-macos-git-%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0","aria-label":"1 1 2 macos git 설치하기 permalink",className:"anchor-header before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"1-1-2. macOS Git 설치하기"),"\n",l.createElement(t.p,null,"git은 개발자라면 기본적으로 사용하는 프로그램이기 때문에 이미 다 설치한 상태겠지만 혹시나 해서 적어둘게요!"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"brew install git\n")),"\n",l.createElement(t.p,null,"설치 완료 후 ",l.createElement(t.a,{href:"https://github.com/"},"Github")," 계정을 등록해주세요."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},'git config --global user.name "your github name"\ngit config --global user.email "your github email"\n')),"\n",l.createElement(t.h3,{id:"1-2-1-windows-nodejs-설치하기",style:{position:"relative"}},l.createElement(t.a,{href:"#1-2-1-windows-nodejs-%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0","aria-label":"1 2 1 windows nodejs 설치하기 permalink",className:"anchor-header before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"1-2-1. Windows Node.js 설치하기"),"\n",l.createElement(t.p,null,"Windows에서는 설치가 매우 간단해요."),"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"https://nodejs.org/en"},"공식 사이트"),"를 방문해서 LTS가 붙은 버튼을 클릭해주세요."),"\n",l.createElement(t.p,null,"그 후 다운받은 .exe 파일을 실행시켜주세요."),"\n",l.createElement(t.p,null,"설치 중 이 화면이 나오면 체크박스를 클릭 후 진행해주세요!"),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 495px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/917ebde94a94323b727f807bc2b6f3ad/498f3/gatsby-mdx-blog-1-1.webp"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 100%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/webp;base64,UklGRnwAAABXRUJQVlA4IHAAAABwBACdASoUABQAPtFapU0oJSOiMBgIAQAaCWcAAC51b9qkOS/Y8MPLXCFwqAD+7W7cvnWairUZIDvPUkDdQdGsm1DyTnerfvmAvRsFa6R7NJYdB4BkfdVn2A/UlT70JzgY7vlF2E2J+SwSe52yAAAA\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="node.js chocolatey"\n        title=""\n        src="/static/917ebde94a94323b727f807bc2b6f3ad/498f3/gatsby-mdx-blog-1-1.webp"\n        srcset="/static/917ebde94a94323b727f807bc2b6f3ad/192c4/gatsby-mdx-blog-1-1.webp 215w,\n/static/917ebde94a94323b727f807bc2b6f3ad/b65b2/gatsby-mdx-blog-1-1.webp 430w,\n/static/917ebde94a94323b727f807bc2b6f3ad/498f3/gatsby-mdx-blog-1-1.webp 495w"\n        sizes="(max-width: 495px) 100vw, 495px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",l.createElement(t.h3,{id:"1-2-2-windows-git-설치하기",style:{position:"relative"}},l.createElement(t.a,{href:"#1-2-2-windows-git-%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0","aria-label":"1 2 2 windows git 설치하기 permalink",className:"anchor-header before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"1-2-2. Windows Git 설치하기"),"\n",l.createElement(t.p,null,"Git도 Windows에서는 설치가 매우 간단해요."),"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"https://gitforwindows.org/"},"공식 사이트"),"를 방문 후 Download 버튼을 클릭해서 설치시고 .exe 파일을 실행해주세요."),"\n",l.createElement(t.h3,{id:"1-3-gatsby-cli-설치-macos-windows-공통",style:{position:"relative"}},l.createElement(t.a,{href:"#1-3-gatsby-cli-%EC%84%A4%EC%B9%98-macos-windows-%EA%B3%B5%ED%86%B5","aria-label":"1 3 gatsby cli 설치 macos windows 공통 permalink",className:"anchor-header before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"1-3. gatsby-cli 설치 (macOS, Windows 공통)"),"\n",l.createElement(t.p,null,"이제 gatsby command-line-interface를 설치해요."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"npm install -g gatsby-cli\n")),"\n",l.createElement(t.p,null,"설치가 완료되면 잘 설치됐나 확인해요."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"gatsby --version\n# Gatsby CLI version: 5.12.4\n# Gatsby version: 5.12.9\n")),"\n",l.createElement(t.h2,{id:"2-gatsby-프로젝트-생성하기",style:{position:"relative"}},l.createElement(t.a,{href:"#2-gatsby-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0","aria-label":"2 gatsby 프로젝트 생성하기 permalink",className:"anchor-header before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"2. Gatsby 프로젝트 생성하기"),"\n",l.createElement(t.p,null,"이제 드디어 Gatsby 프로젝트를 생성해볼거에요!"),"\n",l.createElement(t.p,null,"이미 틀이 잡혀있는 템플릿을 사용해서 바로 만들어도 되지만 오늘은 배워보는 것이니 만큼 초기 상태로 프로젝트를 생성해보도록 해요!"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"# 프로젝트 생성을 원하는 폴더로 이동 후 진행해주세요.\n\ngatsby new\n")),"\n",l.createElement(t.p,null,"원하시는 블로그 이름을 입력해주세요."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"What would you like to call your site?\n✔ · Classic95의 블로그\n")),"\n",l.createElement(t.p,null,"원하시는 프로젝트명을 설정해주세요."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"What would you like to name the folder where your site will be created?\n✔ {현재 폴더명}/ Classic95\n")),"\n",l.createElement(t.p,null,"js와 ts 중에 선택해주세요."),"\n",l.createElement(t.p,null,"저는 당연히 ts를 선택했는데 앞으로 이 글을 계속 따라오실 분들은 ts를 선택해주시고 아니신 분들은 원하시는 언어를 선택해주세요."),"\n",l.createElement(t.p,null,"앞으로는 ts가 오픈 소스들이나 공동 작업 프로젝트 혹은 회사 등 여러 곳에서 많이 정착될 것으로 예상되니 사용하시는 걸 권장드려요!"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"Will you be using JavaScript or TypeScript?\n  JavaScript\n❯ TypeScript\n")),"\n",l.createElement(t.p,null,"Content Management System을 선택하는 부분인데 이 포스팅의 마지막은 Github에 배포하는 게 목표이기 때문에  ",l.createElement(t.code,null,"No (or I'll add it later)"),"를 선택할게요."),"\n",l.createElement(t.p,null,"물론, 추후에 원하는 CMS를 선택할 수 있어요."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"? Will you be using a CMS?\n(Single choice) Arrow keys to move, enter to confirm\n❯ No (or I'll add it later)\n  –\n  Contentful\n  DatoCMS\n  Netlify CMS\n  Sanity\n  Shopify\n  WordPress\n")),"\n",l.createElement(t.p,null,"원하시는 스타일링 시스템을 선택하시면 gatsby 플러그인 설정을 자동으로 해줘서 편한 기능이에요."),"\n",l.createElement(t.p,null,"저는 ",l.createElement(t.code,null,"styled-components"),"를 선택했어요."),"\n",l.createElement(t.p,null,"이건 원하시는 걸 선택해주세요."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"? Would you like to install a styling system?\n(Single choice) Arrow keys to move, enter to confirm\n  No (or I'll add it later)\n  –\n  Emotion\n  PostCSS\n  Sass\n❯ styled-components\n  Theme UI\n  vanilla-extract\n  Tailwind CSS\n")),"\n",l.createElement(t.p,null,"이번에는 프로젝트 생성에 맞춰 추가되길 원하는 기능들을 선택해주세요."),"\n",l.createElement(t.p,null,"저는 아래의 네 가지를 선택했어요. 이 블로그 글들을 쭉 따라가실 거라면 제가 선택한 걸 동일하게 선택하는 걸 추천드려요."),"\n",l.createElement(t.p,null,"다 따라하지 않으시더라도 이 중 ",l.createElement(t.code,null,"Add Markdown and MDX support"),"는 반드시 선택해주세요!"),"\n",l.createElement(t.p,null,"물론 여기서 선택하지 않으셔도 추후에 플러그인을 수동으로 설정하실 수 있으니 걱정마세요!"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},'? Would you like to install additional features with other plugins?\n(Multiple choice) Use arrow keys to move, spacebar to select, and confirm with an enter on "Done"\n ◯ Add the Google gtag script for e.g. Google Analytics\n ◉ Add responsive images\n ◉ Add an automatic sitemap\n ◉ Generate a manifest file\n❯◉ Add Markdown and MDX support\n ◯ Add Markdown support (without MDX)\n  ─────\n  Done\n')),"\n",l.createElement(t.p,null,"마지막으로 지금까지 설정한 것들을 확인하는 절차에요."),"\n",l.createElement(t.p,null,"실수하신 게 없으시다면 확인하신 후 Yes를 입력해주세요."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"Thanks! Here's what we'll now do:\n\n    🛠  Create a new Gatsby site in the folder Classic95\n    🎨 Get you set up to use styled-components for styling your site\n    🔌 Install gatsby-plugin-image, gatsby-plugin-sitemap,\ngatsby-plugin-manifest, gatsby-plugin-mdx\n\n\n? Shall we do this? (Y/n) › Yes\n")),"\n",l.createElement(t.h2,{id:"3-gastby-프로젝트-실행",style:{position:"relative"}},l.createElement(t.a,{href:"#3-gastby-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%8B%A4%ED%96%89","aria-label":"3 gastby 프로젝트 실행 permalink",className:"anchor-header before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"3. Gastby 프로젝트 실행"),"\n",l.createElement(t.p,null,"설치가 완료되면 아래의 명령어들을 입력해주세요."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"cd {your project name}\n\nyarn develop\n")),"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"http://localhost:8000"},"http://localhost:8000")," 주소를 브라우저로 입력했을 때 아래와 같은 화면이 나오면 성공이에요!"),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 860px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/5f587489b2d4d2ab42bccc6c9a3b7e98/8352d/gatsby-mdx-blog-1-2.webp"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 100%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/webp;base64,UklGRmIAAABXRUJQVlA4IFYAAACwBACdASoUABQAPtFcp04oJSOiKAqpABoJaQAAL3h/8tokj/SpcBzP7pUhpFgAAP72CnrdzN096xXSCaLZ12oH1cC34gBZ8dw4EUhJv2HnT0a6Y0gAAA==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="gatsby new project default page"\n        title=""\n        src="/static/5f587489b2d4d2ab42bccc6c9a3b7e98/e5dae/gatsby-mdx-blog-1-2.webp"\n        srcset="/static/5f587489b2d4d2ab42bccc6c9a3b7e98/192c4/gatsby-mdx-blog-1-2.webp 215w,\n/static/5f587489b2d4d2ab42bccc6c9a3b7e98/b65b2/gatsby-mdx-blog-1-2.webp 430w,\n/static/5f587489b2d4d2ab42bccc6c9a3b7e98/e5dae/gatsby-mdx-blog-1-2.webp 860w,\n/static/5f587489b2d4d2ab42bccc6c9a3b7e98/696e2/gatsby-mdx-blog-1-2.webp 1290w,\n/static/5f587489b2d4d2ab42bccc6c9a3b7e98/8352d/gatsby-mdx-blog-1-2.webp 1378w"\n        sizes="(max-width: 860px) 100vw, 860px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",l.createElement(t.hr),"\n",l.createElement(t.h2,{id:"정리하며",style:{position:"relative"}},l.createElement(t.a,{href:"#%EC%A0%95%EB%A6%AC%ED%95%98%EB%A9%B0","aria-label":"정리하며 permalink",className:"anchor-header before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"정리하며"),"\n",l.createElement(t.p,null,"오늘은 Gatsby 블로그 설치 환경과 초기 프로젝트를 생성하고 실행하는 법에 대해 알아봤어요."),"\n",l.createElement(t.p,null,"다음 포스팅에서는 mdx 기반으로 글을 쓰는 문법에 대해 알아보도록 해요."))}t.Z=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.a)(),e.components);return t?l.createElement(t,e,l.createElement(r,e)):r(e)}},5619:function(e,t,a){a.a(e,(async function(e,n){try{a.r(t),a.d(t,{Head:function(){return k},default:function(){return B}});var l=a(3839),r=a(7294),c=a(394),s=a(1151),o=a(1006),i=a(4428),m=a(4764),d=a(7526),p=a(9878),h=a(6337),g=a(9420),b=e([d]);d=(b.then?(await b)():b)[0];const E=c.default.div.withConfig({displayName:"PostTemplate__Container",componentId:"sc-1y3rc8p-0"})(["width:100%;"]),f=c.default.div.withConfig({displayName:"PostTemplate__BodyContainer",componentId:"sc-1y3rc8p-1"})(["width:100%;"]),y=c.default.div.withConfig({displayName:"PostTemplate__ContentContainer",componentId:"sc-1y3rc8p-2"})(["width:100%;max-width:860px;margin:auto;padding-top:78px;margin-bottom:40px;","{max-width:928px;padding:78px 34px 0;}","{padding:78px 20px 0;}"],i.Z.custom(1199),i.Z.custom(767)),w=c.default.h1.withConfig({displayName:"PostTemplate__TitleLabel",componentId:"sc-1y3rc8p-3"})(["font-size:1.5em;font-weight:400;color:",";margin-bottom:10px;"],m.Z.viloet[6]),v=c.default.div.withConfig({displayName:"PostTemplate__DateContainer",componentId:"sc-1y3rc8p-4"})(["margin-bottom:12px;time{display:block;color:",";font-size:0.8em;}"],m.Z.gray[6]),x=c.default.div.withConfig({displayName:"PostTemplate__MdxContainer",componentId:"sc-1y3rc8p-5"})(["width:100%;margin-bottom:66px;h2,h3,h4,h5,h6{font-weight:400;}.h2-div{margin:29px 0 22px;padding-left:10px;padding-bottom:2px;border-left:5px solid ",";border-top-left-radius:2px;border-bottom-left-radius:2px;}h2{font-size:1.5em;","{font-size:1.25em;}.anchor-header{left:-15px;}}.anchor-header{svg{width:20px;height:20px;fill:",";}}h3{margin:22px 0 15px;}h4{margin-bottom:10px;}h6{color:",";}a:not(.anchor-header){color:",";&:hover{color:",";font-weight:500;font-size:1.05em;transition:0.5s;}}p{font-size:1em;margin-bottom:22px;line-height:1.6;}hr{background-color:",";height:1px;border:0;margin:20px 0 40px;}.gatsby-resp-image-wrapper{margin-bottom:20px;}li{font-size:1em;margin-bottom:6px;}pre{margin:0;}"],m.Z.viloet[6],i.Z.custom(767),m.Z.viloet[6],m.Z.gray[5],m.Z.viloet[5],m.Z.viloet[7],m.Z.gray[2]),C=c.default.div.withConfig({displayName:"PostTemplate__FooterContainer",componentId:"sc-1y3rc8p-6"})(["width:100%;"]),S={h2:e=>r.createElement("div",{className:"h2-div"},r.createElement("h2",e)),code:d.Z};function A(e){let{data:t,children:a,location:n,pageContext:l}=e;const c=(0,r.useMemo)((()=>n.pathname.includes("/en/")?"en":"ko"),[n.pathname]);return r.createElement(E,null,r.createElement(f,null,r.createElement(y,null,r.createElement(w,null,t.mdx.frontmatter.title),r.createElement(v,null,r.createElement("time",{dateTime:t.mdx.frontmatter.created_at},(0,o.Z)(t.mdx.frontmatter.created_at)),t.mdx.frontmatter.updated_at&&r.createElement("time",{dateTime:t.mdx.frontmatter.updated_at},"ko"===c?"수정: ":"edited at ",(0,o.Z)(t.mdx.frontmatter.updated_at))),r.createElement(x,null,r.createElement(s.Z,{components:S},a)),r.createElement(g.Z,{prev:l.prev,next:l.next,lang:c}))),r.createElement(C,null,r.createElement(h.Z,null)))}function B(e){return r.createElement(A,e,r.createElement(l.Z,e))}const k=e=>{let{data:t}=e;return r.createElement(p.Z,{title:t.mdx.frontmatter.title,description:t.mdx.frontmatter.description,pathname:t.mdx.fields.slug,image:t.mdx.frontmatter.thumbnail.childImageSharp.fixed.src,created_at:t.mdx.frontmatter.created_at,updated_at:t.mdx.frontmatter.updated_at})};n()}catch(u){n(u)}}))}}]);
//# sourceMappingURL=component---src-components-post-post-template-tsx-content-file-path-contents-posts-ko-2023-09-gatsby-mdx-blog-1-mdx-8af08df6efdade59648b.js.map