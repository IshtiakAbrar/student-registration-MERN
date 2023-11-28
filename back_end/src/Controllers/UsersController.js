
const UserModel=require('../Models/UserModel')




exports.registration=async (req,res)=>{
    let reqBody= req.body;
    try {
        let result = await UserModel.create(reqBody);
        res.status(200).json({status: "Success", data: result});
    }
    catch(e){
        res.status(200).json({status: "Fail", data: e.toString()});
    }

}

exports.updateUser=async (req,res)=>{
    let id=req.params['id'];
    let reqBody= req.body;
    try {
        let result = await UserModel.updateOne({_id:id},reqBody);
        res.status(200).json({status: "Success", data: result});
    }
    catch(e){
        res.status(200).json({status: "Fail", data: e.toString()});
    }

}

exports.deleteUser=async (req,res)=>{
    let id=req.params['id'];
    try {
        let result = await UserModel.deleteOne({_id:id});
        res.status(200).json({status: "Success", data: result});
    }
    catch(e){
        res.status(200).json({status: "Fail", data: e.toString()});
    }

}

exports.readUser=async (req,res)=>{
    try {
        let result = await UserModel.find();
        res.status(200).json({status: "Success", data: result});
    }
    catch(e){
        res.status(200).json({status: "Fail", data: e.toString()});
    }

}

exports.readUserById=async (req,res)=>{
    try {
        const id=req.params['id'];
        let result = await UserModel.find({_id:id});
        res.status(200).json({status: "Success", data: result});
    }
    catch(e){
        res.status(200).json({status: "Fail", data: e.toString()});
    }

}


