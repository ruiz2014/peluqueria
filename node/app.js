import express from 'express'
import db from './database/db.js'
import cors from 'cors'
import blogRoutes from './routes/routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/blogs', blogRoutes)

try {
    await db.authenticate()
    console.log('exitos')
} catch (error) {
    console.log(`miwerda sto ${error}`)
}

// app.get('/', (req, res) =>{
//     res.send("hola")
// })

app.listen(3003, ()=>{
    console.log("andando")
})

