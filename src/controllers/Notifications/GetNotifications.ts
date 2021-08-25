import { Request, Response } from 'express'
import logs from '../../logs'
import Notification from '../../models/notification'

class GetNotification {
  public async index (req: Request, res: Response): Promise<Response> {
    try {
      const notifications = await Notification.find()

      return res.status(200).json(notifications)
    } catch (err) {
      logs.error(err)
      return res.status(400).json('Erro in get notification')
    }
  }
}

export default new GetNotification()
