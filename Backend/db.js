const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017";

//Not Working
// const connectToMongo = () => {
//   mongoose.connect(mongoURI, ()=>{
//     console.log("succesfully");
//   })
// }


// connectToMongo().catch(err => console.log(err));
async function connectToMongo() {
  await mongoose.connect(mongoURI);
  console.log("Connected to Mongo Successfully");
}


module.exports = connectToMongo;