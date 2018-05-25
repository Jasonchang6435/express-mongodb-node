const mongoose = require('mongoose')
const map = {
  name :String,
  age : String,
  sex : String,
  address : String,
  dowhat : String,
  imgArr:[],
  favourite:String,
  explain:String
}
//这里mongoose.Schema要写上第二个参数，明确指定到数据库中的哪个表取数据
const table = {
  collection: 'myhero'
}
const heroSchema = mongoose.Schema(map, table)
const hero = mongoose.model('hero',heroSchema)
//
module.exports = hero
