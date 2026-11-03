const express = require('express');

const app = express();
const data = [];
let id = 1;

app.use(express.json());

//Create

app.post('/items', (req, res) => {

if (typeof req.body.name !== 'string' || req.body.name.trim() === '') {

return res.status(400).json({error: 'Name is required'});

}

const item={id: id++, name: req.body.name.trim()};

data.push(item);

res.status(201).json(item);

});

//Read

app.get('/items', (req, res) => res.json(data));

//Update

app.put('/items/:id', (req,res) => {

const item = data.find(i=> i.id === Number(req.params.id));

if (item) {

if (typeof req.body.name !== 'string' || req.body.name.trim() === '') {

return res.status(400).json({error: 'Name is required'});

}

item.name = req.body.name.trim();

res.json(item);

}else res.status(404).send('Not found');

});
// Delete

app.delete('/items/:id', (req, res) => {

const idx = data.findIndex(i=>i.id === Number(req.params.id));

if (idx != -1){

data.splice(idx, 1);

res.sendStatus(204);

}else res.status(404).send('Not found');

});

if (require.main === module) {
app.listen(3000, () => console.log('Server running at http://localhost:3000'));
}

module.exports = app;