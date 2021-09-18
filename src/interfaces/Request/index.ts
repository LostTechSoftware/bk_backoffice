import { Request } from 'express'

interface employee {
    id?: string
    _id?: string
    name: string
}

interface user {
    id: string
    _id: string
}

interface RequestInterface extends Request {
   user: user,
   employee: employee,
}

export default RequestInterface
