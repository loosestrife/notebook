---

order: 20
title:  Java并发面试题

---


Java 中 wait() 和 sleep() 的区别？

如果一个线程在 Java 中被两次调用 start() 方法，会发生什么？


题目

什么是 Java 中的线程同步？

Java 中的线程安全是什么意思？

什么是协程？Java 支持协程吗？

线程的生命周期在 Java 中是如何定义的？

Java 中线程之间如何进行通信？

Java 中如何创建多线程？


你了解 Java 线程池的原理吗？

如何合理地设置 Java 线程池的线程数？

Java 线程池有哪些拒绝策略？

Java 并发库中提供了哪些线程池实现？它们有什么区别？

Java 线程池核心线程数在运行过程中能修改吗？如何修改？


Java 线程池中 shutdown 与 shutdownNow 的区别是什么？


Java 线程池内部任务出异常后，如何知道是哪个线程出了异常？



Java 中的 DelayQueue 和 ScheduledThreadPool 有什么区别？

什么是 Java 的 Timer？

你了解时间轮（Time Wheel）吗？有哪些应用场景？

你使用过哪些 Java 并发工具类？

什么是 Java 的 Semaphore？

什么是 Java 的 CyclicBarrier？

什么是 Java 的 CountDownLatch？
什么是 Java 的 StampedLock？

什么是 Java 的 CompletableFuture？

什么是 Java 的 ForkJoinPool？

如何在 Java 中控制多个线程的执行顺序？

你使用过 Java 中的哪些阻塞队列？

你使用过 Java 中的哪些原子类？

你使用过 Java 的累加器吗？

什么是 Java 的 CAS（Compare-And-Swap）操作？

说说 AQS 吧？

Java 中 ReentrantLock 的实现原理是什么？

Java 的 synchronized 是怎么实现的？

Java 中的 synchronized 轻量级锁是否会进行自旋？

当 Java 的 synchronized 升级到重量级锁后，所有线程都释放锁了，此时它还是重量级锁吗？

什么是 Java 中的锁自适应自旋？

Synchronized 和 ReentrantLock 有什么区别？

如何优化 Java 中的锁的使用？

你了解 Java 中的读写锁吗？

什么是 Java 内存模型（JMM）？

什么是 Java 中的原子性、可见性和有序性？

什么是 Java 的 happens-before 规则？

什么是 Java 中的指令重排？

Java 中的 final 关键字是否能保证变量的可见性？

为什么在 Java 中需要使用 ThreadLocal？

Java 中的 ThreadLocal 是如何实现线程资源隔离的？

为什么 Java 中的 ThreadLocal 对 key 的引用为弱引用？


Java 中使用 ThreadLocal 的最佳实践是什么？

Java 中的 InheritableThreadLocal 是什么？

ThreadLocal 的缺点？

为什么 Netty 不使用 ThreadLocal 而是自定义了一个 FastThreadLocal ？


什么是 Java 的 TransmittableThreadLocal？


Java 中 Thread.sleep 和 Thread.yield 的区别？


Java 中 Thread.sleep(0) 的作用是什么？

Java 中的 wait、notify 和 notifyAll 方法有什么作用？

Java 中什么情况会导致死锁？如何避免？

Java 中 volatile 关键字的作用是什么？

什么是 Java 中的 ABA 问题？

在 Java 中主线程如何知晓创建的子线程是否执行成功？


