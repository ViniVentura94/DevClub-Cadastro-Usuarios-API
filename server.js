/*
Modo Antido de usar o express

    const express = require('express')
*/

/*
req - requisição
res - resposta
servidor - localhost:3000/
*/

/*
    Usuario e senha servidor MongoDB

    viniventura94
    TNFilhos1519

*/
import cors from 'cors'

import express from 'express'

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


const app = express()
app.use(express.json())
app.use(cors())

app.get('/usuarios', async (req, res) => {

    const users = await prisma.user.findMany()

    res.status(200).json(users)
})

app.post('/usuarios', async (req, res) => {
    try {
        const user = await prisma.user.create({
            data: {
                email: req.body.email,
                name: req.body.name,
                age: req.body.age,
                gender: req.body.gender,
                phone: req.body.phone
            }
        });

        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({
            message: "Erro ao criar usuário!"
        });
    }
});



app.put('/usuarios/:id', async (req, res) => {

    const user = await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(200).json(user)
})

app.delete('/usuarios/:id', async (req, res) => {

    const user = await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({
        message: "Usuario deletado com sucesso!",
        user: user
    });
})

app.listen(3000)

