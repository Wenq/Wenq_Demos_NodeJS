<!--
 * @Descripttion: 
 * @version: 
 * @Author: wenq
 * @Date: 2020-01-01 19:55:03
 * @LastEditors  : wenq
 * @LastEditTime : 2020-01-05 23:17:01
 -->
# nodeJS Node.js Stream(流)

1.Stream只是一个抽象接口，Node中很多对象都实现了该接口（即很多对象都可以操作stream，比如request、stdout对象）。
2.Stream有4中类型：Readable可读、Writable可写、Duplex可读写、Transform操作被写入数据然后读出结果。
3.Stream类型对象有4个event：
  data：读取数据时触发、
  end：数据读取完成触发、
  error：数据读取异常触发、
  finish：数据读取完成触发。

个人理解：可以绑定事件，且触发事件，说明实现了Stream接口对象也是EventEmitter的实例。  

  # 从Stream中读取数据

  具体见main.js文件代码

  # 写入流

  具体见main.js文件代码

  # 管道流

  具体见main.js文件

  # 链式流

  具体见compress.js文件

  