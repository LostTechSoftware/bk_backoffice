import { Request, Response } from 'express'
import User from '../models/user'

class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    const user = await User.findOne()

    user.emailFormated()

    return res.json(user)
  }
}

export default new UserController()
