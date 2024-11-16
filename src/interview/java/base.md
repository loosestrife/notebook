---

order: 1
title:  Java基础面试题

---


## Java基础知识

### Java的优势

你认为 Java 的优势是什么？

::: info Java的优势
在过去Java因其 **跨平台，垃圾回收，面向对象** 等特点而流行起来，到现在形成了 ==成熟的生态== ，拥有完善的工具，框架和中间件，以及大量的专业人才，我觉得这才是Java现如今最大的优势和竞争力。
:::


### JDK与JRE

JDK 和 JRE 有什么区别？你使用过哪些 JDK 提供的工具？

::: tip
#### JDK与JRE的区别
JRE指的是Java运行环境，包含了 **JVM** 及 **核心类库** ，JDK可视为JRE的超集，它包含了JRE 以及其他用于开发和调试的工具

#### JDK提供的主要工具
- JDK 常见工具
    - javac:Java 编译器，负责将 Java 源代码编译成字节码(.class 文件)。
    - java:运行 Java 应用程序的命令，使用 JM 来解释并执行编译后的字节码文件。
    - javadoc:生成 API文档的工具，能够根据源代码中的注释生成 HTML 格式的文档。
    - jar:用于创建和管理 JAR 文件的工具，可以将多个.class 文件打包为单一文件，便于分发和管理
    - jdb:Java 调试工具，用于在命令行中调试 Java 应用程序，支持断点设置、变量查看等功能。
- 性能监控和分析工具
    - jps:Java 进程工具，显示所有正在运行的 Java 进程，便于监控和诊
    - ==jstack==:生成线程堆栈信息的工具，常用于**分析死锁和线程问题**。
    - ==jmap==:内存映射工具，可以生成堆转储(heap dump)文件，便于**内存泄漏分析和垃圾回收优化**。
    - ==jhat==:堆分析工具，配合 jmap 使用，分析生成的堆转储文件，帮助开发者了解内存使用情况。
    - jstat:JVM 统计监控工具，实时监控垃圾回收、内存、类加载等信息，帮助开发者调优 JM 性能。
    - jconsole:图形化的 JM 监控工具，可以监控应用程序的内存、线程和类加载情况，常用于监控和调试。
    - jvisualvm:功能强大的性能分析工具，支持堆、线程、GC的详细监控，还提供内存分析和 CPU 性能分析。
- 诊断工具
    - jinfo:用于查看和修改正在运行的 JVM 参数，便于动态调优和调整 JM 行为,
    - jstatd:远程 JVM 监控工具，可以通过网络远程监控 JVM 的状态，适合分布式系统中的性能监控。
:::


### for/foreach

Java 中 for 循环与 foreach 循环的区别是什么？

::: info for循环和foreach的区别
#### foreach
foreach是 java5 引入的一种简化的循环结构，常用于遍历 **数组** 或 **实现了Iterable接口的集合**
```java
 for (String fruit : fruits) {
    System.out.println(fruit);
}
```
- foreach虽然简洁易用，但不提供对当前索引的访问
- 遍历过程中不能修改集合的结构（添加或删除集合元素），否则会抛出并发修改异常`ConcurrentModificationException`

#### for循环
for循环则更加灵活，可以控制循环的初始值，终止条件和步进方式。适用于需要通过索引访问元素，或在循环中添加/删除集合中的元素
```java
int[] numbers = {1, 2, 3, 4, 5};
for (int i = 0; i < numbers.length; i++) {
    System.out.println(numbers[i]);
}
```
:::


### Iterator

什么是 Java 中的迭代器（Iterator）？

::: warning Iterator迭代器
Iterator是Java集合框架中用于遍历集合元素的接口，迭代器是的遍历不同类型的集合更加简洁，统一，提升了代码的可读性。在遍历过程中还可以添加或删除元素。比如：`iterator.remove()`

- Iterator 迭代器采用的是 快速失败（fail-fast）机制，一旦使用非Iterator的方法或其他线程修改了集合，就会导致集合的`modCount`和 Iterator的`expectedModCount`不相等，将引发`ConcurrentModificationException`异常

- 对集合使用foreach循环，本质上也是Iterator，同样不能随意修改。对数组使用foreach则会被编译成为传统的for循环

List专门提供了ListIterator方法，其返回值是一个Iterator的子接口，最明显的特点就是支持双向遍历(`hasPrevious`和`previous`)
:::

