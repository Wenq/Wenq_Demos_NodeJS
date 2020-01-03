/*
 * @Descripttion: 
 * @version: 
 * @Author: wenq
 * @Date: 2020-01-01 19:57:23
 * @LastEditors  : wenq
 * @LastEditTime : 2020-01-03 23:04:59
 */

var fs = require('fs');

//nodejs同步读取文件示例
var data = fs.readFileSync('input.txt');
console.log('read: ', data.toString());
console.log('sycn program run finished!');

//nodejs非阻塞(异步)读取文件示例
function readFileCallback(error, data){
    if(error){
        console.error(error);
        return;
    }
    console.log('read async: ', data.toString());
}
fs.readFile('input.txt', readFileCallback);
console.log('asycn program run finished!');