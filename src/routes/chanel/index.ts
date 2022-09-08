
import Router from '@koa/router';
import _ from 'lodash'
import { getChanels } from '../../utils/chanel'

const router = new Router({
  prefix: '/chanel'
});

/**
 * 渠道列表
 */
router.get('/list', async ctx => {
  const list = await getChanels();
  const picks =['id','name','request_param']
  const results = _.map(list, item => _.pick(item, picks))
  ctx.body = {
    success: true,
    message: '',
    data: results
  }
});

export default router;