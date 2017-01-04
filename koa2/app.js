var Koa = require('koa');
var app = new Koa();

app.use( function(ctx){
    ctx.body="hello"
})

app.listen(3000);
