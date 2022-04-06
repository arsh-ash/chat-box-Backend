// console.log("booom");
const io = require("socket.io")(8900, {
    cors: {
        origin: "http://localhost:3000"
    }
})
var connectedUsers = [];
const usersFilter = async (userId, socketId) => {
    let arr = []
    console.log("conneuser phle", connectedUsers);
    if (connectedUsers.length == 0) {
        connectedUsers.push({ userId, socketId })
    } else {

        arr = connectedUsers.filter((user) => user.userId != userId)
        console.log("arr", arr);
        connectedUsers = [...arr, { userId, socketId }]
        console.log("connec badamein", connectedUsers);
    }










}

const removeDisconenctUser= async (socketId)=>{
    console.log("beforre filter",connectedUsers);
    connectedUsers=connectedUsers.filter(user=>user.socketId!==socketId)
    console.log("AfterDisconnection",connectedUsers);

}
const getReciever=async(recieverId)=>{
    console.log("rece",recieverId)
    console.log("boooom",connectedUsers);
      let person= await connectedUsers.find((user)=>user.userId==recieverId);
      return person;

}

io.on("connection", (socket) => {
    console.log("a user connected");
    //this message will go to all the users because we are usimg socket.on
    io.emit("welcome", "hello this is welcome Message")
    //if we want to send message to particular user than we will use
    //io.to(socketId).emit(xyz)


    //take userid and socketid of all users
    socket.on("sending_users", (user) => {
        console.log("useradded", user);
        console.log("conn-phle", connectedUsers)

        usersFilter(user._id, socket.id)
        io.emit("getUsers", connectedUsers);
        console.log("conn", connectedUsers)



    })

    socket.on("sendMessage",({senderId,recieverId,Text})=>{
        console.log("MEESAGE AYA FRONTENDV")
        console.log("rec",recieverId);

       let userToSend=getReciever(recieverId);
       console.log("userTOSend",userToSend);


    })

    socket.on("disconnect", () => {
        console.log("a user disconnected");
        removeDisconenctUser(socket.id);
        io.emit("getUsers", connectedUsers);




    })


})

// console.log("Connected User=",connectedUsers);