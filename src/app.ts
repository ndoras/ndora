import Koa from 'koa'
import serve from 'koa-static'
import bodyParser from 'koa-bodyparser'
import session from 'koa-session'
import path from 'path'
import logger from 'koa-logger'
import json from 'koa-json'

// import { sessionConfig, sessionKey } from './config/session'
// import auth from './auth'
import router from './routes'

const app = new Koa()

if (process.env.NODE_ENV === 'production') {
  app.use(serve(path.join(__dirname, '../client/build')))
}

// Session
// app.keys = [sessionKey]
// app.use(session(sessionConfig, app))


// Middlewares
app.use(json())
app.use(logger())
app.use(bodyParser()) // Body Parser


// Authentication
// app.use(auth.initialize())
// app.use(auth.session())

// Router
app.use(router.routes()).use(router.allowedMethods());

export default app