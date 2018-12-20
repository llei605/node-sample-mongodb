# mongodb-sample-hello

声明：本实例用于个人学习参考。所有内容均参考至网络，由本人手动敲（抄）写。请勿用于商业途径。

## 一、



### 查看版本

``` shell
mongo --version
```

### 启动MongoDB

```
md c:\data\db
mongod
```

## 二、 基本命令

1. 查看显示所有数据库

   ```shell
   show dbs
   ```

2. 查看当前操作的数据库

   ``` shell
   db
   ```

3. 切换到指定的数据库（如果没有则创建）

   ``` shell
   use 数据库名称
   ```

4. 插入数据

   ```shell
   db.students.insertOne({"name": "tom"})
   ```

5. 查看当前数据库中的所有集合

   ``` shell
   show collections
   ```

6. 查看集合中的所有数据

   ```shell
   db.student.find()
   ```

   ## 三、NodeJS如何操作MongoDB（mongoose）

   ### 官方网站

   * 网址：http://mongoosejs.com
   * 指南：http://mongoosejs.com/docs/guide.html
   * API文档：http://mongoosejs.com/docs/api.html

   ### 第一个mongoose程序

   1. 创建一个NodeJS程序

   ```
   npm init
   ```

   2. 安装mongoose

   ```
   npm install --save mongoose
   ```

   3. 在demo01.js中填入下方代码

   ``` javascript
   // file name: demo01.js
   
   const mongoose = require('mongoose');
   mongoose.connect('mongodb://localhost/test');
   
   // 创建一个模型，就是在设计数据库  cat是集合名
   const Cat = mongoose.model('Cat', { name: String });
   
   // 实例化一个cat
   const kitty = new Cat({ name: 'Zildjian' });
   
   // 持久化储存kitty实例
   kitty.save().then(() => console.log('meow'));
   ```
