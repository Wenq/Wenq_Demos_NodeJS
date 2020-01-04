<!--
 * @Descripttion: 
 * @version: 
 * @Author: wenq
 * @Date: 2020-01-01 19:55:03
 * @LastEditors  : wenq
 * @LastEditTime : 2020-01-04 22:39:12
 -->
# nodeJS Node.js EventEmitter

1.node.js所有异步IO操作完成，都会发一个event到事件队列（排队，到第一个了就会触发回调）。
2.node.js里很多对象都会分发event，所有能产生event的对象都是events.EventEmitter的实例。

# EventEmitter类

1.events模块只提供一个对象：events.EventEmitter,EventEmitter的核心就是事件监听与触发的封装。

2.更多内容待继续阅读？？？？？？ -20200104

# 个人总结：
1.对于预定义模块或对象，使用EventEmitter监听不需要事件名称，直接调用相应功能接口，提供回调参数即可。
2.对于用户自己的事件，使用EventEmitter.on('eventName', callback)监听事件，用EventEmitter.emit('eventName')触发事件。