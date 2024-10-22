---

order: 5
title:  数据库基础理论

---


## 数据库设计

### 1. 数据完整性

数据完整性是数据库制定的了一些规范，是为了防止用户错误的输入（防止数据库出现错误的数据）

- **数据库的完整性**：保证存放到数据库中的数据是有效的,

  => 在创建表时给表中添加约束

  <br/>

- **实体完整性**：标识每一行数据不重复

  实体完整性指的是数据库表中存在记录应该不重复出现，是唯一的。

  实体：即表中的一行(一条记录)代表一个实体（entity）

  约束类型：*主键约束（primary key）*、 *唯一约束 (unique)* 、 *自动增长列 (auto_increment)* 

  <br/>

- **域完整性**：限制此单元格的数据正确

  域完整性是指数据库表中的每一个字段都应该有自己的约束。这种约束大多数是数据类型，这句话的意思是表中的每一列都应该有自己的数据类型，还有一些关键字也可以约束。

  域完整性约束：数据类型 、非空约束（not null）、 默认值约束(default）

  <br/>

- **引用完整性（参照完整性）**：指外键

  外键约束：FOREIGN KEY

<br/>



常见约束：

| 约束            | 说明                               |
| --------------- | ---------------------------------- |
| null / not null | 字段是否可以为空                   |
| default         | 如果一个字段没有值，则使用默认值   |
| auto_increment  | 字段值从1开始，每次递增1，不会重复 |
| primary key     | 定义列为主键                       |
| unique          | 唯一键：不能重复，但可以为空       |
| comment         | 注释信息                           |

<br/>

语法示例：

**主键约束（primary key）**：

```SQL
# 1. 在 CREATE TABLE 语句中，通过 PRIMARY KEY 关键字来指定主键
<字段名> <数据类型> PRIMARY KEY [默认值]

# 2. 或者是在定义完所有字段之后指定主键：
[CONSTRAINT <约束名>] PRIMARY KEY [字段名]

# 3. 在创建表时设置联合主键（所谓的联合主键，就是这个主键是由一张表中多个字段组成的）
PRIMARY KEY [字段1，字段2，…,字段n]

# 4. 在修改表时添加主键约束
ALTER TABLE <数据表名> ADD PRIMARY KEY(<字段名>);

# 删除主键约束
ALTER TABLE <数据表名> DROP PRIMARY KEY;
```

<br/>



**唯一约束 (unique)**：

```SQL
# 1. 在创建表时设置唯一约束
<字段名> <数据类型> UNIQUE

# 2. 在修改表时添加唯一约束
ALTER TABLE <数据表名> ADD CONSTRAINT <唯一约束名> UNIQUE(<列名>);

# 删除唯一约束
ALTER TABLE <表名> DROP INDEX <唯一约束名>;
```

<br/>



**自动增长列 (auto_increment)**：

```SQL
# 1. 给字段添加 AUTO_INCREMENT 属性来实现主键自增长
字段名 数据类型 AUTO_INCREMENT

# 2. 指定自增字段初始值
CREATE TABLE tb_student2 (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    PRIMARY KEY(ID)
)AUTO_INCREMENT=100;
```

- 默认情况下，AUTO_INCREMENT 的初始值是 1，每新增一条记录，字段值自动加 1。
- 一个表中只能有一个字段使用 AUTO_INCREMENT 约束，且该字段必须有唯一索引，以避免序号重复（即为主键或主键的一部分）
- AUTO_INCREMENT 约束的字段必须具备 NOT NULL 属性。
- AUTO_INCREMENT 约束的字段只能是整数类型（TINYINT、SMALLINT、INT、BIGINT 等）。
- AUTO_INCREMENT 约束字段的最大值受该字段的数据类型约束，如果达到上限，AUTO_INCREMENT 就会失效。

<br/>



**外键约束（foreign key）**: 

```SQL
[CONSTRAINT <外键名>] FOREIGN KEY 字段名 [，字段名2，…] REFERENCES <主表名> 主键列1 [，主键列2，…]
#例：
constraint fk_score_sid foreign key(sid) references student(id) );

# 删除外键约束
ALTER TABLE <表名> DROP FOREIGN KEY <外键约束名>;
```

使用外键会影响效率：

在插入子行的数据的时候，会去父表中查询。在删除父表中的数据的时候，会去子表中查询数据是否被使用。

在工作中，一般很少使用外键。外键虽然可以保证我们数据的正确性，但是会比较大程度上的影响效率。



<br/>



###  2. 三大范式

- 第一范式：指每一列保持 <span style='color:red;background:yellow;font-size:文字大小;font-family:字体;'>**原子性**</span>（每一列都是不可分割的基本数据，同一列中不能有多个值）每一个属性不可再分

  ```sql
  /* 所谓第一范式（1NF)是指在关系模型中，对域添加的一个规范要求，所有的域都应该是原子性的，
  	即数据库表的每一列都是不可分割的原子数据项，而不能是集合，数组，记录等非原子数据项。
  	即当实体中的某个属性有多个值时，必须将其拆分为不同的属性。
  	
  	在符合第一范式（1NF)表中的每个域值只能是实体的一个属性或一个属性的一部分。
  	简而言之，第一范式就是无重复的域。
  	
  	需要注意的是，在任何一个关系型数据库中，第一范式（1NF）是对关系模式的设计基本要求，一般设计时都必须满足第一范式(1NF)。
  	不过有些关系模型中突破了1NF的限制，这种称为非1NF的关系模型。
  	换句话说，是否必须满足1NF的最低要求，主要依赖于所使用的关系模型。
  	不满足1NF的数据库就不是关系数据库。满足1NF的表必须要有主键且每个属性不可再分
  
  ```

  <br/>

- 第二范式：确保数据库表中的每一列都和主键相关，而不能只与主键的某一部分相关（主要针对联合主键而言）

  即指记录的**唯一性**。要求数据库表中的每个实例或行必须可以被唯一地区分。

  ```sql
  /*第二范式（2NF）要求数据库表中的每个实例或行必须可以被唯一地区分。
   为实现区分通常需要为表加上 一个列，以存储各个实例的唯一标识。这个唯一属性列被称为主关键字或主键、主码。 
  ```

  <br/>

- 第三范式：属性不依赖于其它非主属性 [ 消除传递依赖 ]。即指**字段不要冗余**。

  ```
  设R是一个满足第一范式条件的关系模式，X是R的任意属性集，如果X非传递依赖于R的任意一个候选关键字，称R满足第三范式，简记为3NF. 
  
  满足 第三范式（3NF）必须先满足第二范式（2NF）。
  
  第三范式（3NF）要求一个数据库表中不包含已在其它表中已包含的非主关键字信息。 
  ```

<br/>

注：关系实质上是一张二维表，其中每一行是一个元组，每一列是一个属性 

第二范式（2NF）和第三范式（3NF）的概念很容易混淆，区分它们的关键点在于，

2NF：非主键列是否完全依赖于主键，还是依赖于主键的一部分；

3NF：非主键列是直接依赖于主键，还是直接依赖于非主键列。

<br/>

在实际的工作中，要不要去冗余字段呢？

> 适当的字段冗余可以帮助我们提高查询的效率，但是会影响到增删改的效率。
>
> 那么我们冗余字段需要看具体的业务场景，假如在这个业务场景中，
>
> <span style='color:red;background:yellow;font-size:文字大小;font-family:字体;'>**查询的需求远大于增删改的需求，我们可以考虑适当的去冗余数据**</span>；
>
> 假如增删改的需求比查询的需求比重要高，那么这个时候就不应该冗余数据。
>
> 
>
> 冗余字段的设计：反范式化设计。



<br/>



### 3. 多表设计





<br/>



## 事务Transaction

**事务（Transaction）**：是由一系列对数据库中数据进⾏访问（查询）与更新（增删改）的操作所组成的⼀个程序执行逻辑单元

这些操作，要么都成功，要么都不成功。



```SQL
-- 事务相关命令：
begin;                -- 开始，还可以使用下列语法：
start transaction; 
commit;               -- 提交：使得当前的修改确认
rollback;             -- 回滚：使得当前的修改被放弃
```

<br/>



### 1. 事务的ACID特性

- **原子性（Atomicity）**：事务必须是⼀个原子的操作序列单元

  事务中包含的各项操作在⼀次执⾏过程中，只允许出现两种状态之一：（1）全部执行成功 （2）全部执行失败 

  事务开始后所有操作，要么全部做完，要么全部不做，不可能停滞在中间环节。

  事务执⾏过程中出错， 会回滚到事务开始前的状态，所有的操作就像没有发⽣一样。

  也就是说事务是⼀个不可分割的整体，就像化学中学过的原子，是物质构成的基本单位。

  <br/>

  

- **⼀致性（Consistency）** ：一个事务在执⾏之前和执行之后，数据库都必须处于⼀致性状态。

   即事务必须是数据库从一个一致性状态到另外一个一致性状态。

   比如：如果从A账户转账到B账户，不可能因为A账户扣了钱，⽽B账户没有加钱（两个账号的总金额要保持一致状态）

   <br/>

   

- **隔离性（Isolation）** ：在并发环境中，并发的事务是互相隔离的。

  也就是说，不同的事务并发操作相同的数据时，每个事务都有各自完整的数据空间。 

  ⼀个事务内部的操作及使用的数据对其它并发事务是隔离的，并发执行的各个事务是不能互相干扰的。 

  在事务中，有隔离级别的定义，不同的隔离级别有不同的影响的程度。

  <br/>

  

- **持久性（Durability）**：事务⼀旦提交后，数据库中的数据必须被永久的保存下来。

  即使服务器系统崩溃或服 务器宕机等故障。只要数据库重新启动，那么一定能够将其恢复到事务成功结束后的状态



<br/>



### 2. 事务的并发问题

-- 详情：[MySQL事务并发问题](https://blog.csdn.net/drizzletowne/article/details/120928779?app_version=4.17.0&code=app_1562916241&uLinkId=usr1mkqgl919blen)

- **脏读（Dirty Read）**：一个事务读取到了另外一个事务还没提交的数据。

  事务A读取了事务B更新但未提交的数据（脏数据） 

  *脏数据*：是指事务对缓冲池中行记录的修改，并且还没有被提交（commit）

  脏读发生的条件是需要事务的隔离级别为 `READ UNCOMMITTED`

  <br/>

  

- **不可重复读（Nonrepeatable Read）**：在同一个事务内，针对同一个数据，前后读取的数据不一样

  可能原因：在同一个事务内，读取到了别的事务修改的数据。如：事务 A 多次读取同一数据，事务 B 在事务A 多次读取的 过程中，对数据做了更新并提交，导致事务A多次读取同一数据时，结果不一致。 

  

  *不可重复读和脏读的区别* 是：脏读是读到未提交的数据，而不可重复读读到的却是已经提交的数据

  有时候，不可重复读的问题是可以接受的，因为其读到的是已经提交的数据，本身并不会带来很大的问题

  <br/>

  

- **幻读（Phantom Read）**：在一个事务内，读取数据记录条数前后不一致 ，

  可能原因：在一个事务内，读取到了别的事务插入（删除）的数据
  
  即在重复查询的过程中，数据发⽣了量的变化（行数多了或少了）如：
  
  1. 事务 A 里有一个条件查询的语句 `select * from student where age > 10`，假设查到了 10 行数据；
  2. 然后事务 B 往里面加入了一批数据 （或者删除了一些数据）
  3. 事务 A 再查的用条件查询语句查询的时候，发现查到了15条 （如果B执行了删除，那么将会少于10条数据）

<br/>



### 3. 事务的隔离级别

❑ Read Uncommitted（读未提交）：最低的隔离级别，也是唯一能读到脏数据的隔离级别

❑ Read Committed（读已提交）：只能读取已经提交的数据、解决了脏读问题，但是还是解决不了可重复读问题

❑ Repeatable Read（可重复读）：保证在事务处理理过程中，多次读取同一个数据时，该数据的值是一致的

❑ Serializable（顺序读 / 可串行化 / 序列化）：最严格的事务隔离级别、事务只能一个接一个地处理，不能并发

<br/>

> <span style='color:red;background:yellow;font-size:文字大小;font-family:字体;'>**read uncommitted 有脏读、不可重复读、虚幻读的问题**</span> 、read uncommitted 是最不安全的隔离级别。
>
> <span style='color:red;background:yellow;font-size:文字大小;font-family:字体;'>**read committed 隔离级别没有 脏读的问题，但是有不可重复读和虚幻读的问题。**</span> 
>
> <span style='color:red;background:yellow;font-size:文字大小;font-family:字体;'>**repeatable read 没有脏读的问题，没有不可重复读的问题，也没有虚幻读的问题。这个隔离级别也是MySQL默认的隔离级别。**</span>
>
> >说明：只有在MySQL中，repeatable read 这种隔离级别没有虚幻读的问题。因为MySQL的存储引擎InnoDB通过MVCC（多版本并发控制） 解决了可重复读隔离级别下虚幻读的问题。
>
> <span style='color:red;background:yellow;font-size:文字大小;font-family:字体;'>**串行化这种隔离级别没有 脏读、不可重复读、虚幻读的问题。但是有效率的问题。**</span> 
>
> 串行化这种隔离级别指的是，数据库在这种隔离级别下，会一个事务、一个事务的先后执行，会严格保证事务的先后顺序，不存在多个事务同时执行情况，这种隔离级别没有事务的隔离问题，当然也没有上面的安全性问题。

<br/>



不同事务隔离级别下的不同的问题总结：

| 隔离级别 \ 并发问题 | 脏读 | 不可重复读 |      虚幻读      |
| ------------------- | :--: | :--------: | :--------------: |
| read uncommitted    |  √   |     √      |        √         |
| read committed      |  X   |     √      |        √         |
| repeatable read     |  X   |     X      | X(在MySQL下没有) |
| serializable        |  X   |     X      |        X         |



<br/>

`InnoDB` offers all four transaction isolation levels described by the SQL:1992 standard: 

[`READ UNCOMMITTED`](https://dev.mysql.com/doc/refman/5.7/en/innodb-transaction-isolation-levels.html#isolevel_read-uncommitted), [`READ COMMITTED`](https://dev.mysql.com/doc/refman/5.7/en/innodb-transaction-isolation-levels.html#isolevel_read-committed), [`REPEATABLE READ`](https://dev.mysql.com/doc/refman/5.7/en/innodb-transaction-isolation-levels.html#isolevel_repeatable-read), and [`SERIALIZABLE`](https://dev.mysql.com/doc/refman/5.7/en/innodb-transaction-isolation-levels.html#isolevel_serializable). 

The default isolation level for `InnoDB` is [`REPEATABLE READ`](https://dev.mysql.com/doc/refman/5.7/en/innodb-transaction-isolation-levels.html#isolevel_repeatable-read).

InnoDB存储引擎默认支持的隔离级别是 `REPEATABLE READ`，但是与标准SQL不同的是，InnoDB存储引擎在`REPEATABLE READ`事务隔离级别下，使用 `Next-Key Lock ` 锁的算法，因此避免了幻读的产生

MySQL数据库中的InnoDB和Falcon存储引擎通过MVCC（Multi-Version Concurrent Control，多版本并发控制）机制解决了可重复读隔离级别下虚幻读的问题。

需要注意的是，多版本只是解决不可重复读问题，而加上间隙锁（也就是它这里所谓的并发控制）才解决了幻读问题。



<br/>