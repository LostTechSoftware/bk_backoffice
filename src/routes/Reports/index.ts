import { Router } from 'express'

import RequireEmployeer from '@middlewares/requireEmployeer'
import ListReports from '@controllers/Reports/ListReports'

const routes = Router()

routes.get('/reports', RequireEmployeer.index, ListReports.index)

export default routes
