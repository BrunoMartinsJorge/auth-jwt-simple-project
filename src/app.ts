import express from 'express'
import { initDb } from './db'
import { authRoutes } from './routes/authRoutes'
import cors from 'cors'

export const app = express()

/* Middleware para evitar problemas com o CORS */
app.use(cors())
/* Middleware para transformar o corpo da requisição em JSON */
app.use(express.json())
/* Middleware de rotas de autenticação */
app.use('/auth', authRoutes)


export async function initApp() {
  await initDb()
}
