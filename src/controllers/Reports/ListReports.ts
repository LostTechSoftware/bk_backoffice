import { Response } from 'express'
import logs from '@logs/index'
import RequestInterface from '@interfaces/Request'
import Report from '@models/reports'

class ListReports {
  public async index (req: RequestInterface, res: Response): Promise<Response> {
    try {
      const { employee } = req

      logs.info(`Getting all reports for employee ${employee.name}`)

      const reports = await Report.find()

      return res.status(200).json({ error: false, reports })
    } catch (error) {
      logs.error(error)
      return res.status(error.status || 400).json({
        name: error.name,
        message: error.message
      })
    }
  }
}

export default new ListReports()
