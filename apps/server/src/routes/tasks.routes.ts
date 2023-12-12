import express from 'express'
import db from '../db'
const router = express.Router()

router.get('/tasks', async (_req, res) => {
  try {
    const {rows} = await db.query('SELECT * FROM tasks')
    res.json(rows)
  } catch (error) {
    console.error(error)
  }
})


export default router