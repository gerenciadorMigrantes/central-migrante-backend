import { Request, Response } from "express";
import exp from 'express';

const Produto = require("../../models").Produto
const router = exp.Router();

router.get('/', async (req: Request, res: Response) => {
    const produto = await Produto.create({ nome: 'Café', quantidade: 10 })

    res.send("Produto Criado: " + produto.id)

})

export default router

