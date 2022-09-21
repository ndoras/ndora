import Koa from 'koa';
import serve from 'koa-static';
import bodyParser from 'koa-bodyparser';
// import session from 'koa-session'
import path from 'path';
// import logger from 'koa-logger';
import json from 'koa-json';
import { koaSwagger } from '@ykmmky/koa2-swagger-ui';

// import { sessionConfig, sessionKey } from './config/session'
// import auth from './auth'
import router from './routes';
import Cors from 'koa2-cors';
import KoaJwt from 'koa-jwt'

import {loggerMiddleware} from "./middlewares/logger";
import {corsHandler} from "./middlewares/cors";
import {errorHandler, responseHandler} from "./middlewares/response";
import InitSwagger from './middlewares/swagger/middlewares/init-swagger';
import {JwtSecret, JwtWhileList} from "./config/constant";
import Swagger from './routes/swagger'

const app = new Koa();

if (process.env.NODE_ENV === 'production') {
  app.use(serve(path.join(__dirname, '/public')));
}

// Session
// app.keys = [sessionKey]
// app.use(session(sessionConfig, app))

// Middlewares
app.use(loggerMiddleware) // 日志
app.use(errorHandler) // 错误处理
app.use(Cors(corsHandler)); // 跨域
app.use(json());
// app.use(logger());
app.use(bodyParser()); // Body Parser
app.use(InitSwagger);
// Authentication
// app.use(auth.initialize())
// app.use(auth.session())

// 注意：放在路由前面
app.use(
    KoaJwt({ secret: JwtSecret }).unless({
        // 配置白名单
        path: JwtWhileList,
    })
)

// Router
app.use(router.routes()).use(router.allowedMethods());
app.use(Swagger.routes()).use(Swagger.allowedMethods())

app.use(responseHandler) // 成功返回
export default app;
