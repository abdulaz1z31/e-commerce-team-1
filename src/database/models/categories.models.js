import mongoose from "mongoose";

const categoriesSchema = new mongoose.Schema({
   name:{
    type:String
   } ,
   description:{
    type:String
   },
   tag:{
    type:String
   }
},
{ timestamps: true },)

export const Categories =  mongoose.model('Categories', categoriesSchema)