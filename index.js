import express from 'express';
import { data_makanan } from './modelController.js';
const app = express();

app.get('/makanan', (req, res) =>{
    res.json(
        {"nama":"sate"}
    );
});

app.get('/', (req, res) => {
    res.send("hello world")
});

app.get('/pilih/:makanan', (req,res) => {
   const parameter  = req.params.makanan;
   res.send(data_makanan(parameter));
});

app.listen(2002, () => console.log('server hidup'));