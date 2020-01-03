<!--
 * @Descripttion: 
 * @version: 
 * @Author: wenq
 * @Date: 2020-01-01 19:55:03
 * @LastEditors  : wenq
 * @LastEditTime : 2020-01-02 23:52:03
 -->
# nodeJS Node.js REPL(交互式解释器)

1.node REPL是什么？
  REPL之与node，相当于dos相对于windows或linux shell相对于linux，即node环境中的命令行程序模块，node自带的。
node REPL具体做什么？
  读取、
  执行、
  打印、
  循环。
  可以用来很好的的调试js代码。
2.怎样打开REPL?
  windows: 命令行dos下直接输入 ‘node’回车
3.在REPL中使用变量
  可以用‘var’关键字声明变量，之后可使用
  var x=‘111’
  console.log(x)
4.多行表达式?
  ‘...’系统自动生成三个点，回车即换行，node自动检测是否为连续表达式
5.下划线(_)变量
  可以使用下划线获取上一个表达式的运行结果
6.REPL命令
  ctrl+c
  ctrl+c按2次
  ctrl+d
  上下方向键
  tab键
  .help
  .break //退出多行表达式
  .clear
  .save filename //保存当前会话到指定文件
  .load filename //载入当前node repl会话文件内容
7.停止REPL
  按下两次ctrl+c
  