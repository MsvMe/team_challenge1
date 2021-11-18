const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = 4000

app.use(express.json())
// app.use(require('./routes/index'))

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:admin@cluster0.xd5ax.mongodb.net/Team_work?retryWrites=true&w=majority"
    )
    console.log("Сервер подключен к базе данных")
    app.listen(PORT, () => {
      console.log(`Сервер запущен на порте ${PORT}...`)
    })
  } catch (e) {
    console.log(e.message)
  }
}

connect()