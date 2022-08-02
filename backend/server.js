import express from 'express'
import notes from './data/notes.js'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import userRoutes from './routes/userRoutes.js'
import { customError, notFound } from './middlewares/errorMiddleware.js'
const app = express()
dotenv.config()
connectDB()
app.use(express.json())
app.get('/', (req, res) => {
  res.send('API is Running')
})

app.get('/api/notes', (req, res) => {
  res.json(notes)
})

app.use('/api/users', userRoutes)

app.use(notFound)
app.use(customError)
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server Started on PORT : ${PORT}`)
})
