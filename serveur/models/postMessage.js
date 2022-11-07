import mongoose from "mongoose";
const postShema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags:[String], 
    slectedFile:String,
    likeCount:{
        type: Number,
        default :0
    },
    createdAt:{
        type: Date, 
        default : new Date()
    },

}); 
const postMessage = mongoose.model('postMessage', postShema); 
export default postMessage; 

