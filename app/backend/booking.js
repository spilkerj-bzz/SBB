const express = require('express')

const router = express.Router()
router.use(express.json())

router.get('/booking/helloworld', (req, res) => {
    res.status(200).send("<h1>Hello World<h1>")
})


module.exports = router
