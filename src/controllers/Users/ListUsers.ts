import { Response } from 'express'
import logs from '@logs/index'
import RequestInterface from '@interfaces/Request'
import User from '@models/user'
import Reports from '@models/reports'
import Orders from '@models/orders'

class ListUsers {
  public async index (req: RequestInterface, res: Response): Promise<Response> {
    try {
      const { employee, params } = req
      const { id, limit, offset } = params

      logs.info(`Getting all users for employee ${employee.name}`)

      const users = id ? await User.findById(id) : await User.find().skip(parseFloat(offset) || 0).limit(parseFloat(limit) || 10)

      const details = []

      if (id) {
        const reducer = (previousValue, currentValue) => previousValue + currentValue

        const reports = await Reports.find({ UserId: id })
        const orders = await Orders.find({ user: id })

        const prices = orders.map(({ realPrice }) => realPrice)
        const ltv = prices.length ? prices.reduce(reducer) : 0

        details.push({ reports })
        details.push({ orders })
        details.push({ ltv })
      }

      return res.status(200).json({ error: false, users, details })
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
