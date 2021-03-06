const express= require('express');
const port=8000;
const db=require('./config/mongoose');
const Todo=require('./model/todo');


const app=express();

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