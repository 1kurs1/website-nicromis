const express = require('express')
const next = require('next')
const fs = require('fs');
const http = require('http');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

const hostname = 'nicromis.atwebpages.com';
const httpport = 80;

const server = express();

const httpServer = http.createServer(server);

app.prepare().ther(() => {
    server.get('/api/show', (req, res) => {
        return res.end("rendered on the server");
    })
    
    server.all('*', (req, res) => {
        return handle(req, res);
    })

    httpServer.listen(httpport, hostname);
})