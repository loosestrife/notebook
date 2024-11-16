---

order: 30
title:  JVM面试题

---



Java 的类加载过程是怎样的？

什么是 Java 中的双亲委派模型？

Java 中的字节码是什么？



题目

Java 中有哪些垃圾回收算法？

JVM 的 TLAB（Thread-Local Allocation Buffer）是什么？

Java 是如何实现跨平台的？


JVM 由哪些部分组成？




编译执行与解释执行的区别是什么？JVM 使用哪种方式？


JVM 的内存区域是如何划分的？


JVM 方法区是否会出现内存溢出?




JVM 有那几种情况会产生 OOM（内存溢出）？




Java 中堆和栈的区别是什么？


什么是 Java 中的直接内存？


什么是 Java 中的常量池？


你了解 Java 的类加载器吗？


什么是 Java 中的 JIT（Just-In-Time）?


什么是 Java 的 AOT（Ahead-Of-Time）？


你了解 Java 的逃逸分析吗？


Java 中的强引用、软引用、弱引用和虚引用分别是什么？


Java 中常见的垃圾收集器有哪些？


Java 中如何判断对象是否是垃圾？不同垃圾回收方法有何区别？


为什么 Java 的垃圾收集器将堆分为老年代和新生代？


为什么 Java 8 移除了永久代（PermGen）并引入了元空间（Metaspace）？


为什么 Java 新生代被划分为 S0、S1 和 Eden 区？


什么是三色标记算法？


Java 中的 young GC、old GC、full GC 和 mixed GC 的区别是什么？


什么条件会触发 Java 的 young GC？


什么情况下会触发 Java 的 Full GC？


什么是 Java 的 PLAB？


JVM 垃圾回收时产生的 concurrent mode failure 的原因是什么？


为什么 Java 中 CMS 垃圾收集器在发生 Concurrent Mode Failure 时的 Full GC 是单线程的？


为什么 Java 中某些新生代和老年代的垃圾收集器不能组合使用？比如 ParNew 和 Parallel Old


JVM 新生代垃圾回收如何避免全堆扫描？


Java 的 CMS 垃圾回收器和 G1 垃圾回收器在记忆集的维护上有什么不同？


为什么 G1 垃圾收集器不维护年轻代到老年代的记忆集？


Java 中的 CMS 和 G1 垃圾收集器如何维持并发的正确性？


什么是 Java 中的 logging write barrier？


Java 的 G1 垃圾回收流程是怎样的？


Java 的 CMS 垃圾回收流程是怎样的？


你了解 Java 的 ZGC（Z Garbage Collector）吗？


JVM 垃圾回收调优的主要目标是什么？


如何对 Java 的垃圾回收进行调优？


常用的 JVM 配置参数有哪些？


你常用哪些工具来分析 JVM 性能？


如何在 Java 中进行内存泄漏分析？


