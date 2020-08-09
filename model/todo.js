const mongoose=require('mongoose');

const todoSchema=new mongoose.Schema({
    desc:{
        type:String,
        required:true
    },
    ctg:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true,
    }
});

const Todo=mongoose.model('todo',todoSchema);
module.exports=Todo;   