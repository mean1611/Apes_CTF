const router = require('express').Router();
const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

router.get('/user', async(req, res,next) => {
    try {
        const users = await prisma.user.findMany({});
        res.json(users);
        }catch (error) {
        next(error);
    }
});

router.get('/user/:id', async(req, res,next) => {
    res.send({message: 'Hello from the server!'});
});

router.post('/user', async(req, res,next) => {            
    res.send({message: 'Hello from the server!'});
});

router.delete('/user/:id', async(req, res,next) => {
    res.send({message: 'Hello from the server!'});
});

module.exports = router;