import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    console.log('Mongodb connection starting')
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })

    console.log(`MongoDB connected : ${conn.connection.host}`)
  } catch (error) {
    console.log(error)
    process.exit()
  }
}

export default connectDB