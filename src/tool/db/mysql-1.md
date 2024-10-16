---

order: 10
title:  MySQL基础

---



## MySQL的安装和配置

MySQL是一个C/S架构的软件，我们安装的MySQL 是服务端。MySQL 的客户端有很多，有自带的，有第三方的。

- 命令行客户端
- 图形化界面的客户端
  - navicat
  - sql yog
  - dbeaver
  - workbench
  - …

<br/>

MySQL5.7文档：https://dev.mysql.com/doc/refman/5.7/en/ 

MySQL8.0文档：https://dev.mysql.com/doc/refman/8.0/en/ 




### Windows平台

下载MySQL：https://dev.mysql.com/downloads/mysql/

![image-20220318112150056](vx_images/image-20220318112150056.png)



::: info Windows平台下的安装步骤

将压缩包解压到需要安装的目录，然后执行以下步骤：

1. 新建配置文件 my.ini ，存放的路径为MySQL的根目录，文件内容如下：
  ```bash
    [client]
    port=3306

    [mysql]
    default-character-set=utf8

    [mysqld]
    character-set-server=utf8
    default-storage-engine=INNODB
    explicit_defaults_for_timestamp=true
    basedir = D:\Develop\Database\mysql-5.7.37
    datadir = D:\Develop\Database\mysql-5.7.37\data
  ```

2. 配置环境变量 （先检查有无正确的环境变量，若没有则需要设置）

	打开MySQL的bin目录，复制此路径，添加到环境变量


3. 初始化MySQL（生成data目录）命令行执行如下命令：(以下命名全部在以管理员模式打开的)
```bash
mysqld --initialize-insecure
```
	
	
4. 注册MySQL服务
```bash
mysqld -install
```
	
5. 启动MySQL服务
```bash
net start mysql
```

6. 修改默认账户密码
```bash
mysqladmin -u root password 123456
```

7. 登录使用 
```bash	
mysql -uroot -p
```

8. 卸载MySQL：
```bash
net stop mysql

mysqld -remove mysql
```	
最后删除MySQL目录及相关的环境变量即可
:::



安装MySQL：参照blog https://blog.csdn.net/drizzletowne/article/details/120896774



### WSL2-Ubuntu

微软官网示例：https://learn.microsoft.com/zh-cn/windows/wsl/tutorials/wsl-database


**问题一**：启动MySQL服务时提示：`su: warning: cannot change directory to/nonexistent...`

主要原因是MySQL 用户的主目录问题：

先停止MySQL服务：`sudo systemctl stop mysql` 或 `sudo service mysql stop`

```bash
getent passwd mysql                      
# 查看当前用户的主目录：mysql:x:113:120:MySQL Server,,,:/nonexistent:/bin/false

sudo usermod -d /var/lib/mysql/ mysql    # 修改用户的主目录
# 修改主目录之前，请确保 /var/lib/mysql/ 目录已经存在，并且是 MySQL 数据文件的正确存放位置
```
修改完后启动MySQL服务：`sudo service mysql start`


