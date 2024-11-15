const express = require('express');
const { PrismaClient } = require('@prisma/client');
const session = require('express-session');
const router = require('./routes/routes');
const cors = require('cors');

const prisma = new PrismaClient()

const app = express();

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000']
}))
app.set('trust proxy', 1);
app.use(session({
    secret: 'nyankeyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

app.use('/api/v1', router);

app.listen(3030, () => console.log('API is running on 3030'));
