### 图书管理系统分工指南

> 小组成员：黄雨生、宋融、薛伟。
>
> 不是本小组成员请不要fork本仓库，谢谢。

#### 1、前端

前端页面分为两层。

- 第一层作为索引层，页面简洁即可，内容包括查询、借书、还书、系统管理员登陆等几个按钮。
- 第二层为实际操作层。第一层的页面只有一些按钮，没有其他任何功能，但点击按钮后会跳转到另一个页面，在这个页面中才能进行实际的操作。实际操作需要有表单，用户填好表单点击提交就能够获得结果。具体的表格设计参考实验要求。

下面列出前端需要做的工作：

**页面：**

- 首页（索引页），要求有对应的功能按钮。首页页面的html文件名为index.html，对应的css文件名为index.css。查询按钮指向的地址为/query，借书按钮指向的地址为/borrow，还书按钮指向的地址为/return，系统管理员按钮指向的地址为/admin。这里都写相对路径即可。
- 查询页面要求有对应的表单，html文件名为query.html，css文件名为query.css。
- 借书页面要求有对应的表单，html文件名为borrow.html，css文件名为borrow.css。
- 还书页面要求有对应的表单，html文件名为return.html，css文件名为return.css。
- 系统管理员页面要求有对应的表单，html文件名为admin.html，css文件名为admin.css。

之所以规定各个页面的文件名和路径，是为了后端写起来更方便。（毕竟大家都按一个规则来写）



**表单提交：**

提交表单不建议直接在html文件中写链接，而是应该用javascript对服务器发送一个ajax请求，然后处理返回的数据，我们规定服务器返回的数据类型是json格式的，按json格式的处理流程来处理即可。

发送ajax请求也需要对服务器发送一个URL，只不过这个URL是js发出的，相当于js和服务器之间的悄悄话，服务器接收到请求后返回数据，js进行处理后更新页面，注意这里的更新页面不是点击html文件中的链接然后转到一个新的页面，而是在不刷新当前页面的情况下更新页面内容。因此，为了方面前后端配合，我们规定每个请求的URL：

- 点击查询按钮，发送的URL为/qu，这里是指相对路径，绝对路径则是/query/qu，下面都是类似情况。
- 点击借书按钮，发送的URL为/bo。
- 点击还书按钮，发送的URL为/re。
- 点击系统管理员，发送的URL为/ad。系统管理员页面还有图书入库和管理借书证按钮，URL分别为/in和/ma。

至于服务器返回什么数据，这要看后端的意愿，所以可以先放一放，等最后再处理。但要知道查询等功能要用js写一个ajax。



注意：所有的html文件，css文件，js文件都放要在views文件夹中。

**负责人**:薛伟



#### 2、后端

后端的主要工作就是处理URL，然后根据不同的请求调用不同的函数来处理。函数处理的主要任务就是和数据库交互，从中拿出数据，将其转换成json格式，然后发回给客户端。

**后端架构：**

- app.js，程序入口，运行该文件即可启动服务器。
- controller，文件夹下放置处各个URL的函数。
- views，文件夹下放置各个页面的html、css、js文件。
- package.json，项目描述文件，用了装依赖项的，不需要管他。
- node_modules，里面都是一些依赖文件，也不需要管。
- 其他js文件，用来扩展功能。

大致上了解架构即可，前端需要把文件放在view里，后端除了写整个架构的人之外，只需要把处理文件放在controller下即可。



接下来考虑数据库，也是整个project的核心。整个数据库架构如下图所示:

![](http://olrdynjoh.bkt.clouddn.com/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202017-03-23%20%E4%B8%8B%E5%8D%8810.17.23.png)



其实整个数据库也很简单，就这几个关系，大家心里有数就好。



**负责人**:黄雨生

- 后端架构
- 借书、还书、借书证管理等简单模块



**负责人**:宋融

- 管理员登陆、图书入库、图书查询等复杂模块



注意：写处理函数时不需要考虑mysql是否开启，假定它已经在外部启动了，函数内部直接使用mysql对象进行处理即可。返回数据格式为json格式。



#### 3、协作

接下来就是大家如何协作了。

- 首先，fork这个仓库
- 然后，clone到本地
- 在本地建个分支，然后在这个分支上进行自己的工作
- 觉得自己可以提交一些代码了，就先把分支push到自己的仓库
- 然后用这个分支对这个仓库发起一个pull request
- 等待合并
- 继续修改自己的代码，一步步优化，可以反复提交自己的代码



大致上就这些内容，希望大家合作愉快！当然这只是我的一个初步想法，具体的实施肯定有很多障碍，我们只需要一点点克服它们就好了！如果大家有什么想法也可以提出来。



最后声明一点，不要将这个仓库告诉别人，否则可能面临被抄袭的风险。



#### 4、一些资料

[jquery的ajax接口官方文档](http://www.css88.com/jqapi-1.9/jQuery.ajax/)

[基本js知识、模块的概念、koa框架](http://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000)

[nodejs基本知识，mysql模块使用](http://www.runoob.com/nodejs/nodejs-mysql.html)

