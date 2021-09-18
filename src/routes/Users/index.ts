import { Router } from 'express'

import BlockUsers from '@controllers/Users/BlockUsers'
import RequireEmployeer from '@middlewares/requireEmployeer'

const routes = Router()

routes.post('/block', RequireEmployeer.index, BlockUsers.index)

export default routes
