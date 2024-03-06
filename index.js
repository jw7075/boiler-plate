const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser'); // npm install body-parser --save 로 받은거 가져오기
const {User} = require("./models/User"); // 유저 정보들 User.js 에서 가져와서 사용할 수 있도록

const config = require('./config/key'); // 키 값 가져오기

//appplication/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true})); //body-parser 옵션주기

//application/json
app.use(bodyParser.json());//body-parser가 client에서 오는 정보를 서버에서 분석해서 가져올수 있게 해주는거

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,{
    useNewUrlParser: true,useUnifiedTopology: true, 
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello World!민지원아니지롱'))

app.post('/register', async(req,res) =>{

  //회원 가입 할때 필요한 정보들을 client에서 가져오면
  //그것들을 데이터베이스에 넣어준다.

  const user =new User(req.body) //body-parser로 client정보 받아와서 req.body가 할 수 있게 해준다

  try{
    await user.save();
    return res.status(200).json({success:true})
  } catch(err){
    return res.json({success:false,err})
  }
})

app.listen(port, () => console.log(`Example app listening on port ${port}`))