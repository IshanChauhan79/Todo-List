const express= require('express');
const app=express();
const port=8000;
const db=require('./config/mongoose');
const todo=require('./model/todo');

app.set('view engine','ejs');
app.set('views','./views');


app.use(express.urlencoded());
app.use(express.static('./assets'));
app.use('/' , require('./routes'));


app.listen(port,function(err){
    if(err){
        console.log("Error in starting server");
        return;
    }
    console.log('server is up and running');
    return;
});