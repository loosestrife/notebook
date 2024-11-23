import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,b as l,o as e}from"./app-CO-BA49g.js";const r={};function s(o,i){return e(),t("div",null,i[0]||(i[0]=[l('<h2 id="分布式系统" tabindex="-1"><a class="header-anchor" href="#分布式系统"><span>分布式系统</span></a></h2><h3 id="cap理论" tabindex="-1"><a class="header-anchor" href="#cap理论"><span>CAP理论</span></a></h3><p>CAP理论是分布式系统设计中的一个重要概念，由 Eric Brewer 在2000年的 ACM Symposium on Principles of Distributed Computing 上提出，并由 Seth Gilbert 和 Nancy Lynch 在2002年进行了证明</p><p>CAP理论指出，在分布式系统中，无法同时完美地实现以下三个属性：<strong>一致性（Consistency）、可用性（Availability）和分区容忍性（Partition Tolerance）</strong>。系统最多只能同时满足其中的两个属性。</p><ol><li><p><strong>一致性（Consistency）</strong></p><ul><li><strong>定义</strong>：所有节点在同一时间看到相同的数据。</li><li><strong>解释</strong>：当一个更新操作完成后，所有后续的读取操作都将返回最新的数据。这意味着系统必须等待所有节点都更新完毕才能返回结果。</li><li><strong>优点</strong>：数据的一致性和准确性。</li><li><strong>缺点</strong>：可能会影响系统的可用性和性能。</li></ul></li><li><p><strong>可用性（Availability）</strong></p><ul><li><strong>定义</strong>：每一个请求都能得到一个非错误的响应，但不保证是最新的数据。</li><li><strong>解释</strong>：系统在任何情况下都能响应客户端的请求，即使是在部分节点故障的情况下。</li><li><strong>优点</strong>：系统的高可用性和响应速度。</li><li><strong>缺点</strong>：可能牺牲数据的一致性。</li></ul></li><li><p><strong>分区容忍性（Partition Tolerance）</strong></p><ul><li><strong>定义</strong>：系统在遇到任意网络分区的情况下仍然能够继续运作。</li><li><strong>解释</strong>：即使网络发生故障，导致部分节点之间的通信中断，系统仍然能够继续运行并提供服务。</li><li><strong>优点</strong>：系统的高可靠性和容错能力。</li><li><strong>缺点</strong>：可能需要在一致性和可用性之间做出权衡。</li></ul></li></ol><div class="hint-container info"><p class="hint-container-title">CAP理论的三种组合</p><ol><li><p><strong>CA（Consistency and Availability）</strong></p><ul><li><strong>定义</strong>：系统保证强一致性和高可用性，但不保证分区容忍性。</li><li><strong>解释</strong>：在这种情况下，系统假定网络是可靠的，不会发生网络分区(只有单体应用能保证)。如果发生网络分区，系统将停止工作，以保证一致性和可用性。</li><li><strong>适用场景</strong>：适用于对一致性和可用性要求极高，但网络环境相对稳定的场景，如单数据中心内部的应用。</li><li><strong>示例</strong>：传统的关系型数据库（如 MySQL、PostgreSQL）通常遵循 CA 模型。</li></ul></li><li><p><strong>CP（Consistency and Partition Tolerance）</strong></p><ul><li><strong>定义</strong>：系统保证强一致性和分区容忍性，但可能牺牲部分可用性。</li><li><strong>解释</strong>：在这种情况下，系统在发生网络分区时，优先保证数据的一致性，可能会拒绝部分请求，以避免不一致的数据。</li><li><strong>适用场景</strong>：适用于对数据一致性和可靠性要求较高的场景，如金融交易系统。</li><li><strong>示例</strong>：一些分布式数据库（如 Spanner）和分布式键值存储（如 Etcd）通常遵循 CP 模型。</li></ul></li><li><p><strong>AP（Availability and Partition Tolerance）</strong></p><ul><li><strong>定义</strong>：系统保证高可用性和分区容忍性，但可能牺牲部分一致性。</li><li><strong>解释</strong>：在这种情况下，系统在发生网络分区时，优先保证系统的可用性，可能会返回旧的数据或不一致的数据。</li><li><strong>适用场景</strong>：适用于对系统可用性和容错能力要求较高的场景，如社交网络和内容分发网络。</li><li><strong>示例</strong>：一些 NoSQL 数据库（如 Cassandra、DynamoDB）和分布式缓存（如 Redis）通常遵循 AP 模型。</li></ul></li></ol></div><p>CA显然违背了分布式系统的概念，分布式系统的网络是不能百分百保证一直稳定的，只有没有网络的传输的单体架构才能做到。</p><p>通常情况下，大多数互联网应用会选择 AP 模型，以保证高可用性和容错能力。如果你的应用对数据一致性要求非常高（金融交易），可以选择 CP 模型。对于单数据中心内的应用，可以选择 CA 模型。</p><h3 id="base理论" tabindex="-1"><a class="header-anchor" href="#base理论"><span>BASE理论</span></a></h3><h2 id="微服务架构" tabindex="-1"><a class="header-anchor" href="#微服务架构"><span>微服务架构</span></a></h2><p>在 Java 微服务架构中，常见的组件包括注册中心、配置中心、API 网关、服务发现、负载均衡、断路器、消息队列等。</p><h3 id="注册中心" tabindex="-1"><a class="header-anchor" href="#注册中心"><span>注册中心</span></a></h3><p>注册中心（Service Discovery）用于管理微服务的注册和发现，确保服务之间的通信。</p><ul><li><strong>Zookeeper</strong>：强一致性，高可靠性，适合对一致性要求高的场景。</li><li><strong>Eureka</strong>：最终一致性，高可用性，广泛用于 Spring Cloud 生态系统。</li><li><strong>Nacos</strong>：集成了服务发现和配置管理功能，适合大规模微服务架构。</li><li><strong>Consul</strong>：提供服务发现、健康检查、KV 存储等功能，适合多语言环境。</li></ul><h3 id="配置中心" tabindex="-1"><a class="header-anchor" href="#配置中心"><span>配置中心</span></a></h3><p>配置中心（Configuration Management）用于集中管理微服务的配置信息，支持动态刷新配置。</p><ul><li><strong>Spring Cloud Config</strong>：与 Spring Cloud 生态系统高度集成，支持 Git 和本地文件系统存储配置。</li><li><strong>Nacos</strong>：集成了配置管理功能，支持动态刷新和多环境管理。</li><li><strong>Apollo</strong>：携程开源的配置中心，支持多环境、多集群管理。</li><li><strong>Consul</strong>：提供 KV 存储功能，可以用于配置管理。</li></ul><h3 id="api-网关" tabindex="-1"><a class="header-anchor" href="#api-网关"><span>API 网关</span></a></h3><p>API 网关（API Gateway）作为系统的入口，负责请求路由、过滤和限流等。</p><ul><li><strong>Spring Cloud Gateway</strong>：新一代 API 网关，支持声明式路由和过滤器。</li><li><strong>Zuul</strong>：Spring Cloud 提供的 API 网关，适合简单的路由和过滤需求。</li><li><strong>Kong</strong>：高性能的 API 网关，支持插件扩展。</li><li><strong>Traefik</strong>：轻量级的 API 网关，支持自动发现和负载均衡。</li></ul><h3 id="负载均衡" tabindex="-1"><a class="header-anchor" href="#负载均衡"><span>负载均衡</span></a></h3><p>负载均衡（Load Balancing）用于在多个服务实例之间分配请求，提高系统的可用性和性能。</p><ul><li><strong>Ribbon</strong>：客户端负载均衡器，与 Spring Cloud 生态系统集成。</li><li><strong>Nginx</strong>：常用的反向代理和负载均衡器，适合静态内容和动态内容的负载均衡。</li><li><strong>HAProxy</strong>：高性能的 TCP/HTTP 负载均衡器，适合高并发场景。</li></ul><h3 id="断路器" tabindex="-1"><a class="header-anchor" href="#断路器"><span>断路器</span></a></h3><p>断路器（Circuit Breaker）用于处理服务调用失败，防止故障扩散。</p><ul><li><strong>Hystrix</strong>：Spring Cloud 提供的断路器，支持熔断和降级。</li><li><strong>Resilience4j</strong>：轻量级的断路器库，与函数式编程风格兼容。</li><li><strong>Sentinel</strong>：阿里巴巴开源的流量控制和熔断组件。</li></ul><h3 id="消息队列" tabindex="-1"><a class="header-anchor" href="#消息队列"><span>消息队列</span></a></h3><p>消息队列（Message Queue）用于异步通信和解耦服务。</p><ul><li><strong>RabbitMQ</strong>：AMQP 协议的消息队列，支持多种消息模式。</li><li><strong>Kafka</strong>：高性能的消息队列，适合大数据和流处理。</li><li><strong>RocketMQ</strong>：阿里巴巴开源的消息队列，支持事务消息和顺序消息。</li><li><strong>ActiveMQ</strong>：老牌的消息队列，支持多种协议。</li></ul><h2 id="相关解决方案" tabindex="-1"><a class="header-anchor" href="#相关解决方案"><span>相关解决方案</span></a></h2><h3 id="分布式缓存" tabindex="-1"><a class="header-anchor" href="#分布式缓存"><span>分布式缓存</span></a></h3><p>分布式缓存（Distributed Cache）用于提高系统的性能和响应速度。</p><ul><li><strong>Redis</strong>：高性能的键值存储，支持多种数据结构。</li><li><strong>Memcached</strong>：轻量级的分布式缓存，适合简单的缓存需求。</li><li><strong>Ehcache</strong>：纯 Java 的缓存框架，支持分布式缓存。</li></ul><h3 id="分布式事务" tabindex="-1"><a class="header-anchor" href="#分布式事务"><span>分布式事务</span></a></h3><p>分布式事务（Distributed Transactions）用于保证跨服务的数据一致性。</p><ul><li><strong>Seata</strong>：阿里巴巴开源的分布式事务解决方案。</li><li><strong>TCC</strong>：Try-Confirm-Cancel 模式，用于实现分布式事务。</li><li><strong>XA</strong>：两阶段提交协议，支持分布式事务。</li></ul><h3 id="分布式id" tabindex="-1"><a class="header-anchor" href="#分布式id"><span>分布式ID</span></a></h3><h3 id="分布式认证授权" tabindex="-1"><a class="header-anchor" href="#分布式认证授权"><span>分布式认证授权</span></a></h3>',38)]))}const p=n(r,[["render",s],["__file","index.html.vue"]]),c=JSON.parse('{"path":"/java/service/","title":"分布式与微服务架构","lang":"en-US","frontmatter":{"dir":{"order":30,"collapsible":false},"index":false,"title":"分布式与微服务架构","icon":"application","description":"分布式系统 CAP理论 CAP理论是分布式系统设计中的一个重要概念，由 Eric Brewer 在2000年的 ACM Symposium on Principles of Distributed Computing 上提出，并由 Seth Gilbert 和 Nancy Lynch 在2002年进行了证明 CAP理论指出，在分布式系统中，无法同时完美...","head":[["meta",{"property":"og:url","content":"https://x.app/java/service/"}],["meta",{"property":"og:site_name","content":"Notebook"}],["meta",{"property":"og:title","content":"分布式与微服务架构"}],["meta",{"property":"og:description","content":"分布式系统 CAP理论 CAP理论是分布式系统设计中的一个重要概念，由 Eric Brewer 在2000年的 ACM Symposium on Principles of Distributed Computing 上提出，并由 Seth Gilbert 和 Nancy Lynch 在2002年进行了证明 CAP理论指出，在分布式系统中，无法同时完美..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-23T15:23:24.000Z"}],["meta",{"property":"article:author","content":"ventixy"}],["meta",{"property":"article:modified_time","content":"2024-11-23T15:23:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"分布式与微服务架构\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-23T15:23:24.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ventixy\\",\\"url\\":\\"https://www.ventix.top\\"}]}"]]},"headers":[{"level":2,"title":"分布式系统","slug":"分布式系统","link":"#分布式系统","children":[{"level":3,"title":"CAP理论","slug":"cap理论","link":"#cap理论","children":[]},{"level":3,"title":"BASE理论","slug":"base理论","link":"#base理论","children":[]}]},{"level":2,"title":"微服务架构","slug":"微服务架构","link":"#微服务架构","children":[{"level":3,"title":"注册中心","slug":"注册中心","link":"#注册中心","children":[]},{"level":3,"title":"配置中心","slug":"配置中心","link":"#配置中心","children":[]},{"level":3,"title":"API 网关","slug":"api-网关","link":"#api-网关","children":[]},{"level":3,"title":"负载均衡","slug":"负载均衡","link":"#负载均衡","children":[]},{"level":3,"title":"断路器","slug":"断路器","link":"#断路器","children":[]},{"level":3,"title":"消息队列","slug":"消息队列","link":"#消息队列","children":[]}]},{"level":2,"title":"相关解决方案","slug":"相关解决方案","link":"#相关解决方案","children":[{"level":3,"title":"分布式缓存","slug":"分布式缓存","link":"#分布式缓存","children":[]},{"level":3,"title":"分布式事务","slug":"分布式事务","link":"#分布式事务","children":[]},{"level":3,"title":"分布式ID","slug":"分布式id","link":"#分布式id","children":[]},{"level":3,"title":"分布式认证授权","slug":"分布式认证授权","link":"#分布式认证授权","children":[]}]}],"git":{"createdTime":1731760951000,"updatedTime":1732375404000,"contributors":[{"name":"drizzle","email":"msdrizzle@outlook.com","commits":2}]},"readingTime":{"minutes":6.13,"words":1839},"filePathRelative":"java/service/README.md","localizedDate":"November 16, 2024","autoDesc":true}');export{p as comp,c as data};
