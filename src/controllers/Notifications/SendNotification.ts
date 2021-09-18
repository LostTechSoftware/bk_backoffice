import { Response } from 'express'
import logs from '@logs/index'
import Notification from '@models/notification'
import RequestInterface from '@interfaces/Request'
import ParamError from '@errors/ParamError'

class SendNotification {
  public async index (req: RequestInterface, res: Response): Promise<Response> {
    try {
      const { employee, body } = req

      logs.info(`Employee ${employee.name} sending notification`)

      if (!body.title || !body.body) throw new ParamError('Title and Body is required to send or schedule notification')

      const notification = await Notification.create({ ...body })

      return res.status(200).json(notification)
    } catch (error) {
      logs.error(error)
      return res.status(error.status || 400).json({
        name: error.name,
        message: error.message
      })
    }
  }
}

export default new SendNotification()
