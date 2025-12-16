import { Request, Response, Router } from 'express'
import bcrypt from 'bcryptjs'
import { db } from '../db'
import { RULE_ENUM } from '../token.enum';
import Jwt from 'jsonwebtoken';

export const authRoutes = Router()


authRoutes.post('/login', async (req: Request, res: Response) => {
    try {
        const { email, senha } = req.body;

        if (!email?.trim() || !senha?.trim()) {
            return res.status(400).json({ error: 'Preencha todos os campos' });
        }

        const user = db.data.users.find(user => user.email === email);
        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        const ok = await bcrypt.compare(senha, user.password);
        if (!ok) {
            return res.status(400).json({
                error: 'Senha inválida'
            });
        }

        const token = Jwt.sign({ id: user.id, email: user.email, rule: user.rule }, 'secret', { expiresIn: '1d' });

        return res.json({ token });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Algo deu errado no login' });
    }
});

authRoutes.post('/register', async (req: Request, res: Response) => {
    try {
        const { email, senha } = req.body;
        if (email.trim() == '' || senha.trim() == '') return res.status(400).json({ error: 'Preencha todos os campos' });
        const user = db.data.users.find(user => user.email === email);
        if (user) return res.status(400).json({ error: 'Usuário já cadastrado' });
        const password = await bcrypt.hash(senha, 10);
        const id = db.data.users.length + 1;
        db.data.users.push({ id, email, password, rule: RULE_ENUM.USER });
        await db.write();
        res.send({ id, email, rule: 'RULE_REST_USER' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Algo deu errado no login' });
    }
})