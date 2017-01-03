/**
 * Created by MWei2 on 12/22/2016.
 */
var Koa = require("koa")
const convert = require("koa-convert");
const app = new Koa();
const _use = app.use;
app.use = x=>_use.call(app,convert(x));
function modernMiddleware(ctx,next){
    return next().then(()=>{

        })
}

