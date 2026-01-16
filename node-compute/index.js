import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/add', (req, res) => {
const {fnum, snum} = req.body;
const sum = fnum + snum;
res.status(201).json({success:true, sum: sum});
})

app.post('/subtract', (req, res) => {
const {fnum, snum} = req.body;
const diff = fnum - snum;
res.status(201).json({success:true, diff: diff});
})

app.post('/multiply', (req, res) => {
const {fnum, snum} = req.body;
const mul = fnum * snum;
res.status(201).json({success:true, mul: mul});
})

app.post('/divide', (req, res) => {
const {fnum, snum} = req.body;
const div = fnum / snum;
res.status(201).json({success:true, div: div});
})

app.listen(PORT, () => {
console.log(`Server listening on port ${PORT}`);
});