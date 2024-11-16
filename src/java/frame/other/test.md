---

order: 1
title:  Spring单元测试

---

## 单元测试


### 1. Spring单元测试

为了在测试类中使用注解注入组件，可以使用spring-test：

引入依赖：

```xml

<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-test</artifactId>
    <version>5.2.15.RELEASE</version>
    <scope>test</scope>
</dependency>

```

<br>

测试类中通过设置相关注解，后续就可以使用注解注入了：

```java

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:application.xml")
public class OrderServiceTest {

    @Autowired
    OrderService orderService;

    @Test
    public void testHello(){
        orderService.sayHello();
    }

    @Test
    public void testInsertOrder(){
        Order order = new Order();
        order.setProductName("Iphone18");
        order.setUsername("zhangshan233");
        order.setPrice(999);

        orderService.insertOrder(order);
    }
}

```


<br>