更多问题参照：[WSL2 Ubuntu 安装Mysql 避坑记录](https://zhuanlan.zhihu.com/p/654729453)


### Linux手动安装

下为Linux通用版本下载选项（Windows类似）：

![image-20220318084801233](vx_images/image-20220318084801233.png)


::: info Linux平台手动安装MySql

目标：将 `mysql5.7` 安装到  `/usr/local/mysql` (不建议安装到其他位置，可能会导致socket连接失败)

准备：在`/usr/local/` 目录下创建 `mysql` 和 `software` 目录
	

1. 下载 mysql的压缩包 (或上传自己已下载的压缩包到指定目录即可)
```bash
cd /usr/local/software
wget http://dev.MySQL.com/get/Downloads/MySQL-5.7/mysql-5.7.37-Linux-glibc2.12-x86_64.tar.gz
```

2、解压并复制到 mysql目录
```bash
tar -xvf mysql-5.7.37-Linux-glibc2.12-x86_64.tar.gz

mv ./mysql-5.7.37-linux-glibc2.12-x86_64/* /usr/local/mysql/
```


3、安装依赖、创建mysql用户组及其用户
```bash
yum install libaio   （Ubuntu使用：sudo apt-get install libaio1）

groupadd mysql
useradd -r -g mysql -s /bin/false mysql
```


4、创建相关目录、设置权限、初始化mysql 
```bash
cd /usr/local/mysql/

mkdir mysql-files
chown mysql:mysql mysql-files
chmod 750 mysql-files

bin/mysqld --initialize --user=mysql  # 记住末尾自动生成的root密码 如：lZw.qSdCS7pV
bin/mysql_ssl_rsa_setup
bin/mysqld_safe --user=mysql &
```

5. 配置环境变量
```bash
vim /etc/profile.d/mysql.sh  # 在里面加入: 
export PATH=$PATH:/usr/local/mysql/bin

source  /etc/profile  # 使用source命令使修改立刻生效：  
```

6. 将mysql添加到启动项
```bash
cp support-files/mysql.server /etc/init.d/mysql.server

chkconfig --add mysql.server  （ 或 systemctl enable mysql.server）
```

7. 使用 （首次使用需要先修改密码）
```bash
mysql -uroot -p

mysql> alter user user() identified by "123456";
```

8. 启动、关闭和重启
```bash
/etc/init.d/mysql.server start
/etc/init.d/mysql.server stop
/etc/init.d/mysql.server restart
```

9. 其他常用命令
```bash
>mysql status;                            # 查看mysql基本信息
>mysql SHOW VARIABLES LIKE 'character%';  # 查看数据库字符集相关设置信息
```
:::

**Linux下的安装参考**：https://dev.mysql.com/doc/refman/5.7/en/binary-installation.html



简单配置mysql:

```bash
vi /etc/my.cnf   # 添加如下信息：

[client]
port=3306

[mysql]
default-character-set=utf8

[mysqld]
character-set-server=utf8
default-storage-engine=INNODB
```

【注意】关于Linux下没有my.cnf的情形：从5.7.18开始官方不再二进制包中提供my-default.cnf文件。



<br/>



<span style="font:normal bold 22px arial,sans-serif;color:blue">Navicat无法连接Mysql时：</span> 

```shell

1. 打开数据库：use mysql。检索 user 和 host 字段
mysql> use mysql;
mysql> select user, host from user; 

2. 如果没有 user=root ，host = % 的用户，则执行下面语句：
mysql> update user set host='%' where user='root';

3. 给 root 授权（所有权限）, 并让赋予的权限立即生效
mysql> GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '123456' WITH GRANT OPTION;
mysql> flush   privileges;

```






### Linux平台-RPM

卸载MySQL：

```shell
1 删除Mysql

   yum remove  mysql mysql-server mysql-libs mysql-server;

   find / -name mysql 将找到的相关东西delete掉(rm -rf /var/lib/mysql)；

   rpm -qa|grep mysql(查询出来的东东yum remove掉)

   rm /etc/my.cnf

 
查看是否还有mysql软件：如果存在的话，继续删除即可。
rpm -qa|grep mysql



a）查看系统中是否以rpm包安装的mysql：

rpm -qa | grep -i mysql


b)卸载mysql

rpm -e MySQL-server-5.6.17-1.el6.i686
rpm -e MySQL-client-5.6.17-1.el6.i686


c)删除mysql服务

chkconfig --list | grep -i mysql
chkconfig --del mysql


d)删除分散mysql文件夹

whereis mysql 或者 find / -name mysql

清空相关mysql的所有目录以及文件
rm -rf /usr/lib/mysql
rm -rf /usr/share/mysql
rm -rf /usr/my.cnf


通过以上几步，mysql应该已经完全卸载干净了.
```





### MySql配置文件

查看mysql启动时读取`my.cnf`配置文件的目录

```bash
mysql --help|grep 'my.cnf'      
```

在 MySQL 中，如果某个配置项在多个配置文件中都出现了，MySQL 服务器会按一定的顺序读取这些配置文件，并且后读取的配置文件中的设置会覆盖先前读取的相同配置项。这意味着即使某个配置项在多个文件中出现，最终生效的是最后读取的那个文件中的值。

::: info MySQL配置文件读取顺序
MySQL 服务器在启动时会按以下顺序读取配置文件：

1. **命令行参数**：通过命令行传递的选项。
2. **环境变量**：例如 `MYSQL_TCP_PORT` 和 `MYSQL_UNIX_PORT`。
3. **全局配置文件**：
   - `/etc/my.cnf`
   - `/etc/mysql/my.cnf`（某些 Linux 发行版）
   - `SYSCONFDIR/my.cnf`（编译时指定的系统配置目录）
4. **用户特定配置文件**：
   - `~/.my.cnf`（当前用户的主目录下的隐藏文件）

**优先级和覆盖规则**：
- **最先读取**：最先读取的是 `/etc/my.cnf` 文件，最后是`~/.my.cnf`.
- **保留的配置**：最终保留的是最后一个读取到的配置文件中的值。
:::


**配置文件结构与内容**：

MySQL 的配置文件通常由多个节（sections）组成，每个节针对不同的功能进行配置。常见的节包括 `[mysqld]`、`[client]`、`[mysql]` 和 `[mysqld_safe]` 等。以下是一个示例配置文件 `/etc/my.cnf`，包含了常用的关键配置项：

```ini
# [client] 节：用于客户端工具（如 mysql 命令行工具）的全局设置
[client]
# 默认字符集：设置客户端默认字符集为 utf8mb4，支持更多字符，包括 Emoji
default-character-set=utf8mb4

# [mysql] 节：用于 mysql 命令行工具的特定设置
[mysql]
# 默认字符集：设置 mysql 命令行工具的默认字符集为 utf8mb4
default-character-set=utf8mb4

# [mysqld] 节：用于 MySQL 服务器的主要设置
[mysqld]
# 服务器监听的 IP 地址：0.0.0.0表示服务器监听所有网络接口
bind-address = 0.0.0.0

# 数据目录：指定 MySQL 数据文件的存储目录
datadir = /var/lib/mysql

# 错误日志文件：指定错误日志文件的位置
log_error = /var/log/mysql/error.log

# 慢查询日志
slow_query_log = 1   # 启用慢查询日志
slow_query_log_file = /var/log/mysql/slow-query.log  # 指定慢查询日志文件的位置
long_query_time = 2  # 慢查询的时间阈值，单位为秒

# 二进制日志
log_bin = /var/lib/mysql/mysql-bin.log  # 指定二进制日志文件的位置
expire_logs_days = 7  # 二进制日志保留天数

# InnoDB 设置
innodb_buffer_pool_size = 1G  # InnoDB 缓冲池大小
innodb_log_file_size = 512M    # InnoDB 日志文件大小
innodb_flush_log_at_trx_commit = 1  # 每个事务提交时刷新日志到磁盘

# 最大连接数
max_connections = 300

# 字符集
character-set-server = utf8mb4         # 服务器默认字符集
collation-server = utf8mb4_unicode_ci  # 服务器默认排序规则

# 性能优化
query_cache_size = 0  # 禁用查询缓存
table_open_cache = 2000  # 表缓存大小
tmp_table_size = 64M  # 内存临时表的最大大小
max_heap_table_size = 64M  # 用户创建的内存表的最大大小

# 安全相关
skip-name-resolve  # 禁用 DNS 解析
local-infile = 0  # 禁用本地文件加载

# [mysqld_safe] 节：用于 mysqld_safe 启动脚本的设置
[mysqld_safe]
# 错误日志文件的位置
log-error = /var/log/mysql/error.log
# 设置打开文件的限制
open-files-limit = 1024

# [mysqldump] 节：用于 mysqldump 工具的设置
[mysqldump]
# 快速导出
quick
# 允许最大数据包大小
max_allowed_packet = 16M
```




### 重置root密码

无论是在 MySQL 5.7 还是 MySQL 8.0 中，设置密码的方法基本相同：

1. **登录 MySQL**

   首先以 root 用户登录 MySQL：

   ```sh
   sudo mysql -u root -p
   ```

2. **设置密码**

   使用 `ALTER USER` 语句设置 root 用户的密码：

   ```sql
   ALTER USER 'root'@'localhost' IDENTIFIED BY '新密码';
   ```

   或者，如果你需要为其他用户设置密码：

   ```sql
   CREATE USER '新用户名'@'localhost' IDENTIFIED BY '新密码';
   ```

   MySql5.7还可以使用下列方式：

    ```bash
    SET PASSWORD FOR 'username'@'localhost' = PASSWORD('新密码');
    # 或者
    SET PASSWORD FOR 'username'@'localhost' = '新密码';
    ```

3. **刷新权限**

   为了确保新设置的密码立即生效，需要刷新权限：

   ```bash
   FLUSH PRIVILEGES;
   ```

4. **退出 MySQL**

   退出 MySQL 命令行：

   ```bash
   EXIT;
   ```



### MySql常用命令

MySQL 客户端提供了丰富的命令来帮助你管理数据库、执行 SQL 语句、查看数据库信息等：

**1. 连接 MySQL 服务器**

```sh
mysql -u username -p
```

- `-u`: 指定用户名。
- `-p`: 提示输入密码。

附加参数:

```sh
mysql -u username -p -h hostname -P port
```

- `-h`: 指定服务器的主机名或 IP 地址。
- `-P`: 指定 MySQL 服务器的端口号，默认为 `3306`。

显示当前连接的 MySQL 版本：
```sql
SELECT VERSION();           
```
帮助命令和退出客户端：
```bash
HELP command_name;   --  显示帮助信息

EXIT;                -- 退出 MySQL 客户端 还可以使用 QUIT;
```

**2. 使用数据库**

查看数据库列表，并选择需要使用的数据库：
```sql
SHOW DATABASES;        -- 显示数据库列表

USE database_name;     -- 选择数据库

SELECT DATABASE();     -- 查看当前使用的数据库
```


创建/ 删除数据库：

```sql
CREATE DATABASE database_name;

DROP DATABASE database_name;
```


查看表结构:

```sql
DESCRIBE table_name;

SHOW COLUMNS FROM table_name;

DROP TABLE table_name;     -- 删除表
```


**3. 当前会话用户**

```sql
SELECT USER();                -- 查看当前会话的用户

SELECT CURRENT_USER();        -- 查看当前会话的用户名和主机

SHOW STATUS;                  -- 查看当前会话的状态
SHOW SESSION STATUS;          -- 显示当前会话的会话状态
SHOW GLOBAL STATUS;           -- 显示当前会话的全局状态

SHOW VARIABLES;               -- 查看当前会话的变量
SHOW SESSION VARIABLES;       --显示当前会话的会话变量
SHOW GLOBAL VARIABLES;        -- 显示当前会话的全局变量


SHOW WARNINGS;                -- 查看当前会话的警告
SHOW ERRORS;                  --  查看当前会话的错误


SET SESSION variable_name = value;   -- 设置会话变量
SET @variable_name = value;          -- 设置会话变量
SET GLOBAL variable_name = value;    -- 设置全局变量

SHOW VARIABLES LIKE 'sql_mode';      -- 查看当前会话的 SQL 模式
SET sql_mode = 'mode_value';         -- 设置当前会话的 SQL 模式

SHOW VARIABLES LIKE 'character_set_client';    -- 查看当前会话的字符集
SET NAMES 'charset';                           -- 设置当前会话的字符集

SHOW VARIABLES LIKE 'collation_connection';    -- 查看当前会话的编码
SET collation_connection = 'encoding';         -- 设置当前会话的编码
```


**4. sql文件**

```sql
SOURCE file_path;   -- 执行 SQL 文件

-- 导出数据到文件
SELECT * INTO OUTFILE '/path/to/file.csv' FIELDS TERMINATED BY ',' ENCLOSED BY '"'
ESCAPED BY '\\' LINES TERMINATED BY '\n' FROM table_name;
```





## DCL用户权限管理

DCL（Data Control Language），   数据控制语言，用来定义**访问权限和安全级别** ，下为MySql常用的一些用户管理命令：

### 创建/删除用户

**1. 创建用户**: 在 MySQL 中创建用户的基本语法如下：

```sql
CREATE USER 'username'@'host' IDENTIFIED BY 'password';
```

- `username`：用户名。
- `host`：用户允许连接的主机地址。可以是具体的 IP 地址、域名或者 `'%'` 表示任何主机。
- `password`：用户的密码。

示例: 创建一个名为 `newuser` 的用户，允许从任何主机连接，并设置密码为 `newpass`：

```sql
CREATE USER 'newuser'@'%' IDENTIFIED BY 'newpass';
```

**2. 删除用户**: 删除用户的语法如下：

```sql
DROP USER 'username'@'host';
```

示例: 删除名为 `newuser` 的用户：

```sql
DROP USER 'newuser'@'%';
```

### MySQL用户表

在 MySQL 中，用户信息存储在 `mysql` 系统数据库中的几个表中。这些表主要用于存储用户账号信息、权限和认证数据。

1. **`mysql.user`**：存储用户的用户名、主机名、密码以及其他认证信息。
2. **`mysql.db`**：存储用户对特定数据库的权限。
3. **`mysql.tables_priv`**：存储用户对特定表的权限。
4. **`mysql.columns_priv`**：存储用户对特定列的权限。
5. **`mysql.profiles`**：存储用户的资源限制。
6. **`mysql.plugin`**：存储用户的插件信息。

**1. 查看用户信息**
```sql
SELECT Host, User FROM mysql.user;                            -- 查看所有用户

SELECT Host, User FROM mysql.user WHERE User = 'username';    -- 查看特定用户
```

**2. 修改用户密码**

```sql
ALTER USER 'username'@'host' IDENTIFIED BY 'new_password';       -- 使用 `ALTER USER`

SET PASSWORD FOR 'username'@'host' = PASSWORD('new_password');   -- 使用 `SET PASSWORD`
```

**3. 修改用户属性**

```sql
-- 修改用户的最大连接数
ALTER USER 'username'@'host' MAX_QUERIES_PER_HOUR 10000 MAX_CONNECTIONS_PER_HOUR 1000 MAX_UPDATES_PER_HOUR 1000 MAX_USER_CONNECTIONS 10;

-- 修改用户的默认角色
ALTER USER 'username'@'host' DEFAULT ROLE 'role_name';
```

注意：在 MySQL 8.0 中引入了默认角色的概念，可以使用 `DEFAULT ROLE` 来设置用户的默认角色。



**4. 禁用或启用用户** 

```sql
ALTER USER 'username'@'host' ACCOUNT LOCK;                          -- 禁用用户

ALTER USER 'username'@'host' ACCOUNT UNLOCK;                        -- 启用用户

DROP USER 'username'@'host';                                        -- 删除用户
```



### 用户权限设置

**权限授予**：授予用户权限的基本语法如下：

```sql
GRANT privileges ON database.table TO 'username'@'host' [WITH GRANT OPTION];
```

- `privileges`：可以是一个或多个权限的列表，如 `SELECT`, `INSERT`, `UPDATE`, `DELETE`, `CREATE`, `DROP`, `ALTER`, `INDEX`, `TRIGGER`, `EXECUTE`, `PROCESS`, `RELOAD`, `SHUTDOWN`, `FILE`, `REFERENCES`, `TRIGGER`, `CREATE TEMPORARY TABLES`, `LOCK TABLES`, `EVENT`, `TRIGGER`, `REPLICATION CLIENT`, `REPLICATION SLAVE`, `REPLICATION MASTER`, `REPLICATION SLAVE`, `REPLICATION CLIENT`, `REPLICATION SLAVE`, `CREATE VIEW`, `SHOW DATABASES`, `SUPER`, `PROXY`, `GRANT OPTION` 等。
- `database.table`：指定权限应用的对象。如果是 `*.*` 表示全局权限。
- `WITH GRANT OPTION`：允许用户授予其他用户相同的权限。

示例: 授予 `newuser` 对 `mydb` 数据库的 `SELECT` 和 `INSERT` 权限：

```sql
GRANT SELECT, INSERT ON mydb.* TO 'newuser'@'%' WITH GRANT OPTION;
```

**查询权限**：查询用户权限的基本语法如下：

```sql
SHOW GRANTS FOR 'username'@'host';
```

示例：查询 `newuser` 用户的权限：

```sql
SHOW GRANTS FOR 'newuser'@'%';
```

**撤销权限**：撤销用户权限的基本语法如下：

```sql
REVOKE privileges ON database.table FROM 'username'@'host';
```

示例：撤销 `newuser` 用户对 `mydb` 数据库的 `SELECT` 和 `INSERT` 权限：

```sql
REVOKE SELECT, INSERT ON mydb.* FROM 'newuser'@'%';
```




### 允许远程连接

MySQL的远程连接需要两个必要条件：

- 用户的 `Host` 字段设置为 `%`
- MySQL 服务器需要通过 `bind-address` 参数正确配置以监听相应的网络接口

由于MySQL的 `mysql.user` 表中的 `root` 用户的 `Host`属性默认为`localhost`, 意味着该用户只能在从本地访问数据库, 所以需要修改Host属性或者重新 新建一个用户，这里以新建用户为例：

```bash
create user 'root'@'%' identified by 'root';
grant all on *.* to 'root'@'%' with grant option;

flush privileges;
```
执行上述命令后，可使 `root` 用户从任何主机都可以连接到 `MySQL` 服务器，并且拥有所有数据库操作的最高权限。但此时还需要检查 `MySQL` 的 `bind-address` 配置：

```bash
SHOW VARIABLES LIKE 'bind_address';
# 如果结果不是 0.0.0.0 , 则需要修改my.cnf配置文件

# 查看所有配置文件的路径
mysql --help | grep my.cnf

sudo vim /etc/mysql/my.cnf
```
在配置文件中添加如下配置：
```bash
[mysqld]
bind-address = 0.0.0.0  # 监听所有网络接口
```

修改后重启MySQL服务即可

```bash
sudo systemctl restart mysql
```

::: warning [08001] Public Key Retrieval is not allowed
当使用客户端工具 连接 MySQL 时，如果遇到 `[08001] Public Key Retrieval is not allowed` 的错误，这通常是因为 MySQL 客户端尝试从服务器获取公钥以进行安全连接，但这个功能被禁用了。

MySQL 从 5.7.6 版本开始引入了 `RSA key pair` 用于更安全的密码交换。当客户端连接到服务器时，如果 `caching_sha2_password` 身份验证插件被使用（这是 MySQL 8.0 及以上版本的默认身份验证插件），并且客户端没有本地存储的公钥，那么它会尝试从服务器获取公钥。如果你的客户端配置禁止了公钥检索，就会出现这个错误。


#### 解决方法一：允许公钥检索
你可以在数据库连接设置中启用公钥检索。以DataGrip为例, 步骤如下：

1. 打开 DataGrip 并选择你的 MySQL 数据源。
2. 点击 "Edit" 按钮来编辑连接属性。
3. 在 "Advanced" 选项卡下找到 "Allow public key retrieval" 选项，并勾选它。
4. 保存设置并重新连接。


在开发场景中，`MySQL8+`可以使用可以使用 `allowPublicKeyRetrieval=true` 参数, 如:
```bash
jdbc:mysql://hostname:3306/db_name?useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=UTC
```

#### 解决方法二：更改 MySQL 用户的身份验证插件
你可以将用户的身份验证插件更改为 `mysql_native_password`，这样就不需要公钥检索。

   ```sql
   ALTER USER 'your_username'@'%' IDENTIFIED WITH mysql_native_password BY 'your_password';
   FLUSH PRIVILEGES;
   ```

   将 `'your_username'` 替换为你要更改的用户名，将 `'your_password'` 替换为该用户的密码。

:::





## MySql常用数据类型

| 常用数据类型 | 大小（bytes） | 说明                                                         |
| :----------: | :-----------: | ------------------------------------------------------------ |
|     int      |       4       | 整型 （-2 147 483 648，2 147 483 647）±21亿                  |
|    double    |       8       | 浮点型，例如double(5,2)表示最多5位，其中必须有2位小数，即最大值为 999.99 |
|     char     |     0-255     | 固定长度字符串类型； `char(10)   'aaa' ` 占10个字符的位置    |
|   varchar    |    0-65535    | 可变长度字符串类型； `varchar(10)  'aaa'`占3字符             |
|     text     |    0-65535    | 字符串类型，比如小说信息                                     |
|     blob     |    0-65535    | 字节类型，保存文件信息(视频，音频，图片)                     |
|     date     |       3       | 日期类型，格式为：yyyy-MM-dd                                 |
|     time     |       3       | 时间类型，格式为：hh:mm:ss                                   |
|  timestamp   |       4       | 时间戳类型 yyyy-MM-dd hh:mm:ss 会自动赋值                    |
|   datetime   |       8       | 日期时间类型 yyyy-MM-dd hh:mm:ss                             |

<br/>

MySQL支持的数据类型非常多，选择正确的数据类型对于获得高性能至关重要。

不管存储哪种类型的数据，下面几个简单的原则都有助于做出更好的选择。

```sql
1. 更小的通常更好。
一般情况下，应该尽量使用可以正确存储数据的最小数据类型. 
更小的数据类型通常更快，因为它们占用更少的磁盘、内存和CPU缓存，并且处理时需要的CPU周期也更少。
(如果无法确定哪个数据类型是最好的，就选择你认为不会超过范围的最小类型。)

2. 简单就好
简单数据类型的操作通常需要更少的CPU周期。
例如，整型比字符操作代价更低，因为字符集和校对规则（排序规则）使字符比较比整型比较更复杂。
这里有两个例子：
一个是应该使用MySQL内建的类型而不是字符串来存储日期和时间，
另外一个是应该用整型存储IP地址

3. 尽量避免NULL
很多表都包含可为NULL （空值）的列，即使应用程序并不需要保存NULL 也是如此，这是因为可为NULL 是列的默认属性 。
通常情况下最好指定列为 NOT NULL ，除非真的需要存储NULL 值。
通常把可为NULL 的列改为NOT NULL 带来的性能提升比较小，所以（调优时）没有必要首先在现有schema中查找并修改掉这种情
况，除非确定这会导致问题。但是，如果计划在列上建索引，就应该尽量避免设计成可为NULL的列。

```

<br/>



```shell
DATETIME 和TIMESAMP 列都可以存储相同类型的数据：时间和日期，精确到秒。
然而TIMESTAMP 只使用DATETIME 一半的存储空间，并且会根据时区变化，具有特殊的自动更新能力。
另一方面，TIMESTAMP 允许的时间范围要小得多，有时候它的特殊能力会成为障碍。

MySQL为了兼容性支持很多别名，例如INTEGER、BOOL ，以及NUMERIC 。
它们都只是别名。这些别名可能令人不解，但不会影响性能。
如果建表时采用数据类型的别名，然后用SHOW CREATE TABLE 检查，会发现MySQL报告的是基本类型，而不是别名。
```

<br/>

### 1) 数字类型

有两种类型的数字：整数（whole number）和实数（real number）

<br/>



**整数类型**：TINYINT，SMALLINT，MEDIUMINT，INT，BIGINT 。分别使用 8，16，24，32，64位存储空间

```sql
整数类型有可选的UNSIGNED 属性，表示不允许负值，这大致可以使正数的上限提高一倍。
例如 TINYINT UNSIGNED 可以存储的范围是0～255，而 TINYINT 的存储范围是 −128～127。

有符号和无符号类型使用相同的存储空间，并具有相同的性能，因此可以根据实际情况选择合适的类型

你的选择可以决定MySQL是怎么在内存和磁盘中保存数据的。
然而，整数计算一般使用64位的BIGINT 整数，即使在32位环境也是如此（一些聚合函数是例外，它们使用 DECIMAL 或 DOUBLE 进行计算）


MySQL可以为整数类型指定宽度，例如INT（11） ，对大多数应用这是没有意义的：
它不会限制值的合法范围，只是规定了MySQL的一些交互工具（例如MySQL命令行客户端）用来显示字符的个数。
对于存储和计算来说，INT（1） 和INT（20） 是相同的。
```

<br/>



**实数类型**：实数是带有小数部分的数字。

然而，它们不只是为了存储小数部分；也可以使用DECIMAL 存储比BIGINT 还大的整数。MySQL既支持精确类型，也支持不精确类型。

```sql
FLOAT 和 DOUBLE 类型支持使用标准的浮点运算进行近似计算。
-- 如果需要知道浮点运算是怎么计算的，则需要研究所使用的平台的浮点数的具体实现。

DECIMAL 类型用于存储精确的小数。在MySQL 5.0和更高版本，DECIMAL 类型支持精确计算。
-- MySQL 4.1以及更早版本则使用浮点运算来实现DECIAML 的计算，这样做会因为精度损失导致一些奇怪的结果。
-- 在这些版本的MySQL中，DECIMAL 只是一个“存储类型”。

因为CPU不支持对DECIMAL 的直接计算，所以在MySQL 5.0以及更高版本中，MySQL服务器自身实现了DECIMAL 的高精度计算。
相对而言，CPU直接支持原生浮点计算，所以浮点运算明显更快。
```

<br/>

```sql

有多种方法可以指定浮点列所需要的精度，这会使得MySQL悄悄选择不同的数据类型，或者在存储时对值进行取舍。
这些精度定义是非标准的，所以我们建议只指定数据类型，不指定精度。

浮点类型在存储同样范围的值时，通常比DECIMAL 使用更少的空间。
FLOAT 使用4个字节存储。DOUBLE 占用8个字节，相比FLOAT有更高的精度和更大的范围。和整数类型一样，能选择的只是存储类型；


MySQL使用 DOUBLE 作为内部浮点计算的类型。
因为需要额外的空间和计算开销，所以应该尽量只在对小数进行精确计算时才使用 DECIMAL -- 例如存储财务数据。

但在数据量比较大的时候，可以考虑使用 BIGINT 代替 DECIMAL ，将需要存储的货币单位根据小数的位数乘以相应的倍数即可。
-- 假设要存储财务数据精确到万分之一分，则可以把所有金额乘以一百万，然后将结果存储在 BIGINT 里，
-- 这样可以同时避免 浮点存储计算不精确 和 DECIMAL 精确计算代价高 的问题。

```



<br/>

### 2) 字符串类型

VARCHAR  和 CHAR 是两种最主要的字符串类型。

不幸的是，很难精确地解释这些值是怎么存储在磁盘和内存中的，因为这跟存储引擎的具体实现有关。

<br/>

先看看 InnoDB 或者MyISAM 通常 怎么存储 VARCHAR 和 CHAR 值在磁盘上 ：

```sql
VARCHAR 类型用于存储可变长字符串，是最常见的字符串数据类型。
它比定长类型更节省空间，因为它仅使用必要的空间（例如，越短的字符串使用越少的空间）。
-- 有一种情况例外，如果MySQL表使用ROW_FORMAT=FIXED 创建的话，每一行都会使用定长存储，这会很浪费空间。

VARCHAR 需要使用1或2个额外字节记录字符串的长度：
-- 如果列的最大长度小于或等于255字节，则只使用1个字节表示，否则使用2个字节。
-- 假设采用latin1字符集，一个VARCHAR（10） 的列需要11个字节的存储空间。
-- VARCHAR（1000） 的列则需要1002个字节，因为需要2个字节存储长度信息。


VARCHAR 节省了存储空间，所以对性能也有帮助。
但是，由于行是变长的，在UPDATE 时可能使行变得比原来更长，这就导致需要做额外的工作。
如果一个行占用的空间增长，并且在页内没有更多的空间可以存储，在这种情况下，不同的存储引擎的处理方式是不一样的。
例如，MyISAM会将行拆成不同的片段存储，InnoDB则需要分裂页来使行可以放进页内。其他一些存储引擎也许从不在原数据位置更新数据


下面这些情况下使用 VARCHAR 是合适的：
1. 字符串列的最大长度比平均长度大很多；
2. 列的更新很少，所以碎片不是问题；
3. 使用了像 UTF-8 这样复杂的字符集，每个字符都使用不同的字节数进行存储。

```



<br/>



```SQL
CHAR 类型是定长的：MySQL总是根据定义的字符串长度分配足够的空间。当存储CHAR 值时，MySQL会删除所有的末尾空格

CHAR 适合存储很短的字符串，或者所有值都接近同一个长度。例如，
-- 1. CHAR 非常适合存储密码的MD5 值，因为这是一个定长的值。
-- 2. 对于经常变更的数据，CHAR 也比VARCHAR 更好，因为定长的CHAR 类型不容易产生碎片。
-- 3. 对于非常短的列，CHAR 比VARCHAR 在存储空间上也更有效率。
--    例如用CHAR（1） 来存储只有Y和N的值，如果采用单字节字符集只需要一个字节，
--    但是VARCHAR（1） 却需要两个字节，因为还有一个记录长度的额外字节。
```







<br/>

### 3) enum&set







<br/>



### 4) 时间和日期





<br/>



## 数据库备份与恢复

- 备份

  ```shell
  -- 直接在cmd命令下（配置环境变量，如果没有配置，那么就是在MySQL的bin目录下）
  mysqldump -uroot -p dbName>path\dbName.sql
  ```

- 恢复

  ```shell
  -- 连接上MySQL服务器
  mysql -uroot -p
  
  -- 选中数据库
  use dbName;
  
  -- 恢复数据
  source path\dbName.sql;
  ```





<br/>



## 四 数据库设计

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



## 五 事务Transaction

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

