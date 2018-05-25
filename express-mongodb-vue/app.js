const express = require('express')
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
//
const hero = require('./router/hero')
const { log } = require('./utils')
//这一句是连接上数据库
//这里的 main 是数据库的名字，不是表的名字
 var db = mongoose.connect('mongodb://localhost:27017/main');
const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api',hero)
//
if (module === require.main) {
  app.listen(3000,() => {
    log('app listening on port 3000.')
  })
}
// log('logging main', module, require.main, module === require.main)
