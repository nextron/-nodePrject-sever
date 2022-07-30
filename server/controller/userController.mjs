import User from "../modals/User.mjs";

const register = async(req,res) => {
    // emailID: "manisingh893@gmail.com",
    // fName: "Manpreet",
    // lName: "Singh",
    // jobTitle: "DevOps"
    try{
        const user = await User.create(req.body);
        res.status(200).json(user);
    }catch(err){
        res.status(500).json({msg:"User not Created" , err: err});
    }
}

const login = async(req, res) => {
    //console.log(req.body);
    try{
        const user = await User.findOne({emailID: req.body.emailID});
        if(user){
            res.status(200).json(user);
        }else{
            res.status(500).json({msg:"User not Found"});
        }
    }catch{
        res.status(500).json({msg:"User not Found" , err: err});
    }
 }

 export { register, login }