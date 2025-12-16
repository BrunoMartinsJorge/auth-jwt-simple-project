import express from 'express'
import { initDb } from './db'
import { authRoutes } from './routes/authRoutes'
import cors from 'cors'

export const app = express()

app.use(cors())
app.use(express.json())
app.use('/auth', authRoutes)


export async function initApp() {
  await initDb()
}
