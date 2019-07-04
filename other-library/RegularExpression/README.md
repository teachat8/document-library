# 正则表达式

> create by **teachat** on **2019-4-15 20:45:36**   
> Recently revised in **2019-7-4 13:38:23**

我收藏的、开发中用过的正则表达式，欢迎补充

## 最新
- 匹配2018-10-10格式的日期：`^[1-9]\d{3}-([1-9]|1[0-2])-([1-9]|[1-2]\d|3[01])$`
- 年/月/日（年-月-日、年.月.日）：`/^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/`
- 验证文件扩展名:`^.*?\.(html|css|jpg)$`
- 匹配空白行的正则表达式：`/\n\s*\r/`
- 匹配首尾空白字符的正则表达式：`/^\s*|\s*$/`
- 匹配HTML标记的正则表达式：`< (\S*?)[^>]*>.*?|< .*? />`

## 密码验证类
- 6-16位字符，区分大小写（不能是9位以下的纯数字，不含空格）:`^(?!\d{6,8}$)(?! )(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9_]{6,16}$`
- 6-16位字符，区分大小写（不能是9位以下的纯数字，不含空格），必须包含大写字母:`^(?!\d{6,8}$)(?! )(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9_]{6,16}$`
- 密码不能为纯数字或字母，不少于6位:`^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$`
- 中文、英文、数字及下划线：`^[\u4e00-\u9fa5_a-zA-Z0-9]+$`
- 帐号（字母开头，允许 5-16 字节，允许字母数字下划线）：`^[a-zA-Z][a-zA-Z0-9_]{4,15}$ `
- 中文、英文、数字及下划线：`^[\u4e00-\u9fa5_a-zA-Z0-9]+$`

## 号码验证类
- 验证微信号:`^[a-zA-Z]{1}[-_a-zA-Z0-9]{5,19}$`
- 腾讯QQ号码:`[1-9][0-9]{4,}`
- 国内电话号码:`\d{3}-\d{8}|\d{4}-\{7,8}`
- 带中划线的手机号码:`^[+]{0,1}(d){1,3}[ ]?([-]?((d)|[ ]){1,12})+$`
- 普通手机号码:`^1[34578]\d{9}$`
- 普通电话、传真号码：可以“+”开头，除数字外，可含有“-”:`^[+]{0,1}(d){1,3}[ ]?([-]?((d)|[ ]){1,12})+$`
- 18位身份证号码:`^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X|x)$`
- 中国邮政编码:`[1-9]\d{5}(?!\d)`

## 地址类
- IP地址：`(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d).(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d).(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d).(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)`
- URL:`[a-zA-z]+://[^\s]*`
- Email地址:`[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?`




## 其他
**手机号码中间四位用*代替**
```js
function encryptPhone(val){
    if(!val) return;
    return val.replace(/^(\d{3})(\d{4})(\d+)/, '$1****$3')
}

encryptPhone('13173786224'); // 131****6224
```

**格式化金额**
```js
var money = 1003450.89;
console.log(money.toString().replace(/(?=\B(?:\d{3})+\b)(\d{3}(?:\.\d+$)?)/g,',$1'));
// 1,003,450.89
```

**JS替换字符串中的空格**
```js
var reg = /([^\s])\s+([^\s\b])/g;
var str = " 中国  北京   朝阳区  df "; 
str = str.replace(reg, "$1%$2")
```

**不允许输入如下字符: (像 !@#$%^&* 等)**
```js
var userName = $("#userRegistName").val(); 
var first = userName.charCodeAt(0); 
function CheckUserNameFormat(){
    if ((first>=65 && first <= 90)||(first>=97 && first <=122)){
    var pattern =/^[A-Za-z0-9_]+$/;  //首字母必须是A-Z或者a-z
    if(pattern.test(userName)){ 
         ......
    }
} 
```

## tips
匹配中文字符：`[\u4e00-\u9fa5]`

匹配数字类型
```js
//匹配正整数
^[1-9]\d*$
//匹配负数
^-[1-9]\d*$
//正数
^-?[1-9]\d*$
//匹配非负正数（正整数 + 0）
^[1-9]\d*|0$
//匹配非正负数（负整数 + 0）
^-[1-9]\d*|0$
//匹配正浮点数
^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$
//匹配负浮点数
^-[1-9]\d*\.\d*|-0\.\d*[1-9]\d*$
```


## 文档协议 
> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><a xmlns:dct="http://purl.org/dc/terms/" property="dct:title">**teachat** 的文档库</a> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="wzh" property="cc:attributionName" rel="cc:attributionURL">teachat</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。