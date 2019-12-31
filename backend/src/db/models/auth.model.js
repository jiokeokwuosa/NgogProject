import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const authSchema = new Schema({
    email :{type:String, required:true, unique:true},
    password :{type:String, required:true},
    firstName :{type:String, required:true}, 
    lastName :{type:String, required:true},   
    isAdmin :{type:Boolean, default:false}, 
    }, {timestamps:true}
);

const auth= mongoose.model('Auth', authSchema);

export default auth;