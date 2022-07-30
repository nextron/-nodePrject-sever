import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    projectName: {type: String, unique: true, required: true} ,
    projectStatus: String,
    tasks: [String]
})

export default mongoose.model("Project", projectSchema);