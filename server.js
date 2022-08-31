const express = require('express')
const mongoose = require('mongoose')
const app = express();
const cors = require('cors')

app.use(cors())
app.use(express.json());

app.get('/', (req,res) =>{
    
        res.send('Hello World')

})



app.listen(3000, ()=>{
    console.log('Listening on port 3000');
})
mongoose.connect('mongodb://localhost:27017/sample', ()=>{
    console.log('mongodb connect')
})