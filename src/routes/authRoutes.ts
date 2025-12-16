import { Request, Response, Router } from 'express'
import bcrypt from 'bcryptjs'
import { db } from '../db'
import { RULE_ENUM } from '../token.enum';
import Jwt from 'jsonwebtoken';

/* Rotas de autenticação */
export const authRoutes = Router()

/* Rota de login */
authRoutes.post('/login', async (req: Request, res: Response) => {
    try {
        /* Pega o email e a senha do 'body' da requisição */
        const { email, senha } = req.body;

        /* Verificação básica dos campos */
        if (!email?.trim() || !senha?.trim()) {
            return res.status(400).json({ error: 'Preencha todos os campos' });
        }

        /* Busca o usuário no banco de dados */
        const user = db.data.users.find(user => user.email === email);

        /* Caso não exista um com esse email, um erro é retornado na requisição */
        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        /* Verifica se a senha enviada é igual a encriptada no banco */
        const ok = await bcrypt.compare(senha, user.password);
        if (!ok) {
            return res.status(400).json({
                error: 'Senha inválida'
            });
        }

        /* Gera a token JWT com os dados do usuário, além da data de expiração */
        const token = Jwt.sign({ id: user.id, email: user.email, rule: user.rule }, 'secret', { expiresIn: '1d' });

        /* Retorna a token para o usuário */
        return res.json({ token });

        /* Caso ocorra algum erro, ele é retornado na requisição */
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Algo deu errado no login' });
    }
});

/* Rota de cadastro */
authRoutes.post('/register', async (req: Request, res: Response) => {
    try {
        /* Pega o email e a senha do 'body' da requisição */
        const { email, senha } = req.body;

        /* Verificação básica dos campos */
        if (email.trim() == '' || senha.trim() == '') return res.status(400).json({ error: 'Preencha todos os campos' });

        /* Busca o usuário no banco de dados */
        const user = db.data.users.find(user => user.email === email);

        /* Caso exista, ele retorna um erro, já que não podem haver mais de um usuários com o mesmo email */
        if (user) return res.status(400).json({ error: 'Usuário já cadastrado' });

        /* Encripta a senha */
        const password = await bcrypt.hash(senha, 10);

        /* Insere o usuário no banco de dados */
        const id = db.data.users.length + 1;
        db.data.users.push({ id, email, password, rule: RULE_ENUM.USER });
        await db.write();

        /* Retorna o usuário cadastrado */
        res.send({ id, email, rule: 'RULE_REST_USER' });

        /* Caso ocorra algum erro, ele é retornado na requisição */
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Algo deu errado no login' });
    }
})