const  mongoose=require('mongoose');
const UserSchema=mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    gender:{type:String,required:true},
    dateOfBirth:{type:Date,required:true},
    nationality:{type:String,required:true},
    address:{type:String,required:true},
    email:{type:String,required:true,unique:true,immutable:true},
    phone:{type:String,required:true},
    courses:{type:String,required:true},
    admissionDate:{type:String,required:true},
},{timestamps: true,versionKey:false});
const UserModel=mongoose.model('user',UserSchema,'user');
module.exports=UserModel;