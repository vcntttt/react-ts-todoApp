import express from 'express'
import db from './db'
import taskRoutes from './routes/tasks.routes'

const app = express()
app.use(express.json())

const PORT = process.env.RUN_PORT ? parseInt(process.env.RUN_PORT, 10) : 3000

app.use('/api',taskRoutes)

app.listen(PORT, async () => {
  try{
    const {rows} = await db.query('SELECT 1+1 as result')
    console.log(`Example app listening on port ${PORT}`)
    if (rows.length > 0) {
      console.log('DB connected')
    }
  }
  catch(err){
    console.log(err)
    console.log(`Example app listening on port ${PORT}`)
  }})