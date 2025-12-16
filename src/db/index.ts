import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'
import { RULE_ENUM } from '../token.enum'

/* Define o modelo de dados do usuário */
export type User = {
  id: number
  email: string
  password: string
  rule: RULE_ENUM
}

/* Define a estrutura do banco de dados em arquivo JSON */
type Data = {
  users: User[]
}

/* Define o adapter do banco de dados */
const adapter = new JSONFile<Data>('db.json')

/* Define o banco de dados */
export const db = new Low(adapter, { users: [] })

/* Inicializa o banco de dados */
export async function initDb() {
  await db.read()
  db.data ||= { users: [] }
}
