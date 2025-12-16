import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'
import { RULE_ENUM } from '../token.enum'

export type User = {
  id: number
  email: string
  password: string
  rule: RULE_ENUM
}

type Data = {
  users: User[]
}

const adapter = new JSONFile<Data>('db.json')
export const db = new Low(adapter, { users: [] })

export async function initDb() {
  await db.read()
  db.data ||= { users: [] }
}
