/*
 * @Descripttion: 
 * @version: 
 * @Author: wenq
 * @Date: 2020-01-01 19:57:24
 * @LastEditors  : wenq
 * @LastEditTime : 2020-01-04 22:41:40
 */

//引入events模块
var event = require('events');
//获取eventEmitter实例对象
var eventEmitter = new event.EventEmitter();

//监听事件
eventEmitter.on('eventName', callback);
//触发事件
eventEmitter.emit('eventName');