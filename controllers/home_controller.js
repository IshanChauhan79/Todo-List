
var todoList=[
    {
    desc:"Appointment",
    ctg:"WORK",
    date:"2020-8-10"
    },
    {
        desc:"Appointment",
        ctg:"WORK",
        date:"2020-8-10"
    },
]

module.exports.home=function(req,res){
    return res.render('home',{
        title:"ToDoApp",
        todo_list:todoList
    });
};

module.exports.create=function(req,res){
    todoList.push(req.body);
    return res.redirect('back');
}

module.exports.delete=function(req,res){

    var todoIndex =null;
    if (req.body.checkbox!=null){
        for(let todoIndex of req.body.checkbox){
            todoList.splice(todoIndex,1);
        }
    }
    return res.redirect('back');
}
