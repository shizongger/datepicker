# datepicker

## 介绍

datepicker是一款原生JavaScript写的的日期插件，使用方便，界面美观，格式支持丰富，不仅支持使用yyyy-MM-dd格式、还支持显示yyyy-MM、yyyy等格式。

![插件界面展示](https://raw.githubusercontent.com/shizongger/datepicker/master/img/demopicture.png)

## 使用

首先在使用的页面定义一个input输入框标签：

```$xslt
 <input type="text" class="datepicker">
```
然后在你的javascript代码片段初始化本插件：
```$xslt
datepicker.init(".datepicker");
```
另外需要注意的是，本插件没有定义日期框input的样式，因此需要你自己定义一个class样式，
demo里面已经给出了按例。
```css
        .datepicker {
            border: 1px solid #ccc;
            width: 240px;
            height: 25px;
            border-radius: 4px;
            padding: 5px;
            line-height: 24px;
        }
        .datepicker:focus {
            outline: 0 none;
            border: 1px solid #1abc9c;
        }
```

## 关于作者

张翠山，帝都Java程序员，以写代码为生，平时爱好就是写写技术博客、和朋友吹吹牛逼。
私以为一个好的Java程序员既懂Java后台开发，也懂前段开发。

QQ:290794272

Email:zhangshizong@cnpc.com.cn
