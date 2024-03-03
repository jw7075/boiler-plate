const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jiwon:1234@jiwon.vaenhxg.mongodb.net/',{
    useNewUrlParser: true,useUnifiedTopology: true, 
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!민지원이지롱')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})