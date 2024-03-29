import{_ as t,o as e,c as a,O as l}from"./chunks/framework.9482e208.js";const d="/assets/initial.e6a58f5f.png",c="/assets/checkpoint.ac765220.png",n="/assets/cfg.0229efba.jpg",b=JSON.parse('{"title":"文生图（txt2img）基本参数测试","description":"","frontmatter":{},"headers":[],"relativePath":"reference/basic_parameter.md","filePath":"reference/basic_parameter.md"}'),r={name:"reference/basic_parameter.md"},i=l('<h1 id="文生图-txt2img-基本参数测试" tabindex="-1">文生图（<code>txt2img</code>）基本参数测试 <a class="header-anchor" href="#文生图-txt2img-基本参数测试" aria-label="Permalink to &quot;文生图（`txt2img`）基本参数测试&quot;">​</a></h1><p>测试<code>checkpoint</code>、<code>Batch count</code>、<code>Batch size</code>、<code>Seed</code>、<code>CFG Scale</code>等基本参数对<code>图片生成过程及图片内容、质量</code>的影响。</p><h2 id="测试环境" tabindex="-1">测试环境 <a class="header-anchor" href="#测试环境" aria-label="Permalink to &quot;测试环境&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">环境参数</th><th style="text-align:center;">信息</th></tr></thead><tbody><tr><td style="text-align:left;">GPU型号</td><td style="text-align:center;">NVIDIA Tesla T4</td></tr><tr><td style="text-align:left;">显存大小</td><td style="text-align:center;">16 GB</td></tr><tr><td style="text-align:left;">xformers</td><td style="text-align:center;">启用</td></tr><tr><td style="text-align:left;">集成软件</td><td style="text-align:center;"><a href="https://github.com/AUTOMATIC1111/stable-diffusion-webui" target="_blank" rel="noreferrer">AUTOMATIC1111</a></td></tr><tr><td style="text-align:left;">基础模型</td><td style="text-align:center;">meinamix_meinaV10.safetensors [77b7dc4ef0]</td></tr></tbody></table><h2 id="原始参数" tabindex="-1">原始参数 <a class="header-anchor" href="#原始参数" aria-label="Permalink to &quot;原始参数&quot;">​</a></h2><p>在之后的测试中，如果没有特别提及，输入参数将使用如下表的值：</p><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:center;">值</th></tr></thead><tbody><tr><td style="text-align:left;">Prompt</td><td style="text-align:center;">girl, white hair, wearing dress,lying on the beach, basking in the sun</td></tr><tr><td style="text-align:left;">Sampling method</td><td style="text-align:center;">DPM++ 2M Karras</td></tr><tr><td style="text-align:left;">Sampling steps</td><td style="text-align:center;">20</td></tr><tr><td style="text-align:left;">Width</td><td style="text-align:center;">512</td></tr><tr><td style="text-align:left;">Height</td><td style="text-align:center;">512</td></tr><tr><td style="text-align:left;">CFG Scale</td><td style="text-align:center;">7</td></tr><tr><td style="text-align:left;">Seed</td><td style="text-align:center;">-1</td></tr><tr><td style="text-align:left;">Batch count</td><td style="text-align:center;">1</td></tr><tr><td style="text-align:left;">Batch size</td><td style="text-align:center;">1</td></tr><tr><td style="text-align:left;">Seed</td><td style="text-align:center;">4175639649</td></tr></tbody></table><details class="details custom-block"><summary>快速导入</summary><p>复制下面的内容，粘贴到Prompt框中，点击生成按钮下面的读取键，可以快速填写参数</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">girl, white hair, wearing dress,lying on the beach, basking in the sun</span></span>\n<span class="line"><span style="color:#A6ACCD;">Steps: 20, Sampler: DPM++ 2M Karras, CFG scale: 7, Seed: 4175639649, Size: 512x512</span></span></code></pre></div></details><p>没有提及的参数默认<code>不填</code>或者<code>不勾选</code>，这样我们得到原始图：</p><p><img src="'+d+'" alt="img_initial"></p><p>生成该图消耗的时间及占用的GPU资源：</p><table><thead><tr><th style="text-align:left;">-</th><th style="text-align:center;">值</th></tr></thead><tbody><tr><td style="text-align:left;">Time taken</td><td style="text-align:center;">3.14s</td></tr><tr><td style="text-align:left;">Torch active/reserved</td><td style="text-align:center;">2624/3190 MiB</td></tr><tr><td style="text-align:left;">Sys VRAM</td><td style="text-align:center;">4272/16128 MiB (26.49%)</td></tr></tbody></table><h2 id="stable-diffusion-checkpoint" tabindex="-1">Stable Diffusion checkpoint <a class="header-anchor" href="#stable-diffusion-checkpoint" aria-label="Permalink to &quot;Stable Diffusion checkpoint&quot;">​</a></h2><p><code>Stable Diffusion checkpoint</code>也就是我们所说的模型，不同<code>checkpoint</code>对图片质量有巨大的影响。</p><p>加入另一组<code>Prompt</code>进行对比，本来是在沙滩上晒太阳，改为在咖啡店边上喝咖，其余参数和原始参数一致，新的<code>Prompt</code>如下：</p><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:center;">值</th></tr></thead><tbody><tr><td style="text-align:left;">Prompt</td><td style="text-align:center;">girl, white hair, wearing dress,sipping coffee by a café</td></tr></tbody></table><p>借助脚本<code>X/Y/Z plot</code>及<code>Prompt S/R</code>测试不同<code>checkpoint</code>对图片质量的影响。相同参数下4个不同<code>checkpoint</code>的结果：</p><p><img src="'+c+'" alt="img_checkpoint"></p><h2 id="batch-count" tabindex="-1">Batch count <a class="header-anchor" href="#batch-count" aria-label="Permalink to &quot;Batch count&quot;">​</a></h2><p><code>Batch count</code>指重复执行图片生成脚本的次数。该参数对生成图片的质量没有影响。例如改变<code>Batch count</code>为<code>4</code>将消耗相对于原来4倍的时间并且得4批图片，每次执行的显存使用率不会变化。</p><table><thead><tr><th style="text-align:left;">-</th><th style="text-align:center;">值</th></tr></thead><tbody><tr><td style="text-align:left;">Time taken</td><td style="text-align:center;">12.76s</td></tr><tr><td style="text-align:left;">Torch active/reserved</td><td style="text-align:center;">2624/3252 MiB</td></tr><tr><td style="text-align:left;">Sys VRAM</td><td style="text-align:center;">4278/32511 MiB (26.53%)</td></tr></tbody></table><p>在每个测试结束之后，都默认退回到原始参数，将<code>Batch count</code>改回<code>1</code>。</p><h2 id="batch-size-512-512情况下" tabindex="-1">Batch size（512*512情况下） <a class="header-anchor" href="#batch-size-512-512情况下" aria-label="Permalink to &quot;Batch size（512*512情况下）&quot;">​</a></h2><p><code>Batch size</code>指每次生成的图片数量。测试结果表明在生成<code>512*512图片</code>时，获取同等数量的图片，调大<code>Batch size</code>更节省资源。但是过大的<code>Batch size</code>让人眼花缭乱，所以我倾向于设置<code>Batch size</code>为<code>4</code>，以便于肉眼挑选合适的图片进行下一步处理。</p><p>在<code>NVIDIA Tesla T4 16GB</code>上的测试结果：</p><table><thead><tr><th style="text-align:left;">-</th><th style="text-align:center;">-</th><th style="text-align:center;">-</th><th style="text-align:center;">-</th></tr></thead><tbody><tr><td style="text-align:left;">Batch size</td><td style="text-align:center;">1</td><td style="text-align:center;">4</td><td style="text-align:center;">8</td></tr><tr><td style="text-align:left;">Time taken(s)</td><td style="text-align:center;">3.14</td><td style="text-align:center;">11.25</td><td style="text-align:center;">21</td></tr><tr><td style="text-align:left;">Torch active/reserved</td><td style="text-align:center;">2624/3190</td><td style="text-align:center;">2630/3362</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:left;">Sys VRAM</td><td style="text-align:center;">26.49%</td><td style="text-align:center;">27.55%</td><td style="text-align:center;">28.13%</td></tr></tbody></table><p>在<code>NVIDIA Tesla V100 SXM2 32 GB</code>上的测试结果：</p><table><thead><tr><th style="text-align:left;">-</th><th style="text-align:center;">-</th><th style="text-align:center;">-</th><th style="text-align:center;">-</th></tr></thead><tbody><tr><td style="text-align:left;">Batch size</td><td style="text-align:center;">1</td><td style="text-align:center;">4</td><td style="text-align:center;">8</td></tr><tr><td style="text-align:left;">Time taken(s)</td><td style="text-align:center;">1.56</td><td style="text-align:center;">4.72</td><td style="text-align:center;">8.91</td></tr><tr><td style="text-align:left;">Torch active/reserved</td><td style="text-align:center;">2599/2888</td><td style="text-align:center;">2619/3252</td><td style="text-align:center;">3160/3432</td></tr><tr><td style="text-align:left;">Sys VRAM</td><td style="text-align:center;">12.39%</td><td style="text-align:center;">13.51%</td><td style="text-align:center;">14.12%</td></tr></tbody></table><h2 id="seed" tabindex="-1">Seed <a class="header-anchor" href="#seed" aria-label="Permalink to &quot;Seed&quot;">​</a></h2><p>如果你希望获取相同的图片，那么使用一个确定的<code>Seed</code>。如果你希望随机获取一张图片，则将<code>Seed</code>设定为<code>-1</code>，这样每次生成图片的时候就会随机生成一个<code>Seed</code>值，这个值可以在界面右下角获取到（生成图片的下面）。</p><p>例如，在所有参数，包含硬件条件、软件和模型的版本都一致的条件下，你设定<code>Seed</code>为<code>4175639649</code>，点击生成将得到一张和本文完全一致的图片。</p><h2 id="cfg-scale" tabindex="-1">CFG Scale <a class="header-anchor" href="#cfg-scale" aria-label="Permalink to &quot;CFG Scale&quot;">​</a></h2><p><code>CFG Scale</code>用于控制模型应该在多大程度遵循你的<code>Prompt</code>。</p><p>如下图所示，当<code>CFG Scale</code>值为0时，模型自由发挥完全无视你的<code>Prompt</code>；过高的<code>CFG Scale</code>对图片质量产生严重影响。</p><p><img src="'+n+'" alt="img_cfg"></p><h2 id="sampling-method" tabindex="-1">Sampling method <a class="header-anchor" href="#sampling-method" aria-label="Permalink to &quot;Sampling method&quot;">​</a></h2><p>TODO</p><p>关于<code>Sampling method</code>我也没有啥研究，平时基本上都是无脑<code>DPM++ 2M Karras</code>，<code>AUTOMATIC1111</code>的wiki也只是给出了一张参照表。</p><p>因为Sampling method数量太多，我们宏观上把他们大至分个类然后挑几个典型跑一下。</p><h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h2><p><a href="https://stable-diffusion-art.com/samplers/" target="_blank" rel="noreferrer">https://stable-diffusion-art.com/samplers/</a></p>',41),s=[i];function o(h,g,p,y,x,f){return e(),a("div",null,s)}const u=t(r,[["render",o]]);export{b as __pageData,u as default};
