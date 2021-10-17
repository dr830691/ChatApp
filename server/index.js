const express=require("express");
const socketio=require("socket.io");
const http= require("http");
const PORT= process.env.PORT || 5000;

const router=require('./router');

const app=express();
const server=http.createServer(app);
const io =socketio(server);

io.on('connection',(socket) =>{
    console.log('we have a new connection!!!');
    socket.on('disconnect',()=>{
        console.log("User Had left !!!");
    });




});

app.use(router);

app.listen(PORT, ()=>{
   
    console.log(`server is running on port ${PORT}`);
});