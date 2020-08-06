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
        type:Date,
        required:true,
    }
});

const todo=mongoose.model('todo',todoSchema);
module.exports=todo;