const express = require('express')
const app = express()
require('dotenv').config()
const connect = require('./Config/db')
const userRoutes = require('./routes/userRoutes')
const cors = require('cors')
connect()
app.use(express.json())
app.use(cors())
const port = process.env.port
app.use('/api/auth', userRoutes)

app.listen(port, () => {
    console.log(`port running at ${port}`)
})