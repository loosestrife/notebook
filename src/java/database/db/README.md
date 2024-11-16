--- 
dir:
    order: 1
index: false
title: 关系型数据库

---

<Catalog hideHeading/>


## 一 数据库简介

数据库的生产厂商为了占有市场份额，都会在标准SQL的基础上扩展一些自己的东西以吸引用户。

<br/>

常用的关系型数据库：

| 关系型数据库 | 开发公司         | 使用语言 |
| ------------ | ---------------- | -------- |
| access       | 微软公司         | SQL      |
| SQL Server   | 微软公司         | T-SQL    |
| Oracle       | 甲骨文公司       | PL/SQL   |
| MySQL        | 被甲骨文公司收购 | MySQL    |

- <span style='color:red;background:yellow;font-size:文字大小;font-family:字体;'>**Oracle**</span>，是由oracle这个公司开发的一个关系型数据库，目前是市面上使用的最多的一款收费的关系型数据库
- <span style='color:red;background:yellow;font-size:文字大小;font-family:字体;'>**MySQL**</span>，MySQL数据库是免费的数据库中使用率的最高的，之前是由个人开发者来开发和开源的，目前已经被Oracle这个公司收购了
- <span style='color:red;background:yellow;font-size:文字大小;font-family:字体;'>**SQL server**</span>，是微软的一个产品。
- Access，是office套件中的一员，目前很少有公司和个人在使用
- MariaDB，是MySQL的作者重新开发的一个开源的数据库产品，目前是免费的
- SQLlite，是一个非常轻量级的数据库产品，在Android手机中，就使用了SQLite来存储和管理通讯录、短信等内容
- OceanBase，是由蚂蚁金服开源的一个数据库产品。

<br/>



**非关系型数据库**：是作为关系型数据库的一个补充。

关系型数据库大多数的产品都是把数据存储在磁盘上，存储在磁盘上的数据需要经过IO，读写速度比较慢。

但是有一些业务场景是需要读写速度比较快的，所以就有了非关系型数据库。

非关系型数据库如何做到读写速度比较快呢？一般的策略是把数据存储在内存中。

非关系型数据库还有名字，叫做NoSQL（NOSQL：Not only SQL）

有哪些产品呢？

- <span style='color:red;background:yellow;font-size:文字大小;font-family:字体;'>**Redis，是目前使用的最多的一个非关系型数据库产品，是开源的，免费的。**</span>
- Memcache，是一个比较老的非关系型数据库产品，目前已经被Redis完全取代了
- MongoDB，目前有上升的态势，但是使用率还不够
- Hbase，是大数据领域常用的非关系型数据库



<br/>