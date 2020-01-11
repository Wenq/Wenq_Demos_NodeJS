var express = require('express')
var app = express()
var fs = require('fs')

// 获取用户信息文件路径
function getUserInfoFile () {
  return __dirname + '/' + 'users.json'
}

// 新增user信息
var addUerInfo = {
  'user4': {
    'name': 'newuser',
    'passowrd': 'nu',
    'profession': 'student',
    'id': 4
  }
}

// restfull api: listUsers列举所有用户
// 本地访问：http://127.0.0.1:4499/listUsers
app.get('/listUsers', function (req, res) {
  fs.readFile(getUserInfoFile(), 'utf-8', function (err, data) {
    if (err) {
      console.log('lsitUsers err: ', err.stack)
      return
    }
    console.log('listUsers: ', data)
    res.end(data)
  })
})

// restfull api: addUser新增用户
// 本地访问：http://127.0.0.1:4499/addUser
app.get('/addUser', function (req, res) { // 路由"/addUser“是与url的最后一部分匹配
  fs.readFile(getUserInfoFile(), 'utf-8', function (err, data) {
    if (err) {
      console.log('addUser err: ', err.stack)
      return
    }
    data = JSON.parse(data) // 文件读取默认应该是string或者流，需要转为json对象
    data['user4'] = addUerInfo['user4']
    console.log('addUser: ', data)
    res.end(JSON.stringify(data)) // 返回的是string类型
  })
})

// restfull api: deleteUser删除用户
// 本地访问：http://127.0.0.1:4499/deleteUser
app.get('/deleteUser', function (req, res) {
  fs.readFile(getUserInfoFile(), 'utf-8', function (err, data) {
    if (err) {
      console.log('addUser err: ', err.stack)
      return
    }
    data = JSON.parse(data)
    data['user4'] = addUerInfo['user4']
    console.log('addUser: ', data)
    res.end(JSON.stringify(data))
  })
})

// restfull api: 根据特定id查询用户
// 本地访问：http://127.0.0.1:4499/1
app.get('/:id', function (req, res) {
  fs.readFile(getUserInfoFile(), 'utf-8', function (err, data) {
    if (err) {
      console.log('get User info err: ', err.stack)
      return
    }
    data = JSON.parse(data)
    data = data['user' + req.params.id]
    console.log('get User info : ', data)
    res.end(JSON.stringify(data))
  })
})

var port = 4499
var server = app.listen(port, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('应用实例，访问地址为： http://%s:%s', host, port)
})
