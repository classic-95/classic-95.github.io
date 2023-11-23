"use strict";(self.webpackChunkClassic95=self.webpackChunkClassic95||[]).push([[811],{1579:function(e,t,a){var n=a(1151),l=a(7294);function o(e){const t=Object.assign({p:"p",a:"a",hr:"hr",h2:"h2",span:"span",h3:"h3",pre:"pre",code:"code"},(0,n.a)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.p,null,"There are three main frameworks that are most popular when creating markdown, md, or mdx-based blogs."),"\n",l.createElement(t.p,null,"Those are ",l.createElement(t.a,{href:"https://jekyllrb-ko.github.io/"},"jekyll"),", ",l.createElement(t.a,{href:"https://gohugo.io/"},"Hugo"),", and ",l.createElement(t.a,{href:"https://www.gatsbyjs.com/"},"Gatsby"),"."),"\n",l.createElement(t.p,null,"Among them, today we will learn how to create a blog using Gatsby."),"\n",l.createElement(t.hr),"\n",l.createElement(t.h2,{id:"1-create-a-gatsby-installation-environment",style:{position:"relative"}},l.createElement(t.a,{href:"#1-create-a-gatsby-installation-environment","aria-label":"1 create a gatsby installation environment permalink",className:"anchor before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"1. Create a Gatsby installation environment"),"\n",l.createElement(t.p,null,"I will explain this separately into macOS and Windows, but if you have already installed each item, please scroll down immediately."),"\n",l.createElement(t.p,null,"Of course, it is already well organized in ",l.createElement(t.a,{href:"https://www.gatsbyjs.com/docs/tutorial/getting-started/part-0/#installation-guide"},"the official document"),", so you can proceed by looking at the official document."),"\n",l.createElement(t.h3,{id:"1-1-1-macos-installing-nodejs",style:{position:"relative"}},l.createElement(t.a,{href:"#1-1-1-macos-installing-nodejs","aria-label":"1 1 1 macos installing nodejs permalink",className:"anchor before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"1-1-1. [macOS] Installing Node.js"),"\n",l.createElement(t.p,null,"First, let's start by assuming that Homebrew is installed."),"\n",l.createElement(t.p,null,"If you haven't installed it yet, you can read ",l.createElement(t.a,{href:"/posts/2023/09/en/install-homebrew"},"this post")," and follow along."),"\n",l.createElement(t.p,null,"With Homebrew installed, open a terminal and run the command below."),"\n",l.createElement(t.p,null,"(If an error occurs during installation, log back in to the account you used to log in to your Mac on ",l.createElement(t.a,{href:"https://developer.apple.com/download/more/"},"the Apple site")," and proceed again in the terminal.)"),"\n",l.createElement(t.p,null,"When the terminal asks you to agree to the software license, agree and proceed."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"xcode-select --install\n")),"\n",l.createElement(t.p,null,"Afterwards, install node.js using Homebrew."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"brew install node\n")),"\n",l.createElement(t.h3,{id:"1-1-2-macos-installing-git",style:{position:"relative"}},l.createElement(t.a,{href:"#1-1-2-macos-installing-git","aria-label":"1 1 2 macos installing git permalink",className:"anchor before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"1-1-2. [macOS] Installing Git"),"\n",l.createElement(t.p,null,"Since git is a program that developers basically use, you probably already have it installed, but I'll write it down just in case!"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"brew install git\n")),"\n",l.createElement(t.p,null,"After installation is complete, register your ",l.createElement(t.a,{href:"https://github.com/"},"Github")," account."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},'git config --global user.name "your github name"\ngit config --global user.email "your github email"\n')),"\n",l.createElement(t.h3,{id:"1-2-1-windows-installing-nodejs",style:{position:"relative"}},l.createElement(t.a,{href:"#1-2-1-windows-installing-nodejs","aria-label":"1 2 1 windows installing nodejs permalink",className:"anchor before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"1-2-1. [Windows] Installing Node.js"),"\n",l.createElement(t.p,null,"Installation on Windows is very simple."),"\n",l.createElement(t.p,null,"Please visit ",l.createElement(t.a,{href:"https://nodejs.org/en"},"the official Site")," and click the button with LTS."),"\n",l.createElement(t.p,null,"After that, run the downloaded .exe file."),"\n",l.createElement(t.p,null,"If this screen appears during installation, click the checkbox and proceed!"),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 495px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/917ebde94a94323b727f807bc2b6f3ad/19998/gatsby-mdx-blog-1-1.webp"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 78.13953488372094%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/webp;base64,UklGRmQAAABXRUJQVlA4IFgAAADQAwCdASoUABAAPtFUo0uoJKMhsAgBABoJaQAAW+FYIqrf9ubDqAAA/u2wF6C52Sg+qda0IpT34/GuFDcCjn9Mp3vlmCo9U5991g0DRNdfraJ2ibAHAAAA\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="node.js chocolatey"\n        title=""\n        src="/static/917ebde94a94323b727f807bc2b6f3ad/19998/gatsby-mdx-blog-1-1.webp"\n        srcset="/static/917ebde94a94323b727f807bc2b6f3ad/4bbe2/gatsby-mdx-blog-1-1.webp 215w,\n/static/917ebde94a94323b727f807bc2b6f3ad/866c5/gatsby-mdx-blog-1-1.webp 430w,\n/static/917ebde94a94323b727f807bc2b6f3ad/19998/gatsby-mdx-blog-1-1.webp 495w"\n        sizes="(max-width: 495px) 100vw, 495px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",l.createElement(t.h3,{id:"1-2-2-windows-installing-git",style:{position:"relative"}},l.createElement(t.a,{href:"#1-2-2-windows-installing-git","aria-label":"1 2 2 windows installing git permalink",className:"anchor before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"1-2-2. [Windows] Installing Git"),"\n",l.createElement(t.p,null,"Git is also very simple to install on Windows."),"\n",l.createElement(t.p,null,"Visit the ",l.createElement(t.a,{href:"https://gitforwindows.org/"},"the official site")," and click the Download button to install and run the .exe file."),"\n",l.createElement(t.h3,{id:"1-3-installing-gatsby-cli-macos-windows",style:{position:"relative"}},l.createElement(t.a,{href:"#1-3-installing-gatsby-cli-macos-windows","aria-label":"1 3 installing gatsby cli macos windows permalink",className:"anchor before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"1-3. Installing gatsby-cli (macOS, Windows)"),"\n",l.createElement(t.p,null,"Now install gatsby command-line-interface."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"npm install -g gatsby-cli\n")),"\n",l.createElement(t.p,null,"When installation is complete, check to see if it was installed properly."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"gatsby --version\n# Gatsby CLI version: 5.12.4\n# Gatsby version: 5.12.9\n")),"\n",l.createElement(t.h2,{id:"2-creating-a-gatsby-project",style:{position:"relative"}},l.createElement(t.a,{href:"#2-creating-a-gatsby-project","aria-label":"2 creating a gatsby project permalink",className:"anchor before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"2. Creating a Gatsby project"),"\n",l.createElement(t.p,null,"Now we will finally create the Gatsby project!"),"\n",l.createElement(t.p,null,"You can create it right away using a template that is already in place, but since we are learning today, let's create the project in its initial state!"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"# Please move to the folder where you want to create the project and proceed.\n\ngatsby new\n")),"\n",l.createElement(t.p,null,"Please enter your desired blog name."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"What would you like to call your site?\n✔ · Classic95's blog\n")),"\n",l.createElement(t.p,null,"Please set the desired project name."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"What would you like to name the folder where your site will be created?\n✔ {Current folder name}/ Classic95\n")),"\n",l.createElement(t.p,null,"Please choose between js and ts."),"\n",l.createElement(t.p,null,"Of course, I chose ts, but if you will continue to follow this article in the future, please select ts. If not, please select your preferred language."),"\n",l.createElement(t.p,null,"In the future, ts is expected to become established in many places such as open source, collaborative projects, and companies, so we recommend using it!"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"Will you be using JavaScript or TypeScript?\n  JavaScript\n❯ TypeScript\n")),"\n",l.createElement(t.p,null,"This is the part where you select the Content Management System, but since the goal of the last part of this post is to distribute it to Github, I will choose No (or I'll add it later)."),"\n",l.createElement(t.p,null,"Of course, you can choose the CMS you want later."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"? Will you be using a CMS?\n(Single choice) Arrow keys to move, enter to confirm\n❯ No (or I'll add it later)\n  –\n  Contentful\n  DatoCMS\n  Netlify CMS\n  Sanity\n  Shopify\n  WordPress\n")),"\n",l.createElement(t.p,null,"This is a convenient feature as it automatically configures the gatsby plugin settings when you select the styling system you want."),"\n",l.createElement(t.p,null,"I chose styled-components."),"\n",l.createElement(t.p,null,"Please choose what you want."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"? Would you like to install a styling system?\n(Single choice) Arrow keys to move, enter to confirm\n  No (or I'll add it later)\n  –\n  Emotion\n  PostCSS\n  Sass\n❯ styled-components\n  Theme UI\n  vanilla-extract\n  Tailwind CSS\n")),"\n",l.createElement(t.p,null,"This time, please select the features you want to add when creating the project."),"\n",l.createElement(t.p,null,"I chose the four below. If you are going to follow these blog posts, I recommend that you choose the same thing I did."),"\n",l.createElement(t.p,null,"Even if you don't follow them all, be sure to select Add Markdown and MDX support!"),"\n",l.createElement(t.p,null,"Of course, don't worry, you can manually set up the plugin later even if you don't select it here!"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},'? Would you like to install additional features with other plugins?\n(Multiple choice) Use arrow keys to move, spacebar to select, and confirm with an enter on "Done"\n ◯ Add the Google gtag script for e.g. Google Analytics\n ◉ Add responsive images\n ◉ Add an automatic sitemap\n ◉ Generate a manifest file\n❯◉ Add Markdown and MDX support\n ◯ Add Markdown support (without MDX)\n  ─────\n  Done\n')),"\n",l.createElement(t.p,null,"Lastly, this is a procedure to check the settings made so far."),"\n",l.createElement(t.p,null,"If there are no mistakes, please check and enter Yes."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"Thanks! Here's what we'll now do:\n\n    🛠  Create a new Gatsby site in the folder Classic95\n    🎨 Get you set up to use styled-components for styling your site\n    🔌 Install gatsby-plugin-image, gatsby-plugin-sitemap,\ngatsby-plugin-manifest, gatsby-plugin-mdx\n\n\n? Shall we do this? (Y/n) › Yes\n")),"\n",l.createElement(t.h2,{id:"3-run-gatsby-project",style:{position:"relative"}},l.createElement(t.a,{href:"#3-run-gatsby-project","aria-label":"3 run gatsby project permalink",className:"anchor before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"3. Run Gatsby project"),"\n",l.createElement(t.p,null,"Once installation is complete, enter the commands below."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"cd {your project name}\n\nyarn develop\n")),"\n",l.createElement(t.p,null,"If you enter ",l.createElement(t.a,{href:"http://localhost:8000"},"http://localhost:8000")," into the browser and the screen below appears, it is successful!"),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 860px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/5f587489b2d4d2ab42bccc6c9a3b7e98/9a996/gatsby-mdx-blog-1-2.webp"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 138.13953488372093%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/webp;base64,UklGRnwAAABXRUJQVlA4IHAAAACQBACdASoUABwAPtFepk6oJSMiKAqpABoJaQAHBOECTjVzbZfn3ytX1QLMgAAA/vJsp9IvUlpsSeFQF7kRktN2XOSA4Tga3Vx+wCe3tZWsldiny/zXqx2e8BW3UD3ztxFSQjNvUwjt876qP+aHRwAA\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="gatsby new project default page"\n        title=""\n        src="/static/5f587489b2d4d2ab42bccc6c9a3b7e98/31b17/gatsby-mdx-blog-1-2.webp"\n        srcset="/static/5f587489b2d4d2ab42bccc6c9a3b7e98/4bbe2/gatsby-mdx-blog-1-2.webp 215w,\n/static/5f587489b2d4d2ab42bccc6c9a3b7e98/866c5/gatsby-mdx-blog-1-2.webp 430w,\n/static/5f587489b2d4d2ab42bccc6c9a3b7e98/31b17/gatsby-mdx-blog-1-2.webp 860w,\n/static/5f587489b2d4d2ab42bccc6c9a3b7e98/e027f/gatsby-mdx-blog-1-2.webp 1290w,\n/static/5f587489b2d4d2ab42bccc6c9a3b7e98/9a996/gatsby-mdx-blog-1-2.webp 1378w"\n        sizes="(max-width: 860px) 100vw, 860px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",l.createElement(t.hr),"\n",l.createElement(t.h2,{id:"organizing",style:{position:"relative"}},l.createElement(t.a,{href:"#organizing","aria-label":"organizing permalink",className:"anchor before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Organizing"),"\n",l.createElement(t.p,null,"Today we learned about the Gatsby blog installation environment and how to create and run an initial project."),"\n",l.createElement(t.p,null,"In the next post, we will learn about the grammar of writing based on mdx."))}t.Z=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.a)(),e.components);return t?l.createElement(t,e,l.createElement(o,e)):o(e)}},6448:function(e,t,a){a.a(e,(async function(e,n){try{a.r(t),a.d(t,{Head:function(){return A},default:function(){return C}});var l=a(1579),o=a(7294),i=a(394),s=a(1151),r=a(1006),c=a(4428),m=a(4764),d=a(7526),h=a(9878),p=a(6337),g=e([d]);d=(g.then?(await g)():g)[0];const b=i.default.div.withConfig({displayName:"PostTemplate__Container",componentId:"sc-1y3rc8p-0"})(["width:100%;"]),f=i.default.div.withConfig({displayName:"PostTemplate__BodyContainer",componentId:"sc-1y3rc8p-1"})(["width:100%;"]),y=i.default.div.withConfig({displayName:"PostTemplate__ContentContainer",componentId:"sc-1y3rc8p-2"})(["width:100%;max-width:860px;margin:auto;padding-top:78px;margin-bottom:40px;","{max-width:928px;padding:78px 34px 0;}","{padding:78px 20px 0;}"],c.Z.custom(1199),c.Z.custom(767)),w=i.default.h1.withConfig({displayName:"PostTemplate__TitleLabel",componentId:"sc-1y3rc8p-3"})(["font-size:1.5em;font-weight:400;color:",";margin-bottom:10px;"],m.Z.viloet[6]),E=i.default.div.withConfig({displayName:"PostTemplate__DateContainer",componentId:"sc-1y3rc8p-4"})(["margin-bottom:12px;time{display:block;color:",";font-size:0.8em;}"],m.Z.gray[6]),v=i.default.div.withConfig({displayName:"PostTemplate__MdxContainer",componentId:"sc-1y3rc8p-5"})(["width:100%;h2,h3,h4,h5,h6{font-weight:400;}.h2-div{margin:29px 0 22px;padding-left:10px;padding-bottom:2px;border-left:5px solid ",";border-top-left-radius:2px;border-bottom-left-radius:2px;}h2{font-size:1.5em;","{font-size:1.25em;}.anchor{left:-15px;}}.anchor{svg{width:20px;height:20px;fill:",";}}h3{margin:22px 0 15px;}h4{margin-bottom:10px;}h6{color:",";}a:not(.anchor){color:",";&:hover{color:",";font-weight:500;font-size:1.05em;transition:0.5s;}}p{font-size:1em;margin-bottom:22px;line-height:1.6;}hr{background-color:",";height:1px;border:0;margin:20px 0 40px;}.gatsby-resp-image-wrapper{margin-bottom:20px;}li{font-size:1em;margin-bottom:6px;}pre{margin:0;}"],m.Z.viloet[6],c.Z.custom(767),m.Z.viloet[6],m.Z.gray[5],m.Z.viloet[5],m.Z.viloet[7],m.Z.gray[2]),x=i.default.div.withConfig({displayName:"PostTemplate__FooterContainer",componentId:"sc-1y3rc8p-6"})(["width:100%;"]),S={h2:e=>o.createElement("div",{className:"h2-div"},o.createElement("h2",e)),code:d.Z};function k(e){let{data:t,children:a,location:n}=e;const l=(0,o.useMemo)((()=>n.pathname.includes("/en/")?"en":"ko"),[n.pathname]);return o.createElement(b,null,o.createElement(f,null,o.createElement(y,null,o.createElement(w,null,t.mdx.frontmatter.title),o.createElement(E,null,o.createElement("time",{dateTime:t.mdx.frontmatter.created_at},(0,r.Z)(t.mdx.frontmatter.created_at)),t.mdx.frontmatter.updated_at&&o.createElement("time",{dateTime:t.mdx.frontmatter.updated_at},"ko"===l?"수정: ":"edited at ",(0,r.Z)(t.mdx.frontmatter.updated_at))),o.createElement(v,null,o.createElement(s.Z,{components:S},a)))),o.createElement(x,null,o.createElement(p.Z,null)))}function C(e){return o.createElement(k,e,o.createElement(l.Z,e))}const A=e=>{let{data:t}=e;return o.createElement(h.Z,{title:t.mdx.frontmatter.title,description:t.mdx.frontmatter.description,pathname:t.mdx.fields.slug,image:t.mdx.frontmatter.thumbnail.childImageSharp.fixed.src,created_at:t.mdx.frontmatter.created_at,updated_at:t.mdx.frontmatter.updated_at})};n()}catch(u){n(u)}}))}}]);
//# sourceMappingURL=component---src-components-post-post-template-tsx-content-file-path-contents-posts-en-2023-09-gatsby-mdx-blog-1-mdx-bbb701dde6ee3f6279c1.js.map