import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import httpContext from 'express-http-context'

import routes from './routes'
import logsMiddlewares from './middlewares/logs'
import logs from './logs'

class App {
  public express: express.Application

  public constructor () {
    this.express = express()

    this.middlewares()
    this.database()
    this.routes()
  }

  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(cors())
    this.express.use(httpContext.middleware)
    logsMiddlewares.index(this.express)
  }

  private database (): void {
    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    })

    logs.info('Database connected')
  }

  private routes (): void {
    this.express.use(routes)
  }
}

export default new App().express
