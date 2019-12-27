const Router = require('koa-router')


const router = new Router({
    prefix: '/'
})


router.post('login', async(ctx) => {
    ctx.body = 'login'
})

router.post('register', async(ctx) => {
    let {username, password} = ctx.request.body;
    ctx.body = {
        username, 
        password,
    }
})
router.post('logout', async(ctx) =>{
    ctx.body='logout success'
})

module.exports = router;