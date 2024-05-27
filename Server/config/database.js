const mongoose = require("mongoose");


exports.connect =() =>{
    mongoose.connect('mongodb://127.0.0.1:27017/demoData' , {
        //useNewUrlParser: true,
        //useUnifiedTopology :true,
    })
    .then( ()=> console.log("DB Connected Succesfully"))

    .catch( ()=>{
        console.log("DB Connection Failed");
        console.error(error);
        
        //exit
        process.exit(1);
    })
};
