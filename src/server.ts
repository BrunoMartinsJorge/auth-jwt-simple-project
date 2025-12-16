import { app, initApp } from './app'

/* Iniciando o servidor */
async function start() {
  await initApp()
  app.listen(3000, () => console.log('Servidor rodando'))
}

start()
