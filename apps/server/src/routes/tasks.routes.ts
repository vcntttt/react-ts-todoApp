import express from 'express'
import db from '../db'
const router = express.Router()

router.get('/tasks', async (_req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM tasks')
    res.json(rows)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Something went wrong (get tasks)' })
  }
})

router.post('/tasks/add', async (req, res) => {
  try {
    const { task } = req.body
    const { id, name, done } = task
    const { rows } = await db.query('INSERT INTO tasks (id, name, done) VALUES ($1, $2, $3) RETURNING *', [id, name, done])
    res.json(rows)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Something went wrong(add task)' })
  }
})

router.put('/tasks/toggle', async (req, res) => {
  try {
    const { task } = req.body
    const { id } = task
    const { rows } = await db.query('UPDATE tasks SET done = NOT done WHERE id = $1 RETURNING *', [id])
    res.json(rows)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Something went wrong(toggle task)' })
  }
})

router.delete('/tasks/delete/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { rows } = await db.query('DELETE FROM tasks WHERE id = $1 RETURNING *', [id])
    res.json(rows)
  } catch (error) {
    console.error(error)
  }
})
export default router
