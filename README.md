# Algorithm-player
This repository is about algorithm training for beginners

## 规范

### 文件命名规范
当您打算添加一道新的算法题目的时候，应该将其添加在 data 目录之下，文件夹命名为 *题目中文（题目英文）* 的格式，在这个文件夹底下，您还需要添加一个用来书写 *题目描述，输入示例，输出示例* 的 README.md 的文件，以及您的代码（可选，要求命名为：*您的github 昵称_题目*)。  

### git 规范
#### 提交信息规范

请使用英文  

当使用 ```git commit -a``` 提交信息的时候，我们希望能看到类似这样的内容：
``` <type>:<description> ```。  
- type 使用如下三种情况——  
  - feat: 添加新的题目或者添加新的解决方法的时候
  - fix: 发现之前提交的代码有bug的时候，修改并提交的时候
  - ref: 重构代码的时候
  - doc: 仅仅在涉及文档的时候使用
- description 是这一次 commit 的简短描述，请不要超过 50 个字符
  - 以动词原型开头
  - 第一个字母小写
  - 结尾不加标点符号

参考 [Commit message 和 Change log 编写指南](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html);

另外——  
如果您没有上传您的代码而仅仅只是上传了题目，请在 commit 时备注 **unsolved** 字样；同样，如果您解决了仓库中的未解决的问题，欢迎在 commit 时备注 **complete the challenge**
