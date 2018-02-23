const mongoose = require('mongoose')

const Schema = mongoose.Schema

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://admin:Kwdikos123!@c1-shard-00-00-evxgx.mongodb.net:27017,c1-shard-00-01-evxgx.mongodb.net:27017,c1-shard-00-02-evxgx.mongodb.net:27017/test?ssl=true&replicaSet=C1-shard-0&authSource=admin');

let user = Schema({
  username: String,
  password: String,
  name: String,
  type: []
})

let Users = mongoose.model('Users', user);

module.exports = {
  mongoose,
  Users
};