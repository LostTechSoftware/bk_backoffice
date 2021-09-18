import { Response } from 'express'
import logs from '@logs/index'
import RequestInterface from '@interfaces/Request'
import User from '@models/user'

class ListUsers {
  public async index (req: RequestInterface, res: Response): Promise<Response> {
    try {
      const { employee, params } = req
      const { id } = params

      logs.info(`Getting all users for employee ${employee.name}`)

      const users = id ? await User.findById(id) : await User.find()

      return res.status(200).json({ error: false, users })
    } catch (error) {
      logs.error(error)
      return res.status(error.status || 400).json({
        name: error.name,
        message: error.message
      })
    }
  }
}

export default new ListUsers()
