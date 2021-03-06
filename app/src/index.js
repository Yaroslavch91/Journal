const http = require('http');
const express = require('express');
const db = require('./models').db;
const bodyParser = require('body-parser');
const postRouter = require('./api/post'); 

const app = express();
app.use(bodyParser.json());
app.use('/api/post', postRouter); 

db.authenticate()
    .then( () => {
        console.log('Connection to db established');
        const server = http.createServer(app);
        server.listen(3000, () => {
            console.log('Server is listening on port 3000 ')
        })
    })
    .catch( (e) => {
        console.log('Unable to connect to db:', e)
    })