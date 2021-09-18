import { Response } from 'express'
import logs from '@logs/index'
import User from '@models/user'
import BlockComments from '@models/blockComments'
import RequestInterface from '@interfaces/Request'
import NotFoundError from '@errors/NotFoundError'

class BlockUsers {
  public async index (req: RequestInterface, res: Response): Promise<Response> {
    try {
      const { body, employee } = req

      const { UserId, comment } = body
      const { id: EmployeeId } = employee

      if (!UserId || !comment) throw new NotFoundError('Comment and UserId is required')

      logs.info(`[BlockUsers] Employee: ${EmployeeId} UserId: ${UserId}`)

      const userToBlock = await User.findById(UserId)

      if (!userToBlock) throw new NotFoundError('User not found')

      await userToBlock.block()
      await BlockComments.create({ data: comment, EmployeeId, UserId })

      return res.status(200).json({ error: false, message: `User ${UserId} is blocked with successful` })
    } catch (error) {
      logs.error(error)
      return res.status(error.status).json({
        name: error.name,
        message: error.message
      })
    }
  }
}

export default new BlockUsers()
