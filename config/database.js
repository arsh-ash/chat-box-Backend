const mongoose = require("mongoose");

 module.exports.connectDB = async () => {
  const conn = await mongoose.connect('mongodb+srv://chatbox:arsh1234@cluster0.egszs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    //its gonna return promise thats why we are using async await
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: true,
  });
  //
  console.log(`MongoDB connected`);
};

// module.exports=connectDB;