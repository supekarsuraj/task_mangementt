const express=require("express")
const bodyParser = require("body-parser");
require('dotenv').config();
const mongoose =require('mongoose');
const app=express();
const routes=require("./routes/index")
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
const username = encodeURIComponent(process.env.MONGO_USERNAME);
const password = encodeURIComponent(process.env.MONGO_PASSWORD);
const cluster = process.env.MONGO_CLUSTER;

const uri= 'mongodb://127.0.0.1:27017/todolist';
mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});     

const db = mongoose.connection;

db.on('error', (err) => console.log(err));
db.once('open', () => console.log("Connected to database"));


app.use((req, res, next) => {
    console.log("I am Here :-)")
    next()
})
app.get("/",(req,res)=>{
    res.send("Welcome to my home page");
})
app.use('/api',routes);
app.get("*",(req,res)=>{
    res.status(400).send({message:"page not found"});
})
const port = process.env.PORT;
app.listen(port || 8081,()=>{
    console.log(`Application running on port: ${port}`)
})