import { Router } from 'express'

import GetNotifications from '../controllers/Notifications/GetNotifications'

const routes = Router()

routes.get('/notifications', GetNotifications.index)

export default routes
