## 写作助手

### 介绍

鼠标指向在关键词后会弹出悬浮菜单，支持 MD ，可自定义关键词。

### 开始

- `Ctrl+Shirft+P`或从右键菜单中打开**命令面板**。

- 选择**启动 WriterHelper** 启用插件。

- 或者按下`Ctrl+F10`热键。

- 或者在右键菜单中直接选择**启动 WriterHelper**。

- 新建文件，用`@`标记关键词，回车换行，写入需要在悬浮菜单显示的内容。

- 右键菜单中选择**写入配置**，则大功告成，以后启动插件时将自动读取该文件。

- 你同样可以在 vscode 设置中搜索 **Writer Helper: Path**,填入配置文件的路径。

### 参考配置文件如下

data.txt

```
@关键字
## 二级标题
### 三级标题

@链接
这是一个链接 [WriterHelper](https://github.com/scueee/WriterHelper-vscode-plugin)

@字体
*斜体文本* &nbsp; **粗体文本**

@表格
|  表头   | 表头  |
|  ----  | ----  |
| 单元格  | 单元格 |
| 单元格  | 单元格 |

@名字
[玄派人名生成器](https://www.xuanpai.com/tool/names)
```


