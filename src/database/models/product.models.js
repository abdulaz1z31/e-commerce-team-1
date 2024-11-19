import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    product_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Categories",
        required:true
    },
    title:{
    type:String
   },
   picture:{
    type:String
   },
   summary:{
    type:String
   },
   description:{
    type:String
   },
   price:{
    type:Number
   },
   discount_type:{
    type:String,
    enum:["aksiya qulpiniso", "chegirma"]
   },
   discount_value:{
    type:Number
   },
   tags:{
    type:Array
   }
},
{ timestamps: true },)

export default mongoose.model('Product', productSchema)