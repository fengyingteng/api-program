const Koa = require('koa');
const bodyParser = require('koa-bodyparser')
const json = require('koa-json')
const logger = require('koa-logger')
const cors = require('koa2-cors')
const router = require('./routes')

const app = new Koa();

app.use(bodyParser())
app.use(json())
app.use(logger())
app.use(cors())

// router.get('/', async(ctx, next) => {
//     ctx.body = 'niaho'
// })

// router.post('/login', async(ctx) => {
//     let {username} = ctx.request.body;
//     ctx.body = {
//         code: 0,
//         username
//     }
// })




app.use(router.routes());   /*启动路由*/
app.use(router.allowedMethods());


app.listen(3002, () => {
    console.log('server is running')
})