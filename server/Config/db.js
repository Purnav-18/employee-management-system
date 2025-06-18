const mongoose = require('mongoose')

const connect = () => {
    try {
        mongoose.connect(process.env.mongodb)
        console.log('DataBase is connected')
    } catch (error) {
        console.log("Error in Database")
    }
}

module.exports = connect