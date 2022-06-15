const express = require('express')
const router = express.Router()

const {VistaPrincipal} = require('../controllers/PageControllers')

router.get('/', VistaPrincipal)



module.exports = {
    routes : router
}

