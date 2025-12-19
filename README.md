# 🔐 Projeto de Autenticação JWT

Projeto simples de **autenticação com JWT (JSON Web Token)** desenvolvido com **Node.js e Express**, utilizando um **banco de dados em arquivo JSON**. Ideal para estudos, protótipos e para demonstrar conceitos fundamentais de autenticação em aplicações web.

---

## 🚀 Funcionalidades

* Autenticação de usuários via **email e senha**
* Geração e validação de **JWT**
* Senhas armazenadas com **hash (bcrypt)**
* Persistência de dados em **arquivo JSON**
* Estrutura simples e didática

---

## 🛠️ Tecnologias Utilizadas

![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge\&logo=JSON%20web%20tokens\&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=node.js\&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge\&logo=express\&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge\&logo=typescript\&logoColor=white)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge\&logo=javascript\&logoColor=F7DF1E)

---

## ⚙️ Como Executar o Projeto

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/BrunoMartinsJorge/auth-jwt-simple-project.git
cd auth-jwt-simple-project
```

### 2️⃣ Instalar as dependências

```bash
npm install
```

### 3️⃣ Executar em modo desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em:

```
http://localhost:3000
```

---

## 🔑 Rotas Principais

### 🔸 Login

```
POST /auth/login
```

**Body:**

```json
{
  "email": "usuario@email.com",
  "senha": "123456"
}
```

**Resposta:**

```json
{
  "token": "jwt_token_aqui"
}
```

---

## 📚 Objetivo do Projeto

Este projeto foi desenvolvido com o objetivo de:

* Praticar autenticação com JWT
* Reforçar conceitos de backend com Express
* Trabalhar com TypeScript em projetos Node.js/Express
* Criar um projeto simples para currículo e estudos

---

## ⚠️ Observações

* Este projeto **não é recomendado para produção**
* O banco em JSON é apenas para fins educacionais
* JWT não é armazenado em cookies (apenas exemplo)

---

## 👤 Autor

Desenvolvido por **Bruno Martins Jorge** 👨‍💻

---

Se você achou este projeto útil, deixe uma ⭐ no repositório!
