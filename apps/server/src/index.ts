import express from 'express'

const app = express()
app.use(express.json())

const PORT = 3000

app.get('/api', (_req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})