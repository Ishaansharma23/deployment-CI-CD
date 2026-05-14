const { WebSocketServer } = require('ws');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/websocketdb')
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));

UserSchema = new mongoose.Schema({
    username : String,
    password : String
})

const User = mongoose.model('User' , UserSchema);

const server = new WebSocketServer({
    port: 3001,
});

server.on("connection", async (socket) => {

    console.log("Client connected");

      const user = await User.create({
        username: Math.random().toString(),
        password: Math.random().toString()
    });

    // socket.send(JSON.stringify({
    //     data: user
    // }));

    console.log(user);

    console.log("Data Saved in MongoDb")
    socket.send("Hello from WebSocket Server!");
});