关于集合 迭代器，及其与Foreach的关系参照：[Iterator](/java/syntax/base/collection.md#_1-iterator)


### 参数传递

Java 中的参数传递是按值还是按引用？

::: tip 值传递（pass by value）和引用传递（pass by reference）
在Java中，无论是基本类型还是引用类型的数据，参数传递都只有 **值传递（pass by value）**

  - 传递基本类型的参数时，传递的是值的副本。不会影响到原本的值。
  - 传递引用数据类型时，传递的是引用的副本，使得方法参数和原本的变量均指向同一对象，因此可以修改对象的属性，但是无法让原本的变量指向其他对象。
:::

更详细的内容参照：[Java参数传递](/java/syntax/base/Java基础.md#参数传递)




## Java数据类型


### 基本数据类型

Java 中的基本数据类型有哪些？

::: info 基本数据类型(Primitive Types)
Java中有8中基本数据类型: 

整型（byte,short,int,long）, 浮点型(float,double), 字符型(char), 布尔型(boolean)
:::

更多更详细的内容参照：[Java基本数据类型](/java/syntax/base/Java基础.md#基本数据类型)


### 包装类型

Java 中包装类型和基本类型的区别是什么？

| 特征             | 基本类型变量（Primitive Types）                      | 包装类型变量（Wrapper Types）                          |
|------------------|----------------------------------------------------|------------------------------------------------------|
| **数据类型**     | `byte`, `short`, `int`, `long`, `float`, `double`, `char`, `boolean` | `Byte`, `Short`, `Integer`, `Long`, `Float`, `Double`, `Character`, `Boolean` |
| **存储方式**     | 直接存储值                                         | 存储对象的引用                                       |
| **内存位置**     | 局部变量：栈内存；成员变量：堆内存                  | 局部变量：栈内存（引用），对象：堆内存                |
| **默认值**       | 局部变量必须初始化；成员变量有默认值（如 `int` 默认值为 0） | 局部变量和成员变量的默认值都是 `null`                 |
| **空值支持**     | 不能为 `null`                                      | 可以为 `null`                                        |
| **性能**         | 无对象开销，性能更高                                | 存在对象开销，性能略低                                |
| **方法和属性**   | 没有方法和属性                                      | 可以调用方法和属性，如 `Integer.toString()`           |
| **自动装箱和拆箱** | 不支持                                              | 支持自动装箱和拆箱                                    |
| **内存占用**     | 固定内存大小，如 `int` 占用 4 个字节                | 包括对象头和引用，内存占用更大                        |
| **适用场景**     | 性能要求高、不需要对象特性的场景                    | 需要对象特性、支持 `null` 值、需要调用方法的场景      |


### 装箱和拆箱

什么是 Java 中的自动装箱和拆箱？

::: tip 自动装箱（Autoboxing）和拆箱（Unboxing）
#### 自动装箱（Autoboxing）

**定义**：将基本类型自动转换为其对应的包装类型的过程。

```java
int primitiveInt = 10;
Integer wrapperInt = primitiveInt; // 自动装箱
```
当遇到将基本类型赋值给包装类型的情况时，编译器会自动调用 `Integer.valueOf(int)`

#### 拆箱（Unboxing）

**定义**：将包装类型自动转换为其对应的基本类型的过程。

```java
Integer wrapperInt = 10;
int primitiveInt = wrapperInt; // 拆箱
```
当编译器遇到将包装类型赋值给基本类型的情况时，会自动插入相应的解包方法调用。如：`Integer.intValue()`

#### 注意事项

1. **性能问题**： 自动装箱和拆箱涉及对象的创建和方法调用，可能会带来性能开销。在性能敏感的应用中，应尽量避免频繁的自动装箱和拆箱操作。

2. **空指针异常**： 拆箱时，如果包装类型变量为 `null`，会抛出 `NullPointerException`。因此，在拆箱之前应确保包装类型变量不为 `null`。

3. **缓存机制**：`Integer` 类在 `-128` 到 `127` 范围内的值会进行缓存，多次创建相同值的 `Integer` 对象会返回同一个对象。
:::


### Integer缓存池

什么是 Java 的 Integer 缓存池？

`Integer` 类的内部实现中使用了一个静态数组来存储这些常用的小整数值(-128 到 127)，以减少对象的创建和垃圾回收的开销。

::: info 缓存池的工作原理

`Integer` 缓存池的具体实现位于 `Integer` 类的 `IntegerCache` 内部类中。

1. **缓存范围**：默认情况下，`Integer` 缓存池的范围是从 `-128` 到 `127`。
这个范围可以通过 JVM 参数 `-Djava.lang.Integer.IntegerCache.high=<N>` 进行调整，但最低值仍然是 `-128`。Java 9 及以后的版本中引入了：`-XX:AutoBoxCacheMax`, 更加直观易用

2. **缓存数组及其初始化**：`IntegerCache` 类中有一个静态数组 `cache`，用于存储这个范围内的 `Integer` 对象。在 `IntegerCache` 类的静态初始化块中，会根据配置的范围创建并初始化这个缓存数组。每个数组元素都存储了一个 `Integer` 对象。

3. **自动装箱**：当使用 `Integer.valueOf(int)` 方法进行自动装箱时，如果传入的值在缓存范围内，会直接返回缓存数组中对应的 `Integer` 对象，而不是创建新的 `Integer` 对象。

Byte,Short,Long的缓存范围与Integer一样，但不能通过JVM参数进行调整。Character的范围是0-127(代表ASCII字符集)，Boolean只有true和false
:::

总结：
- **`Integer` 缓存池**：缓存了从 `-128` 到 `127` 范围内的 `Integer` 对象。在缓存范围内，`Integer.valueOf(int)` 会返回缓存中的对象。减少了对象的创建次数，提高了性能。
- **注意事项**：使用 `==` 比较 `Integer` 对象时需要注意缓存范围的影响，推荐使用 `equals` 方法进行值比较。



### BigDecimal

什么是 Java 的 BigDecimal？  参照：[BigDecimal](/java/syntax/base/Java常用类库.md#_2-bigdecimal)

`BigDecimal`是Java中用于进行高精度浮点数运算的工具类，适用于金融和科学计算等需要高精度的场景。

::: warning BigDecimal
BigDecimal是不可变类，所有的算术运算都会返回新的BigDecimal对象（安全但性能较差）
```java
BigDecimal bd1 = new BigDecimal("123.456");  // 使用字符串初始化，推荐     
BigDecimal bd2 = BigDecimal.valueOf(123L);   // 也可以使用静态方法 valueOf
BigDecimal bd3 = new BigDecimal(123.456);    // 使用double初始化，可能丢失精度
```
- 常用算数方法：`add`, `subtract`, `multiply`, `divide`
- 数值比较：`int res = bd3.compareTo(bd4)`
- 转换为字符串：
    - `toString()` --可能会是科学记数法
    - `toPlainString()` --始终提供完整的十进制字符串表示
:::



## Java字符串对象

### String

Java中处理字符串的主要类是String、StringBuilder和StringBuffer。 参考：[Java字符串](/java/syntax/base/数组和字符串.md#三-字符串-string)


::: info String面试题
#### 使用 new String("abc") 语句在 Java 中会创建多少个对象？

会创建1-2两个字符串，使用new关键字时，如果字符串常量池中不存在当前字符串，那就会在堆上创建两个字符串对象，其中一个会被保存到字符串常量池中。

如果字符串常量池中已经存在该字符串的引用，则只会在堆中创建一个

#### 为什么 JDK 9 中将 String 的 char 数组改为 byte 数组？

为了节省内存空间，提升内存利用率。

- JDK9之前String是基于char[] 实现的，内部采用UTF-16编码，每个字符占用两字节。
- JDK9中String采用byte[]数组来实现，并使用coder变量标识编码方式(UTF-16/Latin-1)， 当字符仅需一个字符的空间时，就可以减少内存占用
:::


### StringBuilder

Java 的 StringBuilder 是怎么实现的？

`StringBuilder` 是 Java 中用于高效构建字符串的类，主要用于单线程环境。

::: tip StringBuilder的实现原理
1. **内部数据结构**：`StringBuilder` 内部使用一个字符数组 `char[]` 来存储字符串数据。
2. **构造函数**：提供了多种构造函数，包括无参构造函数（默认初始容量为 16）、带初始容量的构造函数、带字符串的构造函数和带 `CharSequence` 的构造函数。
3. **动态扩容**：当内部字符数组空间不足时，会自动进行扩容。扩容策略是将当前容量翻倍再加 2，以确保有足够的空间存储新的数据。
4. **常见方法**：`StringBuilder` 提供了丰富的字符串操作方法，如 `append`（追加数据）、`insert`（插入数据）、`delete`（删除数据）、`reverse`（反转字符串）和 `toString`（将 `StringBuilder` 转换为 `String` 对象）。
:::
通过这些设计，`StringBuilder` 在单线程环境中能够高效地构建和操作字符串，避免了频繁创建新的 `String` 对象带来的性能开销。


### StringBuffer

Java 中 String、StringBuffer 和 StringBuilder 的区别是什么？

- String: 不可变，适合少量字符串操作。  
    String的本质就是一个不可变的字符数组： `private final char value[];`
- StringBuilder: 可变，但非线程安全，适合单线程环境中的高性能字符串处理
- StringBuffer：可变，且线程安全，适合多线程环境中频繁修改字符串的场景


### 序列化

Java 中的序列化和反序列化是什么？

::: info Java 中的序列化和反序列化

Java 中的序列化和反序列化是将对象的状态信息转换为可以存储或传输的形式，以及将字节流恢复为对象的过程。具体实现原理如下：

1. **序列化**：
   - **标记接口**：要使一个对象可以被序列化，该对象的类必须实现 `Serializable` 接口。`Serializable` 是一个标记接口，没有定义任何方法。
   - **默认序列化机制**：Java 提供了默认的序列化机制，通过 `ObjectOutputStream` 类将对象写入输出流。
   - **自定义序列化**：可以通过实现 `writeObject` 和 `readObject` 方法来自定义序列化和反序列化过程。

2. **反序列化**：
   - **读取字节流**：通过 `ObjectInputStream` 类从输入流中读取字节流并恢复对象。
   - **对象重建**：反序列化过程中，Java 会重建对象的实例，并恢复其状态。

3. **注意事项**：
   - **`serialVersionUID`**：建议显式定义 `serialVersionUID`，以避免因类结构变化而导致的序列化失败。
   - **非序列化字段**：使用 `transient` 关键字标记不想被序列化的字段。
   - **安全性**：注意序列化和反序列化过程中可能存在安全风险，特别是当对象来自不可信来源时。可以通过使用 `ObjectInputFilter` 进行过滤来提高安全性。
   - **性能**：序列化和反序列化过程可能会消耗较多资源，可以通过优化数据结构和使用更高效的序列化库来提高性能。
   - **继承**：如果一个类实现了 `Serializable` 接口，其子类也会自动实现 `Serializable` 接口。如果父类没有实现 `Serializable` 接口，但子类实现了 `Serializable` 接口，那么父类的状态信息不会被序列化。
:::


### 乱码问题

为什么在 Java 中编写代码时会遇到乱码问题？

乱码是因为**编解码时使用的字符集不一致**导致的。





## Java面向对象

Java 面向对象编程与面向过程编程的区别是什么？

::: tip 面向对象编程（OOP）和面向过程编程（Procedural Programming）
- **面向对象编程**：关注数据（对象）及其行为（方法），通过类和对象来组织代码。数据和操作数据的方法封装在一起，外部访问受限，增强数据安全性。支持继承和多态，可以通过继承扩展类的功能，多态允许子类方法覆盖父类方法。**面向对象更符合人类的思维方式**。

- **面向过程编程**：关注过程（函数）和数据，通过函数和数据结构来组织代码。数据和函数分离，数据暴露在外，容易被随意修改。
:::

### 封装继承多态

什么是 Java 的封装特性？

为什么 Java 不支持多重继承？

什么是 Java 中的继承机制？

什么是 Java 的多态特性？


### 访问修饰符
Java 中的访问修饰符有哪些？


### 方法
Java 中静态方法和实例方法的区别是什么？


Java 方法重载和方法重写之间的区别是什么？


### 接口和抽象类
接口和抽象类有什么区别？

### 深浅拷贝
Java 中的深拷贝和浅拷贝有什么区别？


### 内部类
什么是 Java 内部类？它有什么作用？


### Object类
Java Object 类中有什么方法，有什么作用？


### hashCode/equals
Java 中 hashCode 和 equals 方法是什么？它们与 == 操作符有什么区别？

Java 中的 hashCode 和 equals 方法之间有什么关系？


### 不可变类
什么是 Java 中的不可变类？








## IO和网络编程

### IO流
Java 的 I/O 流是什么？

### NIO和AIO
什么是 BIO、NIO、AIO？

### Channel
什么是 Channel？


### Selector
什么是 Selector？

### 网络编程
什么是 Java 的网络编程？



## Java高级特性

### 注解原理
Java 中的注解原理是什么？

### 反射及其应用
你使用过 Java 的反射机制吗？如何应用反射？


### SPI机制
什么是 Java 的 SPI（Service Provider Interface）机制？


### 泛型

Java 泛型的作用是什么？

Java 泛型擦除是什么？

什么是 Java 泛型的上下界限定符？






### 异常和错误

Java 中 Exception 和 Error 有什么区别？

Java 运行时异常和编译时异常之间的区别是什么？

Java 中 final、finally 和 finalize 各有什么区别？





### JDK8新特性

JDK8 有哪些新特性？

Java 的 Optional 类是什么？它有什么用？






### 调用外部程序

如何在 Java 中调用外部可执行程序或系统命令？














