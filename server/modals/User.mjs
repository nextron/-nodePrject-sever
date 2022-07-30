import mongoose from 'mongoose';

const userSchema =  new mongoose.Schema({
    emailID:  {type: String, unique: true, required: true} ,
    fName: String,
    lName: String,
    jobTitle: String
})

export default mongoose.model("User", userSchema);