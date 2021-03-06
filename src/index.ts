import app from './app'
import logs from '@logs/index'

const PORT = process.env.PORT || 3003

app.listen(PORT)
logs.info(`Running in port ${PORT}`)
