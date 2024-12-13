import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,b as e,o as r}from"./app-Ce5_8qbr.js";const t={};function a(o,l){return r(),n("div",null,l[0]||(l[0]=[e('<h2 id="spring-基础概念" tabindex="-1"><a class="header-anchor" href="#spring-基础概念"><span>Spring 基础概念</span></a></h2><h3 id="spring-bean作用域" tabindex="-1"><a class="header-anchor" href="#spring-bean作用域"><span>Spring Bean作用域</span></a></h3><ul><li><strong>Spring Bean 一共有几种作用域？</strong><ul><li>Spring Bean 有多种作用域，包括singleton（单例）、prototype（原型）、request（请求）、session（会话）、global session（全局会话）等。</li></ul></li></ul><h3 id="beanfactory和factorybean" tabindex="-1"><a class="header-anchor" href="#beanfactory和factorybean"><span>BeanFactory和FactoryBean</span></a></h3><ul><li><strong>Spring 中的 BeanFactory 是什么？</strong><ul><li><code>BeanFactory</code> 是Spring框架中最基本的IoC容器，它负责管理Bean的创建、配置和生命周期。<code>BeanFactory</code> 提供了基本的依赖注入功能。</li></ul></li><li><strong>Spring 中的 FactoryBean 是什么？</strong><ul><li><code>FactoryBean</code> 是一个特殊的Bean，用于生成或装饰其他Bean。它通过实现 <code>FactoryBean</code> 接口来自定义Bean的创建逻辑。<code>FactoryBean</code> 可以用来创建复杂的对象或代理对象。</li></ul></li><li><strong>Spring 中的 ObjectFactory 是什么？</strong><ul><li><code>ObjectFactory</code> 是一个简单的工厂接口，用于生成一个对象。它通常作为延迟初始化的工具使用，可以在需要时才创建对象。</li></ul></li></ul><h3 id="循环依赖与三级缓存" tabindex="-1"><a class="header-anchor" href="#循环依赖与三级缓存"><span>循环依赖与三级缓存</span></a></h3><ul><li><strong>什么是循环依赖（常问）？</strong><ul><li>循环依赖是指两个或多个对象互相持有对方的引用，形成一个闭环。例如，A依赖于B，B又依赖于A。</li></ul></li><li><strong>Spring 如何解决循环依赖？</strong><ul><li>Spring使用三级缓存机制来解决循环依赖问题。当检测到循环依赖时，Spring会尝试从缓存中获取已经创建的部分对象，从而避免无限递归。</li></ul></li><li><strong>为什么 Spring 循环依赖需要三级缓存，二级不够吗？</strong><ul><li>三级缓存包括一级缓存（singletonObjects）、二级缓存（earlySingletonObjects）和三级缓存（singletonFactories）。二级缓存不足以完全解决所有类型的循环依赖，因为可能存在A-&gt;B-&gt;C-&gt;A的循环依赖，而三级缓存可以更细粒度地管理对象创建的不同阶段。</li></ul></li></ul><h3 id="spring-ioc-di" tabindex="-1"><a class="header-anchor" href="#spring-ioc-di"><span>Spring IOC &amp; DI</span></a></h3><ul><li><p><strong>什么是 Spring IOC？</strong></p><ul><li>IOC（控制反转）是Spring框架的核心功能之一，它允许程序的设计者通过配置文件或注解来声明式地管理对象之间的依赖关系，而不是通过代码硬编码。</li></ul></li><li><p><strong>Spring IOC 有什么好处？</strong></p><ul><li>减少代码耦合，提高模块化程度，方便测试和管理。</li></ul></li><li><p><strong>Spring 中的 DI 是什么？</strong></p><ul><li>DI（依赖注入）是IOC的一个具体实现方式，它让Spring容器负责管理对象之间的依赖关系，通过构造函数、setter方法或字段直接注入依赖。</li></ul></li><li><p><strong>Spring 一共有几种注入方式？</strong></p><ul><li>Spring提供了多种注入方式，包括构造函数注入、setter方法注入、字段注入等。</li></ul></li><li><p>SpringBoot（Spring）中为什么不推荐使用 @Autowired ？</p></li></ul><h3 id="spring-aop" tabindex="-1"><a class="header-anchor" href="#spring-aop"><span>Spring AOP</span></a></h3><ul><li><strong>什么是 AOP？</strong><ul><li>AOP（面向切面编程）是一种编程范式，通过预编译方式和运行期动态代理实现程序功能的统一维护。它可以在不修改源代码的情况下，增加新的功能。</li></ul></li><li><strong>Spring AOP默认用的是什么动态代理，两者的区别？</strong><ul><li>Spring AOP 默认使用JDK动态代理来实现接口的代理，对于没有接口的类，则使用CGLIB库来生成一个被代理对象的子类。JDK动态代理只能代理实现了接口的类，而CGLIB可以代理任何类。</li></ul></li><li><strong>什么是 Java 中的动态代理？</strong><ul><li>动态代理是在运行时动态生成代理对象的技术。Java提供了两种动态代理方式：JDK动态代理和CGLIB动态代理。</li></ul></li><li><strong>能说说 Spring 拦截链的实现吗？</strong><ul><li>Spring AOP 的拦截链通过AOP Alliance的Interceptor接口来实现，可以在方法调用前后插入自定义逻辑。拦截器可以串联起来形成一个拦截链，每个拦截器都可以对方法调用进行增强。</li></ul></li><li><strong>Spring AOP 和 AspectJ 有什么区别？</strong><ul><li>AspectJ 是一个完整的AOP框架，提供了比Spring AOP更强大的功能，如在编译时织入等方面的支持。而Spring AOP 更加轻量级，主要基于代理机制实现。</li></ul></li><li><strong>Spring AOP 相关术语都有哪些？</strong><ul><li>包括切面（Aspect）、连接点（Join Point）、通知（Advice）、切点（Pointcut）、引入（Introduction）、目标对象（Target Object）、织入（Weaving）等。</li></ul></li><li><strong>Spring 通知有哪些类型？</strong><ul><li>包括前置通知（Before Advice）、后置通知（After Advice）、返回通知（After Returning Advice）、异常通知（After Throwing Advice）、环绕通知（Around Advice）等。</li></ul></li></ul><h3 id="spring设计模式" tabindex="-1"><a class="header-anchor" href="#spring设计模式"><span>Spring设计模式</span></a></h3><ul><li><strong>你了解的 Spring 都用到哪些设计模式？</strong><ul><li>Spring框架中应用了很多设计模式，如单例模式（Singleton）、工厂模式（Factory）、代理模式（Proxy）、模板方法模式（Template Method）、观察者模式（Observer）等。</li></ul></li></ul><h3 id="spring-事务管理" tabindex="-1"><a class="header-anchor" href="#spring-事务管理"><span>Spring 事务管理</span></a></h3><ul><li><strong>Spring 事务有几个隔离级别？</strong><ul><li>Spring 支持多种事务隔离级别，包括读未提交（Read Uncommitted）、读已提交（Read Committed）、可重复读（Repeatable Read）、序列化（Serializable）。</li></ul></li><li><strong>Spring 有哪几种事务传播行为?</strong><ul><li>Spring 提供了多种事务传播行为，如REQUIRED、REQUIRES_NEW、SUPPORTS、NOT_SUPPORTED、NEVER、MANDATORY、NESTED等。</li></ul></li><li><strong>Spring 事务传播行为有什么用?</strong><ul><li>事务传播行为用于控制事务的嵌套行为，确保事务的一致性和完整性。例如，REQUIRED表示如果当前存在事务则加入该事务，否则新建一个事务。</li></ul></li><li><strong>Spring 事务在什么情况下会失效？</strong><ul><li>Spring 事务在以下情况下可能会失效：使用异步方法、使用非受管线程、事务方法抛出非检查异常但未被捕获、事务方法内部调用其他非事务方法等。</li></ul></li></ul><h2 id="spring-mvc" tabindex="-1"><a class="header-anchor" href="#spring-mvc"><span>Spring MVC</span></a></h2><h3 id="spring-mvc基础" tabindex="-1"><a class="header-anchor" href="#spring-mvc基础"><span>Spring MVC基础</span></a></h3><ul><li><strong>说下对 Spring MVC 的理解？</strong><ul><li>Spring MVC 是Spring框架的一部分，用于构建Web应用程序，它遵循MVC设计模式，分离了数据、视图和控制器。</li></ul></li><li><strong>什么是 Restful 风格的接口？</strong><ul><li>Restful是一种软件架构风格，强调应用程序的状态转换应该是无状态的，使用HTTP协议的标准方法（GET、POST、PUT、DELETE等）来操作资源。</li></ul></li><li><strong>Spring MVC中的Controller是什么？如何定义一个Controller？</strong><ul><li>Controller是Spring MVC中的控制器，用于处理用户请求，可以通过@Controller注解来定义一个Controller。</li></ul></li><li><strong>Spring MVC 中如何处理表单提交？</strong><ul><li>Spring MVC 提供了多种方式来处理表单提交，包括使用@RequestParam注解绑定请求参数、使用@ModelAttribute注解绑定表单对象等。</li></ul></li><li><strong>Spring MVC 中的国际化支持是如何实现的？</strong><ul><li>Spring MVC 提供了LocaleResolver和MessageSource等接口来支持国际化功能，可以通过配置这些接口来实现多语言支持。</li></ul></li></ul><h3 id="工作原理和核心组件" tabindex="-1"><a class="header-anchor" href="#工作原理和核心组件"><span>工作原理和核心组件</span></a></h3><ul><li><strong>Spring MVC 具体的工作原理？</strong><ul><li>客户端请求首先到达前端控制器DispatcherServlet，然后DispatcherServlet根据请求信息调用HandlerMapping找到对应的Handler（控制器），再由Handler执行完成业务逻辑处理，最后返回ModelAndView给DispatcherServlet，后者选择合适的ViewResolver进行视图解析并渲染页面，最终响应给客户端。</li></ul></li><li><strong>介绍下 Spring MVC 的核心组件？</strong><ul><li>包括前端控制器DispatcherServlet、处理器映射HandlerMapping、处理器适配器HandlerAdapter、视图解析器ViewResolver等。</li></ul></li><li><strong>SpringMVC 父子容器是什么知道吗？</strong><ul><li>在Spring MVC中，WebApplicationContext通常是ApplicationContext的子容器，前者负责处理Web相关的Bean，后者负责处理非Web相关的Bean。</li></ul></li><li><strong>Spring MVC 中的视图解析器有什么作用？</strong><ul><li>视图解析器用于将逻辑视图名称解析为具体的视图对象，常用的视图解析器有InternalResourceViewResolver等。</li></ul></li></ul><h3 id="过滤器和拦截器" tabindex="-1"><a class="header-anchor" href="#过滤器和拦截器"><span>过滤器和拦截器</span></a></h3><ul><li><strong>Spring MVC 中的拦截器是什么？如何定义一个拦截器？</strong><ul><li>拦截器用于在请求处理之前或之后执行某些操作，可以通过实现HandlerInterceptor接口或继承HandlerInterceptorAdapter类来定义拦截器。</li></ul></li></ul><h3 id="异常处理" tabindex="-1"><a class="header-anchor" href="#异常处理"><span>异常处理</span></a></h3><ul><li><strong>Spring MVC 中如何处理异常？</strong><ul><li>Spring MVC 中可以通过@ControllerAdvice和@ExceptionHandler注解来全局处理异常。</li></ul></li></ul><h2 id="spring相关注解" tabindex="-1"><a class="header-anchor" href="#spring相关注解"><span>Spring相关注解</span></a></h2><h3 id="控制层注解" tabindex="-1"><a class="header-anchor" href="#控制层注解"><span>控制层注解</span></a></h3><ul><li><strong>Spring MVC中的Controller是什么？如何定义一个Controller？</strong><ul><li>Controller是Spring MVC中的控制器，用于处理用户请求，可以通过@Controller注解来定义一个Controller。</li></ul></li><li><strong>Spring 中的 @RequestMapping 注解的作用是什么？</strong><ul><li>@RequestMapping用于映射HTTP请求到处理方法上，可以标注在类或方法上。</li></ul></li><li><strong>Spring 中的 @GetMapping、@PostMapping、@PutMapping、@DeleteMapping 注解的作用是什么？</strong><ul><li>这些注解是@RequestMapping的快捷方式，分别用于映射GET、POST、PUT、DELETE请求。</li></ul></li><li><strong>Spring 中的 @PathVariable 注解的作用是什么？</strong><ul><li>@PathVariable用于提取URL路径中的变量。</li></ul></li><li><strong>Spring 中的 @RequestParam 注解的作用是什么？</strong><ul><li>@RequestParam用于提取请求参数。</li></ul></li><li><strong>Spring 中的 @RequestBody 注解的作用是什么？</strong><ul><li>@RequestBody用于将请求体中的数据绑定到方法参数上。</li></ul></li><li><strong>Spring 中的 @ResponseBody 注解的作用是什么？</strong><ul><li>@ResponseBody用于将方法返回值直接写入HTTP响应体中。</li></ul></li></ul><h3 id="数据绑定注解" tabindex="-1"><a class="header-anchor" href="#数据绑定注解"><span>数据绑定注解</span></a></h3><ul><li><strong>Spring中的 @ModelAttribute 注解的作用是什么？</strong><ul><li>@ModelAttribute用于将请求参数绑定到模型对象，也可以用于将模型对象添加到模型中。</li></ul></li><li><strong>Spring 中的 @SessionAttribute 注解的作用是什么？</strong><ul><li>@SessionAttribute用于将属性存储在HTTP会话中。</li></ul></li><li><strong>Spring 中的 @RequestHeader 和 @CookieValue 注解的作用是什么？</strong><ul><li>@RequestHeader用于提取HTTP请求头中的值，@CookieValue用于提取Cookie值。</li></ul></li></ul><h3 id="异常处理注解" tabindex="-1"><a class="header-anchor" href="#异常处理注解"><span>异常处理注解</span></a></h3><ul><li><strong>Spring 中的 @ExceptionHandler 注解的作用是什么？</strong><ul><li>@ExceptionHandler用于处理特定类型的异常，可以标注在方法上。</li></ul></li><li><strong>Spring 中的 @ResponseStatus 注解的作用是什么？</strong><ul><li>@ResponseStatus用于指定方法或异常的HTTP响应状态码。</li></ul></li></ul><h3 id="生命周期和初始化注解" tabindex="-1"><a class="header-anchor" href="#生命周期和初始化注解"><span>生命周期和初始化注解</span></a></h3><ul><li><strong>Spring 中的 @PostConstruct 和 @PreDestroy 注解的作用是什么？</strong><ul><li>@PostConstruct用于标记初始化方法，@PreDestroy用于标记销毁方法。</li></ul></li></ul><h3 id="配置和元注解" tabindex="-1"><a class="header-anchor" href="#配置和元注解"><span>配置和元注解</span></a></h3><ul><li><strong>Spring中的 @Configuration 注解的作用是什么？</strong><ul><li>@Configuration用于标记配置类，配置类中的方法可以用@Bean注解来定义Bean。</li></ul></li><li><strong>Spring中的 @ComponentScan 注解的作用是什么？</strong><ul><li>@ComponentScan用于启用组件扫描，自动发现并注册带有@Component、@Service、@Controller等注解的类。</li></ul></li><li><strong>Spring中的 @EnableAutoConfiguration 注解的作用是什么？</strong><ul><li>@EnableAutoConfiguration用于启用自动配置，Spring Boot会根据类路径中的依赖自动配置应用程序。</li></ul></li></ul><h3 id="其他注解" tabindex="-1"><a class="header-anchor" href="#其他注解"><span>其他注解</span></a></h3><ul><li><strong>Spring中的 @Primary 注解的作用是什么？</strong><ul><li>@Primary用于标记优先选择的Bean，当存在多个相同类型的Bean时，标记为@Primary的Bean会被优先选择。</li></ul></li><li><strong>Spring中的 @Value 注解的作用是什么？</strong><ul><li>@Value用于读取配置文件中的值，并将其注入到Bean的属性中。</li></ul></li><li><strong>Spring 中的 @Profile 注解的作用是什么？</strong><ul><li>@Profile用于根据环境激活不同的Bean配置。</li></ul></li><li><strong>Spring 中的 @Validated 和 @Valid 注解有什么区别？</strong><ul><li>@Validated支持分组校验，而@Valid不支持分组校验。</li></ul></li><li><strong>Spring 中的 @Scheduled 注解的作用是什么？</strong><ul><li>@Scheduled用于定时任务，可以指定任务的执行时间和频率。</li></ul></li><li><strong>Spring 中的 @Cacheable 和 @CacheEvict 注解的作用是什么？</strong><ul><li>@Cacheable用于缓存方法的结果，@CacheEvict用于清除缓存。</li></ul></li><li><strong>Spring 中的 @Conditional 注解的作用是什么？</strong><ul><li>@Conditional用于条件化地创建Bean，可以根据某些条件决定是否创建Bean。</li></ul></li><li><strong>Spring 中的 @Lazy 注解的作用是什么？</strong><ul><li>@Lazy用于延迟初始化Bean，只有在第一次访问时才会创建。</li></ul></li><li><strong>Spring 中的 @PropertySource 注解的作用是什么？</strong><ul><li>@PropertySource用于加载外部属性文件。</li></ul></li><li><strong>Spring 中的 @EventListener 注解的作用是什么？</strong><ul><li>@EventListener用于监听并处理事件。</li></ul></li></ul><h2 id="其他相关问题" tabindex="-1"><a class="header-anchor" href="#其他相关问题"><span>其他相关问题</span></a></h2><h3 id="关系问题" tabindex="-1"><a class="header-anchor" href="#关系问题"><span>关系问题</span></a></h3><ul><li><strong>Spring 和 Spring MVC 的关系是什么？</strong><ul><li>Spring MVC是Spring框架的一部分，专门用于构建Web应用程序，而Spring框架提供了更多的基础功能。</li></ul></li></ul><h3 id="spring的组成" tabindex="-1"><a class="header-anchor" href="#spring的组成"><span>Spring的组成</span></a></h3><ul><li><strong>看过源码吗？说下 Spring 由哪些重要的模块组成？</strong><ul><li>Spring框架包含多个模块，如Core Container、Data Access/Integration、Web、AOP、Instrumentation、Messaging、Test等。</li></ul></li><li><strong>Spring 中的 ApplicationContext 是什么？</strong><ul><li><code>ApplicationContext</code> 是<code>BeanFactory</code>的扩展，提供了更多企业级功能，如事件发布、国际化、资源加载等。</li></ul></li></ul><h3 id="单例bean线程安全问题" tabindex="-1"><a class="header-anchor" href="#单例bean线程安全问题"><span>单例Bean线程安全问题</span></a></h3><ul><li><strong>Spring 的单例 Bean 是否有并发安全问题？</strong><ul><li>Spring的单例Bean默认是线程安全的，但如果Bean中有共享的可变状态，则需要额外的同步措施来保证线程安全。</li></ul></li></ul>',44)]))}const p=i(t,[["render",a],["__file","spring.html.vue"]]),u=JSON.parse('{"path":"/interview/frame/spring.html","title":"Spring/SpringMVC","lang":"en-US","frontmatter":{"order":50,"title":"Spring/SpringMVC","description":"Spring 基础概念 Spring Bean作用域 Spring Bean 一共有几种作用域？ Spring Bean 有多种作用域，包括singleton（单例）、prototype（原型）、request（请求）、session（会话）、global session（全局会话）等。 BeanFactory和FactoryBean Spring 中...","head":[["meta",{"property":"og:url","content":"https://x.app/interview/frame/spring.html"}],["meta",{"property":"og:site_name","content":"Notebook"}],["meta",{"property":"og:title","content":"Spring/SpringMVC"}],["meta",{"property":"og:description","content":"Spring 基础概念 Spring Bean作用域 Spring Bean 一共有几种作用域？ Spring Bean 有多种作用域，包括singleton（单例）、prototype（原型）、request（请求）、session（会话）、global session（全局会话）等。 BeanFactory和FactoryBean Spring 中..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-28T13:29:58.000Z"}],["meta",{"property":"article:author","content":"ventixy"}],["meta",{"property":"article:modified_time","content":"2024-11-28T13:29:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring/SpringMVC\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-28T13:29:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ventixy\\",\\"url\\":\\"https://www.ventix.top\\"}]}"]]},"headers":[{"level":2,"title":"Spring 基础概念","slug":"spring-基础概念","link":"#spring-基础概念","children":[{"level":3,"title":"Spring Bean作用域","slug":"spring-bean作用域","link":"#spring-bean作用域","children":[]},{"level":3,"title":"BeanFactory和FactoryBean","slug":"beanfactory和factorybean","link":"#beanfactory和factorybean","children":[]},{"level":3,"title":"循环依赖与三级缓存","slug":"循环依赖与三级缓存","link":"#循环依赖与三级缓存","children":[]},{"level":3,"title":"Spring IOC & DI","slug":"spring-ioc-di","link":"#spring-ioc-di","children":[]},{"level":3,"title":"Spring AOP","slug":"spring-aop","link":"#spring-aop","children":[]},{"level":3,"title":"Spring设计模式","slug":"spring设计模式","link":"#spring设计模式","children":[]},{"level":3,"title":"Spring 事务管理","slug":"spring-事务管理","link":"#spring-事务管理","children":[]}]},{"level":2,"title":"Spring MVC","slug":"spring-mvc","link":"#spring-mvc","children":[{"level":3,"title":"Spring MVC基础","slug":"spring-mvc基础","link":"#spring-mvc基础","children":[]},{"level":3,"title":"工作原理和核心组件","slug":"工作原理和核心组件","link":"#工作原理和核心组件","children":[]},{"level":3,"title":"过滤器和拦截器","slug":"过滤器和拦截器","link":"#过滤器和拦截器","children":[]},{"level":3,"title":"异常处理","slug":"异常处理","link":"#异常处理","children":[]}]},{"level":2,"title":"Spring相关注解","slug":"spring相关注解","link":"#spring相关注解","children":[{"level":3,"title":"控制层注解","slug":"控制层注解","link":"#控制层注解","children":[]},{"level":3,"title":"数据绑定注解","slug":"数据绑定注解","link":"#数据绑定注解","children":[]},{"level":3,"title":"异常处理注解","slug":"异常处理注解","link":"#异常处理注解","children":[]},{"level":3,"title":"生命周期和初始化注解","slug":"生命周期和初始化注解","link":"#生命周期和初始化注解","children":[]},{"level":3,"title":"配置和元注解","slug":"配置和元注解","link":"#配置和元注解","children":[]},{"level":3,"title":"其他注解","slug":"其他注解","link":"#其他注解","children":[]}]},{"level":2,"title":"其他相关问题","slug":"其他相关问题","link":"#其他相关问题","children":[{"level":3,"title":"关系问题","slug":"关系问题","link":"#关系问题","children":[]},{"level":3,"title":"Spring的组成","slug":"spring的组成","link":"#spring的组成","children":[]},{"level":3,"title":"单例Bean线程安全问题","slug":"单例bean线程安全问题","link":"#单例bean线程安全问题","children":[]}]}],"git":{"createdTime":1732800598000,"updatedTime":1732800598000,"contributors":[{"name":"drizzle","email":"msdrizzle@outlook.com","commits":1}]},"readingTime":{"minutes":10.13,"words":3040},"filePathRelative":"interview/frame/spring.md","localizedDate":"November 28, 2024","autoDesc":true}');export{p as comp,u as data};