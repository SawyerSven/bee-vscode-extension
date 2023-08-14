# Bee 

像小蜜蜂一样勤劳的插件

## 功能

- [x] 注入合理的scss mixins
- [x] 为注入的scss mixins添加snippets


## 用法

使用`command`+`shift`+`p`打开命令栏,并且输入`bee`


## 代码片段

| 关键字   | 内容                                                                | 备注                                        |
| -------- | ------------------------------------------------------------------- | ------------------------------------------- |
| flex     | @include flex(justify-content,align-items,flex-direction,flex-wrap) |                                             |
| font     | @include font(color,font-size,line-height,bold-type)                | bold-type取值为:"bold","semibold","regular" |
| fs       | @include font-style(font-size,line-height,bold-type)                | 同font,少了颜色的定义                       |
| ellipsis | @include ellipsis(lines)                                            | lines为x的时候,最大x行,超出省略             |