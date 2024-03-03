const mongoose = require('mongoose'); //몽구스 모듈 불러오기

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, // 띄어쓰기 없애는거
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token:{             //유효성 관리
        type: string
    },
    tokenExp:{          //토큰 사용 유효기간
        type: Number
    }
})

const User = mongoose.model('User',userSchema)
module.exports = {User} //다른 곳에서도 사용 가능하게 export 해주기