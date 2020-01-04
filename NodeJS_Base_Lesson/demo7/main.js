/*
 * @Descripttion: 
 * @version: 
 * @Author: wenq
 * @Date: 2020-01-01 19:57:23
 * @LastEditors  : wenq
 * @LastEditTime : 2020-01-04 22:19:30
 */

 //引入events模块
var event = require('events');
//创建EventEmitter实例对象
var eventEmitter = new event.EventEmitter();

//绑定事件+事件处理程序（回调）方式
//eventEmitter.on('eventName',eventHandler);
//上面代码绑定，下面代码触发事件
//eventEmitter.emit('eventName');

/***********************实例代码如下**********************/
var connectHanlder = function connected() {
    console.log('连接成功...');
    //触发data_received事件
    eventEmitter.emit('data_received');
}
//绑定connnection事件处理程序
eventEmitter.on('connection', connectHanlder);

//使用匿名函数绑定data_received事件
eventEmitter.on('data_received',function(){
    console.log('数据接收成功...');
});

//触发connection事件
eventEmitter.emit('connection');

console.log('程序执行完毕...');
/**********************************************************/


/***********************回调中的error参数**********************/
var fs = require('fs');
fs.readFile('input.txt', function(error, data){
    if(error){
        console.log('read file fail, error: ', error.stack);
        return;
    }
    console.log('file content: ', data.toString());
});
console.log('read file 程序执行完毕...');
/**********************************************************/