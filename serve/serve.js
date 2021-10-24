const express = require('express')
const bodyParser = require('body-parser') // 请求body的解析
const app = express()
const port = 3000

// 配置bodyParser 可以处理地址中带过来的json参数 (也是中间件)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.all("*",function(req,res,next){
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin","*");
  //允许的header类型
  res.header("Access-Control-Allow-Headers","content-type,Authorization");
  //跨域允许的请求方式
  res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");

  if (req.method.toLowerCase() == 'options') {
    res.send(200);  //让options尝试请求快速结束
  } else {
    next();
  }
})

// // 接口
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
//
// app.get('/json', (req, res) => {
//   console.log(res.query)
//   const obj = {
//     name: "哈哈"
//   }
//   res.send(obj)
// })



// 路由  相对于直接写接口会更好些，接口可以都被抽出去

const router = express.Router()
// 日志中间件，可以拦截浏览器的请求
app.use(async(req, res, next) => {
  console.log("日志中间件开始")
  await next();
  console.log("日志中间件结束")
})

router.get("/api/getList", function (req, res) {
  console.log("列表数据")
  setTimeout(() => {
    res.status(400).send("list data")
  },2000)
})
// 添加路由
app.use("/", router)



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})