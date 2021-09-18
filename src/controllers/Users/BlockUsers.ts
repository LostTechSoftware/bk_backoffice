import { Response } from 'express'
import logs from '@logs/index'
import User from '@models/user'
import RequestInterface from '@interfaces/Request'
import NotFoundError from '@errors/NotFoundError'

class BlockUsers {
  public async index (req: RequestInterface, res: Response): Promise<Response> {
    try {
      const { body, employee } = req

      const { UserId } = body
      const { id: EmployeeId } = employee

      logs.info(`[BlockUsers] Employee: ${EmployeeId} UserId: ${UserId}`)

      const userToBlock = await User.findById(UserId)

      if (!userToBlock) throw new NotFoundError('User not found')

      await userToBlock.block()

      return res.status(200).json({ error: false, message: `User ${UserId} is blockeds` })
    } catch (err) {
      logs.error(err)
      return res.status(400).json('Error in block this user, contact FoodZilla')
    }
  }
}

export default new BlockUsers()
