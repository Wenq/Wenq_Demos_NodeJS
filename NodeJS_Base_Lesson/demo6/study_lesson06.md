<!--
 * @Descripttion: 
 * @version: 
 * @Author: wenq
 * @Date: 2020-01-01 19:57:23
 * @LastEditors  : wenq
 * @LastEditTime : 2020-01-03 22:56:45
 -->
# nodeJS 回调函数

1.nodejs异步编程直接体现就是回调（异步通过回调去实现）。
2.nodejs使用了大量回调，node所有api都支持回调函数。
3.异步（回调）大大提高了nodejs的性能，可处理大量并发请求。
  回调一般作为函数的最后一个参数出现。

```javascript
function foo1(name, age, callback){}
function foo2(value, callback1, callback2){}
```

