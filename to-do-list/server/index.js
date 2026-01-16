import express from 'express';
import { pool } from './db.js';
const app = express();
const PORT = 3000;

app.use(express.json());


app.get('/get-list', async (req, res) => {
     const list = await pool.query('SELECT * FROM list');
     res.status(200).json({success:true, list: list.rows});
});

app.post('/add-list', async (req, res) => {
const {listTitle} = req.body;

await pool.query('INSERT INTO list (title, status) VALUES ($1, $2)', [listTitle, "pending"]);
res.status(200).json({success:true, message:"List added successfully" });
});


app.post('/edit-list', async (req, res) => {
const {id,listTitle} = req.body;

await pool.query('UPDATE list SET title=$2 WHERE id=$1', [id, listTitle]);
res.status(200).json({success:true, message:"List Updated Successfully" });
});

app.post('/delete-list', async(req, res) => {
const {id} = req.body;

await pool.query('DELETE FROM list WHERE id=$1', [id]);
res.status(200).json({success:true, message:"List Deleted successfully" });
});

app.post('/get-items', async(req, res) => {
const items = await pool.query('SELECT * FROM items');
res.status(200).json({success:true,items: items.rows});
});

app.post('/add-items', async(req, res) => {
const {listId ,desc} = req.body;

await pool.query('INSERT INTO items (list_id, description, status) VALUES ($1, $2, $3)', [listId,desc, "pending"]);
res.status(200).json({success:true, message:"Items added successfully" });
console.log(listId);
});

app.post('/edit-items', async(req, res) => {
const {id, desc} = req.body;
await pool.query('UPDATE items SET description=$2 WHERE id=$1', [id, desc]);
res.status(200).json({success:true, message:"ITEMS Updated Successfully" });

});

app.post('/delete-items', async(req, res) => {
const {id} = req.body;

await pool.query('DELETE FROM items WHERE id=$1', [id]);
res.status(200).json({success:true, message:"ITEMS Deleted successfully" });
});

app.listen(PORT, () => {
console.log(`Server listening on port ${PORT}`);
});