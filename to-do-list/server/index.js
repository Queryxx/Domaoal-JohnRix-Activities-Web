import express from 'express';


const app = express();
const PORT = 3000;

app.use(express.json());

const list = [{
    id: 1,
    title: "Assignments",
    status: "pending",
},
{
    id: 2,
    title: "Daily Chores",
    status: "completed",
}
];
const items = [{
    id: 1,
    listId: 1,
    title: "programming",
    status: "pending",
},
{
    id: 2,
    listId: 1,
    title: "Web",
    status: "pending",
},
{
    id: 3,
    listId: 2,
    title: "washdishes",
    status: "pending",  
}
];

app.get('/', (req, res) => {
res.send('HAHAHh!');
});
app.get('/home', (req, res) => {
res.send('Wake me up inside!');
});
 
app.post('/get-list/:id', (req, res) => {
const id = parseInt(req.params.id);
const filtered = items.filter(item => item.listId == id);
res.status(200).json({success:true, items:filtered});
});


app.post('/add-list', (req, res) => {
const {listTitle} = req.body;
list.push({
    id: list.length + 1,
    title: listTitle,
    status: "pending",
});

res.status(200).json({success:true, list, message:"List added successfully" });
});


app.get('/edit-list', (req, res) => {
res.send('Love,Hope,Joy');
});
app.get('/delete-list', (req, res) => {
res.send('Deleted!');

});
app.get('/get-items', (req, res) => {
const id = parseInt(req.params.id);
const filtered = items.filter(item => item.listId == id);
res.status(200).json({success:true, items:filtered});
});

app.get('/add-items', (req, res) => {
res.send('Love Hope Joy Merry!');
});
app.get('/edit-items', (req, res) => {
res.send('Love Hope Joy Christmas!');
});
app.get('/delete-items', (req, res) => {
res.send('Items Deleted!');
});

app.listen(PORT, () => {
console.log(`Server listening on port ${PORT}`);
});