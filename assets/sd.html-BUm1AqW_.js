import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as a,b as n}from"./app-BekARbbZ.js";const t={};function l(h,i){return e(),a("div",null,i[0]||(i[0]=[n(`<h2 id="webui的安装" tabindex="-1"><a class="header-anchor" href="#webui的安装"><span>Webui的安装</span></a></h2><p>windows下Anaconda环境安装stable-diffusion-webui</p><h3 id="相关工具的准备" tabindex="-1"><a class="header-anchor" href="#相关工具的准备"><span>相关工具的准备</span></a></h3><p>所需工具：git, anaconda, pytorch环境</p><p>相关内容参照：<a href="/python/BasicSyntax/env">Python常用环境的安装</a></p><h3 id="下载源码" tabindex="-1"><a class="header-anchor" href="#下载源码"><span>下载源码</span></a></h3><p>准备好环境后就可以拉代码了：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> clone</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://github.com/AUTOMATIC1111/stable-diffusion-webui</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="依赖库安装" tabindex="-1"><a class="header-anchor" href="#依赖库安装"><span>依赖库安装</span></a></h3><p>可以创建/克隆一个新环境 sdw 出来操作：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">conda</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> create</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sdw</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --clone</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pytorch</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">conda</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> activate</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sdw</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 进入 stable-diffusion-webui 目录安装项目依赖包</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pip3</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -r</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> requirements.txt</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改启动脚本" tabindex="-1"><a class="header-anchor" href="#修改启动脚本"><span>修改启动脚本</span></a></h3><p>使用conda就不需要stable-diffusion-webui自己去安装venv虚拟环境了，可以通过修改<code>webui-user.bat</code>实现：</p><ol><li><p>复制一个<code>webui-user.bat</code>，命名为 <code>webui-new.bat</code></p></li><li><p>将<code>VENV_DIR</code>设置为&quot;-&quot;，指示其跳过venv的安装</p></li><li><p>添加启动参数，使其可以在局域网内访问</p></li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">@echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> off</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> PYTHON=</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> GIT=</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> VENV_DIR=-</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> COMMANDLINE_ARGS=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --listen</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --enable-insecure-extension-access</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">call</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> webui.bat</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="首次运行" tabindex="-1"><a class="header-anchor" href="#首次运行"><span>首次运行</span></a></h3><p>在命令行中，确保已通过conda激活了对应虚拟环境时，可直接通过下面的命令启动：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\\</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">webui-new.bat</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>第一次运行时还需要很长时间去下载一些比较大的扩展程序和模型...</p><h2 id="webui的使用" tabindex="-1"><a class="header-anchor" href="#webui的使用"><span>Webui的使用</span></a></h2>`,20)]))}const p=s(t,[["render",l],["__file","sd.html.vue"]]),o=JSON.parse('{"path":"/python/Project/sd.html","title":"Stable diffusion","lang":"en-US","frontmatter":{"order":-1,"title":"Stable diffusion","icon":"tab","description":"Webui的安装 windows下Anaconda环境安装stable-diffusion-webui 相关工具的准备 所需工具：git, anaconda, pytorch环境 相关内容参照：Python常用环境的安装 下载源码 准备好环境后就可以拉代码了： 依赖库安装 可以创建/克隆一个新环境 sdw 出来操作： 修改启动脚本 使用conda就不需...","head":[["meta",{"property":"og:url","content":"https://x.app/python/Project/sd.html"}],["meta",{"property":"og:site_name","content":"Notebook"}],["meta",{"property":"og:title","content":"Stable diffusion"}],["meta",{"property":"og:description","content":"Webui的安装 windows下Anaconda环境安装stable-diffusion-webui 相关工具的准备 所需工具：git, anaconda, pytorch环境 相关内容参照：Python常用环境的安装 下载源码 准备好环境后就可以拉代码了： 依赖库安装 可以创建/克隆一个新环境 sdw 出来操作： 修改启动脚本 使用conda就不需..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-16T12:42:31.000Z"}],["meta",{"property":"article:author","content":"ventixy"}],["meta",{"property":"article:modified_time","content":"2024-11-16T12:42:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Stable diffusion\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-16T12:42:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ventixy\\",\\"url\\":\\"https://www.ventix.top\\"}]}"]]},"headers":[{"level":2,"title":"Webui的安装","slug":"webui的安装","link":"#webui的安装","children":[{"level":3,"title":"相关工具的准备","slug":"相关工具的准备","link":"#相关工具的准备","children":[]},{"level":3,"title":"下载源码","slug":"下载源码","link":"#下载源码","children":[]},{"level":3,"title":"依赖库安装","slug":"依赖库安装","link":"#依赖库安装","children":[]},{"level":3,"title":"修改启动脚本","slug":"修改启动脚本","link":"#修改启动脚本","children":[]},{"level":3,"title":"首次运行","slug":"首次运行","link":"#首次运行","children":[]}]},{"level":2,"title":"Webui的使用","slug":"webui的使用","link":"#webui的使用","children":[]}],"git":{"createdTime":1731760951000,"updatedTime":1731760951000,"contributors":[{"name":"drizzle","email":"msdrizzle@outlook.com","commits":1}]},"readingTime":{"minutes":1,"words":301},"filePathRelative":"python/Project/sd.md","localizedDate":"November 16, 2024","autoDesc":true}');export{p as comp,o as data};