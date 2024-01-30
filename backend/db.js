const mongoose =require('mongoose');
mongoose.connect('mongodb+srv://ravindarravi87:MASmhdLjJhdzjZzJ@cluster0.ajofca2.mongodb.net/Todos')
const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
 const todo=mongoose.model('todos',todoSchema);
 module.exports={
    todo
 }