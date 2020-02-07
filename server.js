const express = require('express');
const path = require('path');
const app = express();
const db = require('./db');


app.get('/', (req, res, next) => { res.sendFile(path.join(__dirname, 'index.html')) }
);

app.get('/api/products', (req, res, next) => {
    db.readJSON(path.join(__dirname, 'products.json'))
        .then(data => res.send(data))
}
);

// app.delete('/api/users/:id', (req, res, next) => {
//     users = users.filter(user => user.id !== req.params.id * 1)
//     res.sendStatus(204);
// });

const port = process.env.PORT || 3000;

app.listen(port, () => console.log('listening on port ${port}'));