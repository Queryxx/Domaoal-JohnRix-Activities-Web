import express from 'express';


const app = express();
const PORT = 3000;

app.use(express.json());

const user = [{
    username: "Rix",
    password: "Rix",
    confirm: "Rix",
},
];
app.get('/', (req, res) => {
res.send('HAHAHh!');
});

app.post('/login', (req,res) => {
    const{usename,password} = req.body;
    res.status(201).json({success:true, message:"Okay"});
})
app.post('/register', (req, res) => {
const {username, password,confirm} = req.body;

user.push({
    username: username,
    password: password,
    confirm: confirm
});
if(confirm != password){
    return res.status(400).json({success:false, message:"pass and confirm doesnot match"});
}
else if(username === user.username){
  return res.status(400).json({success:false, message:"Username already Exist"});
}
else{
res.status(201).json({success:true, user, message:"User registered successfully"});
}
});



app.listen(PORT, () => {
console.log(`Server listening on port ${PORT}`);
});