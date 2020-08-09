const Todo=require('../model/todo');



module.exports.home=function(req,res){
    Todo.find({},function(err,todos){
        if(err){
            console.log('error in finding data from db');
            return;
        }
        return res.render('home',{
            title:"ToDoApp",
            todo_list:todos
        });
    })

   
};



module.exports.create=function(req,res){
    // todoList.push(req.body);

    Todo.create({
        desc:req.body.desc,
        date:req.body.date,
        ctg:req.body.ctg
    },function(err,newTodo){
        if (err){
            console.log("error in adding to database");
            return;
        }
        console.log('****',newTodo);
        return res.redirect('back');
    });


}

module.exports.delete=function(req,res){
    
    if (req.body.checkbox!=null  ){
        let id=req.body.checkbox;
        if(Array.isArray(id)){

            for(let todoId of id){
                Todo.findByIdAndDelete(todoId,function(err){
                    if(err){
                        console.log("error in deleting from db")
                        return;
                    }
                });
            }
        }
        else{
            Todo.findByIdAndDelete(id,function(err){
                if(err){
                    console.log("error in deleting from db")
                    return; 
                }
            });
        }
    }
    return res.redirect('back');
}     
