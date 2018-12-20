/**
 * 第二个MongoDB程序
 */

// step 1. 引入mongoose
const mongoose = require('mongoose')

// step 2. 连接数据库test，不存在则创建
mongoose.connect('mongodb://localhost/test')

// step 3. 设计集合的结构（表结构）
// 保证数据的完整性
const Schema = mongoose.Schema
const userSchema = new Schema({
    username: {
        type: String,
        required: true // 必须有
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String
    }
})

// step 4. 将文档结构发布为模型
// 第一个参数： 大写字母开头，单数的字符串，表示输入库名称。mongoose会自动转换为小写复数的集合名
// 第二个参数： 架构
// 返回值： 模型构造函数
const User = mongoose.model('User', userSchema)

// step 5. 根据模型构造函数操作users集合
const admin = new User({
    username: 'aaa',
    password: '111111',
    email: 'aaa@test.com'
})
admin.save()
    .then((data) => {
        console.log(data)
    }).catch((error) => {
        console.log(error)
    })
