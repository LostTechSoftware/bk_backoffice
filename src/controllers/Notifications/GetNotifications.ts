import { Request, Response } from 'express'
import Notification from '../../models/notification'

class GetNotification {
  public async index (req: Request, res: Response): Promise<Response> {
    const notifications = await Notification.find()

    return res.status(200).json(notifications)
  }
}

export default new GetNotification()
