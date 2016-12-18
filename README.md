#团队分工
##服务端
对应文件夹./imports/api, ./server
- 数据集（比如News新闻，Products产品，包含user集）
- 数据库结构（例如限定News的标题必须为字符串，长度不大于50）
- 发布订阅（确定哪些数据发到客户端，客户端接受哪些数据）
- 数据的填删改查method，比如插入帖子: post.insert（填删改查改数据库的方法函数）
- 预先插入的测试数据 （没有后台情况下，预先定义数据）
技术: mongo meteor graphql schema
##客户端
对应文件夹 ./import/ui，./client下面分为template模板和page页面，页面用于组合不同的Template模板，模板分为html和js，html确定样式，js确定逻辑和交互
- 组件开发 [组件开发基本概念](https://github.com/fouber/blog/issues/10)
- 页面布局（把组件都连接起来）
- 路由（确定哪个链接显示什么页面）
- 交互事件（按钮，表单功能...）
- css（样式）

##设计
负责网页的交互设计，视觉设计
- 线框图
- 视觉设计图
- 交互动画

##产品
根据用户需求确定网站所需功能
- 流程图
- 思维导图
- 产品需求文档
- checklist
