import { Application, Request, Response, NextFunction } from 'express'
import logs from '../logs'

class Logger {
  public async index (app:Application): Promise<void> {
    app.all('*', (req:Request, res:Response, next:NextFunction): void => {
      logs.info(`[${req.method}] ${req.path}:`)
      logs.info(logs.beautify(req.body))

      return next()
    })
  }
}

export default new Logger()
