import Router from '@koa/router';
import chanel from './chanel';
// import oauth from './oauth'
// import article from './article'

const router = new Router({
  prefix: '/api',
});

// api list
// router.use(oauth.routes(), oauth.allowedMethods())
// router.use(article.routes(), article.allowedMethods())
router.use(chanel.routes(), chanel.allowedMethods())


export default router;
