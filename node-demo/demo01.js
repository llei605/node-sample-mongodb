/**
 * 第一个MongoDB的例子
 */

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test'); // 连接本地的test数据库，不存在则创建

// 创建一个模型，就是在设计数据库  cat是集合名
const Cat = mongoose.model('Cat', { name: String });

// 实例化一个cat
const kitty = new Cat({ name: 'Zildjian' });

// 持久化储存kitty实例
kitty.save().then(() => console.log('meow'));
