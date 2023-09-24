const connectToMongo = require('./db');
connectToMongo();



// const mongoose = require('mongoose');
// const dotenv=  require('dotenv');
// dotenv.config();



// mongoose
//     .connect(process.env.URL)
//     .then(()=> {console.log('Server Connected')})
//     .catch((e)=>{console.log(e)})