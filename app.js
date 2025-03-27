import express from 'express'
import {router }from './routes/route.js'
const app = express()

app.use('/', router)
//COMMENT FOR CONFLICT
app.listen(3000, () => {
  console.log('Server running on port : 3000')
})
