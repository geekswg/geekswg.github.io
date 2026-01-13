# 获取输入框焦点



>在前端页面中我们经常会用到的表单输入，在打开表单页面时，我们希望可以输入光标可以自动定位到第一个输入框，用户就可以直接输入内容了，获取dom对象焦点，一般有两种方式

## 原生js获取焦点
```
document.getElementById("eleID").focus();//获取焦点
document.getElementById("eleID").select();//选择文字
```
## Jquery获取焦点
```
$(“#eleID”).focus();
$(“#eleID”).select();

```
## Easyui combobox 获取焦点
```
$('#eleID').combobox('textbox').focus();
```

## 表单输入框回车事件自动切换到下一个输入框
>示例代码
```
//回车自动切换到下一个输入框
$("form[name='formName'] input:text").keypress(function (e) {
    if (e.which == 13) {// 判断所按是否回车键
        var inputs = $("form[name='formName']").find(":text"); // 获取表单中的所有输入框
        var idx = inputs.index(this); // 获取当前焦点输入框所处的位置
        if (idx == inputs.length - 1) {// 判断是否是最后一个输入框
            $('#saveBtn').click();//点击保存按钮
            inputs[0].focus();
            inputs[0].select();
        } else {
            inputs[idx + 1].focus(); // 设置焦点
            inputs[idx + 1].select(); // 选中文字
        }
    }
}
```

---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.js.cool/posts/2021/%E8%8E%B7%E5%8F%96%E8%BE%93%E5%85%A5%E6%A1%86%E7%84%A6%E7%82%B9/  

