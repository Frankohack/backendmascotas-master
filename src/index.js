const express = require("express")
const {conectarBaseDatos} = require('./config/mongoDb')
const router = require('./router/index')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.listen(3000)
console.log("servidor corriendo");

conectarBaseDatos().then(() => {
    console.log('Base de datos conectada correctamente')
}).catch((error) => {
    console.log('Error al conectar base de datos conectada correctamente', error)
})
app.use(cors({
    origin: '*'
}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router)