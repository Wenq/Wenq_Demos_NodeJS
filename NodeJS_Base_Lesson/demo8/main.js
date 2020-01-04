/*
 * @Descripttion: 
 * @version: 
 * @Author: wenq
 * @Date: 2020-01-01 19:57:24
 * @LastEditors  : wenq
 * @LastEditTime : 2020-01-04 22:43:36
 */

//引入events模块
var event = require('events');
//获取eventEmitter实例对象
var eventEmitter = new event.EventEmitter();

//监听事件
eventEmitter.on('eventName', callback(error, args1, args2));
//触发事件
eventEmitter.emit('eventName', args1, args2);