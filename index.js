// const koa = require('koa')
// const app = new koa()
// const foo = require('./test')
// const Router = require('koa-router')
// const render = require('koa-art-template')
// const router = new Router()
// const path = require('path')
// // render(app, {
// //   root: path.join(__dirname, './'),
// //   extname: '.html',
// //   debug: true, // process.env.NODE_ENV !== 'production',
// //   bail: true,
// //   minimize: true,
// //   htmlMinifierOptions: {
// //     collapseWhitespace: true,
// //     minifyCSS: true,
// //     minifyJS: true,
// //     removeComments: true,
// //     // 运行时自动合并：rules.map(rule => rule.test)
// //     ignoreCustomFragments: []
// //   }
// // })

// // router.use(async (ctx, next) => {
// //   // let result = await function () {
// //   //   return new Promise(function (resolve, reject) {
// //   //     setTimeout(() => {
// //   //       resolve('hello world')
// //   //     }, 3000)
// //   //   })
// //   // }()
// //   await next()
// // })

// // router.get('/', async ctx => {
// //   let result = await function () {
// //     return new Promise(function (resolve, reject) {
// //       setTimeout(() => {
// //         resolve('hello world')
// //       }, 3000)
// //     })
// //   }()
// //   ctx.render('index.html')
// // })

// // app.use(router.routes(), router.allowedMethods())

const http = require('http')

let server = http.createServer(function (req, res) {
  console.log(req.rawHeaders)
  res.end('hello world')
  // req => request 类
  //  res => response 类
})

server.on('checkContinue', function (req, res) {
  console.log('checkContinue')
})

server.on('checkExpectation', function (req, res) {
  console.log('checkExpectation')
})


server.on('close', () => {
  console.log('close')
})

server.on('request', () => console.log('request'))

server.on('listening', () => {
  console.log('listening')
})

server.listen(3030)
