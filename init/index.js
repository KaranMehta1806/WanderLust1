const mongoose = require("mongoose");
const Listing = require("../models/listing.js"); 
const initData = require("./data.js")

MONGO_URL="mongodb://127.0.0.1:27017/wanderlust";
main().then((res)=>{
   console.log("connected to db");
})
.catch((err)=>{
   console.log(err);
});
async function main(){
   await mongoose.connect(MONGO_URL);
}


const initDb = async ()=>{
   await Listing.deleteMany({});
   initData.data=initData.data.map((obj)=>({...obj,owner:"667b12e8edea785c0f5a3a73"}));
   await Listing.insertMany(initData.data);
   console.log("data inserted");

}

initDb();