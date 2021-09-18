import { Router } from 'express'

import GetNotifications from '@controllers/Notifications/GetNotifications'
import RequireEmployeer from '@middlewares/requireEmployeer'
import SendNotification from '@controllers/Notifications/SendNotification'

const routes = Router()

routes.get('/notifications', RequireEmployeer.index, GetNotifications.index)

routes.post('/notifications', RequireEmployeer.index, SendNotification.index)

export default routes
