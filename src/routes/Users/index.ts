import { Router } from 'express'

import BlockUsers from '@controllers/Users/BlockUsers'
import RequireEmployeer from '@middlewares/requireEmployeer'
import ListUsers from '@controllers/Users/ListUsers'

const routes = Router()

routes.post('/block', RequireEmployeer.index, BlockUsers.index)

routes.get('/users/:limit?/:offset?', RequireEmployeer.index, ListUsers.index)

routes.get('/user/:id', RequireEmployeer.index, ListUsers.index)

export default routes
