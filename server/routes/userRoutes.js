const express = require('express')
const { posttingData, gettingData, gettingDatabyId, putttingDatabyId, deletingData } = require('../Controller/userController')

const router = express.Router()

router.post('/user', posttingData)

router.get('/user', gettingData)

router.get('/user/:id', gettingDatabyId)

router.put('/user/:id', putttingDatabyId)

router.delete('/user/:id', deletingData)

module.exports = router 