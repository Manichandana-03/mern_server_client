const express = require("express");   //imported the express library
const app = express();  //instance of express



const dotenv = require('dotenv');
dotenv.config();


//cors is important to handle frontend url , otherwise it won't allow (authentication issues)
const cors = require("cors");
app.use(cors());

const mongoose  = require("mongoose");

app.use(express.json());

const userRoute = require('./routes/userRouter');

mongoose.connect(process.env.URI).then(()=>{
    console.log("connected successfully");
    app.listen(process.env.PORT || 8000, (err)=>{
        if (err){
            console.log(err);
        }
        else{
            console.log("running successfully at",process.env.PORT);
        }
    });
})
.catch((error)=>{
    console.log("error",error);

})

app.use(userRoute);

//listening on the port 4000
