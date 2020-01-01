import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const applicationSchema = new Schema({
    userId :{type: Schema.Types.ObjectId, ref: 'Auth' },  
    position :{type:String, required:true},
    department :{type:String, required:true},
    dateOfEmployment :{type:String, required:true},
    employmentNo :{type:String, required:true},   
    phone :{type:String, required:true},
    games :{type:Array, required:true},
    imageUrl :{type:String, required:true},
    fileUrl :{type:String, required:true}    
    }, {timestamps:true}
);

const application= mongoose.model('Application', applicationSchema);

export default application;