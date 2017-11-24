const Koa = require('koa');
const router = require('koa-router')();
const json = require('koa-json');
const logger =require('koa-logger')
const essay = require('./server/routes/test')

const app = new Koa();
app.use(require('koa-bodyparser')());
app.use(json());
app.use(logger());

app.use(async (ctx,next)=>{
    let start = new Date;
    await next();
    let ms = new Date - start;
    console.log('%s %s - %s', this.method, this.url, ms);
});

app.on('error',(err,ctx) => {
    console.log('server error', err);
});
router.use('/api', essay.routes());
app.use(router.routes());

app.listen(8889,() => {
    console.log('koa is listening on 8889 port');
})

module.exports = app;
