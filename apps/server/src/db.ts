import pg from 'pg'

const pool = new pg.Pool ({
  user: process.env.DB_USER,
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 5432
})

export default pool