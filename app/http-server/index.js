const express = require('express');



const app = express();

app.use(express.json());

app.get('/' , (req , res) => {
    res.send("hi there bhai ishaan this side ");
})


app.post('/signup' , (req , res) => {
    const {username , password} = req.body;

    console.log(username);
    console.log(password);
})


app.listen(3002 , () =>{
    console.log("app is running on localhost 3002")
});