import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
// myRouter
import clipboard from './api/clipboard.js'

const app = new Koa()

app.use(bodyParser())

app.use(clipboard.routes())

app.listen(3000, () => {
  console.log('http://localhost:3000')
})
