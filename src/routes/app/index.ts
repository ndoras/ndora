import Router from '@koa/router';
import { DefaultState, Context } from 'koa';


const router = new Router<DefaultState, Context>({
  prefix: '/app',
})

interface Page {
  page: number
  size: number
}

router.get('/list', (ctx) => {
  // const data: Page = ctx.request.query
  ctx.body = {
    success: true,
    message: 'list',
    data: {
      total: 11,
      list: []
    }
  }
});