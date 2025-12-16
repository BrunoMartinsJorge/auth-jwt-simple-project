import { app, initApp } from './app'

async function start() {
  await initApp()
  app.listen(3000, () => console.log('Servidor rodando'))
}

start()
