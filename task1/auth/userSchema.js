const mongoose = require('mongoose');

const useSchema = mongoose.Schema({
    name:String, //name:Mohan Kumar	
    email:String, //email:mohan123@gmail.com
    password: String //password:mohan333
})

mongoose.model('User', useSchema)

module.exports = mongoose.model('User')