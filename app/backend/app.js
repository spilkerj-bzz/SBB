const express = require('express')
//const swaggerUI = require('swagger-ui-express')
//const swaggerDocument = require('../documentation/swagger-out.json')

const bookingController = require('./booking.js')
const loginController = require('./login.js')

const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
//app.use("/swagger-doc", swaggerUI.serve, swaggerUI.setup(swaggerDocument))
app.use('', bookingController)
app.use('', loginController)

app.listen(port, () => {
  console.log('API running on port:', port)
})
