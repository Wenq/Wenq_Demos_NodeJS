/*
 * @Descripttion: 
 * @version: 
 * @Author: wenq
 * @Date: 2020-01-01 19:55:03
 * @LastEditors  : wenq
 * @LastEditTime : 2020-01-01 22:22:21
 */

//步骤1：require模块
var http = require('http'); //node自带模块http
if (http) {
    //步骤2：创建服务器
    http.createServer(function (request, response) {
        //步骤3：接收请求并响应请求
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end('nodeJS: hello world \n');
    }).listen(8888);
    console.log('nodeJS is running at http://127.0.0.1:8888 server')
} else {
    console.error('nodeJS: http model not found!')
}