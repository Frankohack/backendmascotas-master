const mongoose = require('mongoose');

const uri = "mongodb+srv://francomolina1997fm:123123123@ionicbackend.9mvouqm.mongodb.net/?retryWrites=true&w=majority";

async function conectarBaseDatos(){
    await mongoose.connect(uri)
}

module.exports = {conectarBaseDatos}