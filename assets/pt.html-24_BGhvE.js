import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o,c as l,b as s}from"./app-Bdl0WztW.js";const a={};function t(n,e){return o(),l("div",null,e[0]||(e[0]=[s('<p>JVM性能调优(Performance Tuning)是指一系列技术和实践，旨在优化Java应用程序在JVM上的执行效率，提升应用程序的响应时间和资源利用率。性能调优的目标通常包括降低CPU和内存的使用率，减少垃圾收集（GC）的停顿时间，提高吞吐量，以及增强系统的稳定性和可预测性。</p><h2 id="监控与分析" tabindex="-1"><a class="header-anchor" href="#监控与分析"><span>监控与分析</span></a></h2><p>JVM监控工具是用于监控和分析Java应用程序运行时状态的工具集。这些工具能够帮助开发者和运维人员理解应用程序的性能、资源使用情况以及潜在的问题。</p><p>JVM监控工具主要包括：常用基础命令，可视化工具（如jconsole，visualvm等），商业级的性能分析工具（如：YourKit和JProfiler，提供了更深入的代码级性能分析和内存泄漏检测）</p><h3 id="基础命令工具" tabindex="-1"><a class="header-anchor" href="#基础命令工具"><span>基础命令工具</span></a></h3><p>JVM（Java Virtual Machine）提供了一系列命令行工具，用于监控和管理正在运行的Java应用程序。</p><div class="hint-container info"><p class="hint-container-title">JVM相关命令工具</p><h4 id="jps-jvm-process-status-tool" tabindex="-1"><a class="header-anchor" href="#jps-jvm-process-status-tool"><span>jps (JVM Process Status Tool)</span></a></h4><ul><li><strong>用途</strong>：列出本地或远程主机上所有正在运行的Java应用程序的进程ID（JVM ID）和主类名。</li><li><strong>语法</strong>：<code>jps [-q] [hostid]</code></li><li><strong>参数</strong>： <ul><li><code>-q</code>：只显示进程ID，不显示主类名。</li><li><code>hostid</code>：可选参数，用于指定远程主机的IP或主机名。</li></ul></li></ul><h4 id="jinfo-configuration-info-for-java" tabindex="-1"><a class="header-anchor" href="#jinfo-configuration-info-for-java"><span>jinfo (Configuration Info for Java)</span></a></h4><ul><li><strong>用途</strong>：查询和更新运行中的Java应用程序的JVM配置参数。</li><li><strong>语法</strong>：<code>jinfo [option] pid</code></li><li><strong>参数</strong>： <ul><li><code>option</code>：如<code>-flag</code>用于查询或设置标志，<code>-sysprops</code>用于打印系统属性。</li><li><code>pid</code>：Java应用程序的进程ID。</li></ul></li></ul><h4 id="jstat-jvm-statistics-monitoring-tool" tabindex="-1"><a class="header-anchor" href="#jstat-jvm-statistics-monitoring-tool"><span>jstat (JVM Statistics Monitoring Tool)</span></a></h4><ul><li><strong>用途</strong>：监控JVM的运行时统计信息，如内存使用、类加载、垃圾回收等。</li><li><strong>语法</strong>：<code>jstat [option] pid [interval]</code></li><li><strong>参数</strong>： <ul><li><code>option</code>：如<code>-gcutil</code>用于显示GC利用率，<code>-gccapacity</code>用于显示GC容量信息。</li><li><code>pid</code>：Java应用程序的进程ID。</li><li><code>interval</code>：可选参数，用于指定输出刷新间隔（毫秒）。</li></ul></li></ul><h4 id="jstatd-jvm-statistics-daemon" tabindex="-1"><a class="header-anchor" href="#jstatd-jvm-statistics-daemon"><span>jstatd (JVM Statistics Daemon)</span></a></h4><ul><li><strong>用途</strong>：在远程主机上启用jstat工具的远程监控功能，需要在远程主机上运行jstatd守护进程。</li><li><strong>语法</strong>：<code>jstatd [option]</code></li><li><strong>参数</strong>： <ul><li><code>option</code>：如<code>-Joption</code>用于向守护进程JVM传递JVM选项。</li></ul></li></ul><h4 id="jstack-thread-stack-trace" tabindex="-1"><a class="header-anchor" href="#jstack-thread-stack-trace"><span>jstack (Thread Stack Trace)</span></a></h4><ul><li><strong>用途</strong>：获取正在运行的Java应用程序的所有线程的堆栈跟踪。</li><li><strong>语法</strong>：<code>jstack pid</code></li><li><strong>参数</strong>： <ul><li><code>pid</code>：Java应用程序的进程ID。</li></ul></li></ul><h4 id="jmap-heap-memory-map" tabindex="-1"><a class="header-anchor" href="#jmap-heap-memory-map"><span>jmap (Heap Memory Map)</span></a></h4><ul><li><strong>用途</strong>：显示Java堆的内存映射，也可以生成堆转储文件。</li><li><strong>语法</strong>：<code>jmap [option] pid</code></li><li><strong>参数</strong>： <ul><li><code>option</code>：如<code>-histo</code>用于显示对象直方图，<code>-dump</code>用于生成堆转储文件。</li><li><code>pid</code>：Java应用程序的进程ID。</li></ul></li></ul><h4 id="jhat-heap-dump-analyzing-tool" tabindex="-1"><a class="header-anchor" href="#jhat-heap-dump-analyzing-tool"><span>jhat (Heap Dump Analyzing Tool)</span></a></h4><ul><li><strong>用途</strong>：分析由jmap生成的堆转储文件，提供一个HTTP服务器供浏览器访问。</li><li><strong>语法</strong>：<code>jhat [option] heapfile</code></li><li><strong>参数</strong>： <ul><li><code>option</code>：如<code>-Joption</code>用于向jhat JVM传递JVM选项。</li><li><code>heapfile</code>：由jmap生成的堆转储文件。</li></ul></li></ul></div><p><strong>使用场景</strong>：</p><ul><li><strong>性能监控</strong>：jstat、jmap、jstack常用于性能监控和问题排查，帮助理解内存使用、线程状态和垃圾回收行为。</li><li><strong>配置查询</strong>：jinfo用于查询和修改运行中的Java应用程序的JVM配置。</li><li><strong>远程监控</strong>：jstatd在远程主机上启用jstat的远程监控能力，配合jps和jstat使用。</li><li><strong>堆分析</strong>：jmap和jhat用于分析堆内存，检测内存泄漏等问题。</li></ul><div class="hint-container info"><p class="hint-container-title">jcmd (Java Command Line Tool)</p><p><code>jcmd</code> 是一个非常强大的命令行工具，用于控制和调试正在运行的Java应用程序。它可以执行各种操作，包括但不限于垃圾收集、线程堆栈转储、JVM配置查询、系统属性查看以及对HotSpot虚拟机的低级操作。<code>jcmd</code> 的功能类似于<code>jinfo</code>, <code>jmap</code>, <code>jstack</code> 等工具的组合，并且提供了更统一的接口来执行这些任务。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">jcmd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [options] &lt;pid&gt; | &lt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">remote</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">d&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li><code>&lt;pid&gt;</code>：本地Java应用程序的进程ID。</li><li><code>&lt;remote id&gt;</code>：远程Java应用程序的标识符，格式为<code>hostid:jid</code>，其中<code>jid</code>是远程主机上的Java应用ID。</li><li><code>[options]</code>：具体的操作选项，例如<code>GC.run</code>、<code>VM.command_line</code>、<code>Thread.print</code>等。</li></ul><p><strong>常见操作</strong>:</p><ul><li><strong>GC.run</strong>：强制执行一次垃圾回收。</li><li><strong>VM.command_line</strong>：显示JVM启动时的命令行参数。</li><li><strong>VM.system_properties</strong>：显示系统属性。</li><li><strong>Thread.print</strong>：打印所有线程的堆栈跟踪，相当于<code>jstack</code>的功能。</li><li><strong><code>HotSpot.Flag.print</code></strong>：显示所有HotSpot虚拟机的标志。</li><li><strong><code>HotSpot.Flag.&lt;flag&gt;</code></strong>：查询或设置特定的HotSpot虚拟机标志。</li></ul><p><strong>优点</strong>:</p><ul><li><strong>统一性</strong>：<code>jcmd</code> 提供了一个统一的接口来执行多种不同的JVM监控和管理任务。</li><li><strong>灵活性</strong>：通过简单的命令行参数，可以执行复杂的操作，比如控制垃圾回收或者查看详细的JVM配置。</li><li><strong>远程控制</strong>：支持对远程Java应用程序的监控和管理。</li></ul><p><strong>使用场景</strong>:</p><ul><li><strong>性能调试</strong>：当应用程序出现性能瓶颈时，可以通过<code>jcmd</code> 执行垃圾收集或查看线程堆栈来定位问题。</li><li><strong>配置验证</strong>：检查应用程序的启动参数和系统属性是否符合预期。</li><li><strong>故障排除</strong>：在应用程序崩溃或挂起时，通过<code>jcmd</code> 获取线程堆栈或系统状态信息来帮助诊断问题。</li></ul><p><code>jcmd</code> 的引入简化了Java应用程序的管理和调试过程，使得开发者和运维人员能够更加高效地处理与JVM相关的各种问题。</p></div><h3 id="jconsole" tabindex="-1"><a class="header-anchor" href="#jconsole"><span>JConsole</span></a></h3><p>JConsole是Java Development Kit (JDK) 中的一个图形化工具，用于监控和管理运行在Java虚拟机(JVM)上的应用程序。它允许用户查看JVM的各个方面，如内存使用、垃圾收集(GC)活动、线程信息、类加载情况等，并且可以远程监控JVM实例。</p><p>JConsole可以通过两种方式启动：</p><ol><li><strong>命令行</strong>：在命令行中直接输入 <code>jconsole</code> 命令。</li><li><strong>GUI Shell</strong>：在JDK的bin目录下找到并双击 <code>jconsole.exe</code> 文件（Windows系统）或 <code>jconsole</code>（Unix/Linux系统）。</li></ol><p>启动JConsole后，会出现一个连接对话框，要求你输入要连接的JVM的详细信息：</p><ul><li><strong>本地进程</strong>：可以选择本地计算机上正在运行的Java进程。</li><li><strong>远程进程</strong>：需要输入远程主机的地址和JMX服务URL。例如，<code>service:jmx:rmi:///jndi/rmi://hostname:port/jmxrmi</code>。</li><li><strong>JMX Service URL</strong>：可以直接输入JMX服务URL来连接到JVM。在远程监控JVM时，确保目标机器上启用了JMX代理，并且防火墙或安全策略不会阻止JConsole的连接。对于安全性敏感的应用程序，确保只在受信任的网络环境中使用JConsole，因为它可能暴露敏感的运行时信息。</li></ul><p>一旦成功连接到JVM，JConsole会展示多个功能面板：</p><ol><li><strong>概览</strong>（Overview）：显示JVM的基本信息，如版本、启动时间、运行时间、内存使用情况等。</li><li><strong>内存</strong>（Memory）：展示JVM的内存使用详情，包括堆内存和非堆内存的使用情况，以及垃圾收集器的统计信息。</li><li><strong>线程</strong>（Threads）：显示JVM中所有线程的信息，包括线程ID、名称、状态和堆栈跟踪。</li><li><strong>类</strong>（Classes）：显示已加载类的数量，以及加载和卸载类的统计信息。</li><li><strong>JMX</strong>（MBeans）：列出可用的MBeans（Managed Beans），可以查看和修改MBeans的属性和操作。</li><li><strong>环境</strong>（Environment）：显示JVM的系统属性和环境变量。</li></ol><p>JConsole的监控信息对于识别和解决性能问题非常有用。例如：</p><ul><li><strong>内存使用</strong>：可以观察到堆内存的使用趋势，以及垃圾收集的频率和停顿时间，有助于识别内存泄漏或内存不足的问题。</li><li><strong>线程监控</strong>：可以检查是否有死锁或线程阻塞的情况，以及线程的活跃程度。</li><li><strong>类信息</strong>：可以查看类加载和卸载的状态，帮助理解应用程序的类生命周期。</li></ul><p>在进行性能调优时，应先在非生产环境中测试任何更改，以避免对生产系统造成意外影响。</p><h3 id="visualvm" tabindex="-1"><a class="header-anchor" href="#visualvm"><span>VisualVM</span></a></h3><p>VisualVM是Java Development Kit (JDK) 的一部分，它是一个免费的、开源的、跨平台的工具，用于监视和分析运行在Java虚拟机 (JVM) 上的应用程序的性能。VisualVM整合了多个JDK工具，如jstat、jmap、jstack、jinfo和JConsole的功能，提供了一个统一的图形用户界面，使开发者和系统管理员能够更有效地进行性能分析和故障排查。其主要功能包括：</p><ul><li><strong>监视</strong>：VisualVM可以监视本地和远程JVM的运行状况，包括内存使用、CPU使用、线程状态、垃圾收集活动等。</li><li><strong>分析</strong>：它提供了CPU和内存分析工具，可以用来追踪热点代码和潜在的内存泄漏。</li><li><strong>堆转储和线程快照</strong>：VisualVM可以生成堆转储文件和线程快照，用于离线分析。</li><li><strong>MBeans浏览</strong>：可以浏览和操作管理Bean (MBeans)，这是JMX (Java Management Extensions) 的一部分，用于管理JVM和应用程序。</li><li><strong>JMX代理</strong>：可以连接到远程JMX代理，以监控远程JVM。</li><li><strong>插件扩展</strong>：VisualVM支持插件，允许添加更多功能，如visualGC插件用于更深入的垃圾收集分析。</li></ul><p><strong>使用步骤</strong>:</p><ol><li><p><strong>启动VisualVM</strong>：</p><ul><li>你可以通过JDK的bin目录下的<code>visualvm</code>或<code>visualvm.exe</code>（取决于操作系统）来启动它。</li></ul></li><li><p><strong>连接到JVM</strong>：</p><ul><li>打开VisualVM后，你会看到本地运行的Java应用程序列表。选择你想要监控的应用程序。</li><li>如果你想监控远程JVM，可以点击左上角的“+”号，然后选择“JMX connection”，输入远程JVM的JMX服务URL。</li></ul></li><li><p><strong>监视和分析</strong>：</p><ul><li><strong>监视</strong>：在VisualVM中，你可以看到应用程序的内存使用情况、CPU使用情况、线程状态和垃圾收集活动。这些信息在主窗口的图表和表格中显示。</li><li><strong>CPU分析</strong>：点击“Profiler”选项卡，选择“CPU”进行CPU采样分析。这将显示哪些方法和类正在消耗最多的CPU时间。</li><li><strong>内存分析</strong>：在“Profiler”选项卡中，选择“Memory”进行内存分析。这可以帮助你识别可能的内存泄漏。</li><li><strong>堆转储和线程快照</strong>：在“Snapshot”选项卡中，你可以创建堆转储或线程快照，用于进一步的离线分析。</li></ul></li><li><p><strong>MBeans浏览</strong>：</p><ul><li>在“MBeans”选项卡中，你可以浏览和操作应用程序的MBeans，这对于调试和管理非常有用。</li></ul></li><li><p><strong>使用插件</strong>：</p><ul><li>为了使用插件，如visualGC，你需要先下载并安装插件。插件可以在VisualVM的官方网站或GitHub页面找到。</li></ul></li><li><p><strong>保存和导出数据</strong>：</p><ul><li>VisualVM允许你保存会话，以便以后再次查看。你也可以导出图表和报告。</li></ul></li></ol><div class="hint-container info"><p class="hint-container-title">JDK中找不到VisualVM的原因</p><p>如果发现JDK安装目录下的<code>bin</code>文件夹中没有有<code>visualvm</code>或<code>jvisualvm.exe</code>文件，可能是因为：</p><ol><li><p><strong>JDK版本</strong>：从JDK 9开始，Oracle JDK不再捆绑VisualVM作为标准分发的一部分。这意味着如果您安装的是JDK 9或更高版本的Oracle JDK，您将不会在默认安装中找到VisualVM。然而，对于OpenJDK，某些构建仍然可能会包含VisualVM。</p></li><li><p><strong>安装类型</strong>：如果您选择了最小或自定义安装，可能在安装过程中没有选择包含VisualVM的选项。某些JDK的轻量级安装包可能不包含这个工具。</p></li></ol><p>解决这个问题的方法通常是直接从Oracle或其他可信赖的来源下载VisualVM的独立版本。下载完成后，按照指示进行安装，并确保将其添加到您的PATH环境变量中，以便在任何位置都能运行它。</p><p>另外，如果您使用的是Linux或macOS系统，可以考虑使用包管理器（如apt、yum、brew等）来安装VisualVM。</p><p>最后，如果您使用的是IntelliJ IDEA、Eclipse或NetBeans等IDE，这些IDE通常也内置了类似VisualVM的性能监控和分析工具，可以作为替代方案。</p></div><p>VisualVM是一个非常有用的工具，特别是在进行性能调优和故障排除时。它不仅提供了实时的监控数据，还允许你进行深入的分析，以理解应用程序的运行行为和性能瓶颈。</p><h3 id="gc日志分析" tabindex="-1"><a class="header-anchor" href="#gc日志分析"><span>GC日志分析</span></a></h3><p>GC（Garbage Collection）日志分析是在Java应用程序性能调优和故障排查中的一项重要技能。GC日志包含了JVM垃圾回收器的活动细节，通过对这些日志的分析，可以洞察应用程序的内存使用模式、垃圾收集的频率和效率，从而找出可能存在的性能瓶颈，如频繁的垃圾收集、长时间的暂停（Stop The World事件），以及内存泄露等问题。</p><p>要生成GC日志，需要在启动Java应用程序时给JVM传递相应的参数。常见的参数有：</p><ul><li><code>-Xloggc:&lt;filename&gt;</code>：指定GC日志的输出文件名。</li><li><code>-XX:+PrintGCDetails</code>：打印详细的GC信息，包括每个收集事件的详细描述。</li><li><code>-XX:+PrintGC</code>：打印基本的GC信息，如GC前后堆的使用情况。</li><li><code>-XX:+PrintGCTimeStamps</code>：在日志中打印GC事件的相对时间戳。</li><li><code>-XX:+PrintGCDateStamps</code>：在日志中打印GC事件的绝对日期和时间。</li><li><code>-XX:+PrintAdaptiveSizePolicy</code>：打印有关年轻代大小调整的策略信息。</li><li><code>-XX:+PrintTenuringDistribution</code>：打印每个新对象在晋升到老年代前的存活次数。</li><li><code>-XX:+PrintFLSStatistics</code>：打印FastLockStriping（并行收集器中的一种锁机制）的统计数据。</li></ul><p>GC日志通常包含以下信息：</p><ul><li><strong>GC类型</strong>：<code>[GC]</code> 表示年轻代垃圾收集；<code>[Full GC]</code> 表示整个堆的垃圾收集。</li><li><strong>时间戳</strong>：GC事件发生的时间，可以是相对时间或绝对时间。</li><li><strong>内存使用情况</strong>：包括Eden区、Survivor区、Old区和PermGen/Metaspace的使用前后的大小。</li><li><strong>停顿时间</strong>：GC事件导致的暂停时间，即STW（Stop The World）时间。</li></ul><p>虽然可以手动分析GC日志，但使用专门的工具会更加高效。一些常用的GC日志分析工具包括：</p><ul><li><strong>VisualVM</strong>：集成了GC日志分析功能，可以可视化地展示GC活动。</li><li><strong>MAT (Memory Analyzer Tool)</strong>：专门用于分析Java应用程序的内存使用，可以导入GC日志进行分析。</li><li><strong>GCeasy</strong>：一款在线的GC日志分析工具，可以自动分析日志并提供报告。</li><li><strong>JMC (Java Mission Control)</strong>：包含在Oracle JDK中，提供详细的GC分析和性能监控功能。</li><li><strong>Logstash + Kibana</strong>：可以用来解析和可视化GC日志，适用于大规模日志分析。</li></ul><p><strong>常见问题与调优方向</strong>：</p><ul><li><strong>频繁的年轻代GC</strong>：可能意味着对象的生存周期过短，需要检查代码是否存在不必要的对象创建。</li><li><strong>长时间的Full GC</strong>：可能导致应用程序响应变慢，需要检查老年代的使用情况，考虑增加堆大小或调整老年代的GC策略。</li><li><strong>高GC停顿时间</strong>：影响应用程序的响应时间，可能需要调整GC算法或参数，减少GC停顿。</li></ul><p>通过持续的GC日志分析，可以逐步优化JVM的内存管理，提升应用程序的性能和稳定性。</p><h3 id="gcviewer" tabindex="-1"><a class="header-anchor" href="#gcviewer"><span>GCViewer</span></a></h3><p>GCViewer是一个开源的图形化工具，专门设计用于分析Java虚拟机(JVM)的垃圾回收(Garbage Collection, GC)日志。它能够将复杂的GC日志转换成易于理解的图表和统计信息，帮助开发者和系统管理员诊断和优化JVM的内存使用和GC行为。</p><div class="hint-container info"><p class="hint-container-title">GCViewer的作用</p><ol><li><strong>可视化GC日志</strong>：GCViewer将GC日志中的数据转换成图表，直观显示GC事件的频率、停顿时间、内存使用情况等。</li><li><strong>GC性能分析</strong>：通过分析GC日志，GCViewer可以帮助识别性能瓶颈，如频繁的GC、长时间的Full GC等。</li><li><strong>JVM配置优化</strong>：基于GC日志分析，GCViewer可以提供JVM参数调优建议，比如年轻代和老年代的大小、GC算法选择等。</li><li><strong>异常检测</strong>：能够检测出异常的GC行为，如内存泄漏、配置不当等问题。</li></ol></div><p><strong>使用GCViewer的方法</strong>:</p><p>首先，你需要在运行Java应用时启用GC日志记录。这通常通过在JVM启动参数中加入如下命令实现：</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">-Xloggc:/path/to/gc.log</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -XX:+PrintGCDetails</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -XX:+PrintGCDateStamps</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>下载并解压GCViewer的最新版本，双击<code>.jar</code>文件启动工具。你也可以从其GitHub仓库获取最新源码并自行编译。</p><p>在GCViewer中，通过“File”菜单下的“Open File”选项，选择之前生成的GC日志文件。</p><p>加载日志后，GCViewer将自动生成一系列图表，包括但不限于：</p><ul><li><strong>GC事件时间线</strong>：显示所有GC事件的时间分布。</li><li><strong>堆内存使用</strong>：展示GC前后堆内存的使用情况。</li><li><strong>GC停顿时间</strong>：列出每次GC的持续时间和类型。</li><li><strong>年轻代与老年代的内存变化</strong>：显示各代内存随时间的变化趋势。</li></ul><p>使用GCViewer的过滤和缩放功能来聚焦特定时间段或GC类型，深入分析问题所在。</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><ul><li>在分析GC日志时，注意观察GC停顿时间是否超出可接受范围，以及Full GC的频率和触发原因。</li><li>根据GCViewer提供的信息，尝试调整JVM参数，比如改变年轻代和老年代的大小，选择不同的GC算法，或调整其他相关参数，以达到最佳性能。</li></ul></div><p>通过上述步骤，你可以利用GCViewer有效地分析和优化Java应用的GC行为，提高应用的稳定性和响应速度。</p><h2 id="调整jvm参数" tabindex="-1"><a class="header-anchor" href="#调整jvm参数"><span>调整JVM参数</span></a></h2><p>实践中，调优是一个迭代的过程，可能需要监控应用性能，分析GC日志，进行多次测试和调整。工具如VisualVM、JConsole和GCViewer可以帮助监控和分析JVM的状态和GC行为，从而更好地进行调优。</p><h3 id="垃圾收集器" tabindex="-1"><a class="header-anchor" href="#垃圾收集器"><span>垃圾收集器</span></a></h3><p>根据应用需求选择适合的GC，如Parallel Collector, Concurrent Mark Sweep (CMS), Garbage First (G1), ZGC或Shenandoah。</p><p>选择垃圾回收器和相关参数时，需要考虑以下因素：</p><ul><li><strong>应用特性</strong>：高吞吐量、低延迟、内存效率。</li><li><strong>硬件资源</strong>：CPU核心数量、内存大小。</li><li><strong>业务需求</strong>：响应时间要求、系统稳定性。</li></ul><div class="hint-container info"><p class="hint-container-title">选择垃圾回收器</p><ul><li><strong>串行回收器</strong>：适用于单核CPU的小型应用，使用 <code>-XX:+UseSerialGC</code>。</li><li><strong>并行回收器</strong>：适用于多核CPU的场景，关注高吞吐量的应用，使用 <code>-XX:+UseParallelGC</code> 或 <code>-XX:+UseParallelOldGC</code>。</li><li><strong>并发标记清扫回收器（CMS）</strong>：适用于对停顿时间敏感的应用，使用 <code>-XX:+UseConcMarkSweepGC</code>。</li><li><strong>G1回收器</strong>：适用于大堆内存的应用，具有可预测的停顿时间，使用 <code>-XX:+UseG1GC</code>。</li></ul></div><p>在确定使用何种垃圾回收器后，可以据其调整与之相关的其他参数，如：</p><div class="hint-container info"><p class="hint-container-title">垃圾回收器参数调优</p><ul><li><p><strong>Serial</strong>：</p><ul><li>无特别参数，主要关注堆内存分配。</li></ul></li><li><p><strong>Parallel</strong>：</p><ul><li><code>-XX:ParallelGCThreads</code>：设置并行GC线程的数量。</li><li><code>-XX:MaxGCPauseMillis</code>：设置期望的最长GC停顿时间。</li></ul></li><li><p><strong>CMS回收器</strong>：</p><ul><li><code>-XX:CMSInitiatingOccupancyFraction</code>：设置触发CMS收集的堆使用百分比。</li><li><code>-XX:CMSTriggerInterval</code>：设置CMS收集的频率。</li></ul></li><li><p><strong>G1回收器</strong>：</p><ul><li><code>-XX:MaxGCPauseMillis</code>：设置期望的最长GC停顿时间。</li><li><code>-XX:InitiatingHeapOccupancyPercent</code>：设置触发混合GC的堆使用百分比。</li><li><code>-XX:G1ReservePercent</code>：设置G1预留的内存百分比，用于防止堆耗尽。</li></ul></li></ul></div><h3 id="查看配置参数" tabindex="-1"><a class="header-anchor" href="#查看配置参数"><span>查看配置参数</span></a></h3><p>可以使用<code>-XX:+PrintCommandLineFlags</code>选项来查看JVM启动时使用的默认参数：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 查看JVM启动时使用的默认参数，包括垃圾收集器的信息</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">java</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -XX:+PrintCommandLineFlags</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -version</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>常见的JVM内存相关配置参数：</p><ul><li><p>堆内存的大小配置（通常使用<code>-Xms</code> 和 <code>-Xmx</code>，JDK5后可以使用<code>-XX:InitialHeapSize</code>和<code>-XX:MaximumHeapSize</code>）</p></li><li><p>年轻代和老年代的大小比例设置（通过 <code>-XX:NewRatio</code>, <code>-XX:SurvivorRatio</code> 或 <code>-XX:NewSize</code> 和 <code>-XX:MaxNewSize</code>, G1则使用<code>-XX:G1NewSizePercent</code> 和 <code>-XX:G1MaxNewSizePercent</code>）</p></li><li><p>方法区内存大小设置（永久代或元空间）</p></li></ul><h3 id="堆内存配置" tabindex="-1"><a class="header-anchor" href="#堆内存配置"><span>堆内存配置</span></a></h3><p><strong>堆内存</strong>：通过 <code>-Xms</code> 和 <code>-Xmx</code> 参数设置初始堆大小和最大堆大小。一般推荐 <code>-Xms</code> 和 <code>-Xmx</code> 设置相同的值以避免动态调整带来的性能影响。</p><p><code>-Xms</code>和<code>-Xmx</code>参数并没有预设的默认值，它们取决于你的系统环境和JVM的版本。JVM通常会根据系统可用的内存和一些预设的规则来确定默认的堆大小。例如，对于64位JVM，默认的初始堆大小（<code>-Xms</code>）可能是物理内存的1/64，而最大堆大小（<code>-Xmx</code>）可能是物理内存的1/4。具体的默认值可能会因JVM的具体版本和系统配置有所不同。</p><div class="hint-container info"><p class="hint-container-title">自定义堆内存配置思路</p><ol><li><p><strong>了解应用需求</strong>：分析你的应用在生产环境中需要多少内存。如果应用主要是CPU密集型而非内存密集型，你可能不需要很大的堆。如果应用需要处理大量数据，可能需要更大的堆。</p></li><li><p><strong>平衡初始和最大堆大小</strong>：通常推荐<code>-Xms</code>和<code>-Xmx</code>设置为相同的值，这样可以避免JVM在运行过程中动态调整堆大小，减少不必要的性能损耗。</p></li><li><p><strong>参考物理内存</strong>：一个好的起点是将<code>-Xms</code>和<code>-Xmx</code>设置为你机器物理内存的一定比例，例如，如果你的服务器有16GB的RAM，你可能希望设置<code>-Xms</code>和<code>-Xmx</code>为大约12GB的30%至50%，即3.6GB至8GB，具体取决于应用的需求和你是否需要保留内存给其他系统进程。</p></li><li><p><strong>监控和调优</strong>：在应用上线后，应使用性能监控工具（如VisualVM或JConsole）来监控JVM的内存使用情况，根据监控结果调整<code>-Xms</code>和<code>-Xmx</code>的值，直到找到最佳的配置。</p></li></ol></div><p>例如，如果你的服务器有8GB的RAM，你可能想要设置<code>-Xms</code>和<code>-Xmx</code>如下：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">java</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -Xms2g</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -Xmx2g</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -jar</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> yourapplication.jar</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  # 为JVM分配2GB的初始堆和最大堆</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>实际的配置应根据具体需求和监测结果进行调整。在生产环境中，通常会设置更高的值，例如4GB或更高，特别是对于大型应用或数据密集型服务。</p><div class="hint-container tip"><p class="hint-container-title">`-XX:InitialHeapSize`和`-XX:MaximumHeapSize`</p><p>在JDK5及之后的版本中，<code>-Xms</code>和<code>-Xmx</code>参数的默认行为已经可以被<code>-XX:InitialHeapSize</code>和<code>-XX:MaximumHeapSize</code>所取代。也就是说，如果不显式指定<code>-XX:InitialHeapSize</code>和<code>-XX:MaximumHeapSize</code>，JVM才会使用<code>-Xms</code>和<code>-Xmx</code></p><p>示例配置：假设希望JVM的堆内存初始大小为1GB，最大大小为2GB，可以使用以下参数：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">java</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -XX:InitialHeapSize=1g</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -XX:MaximumHeapSize=2g</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> yourApp.jar</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></div><h3 id="年轻代和老年代" tabindex="-1"><a class="header-anchor" href="#年轻代和老年代"><span>年轻代和老年代</span></a></h3><p><strong>年轻代和老年代比例</strong>：通过 <code>-XX:NewRatio</code> 或 <code>-XX:NewSize</code> 和 <code>-XX:MaxNewSize</code> 控制年轻代与老年代的比例。</p><ol><li><p><code>-XX:NewRatio</code><br> 该参数用于设置老年代与年轻代的大小比例。例如，<code>-XX:NewRatio=2</code>意味着老年代的大小将是年轻代的两倍。</p></li><li><p><code>-XX:NewSize</code> 和 <code>-XX:MaxNewSize</code></p><ul><li><code>-XX:NewSize</code>用于设置年轻代的初始大小。</li><li><code>-XX:MaxNewSize</code>用于设置年轻代的最大大小。</li></ul><p>当需要显式指定年轻代的初始和最大大小时，使用这两个参数。它们可以替代<code>-XX:NewRatio</code>，提供更直接的控制。</p></li><li><p><code>-XX:SurvivorRatio</code></p></li></ol><ul><li><strong>功能</strong>：该参数用于控制年轻代中Eden区与两个Survivor区的大小比例。默认情况下，年轻代由一个Eden区和两个Survivor区组成，比例为8:1:1。如果<code>-XX:SurvivorRatio=8</code>，则意味着Eden区与每个Survivor区的大小比例为8:1。</li><li><strong>适用场景</strong>：当需要调整年轻代内部的Eden区与Survivor区的大小比例以优化短生命周期对象的垃圾回收效率时，使用此参数。</li></ul><div class="hint-container info"><p class="hint-container-title">`-XX:PretenureSizeThreshold` 和 `-XX:MaxTenuringThreshold`</p><p><code>-XX:PretenureSizeThreshold</code> 和 <code>-XX:MaxTenuringThreshold</code> 是两个与对象晋升到老年代（Old Generation）有关的重要参数。它们分别控制了对象直接进入老年代的大小阈值和对象在年轻代（Young Generation）中经历的垃圾回收次数阈值，对于优化JVM的内存管理和垃圾回收行为具有重要作用。</p><p><strong><code>-XX:PretenureSizeThreshold</code></strong>：</p><ul><li><p><strong>功能</strong>：此参数用于设置对象的大小阈值。如果一个新创建的对象大小超过了这个阈值，那么这个对象将直接在老年代中分配内存，而不是先在年轻代中分配。这样做的目的是为了避免大对象频繁在年轻代中进行复制，从而减少年轻代的垃圾回收开销。</p></li><li><p><strong>默认值</strong>：在不同的JDK版本中，<code>-XX:PretenureSizeThreshold</code>的默认值可能不同。在一些版本中，它的默认值可能被设置为0，意味着默认情况下所有对象都会先在年轻代中分配，除非特别配置。</p></li></ul><p><strong><code>-XX:MaxTenuringThreshold</code></strong>：</p><ul><li><p><strong>功能</strong>：此参数用于设置对象在年轻代中经过多少次垃圾回收后将晋升到老年代。对象在年轻代中的每一次幸存（即未被垃圾回收）都会增加其“年龄”（Tenuring）。当对象的年龄达到<code>-XX:MaxTenuringThreshold</code>设定的值时，它将被移动到老年代。</p></li><li><p><strong>默认值</strong>：<code>-XX:MaxTenuringThreshold</code>的默认值通常为15。这意味着默认情况下，一个对象必须在年轻代中幸存15次垃圾回收才能晋升到老年代。</p></li></ul></div><p>注意：以上参数适用于 G1垃圾收集器（如Serial、Parallel、CMS）之前的 版本中。</p><div class="hint-container info"><p class="hint-container-title">`-XX:G1NewSizePercent` 和 `-XX:G1MaxNewSizePercent`</p><p><code>-XX:G1NewSizePercent</code> 和 <code>-XX:G1MaxNewSizePercent</code> 是Java虚拟机（JVM）中专用于G1（Garbage-First）垃圾收集器的参数，用于控制年轻代在堆总大小中所占的百分比。G1收集器旨在提供更可预测的暂停时间，同时尽量减少全局垃圾回收的频率和持续时间。</p><h4 id="xx-g1newsizepercent" tabindex="-1"><a class="header-anchor" href="#xx-g1newsizepercent"><span><code>-XX:G1NewSizePercent</code></span></a></h4><p>此参数用于设置初始年轻代（Young Generation）的大小占整个堆内存的百分比。它告诉JVM在启动时，年轻代应占据堆内存的多少比例。</p><h4 id="xx-g1maxnewsizepercent" tabindex="-1"><a class="header-anchor" href="#xx-g1maxnewsizepercent"><span><code>-XX:G1MaxNewSizePercent</code></span></a></h4><p>这个参数用于设置年轻代可以扩展到的最大百分比，即年轻代在堆内存中最大能占据的百分比。这在JVM运行期间，当需要更多内存时，年轻代可以增长到的最大值。</p><p>假设你希望年轻代在堆内存中的初始占比为5%，最大占比为60%，可以使用以下命令行参数：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">java</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -XX:G1NewSizePercent=5</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -XX:G1MaxNewSizePercent=60</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> yourApp.jar</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li><p>G1收集器将堆划分为多个固定大小的区域（Region），年轻代和老年代的概念在这里变得模糊，因为这些区域可以动态地分配给年轻代或老年代。因此，通过<code>-XX:G1NewSizePercent</code>和<code>-XX:G1MaxNewSizePercent</code>来控制年轻代的大小，实际上是在控制年轻代占据的Region数量和比例。</p></li><li><p>设置<code>-XX:G1NewSizePercent</code>和<code>-XX:G1MaxNewSizePercent</code>时，应考虑到应用程序的特性，比如对象的生命周期、内存使用模式等。如果应用程序产生大量短暂生存期的对象，可能需要增大年轻代的大小，以减少频繁的垃圾回收操作。</p></li><li><p>过大或过小的年轻代大小都可能影响性能。年轻代太小会导致频繁的Minor GC，而年轻代太大则可能导致Full GC的频率增加，因为G1收集器需要更多的Region来处理老年代的垃圾回收。</p></li></ul></div><p>G1垃圾收集器采用了自适应的晋升策略，它会根据当前的堆内存使用情况和垃圾回收的频率来自动调整晋升规则。这意味着G1会根据运行时的实际条件动态决定对象的晋升时机。而不再需要用户显式指定<code>-XX:PretenureSizeThreshold</code>或<code>-XX:MaxTenuringThreshold</code>这样的参数。</p><h3 id="方法区配置" tabindex="-1"><a class="header-anchor" href="#方法区配置"><span>方法区配置</span></a></h3><p><strong>永久代或元空间</strong>：在JDK 8及以前版本，通过 <code>-XX:PermSize</code> 和 <code>-XX:MaxPermSize</code> 控制永久代大小；在JDK 8及以上版本，使用 <code>-XX:MetaspaceSize</code> 和 <code>-XX:MaxMetaspaceSize</code> 控制元空间大小。垃圾收集器主要关注堆内存的管理，特别是年轻代和老年代的垃圾回收，因此元空间相关的参数也与垃圾回收器没什么关系了。</p><div class="hint-container info"><p class="hint-container-title">方法区（Method Area）参数调优</p><p>方法区（Method Area），在JDK 8及以前的版本中被称为永久代（Permanent Generation，PermGen），是JVM的一部分，用于存储类的信息、静态变量、常量池等内容。在JDK 8中，永久代被元空间（Metaspace）所替代，元空间的实现不再局限于JVM的堆内存中，而是使用本机的直接内存。</p><h4 id="永久代-permgen-相关的jvm参数" tabindex="-1"><a class="header-anchor" href="#永久代-permgen-相关的jvm参数"><span>永久代（PermGen）相关的JVM参数</span></a></h4><p>在JDK 8之前的版本中，可以使用以下参数来调整永久代的大小：</p><ul><li><code>-XX:PermSize=&lt;size&gt;</code>：设置永久代的初始大小。例如，<code>-XX:PermSize=64m</code> 将永久代的初始大小设置为64MB。</li><li><code>-XX:MaxPermSize=&lt;size&gt;</code>：设置永久代的最大大小。例如，<code>-XX:MaxPermSize=128m</code> 将永久代的最大大小设置为128MB。</li></ul><h4 id="元空间-metaspace-相关的jvm参数" tabindex="-1"><a class="header-anchor" href="#元空间-metaspace-相关的jvm参数"><span>元空间（Metaspace）相关的JVM参数</span></a></h4><p>在JDK 8及以后的版本中，永久代被元空间所替代，相关参数如下：</p><ul><li><code>-XX:MetaspaceSize=&lt;size&gt;</code>：设置元空间的初始大小。元空间的大小并不是固定的，它会根据需要动态增长，但是初始大小会影响其增长速度。例如，<code>-XX:MetaspaceSize=128m</code>。</li><li><code>-XX:MaxMetaspaceSize=&lt;size&gt;</code>：设置元空间的最大大小。如果设置了这个参数，元空间的大小将不会超过这个值。如果不设置，元空间的大小将受到本机物理内存的限制。例如，<code>-XX:MaxMetaspaceSize=256m</code>。</li></ul><h4 id="调优策略" tabindex="-1"><a class="header-anchor" href="#调优策略"><span>调优策略</span></a></h4><ol><li><p><strong>监控元空间使用</strong>：使用JMX、VisualVM或JConsole等工具监控元空间的使用情况，以确定是否需要调整元空间的大小。</p></li><li><p><strong>初始大小调整</strong>：如果发现元空间经常接近其最大值或增长速度过快，可以适当增加<code>-XX:MetaspaceSize</code>的值，以减少元空间的频繁增长带来的开销。</p></li><li><p><strong>最大大小限制</strong>：如果应用的类信息量很大，可能会导致元空间耗尽物理内存，这时应设置<code>-XX:MaxMetaspaceSize</code>来限制元空间的最大大小，防止内存溢出。</p></li><li><p><strong>类卸载</strong>：如果应用中包含大量动态加载和卸载的类，可以考虑实现类的卸载机制，以便在不再需要类信息时将其从元空间中移除。</p></li><li><p><strong>类数据共享（CDS）</strong>：在JDK 8及以后的版本中，可以使用类数据共享（Class Data Sharing）来减少元空间的占用。CDS允许多个JVM实例共享相同的类信息，从而节省内存。</p></li></ol></div><h3 id="其他调优参数" tabindex="-1"><a class="header-anchor" href="#其他调优参数"><span>其他调优参数</span></a></h3><ul><li><code>-XX:+UseCompressedOops</code>：使用压缩的对象指针，节省内存。</li><li><code>-XX:+UseStringDeduplication</code>：减少字符串重复，节省内存。</li><li><code>-XX:+HeapDumpOnOutOfMemoryError</code> 和 <code>-XX:HeapDumpPath=&lt;path&gt;</code>：在OOM错误时自动创建堆转储文件。</li></ul><div class="hint-container info"><p class="hint-container-title">参数详解</p><h4 id="xx-usecompressedoops" tabindex="-1"><a class="header-anchor" href="#xx-usecompressedoops"><span><code>-XX:+UseCompressedOops</code></span></a></h4><p><strong>含义</strong>：此参数指示JVM使用压缩的对象指针（Ordinary Object Pointers，简称OOPs）。在64位JVM中，如果不启用该参数，对象指针会占用64位（即8字节）。启用后，JVM会使用32位（4字节）来表示对象指针，从而节省内存空间。</p><p><strong>优点</strong>：</p><ul><li>减少了内存占用，因为对象引用的开销降低。</li><li>有助于提高垃圾回收的效率，因为垃圾回收器处理的指针数量减少了。</li></ul><p><strong>适用场景</strong>：</p><ul><li>高内存使用量的应用，尤其是那些具有大量对象引用的应用。</li><li>64位JVM环境下，以节省内存为主要目标时。</li></ul><h4 id="xx-usestringdeduplication" tabindex="-1"><a class="header-anchor" href="#xx-usestringdeduplication"><span><code>-XX:+UseStringDeduplication</code></span></a></h4><p><strong>含义</strong>：此参数启用字符串去重功能，这是JDK 8中引入的一个新特性。它会自动检测和删除字符串常量池中的重复字符串，从而减少内存消耗。</p><p><strong>优点</strong>：</p><ul><li>显著减少内存中的字符串常量池占用，尤其是当应用中存在大量相同字符串时。</li><li>改善应用的性能，因为减少了内存复制和比较的次数。</li></ul><p><strong>适用场景</strong>：</p><ul><li>字符串处理密集型的应用，如文本分析、数据库连接池等。</li><li>应用中字符串重复率高的情况。</li></ul><h4 id="xx-heapdumponoutofmemoryerror-和-xx-heapdumppath-path" tabindex="-1"><a class="header-anchor" href="#xx-heapdumponoutofmemoryerror-和-xx-heapdumppath-path"><span><code>-XX:+HeapDumpOnOutOfMemoryError</code> 和 <code>-XX:HeapDumpPath=&lt;path&gt;</code></span></a></h4><ul><li><code>-XX:+HeapDumpOnOutOfMemoryError</code>：当JVM遇到<code>OutOfMemoryError</code>时，自动创建一个堆转储快照（heap dump）。</li><li><code>-XX:HeapDumpPath=&lt;path&gt;</code>：指定堆转储快照的保存路径。</li></ul><p><strong>优点</strong>：</p><ul><li>在内存溢出时提供关键的诊断信息，帮助开发者定位问题。</li><li>快速获取应用运行时的内存使用情况，包括对象分布、大小等，便于问题排查和性能调优。</li></ul><p><strong>适用场景</strong>：</p><ul><li>生产环境中，当应用出现不可预期的<code>OutOfMemoryError</code>时，为了快速定位问题。</li><li>开发和测试阶段，用于分析和预防潜在的内存泄漏。</li></ul></div><p>JIT编译优化：</p><ul><li><strong>逃逸分析</strong>：使用-XX:+DoEscapeAnalysis，允许JVM优化局部变量的存储位置。</li><li><strong>标量替换</strong>：使用-XX:+EliminateAllocations来减少对象创建。</li></ul><div class="hint-container info"><p class="hint-container-title">JIT编译优化</p><h4 id="逃逸分析-xx-doescapeanalysis" tabindex="-1"><a class="header-anchor" href="#逃逸分析-xx-doescapeanalysis"><span>逃逸分析：<code>-XX:+DoEscapeAnalysis</code></span></a></h4><p><strong>含义</strong>：<code>-XX:+DoEscapeAnalysis</code> 参数开启逃逸分析（Escape Analysis），用于分析局部变量的生命周期和作用域，判断局部变量是否“逃逸”出方法的作用域，即是否被外部访问或存储到堆上。</p><ul><li><strong>逃逸分析</strong>（Escape Analysis）是一种强大的优化手段，它分析局部变量的使用模式，判断哪些变量可以安全地分配在栈上而不是堆上，从而减少垃圾收集的压力和提高程序的性能。</li><li><strong>栈上分配</strong>（On-Stack Replacement, OSR）：基于逃逸分析的结果，JVM可以将不会逃逸出方法的局部变量分配在栈上，而不是在堆上分配，这样可以避免频繁的对象创建和垃圾回收。</li></ul><h4 id="标量替换-xx-eliminateallocations" tabindex="-1"><a class="header-anchor" href="#标量替换-xx-eliminateallocations"><span>标量替换：<code>-XX:+EliminateAllocations</code></span></a></h4><p><strong>含义</strong>：<code>-XX:+EliminateAllocations</code> 参数用于开启标量替换（Scalar Replacement），旨在减少对象的创建，从而减少内存分配和垃圾收集的压力。</p><ul><li><strong>标量替换</strong>（Scalar Replacement）是指将对象字段替换为其原始类型的标量变量的过程。例如，如果一个对象仅包含几个简单的字段（如整数、浮点数等），JIT编译器可能会决定不创建整个对象，而是直接使用这些字段的值。这样可以避免不必要的对象创建和随后的垃圾回收开销，提高程序的运行效率。</li></ul></div><h2 id="测试与最佳实践" tabindex="-1"><a class="header-anchor" href="#测试与最佳实践"><span>测试与最佳实践</span></a></h2><ul><li><p><strong>持续监控和调优</strong>：性能调优是一个迭代过程，需要不断测试和调整。</p></li><li><p><strong>A/B测试</strong>：在生产环境中实施小规模测试，评估不同配置的效果。</p></li><li><p><strong>遵循官方文档和社区建议</strong>：阅读JVM官方文档和Java社区的最佳实践，了解最新的调优技巧。</p></li></ul><p>性能调优通常需要结合应用的具体场景和需求，采取针对性的策略。同时，重要的是要认识到，过度调优可能会带来不必要的复杂性和维护成本，因此应该在性能收益和开发维护成本之间找到一个平衡点。</p>',94)]))}const c=i(a,[["render",t],["__file","pt.html.vue"]]),p=JSON.parse('{"path":"/java/senior/jvm/pt.html","title":"JVM性能调优","lang":"en-US","frontmatter":{"order":20,"title":"JVM性能调优","description":"JVM性能调优(Performance Tuning)是指一系列技术和实践，旨在优化Java应用程序在JVM上的执行效率，提升应用程序的响应时间和资源利用率。性能调优的目标通常包括降低CPU和内存的使用率，减少垃圾收集（GC）的停顿时间，提高吞吐量，以及增强系统的稳定性和可预测性。 监控与分析 JVM监控工具是用于监控和分析Java应用程序运行时状态的...","head":[["meta",{"property":"og:url","content":"https://x.app/notebook/java/senior/jvm/pt.html"}],["meta",{"property":"og:site_name","content":"Notebook"}],["meta",{"property":"og:title","content":"JVM性能调优"}],["meta",{"property":"og:description","content":"JVM性能调优(Performance Tuning)是指一系列技术和实践，旨在优化Java应用程序在JVM上的执行效率，提升应用程序的响应时间和资源利用率。性能调优的目标通常包括降低CPU和内存的使用率，减少垃圾收集（GC）的停顿时间，提高吞吐量，以及增强系统的稳定性和可预测性。 监控与分析 JVM监控工具是用于监控和分析Java应用程序运行时状态的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-07-11T06:44:33.000Z"}],["meta",{"property":"article:author","content":"ventixy"}],["meta",{"property":"article:modified_time","content":"2024-07-11T06:44:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JVM性能调优\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-11T06:44:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ventixy\\",\\"url\\":\\"https://www.ventix.top\\"}]}"]]},"headers":[{"level":2,"title":"监控与分析","slug":"监控与分析","link":"#监控与分析","children":[{"level":3,"title":"基础命令工具","slug":"基础命令工具","link":"#基础命令工具","children":[]},{"level":3,"title":"JConsole","slug":"jconsole","link":"#jconsole","children":[]},{"level":3,"title":"VisualVM","slug":"visualvm","link":"#visualvm","children":[]},{"level":3,"title":"GC日志分析","slug":"gc日志分析","link":"#gc日志分析","children":[]},{"level":3,"title":"GCViewer","slug":"gcviewer","link":"#gcviewer","children":[]}]},{"level":2,"title":"调整JVM参数","slug":"调整jvm参数","link":"#调整jvm参数","children":[{"level":3,"title":"垃圾收集器","slug":"垃圾收集器","link":"#垃圾收集器","children":[]},{"level":3,"title":"查看配置参数","slug":"查看配置参数","link":"#查看配置参数","children":[]},{"level":3,"title":"堆内存配置","slug":"堆内存配置","link":"#堆内存配置","children":[]},{"level":3,"title":"年轻代和老年代","slug":"年轻代和老年代","link":"#年轻代和老年代","children":[]},{"level":3,"title":"方法区配置","slug":"方法区配置","link":"#方法区配置","children":[]},{"level":3,"title":"其他调优参数","slug":"其他调优参数","link":"#其他调优参数","children":[]}]},{"level":2,"title":"测试与最佳实践","slug":"测试与最佳实践","link":"#测试与最佳实践","children":[]}],"git":{"createdTime":1720680273000,"updatedTime":1720680273000,"contributors":[{"name":"Neil","email":"msdrizzle@outlook.com","commits":1}]},"readingTime":{"minutes":29.82,"words":8945},"filePathRelative":"java/senior/jvm/pt.md","localizedDate":"July 11, 2024","autoDesc":true}');export{c as comp,p as data};
