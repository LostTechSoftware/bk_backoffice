import jwt from 'jsonwebtoken'
import { Response, NextFunction } from 'express'
import fs from 'fs'
import Employee from '@models/employee'
import UnauthorizedError from '@errors/UnauthorizedError'
import RequestInterface from '@interfaces/Request'

class RequireEmployeer {
  public index (req:RequestInterface, res:Response, next:NextFunction):Response | NextFunction {
    try {
      const authHeader = req.headers.authorization

      if (!authHeader) throw new UnauthorizedError('Token not provided')

      const parts = authHeader.split(' ')

      if (parts.length !== 2) throw new UnauthorizedError('Token malformated')

      const [scheme, token] = parts

      if (!/^Bearer$/i.test(scheme)) throw new UnauthorizedError('Token malformated')

      const publicKey = fs.readFileSync('./config/public.key', 'utf8')

      jwt.verify(token, publicKey, { algorithm: 'RS256' }, async (err, decoded) => {
        if (err) throw new UnauthorizedError('Token invalid')

        const employee = await Employee.findById(decoded.id)

        if (!employee) throw new UnauthorizedError('Employee not found')

        req.employee = employee

        return next()
      })
    } catch (error) {
      console.log(error)
      return res.status(400).json(error)
    }
  }
}

export default new RequireEmployeer()
