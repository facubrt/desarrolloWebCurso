require('dotenv').config()

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

app.set('view engine', 'ejs')
app.use(expressLayouts)

app.use(express.static(__dirname + '/public'))

/* utilizamos las rutas desde el archivo router.js */
app.use('/', require('./router'))

/* si se ingresa a otra ruta no existente mostramos 404 */
/* ESTO TIENE QUE IR AL FINAL SIEMPRE, PORQUE SINO NUNCA VA A 
ENCONTRAR LAS RUTAS DE ROUTER */
app.use((request, response, next) => {
    response.status(404).send('Not found')
})

// carga variable de entorno y si no existe utiliza 3000
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`http://localhost:${port}`))

