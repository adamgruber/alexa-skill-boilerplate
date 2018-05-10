/* eslint-disable import/no-extraneous-dependencies */
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');
const serve = require('koa-static');
const cors = require('@koa/cors');

const { handler } = require('../index');

const PORT = process.env.PORT || 3000;

const app = new Koa();
const router = new Router();
app.use(bodyParser());
app.use(cors({ origin: '*' }));
app.use(serve('src'));

// Create POST route
router.post('/', async ctx => {
  const { body } = ctx.request;

  // Call the handler
  try {
    const res = await handler(body);
    console.log('\nSpoken Response:');
    console.log(res.response);
    ctx.body = res;
  } catch (err) {
    console.log(err);
    ctx.status = err.status || 500;
    ctx.body = err.message;
  }
});

app.use(router.routes());

app.listen(PORT, () => {
  console.log(`Local Alexa skill is listening on port ${PORT}!`);
});
