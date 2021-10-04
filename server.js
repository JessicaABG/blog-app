import app from './app.js'
import db from './db/connection.js'

const PORT = process.env.PORT || 3000

db.on('connected to MongoDB')
    app.listen(PORT, ()=>{
        console.log(`Express server app is running on ${PORT}`)
    
    })