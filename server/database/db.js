const mongoose = require('mongoose');
const mongodb=async()=>{
    mongoose.set("strictQuery", false)
    datab="mongodb://alimalik:ali@ac-jrlq8ft-shard-00-00.nfpza2z.mongodb.net:27017,ac-jrlq8ft-shard-00-01.nfpza2z.mongodb.net:27017,ac-jrlq8ft-shard-00-02.nfpza2z.mongodb.net:27017/food?ssl=true&replicaSet=atlas-nzo5s8-shard-0&authSource=admin&retryWrites=true&w=majority"
    await mongoose.connect(datab,{useNewUrlParser:true}, async (err,result) => {
        console.log("connected");
        const data1 = await mongoose.connection.db.collection("foods")
        const data2 = await mongoose.connection.db.collection("users")
        const category = await mongoose.connection.db.collection("category")


        data1.find({}).toArray(async (err,res)=>{
           
           category.find({}).toArray((err,cat)=>{
            global.data=res
            global.category=cat
            
           })

         console.log(global.data);
        });
        data2.find({}).toArray((err,res1)=>{
            // console.log(res1);
         });
         console.log(global.name);
       
    })}
// mongo()
module.exports=mongodb
 