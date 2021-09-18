import { Response } from 'express'
import logs from '@logs/index'
import Notification from '@models/notification'
import RequestInterface from '@interfaces/Request'

class GetNotification {
  public async index (req: RequestInterface, res: Response): Promise<Response> {
    try {
      const { employee } = req

      logs.info(`Getting all notifications for employee ${employee.name}`)

      const notifications = await Notification.find()

      return res.status(200).json(notifications)
    } catch (error) {
      logs.error(error)
      return res.status(error.status || 400).json({
        name: error.name,
        message: error.message
      })
    }
  }
}

export default new GetNotification()
