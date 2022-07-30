import mongoose from 'mongoose';

const taskSchema =  new mongoose.Schema({
    taskName: {type: String, required: true} ,
    taskDescription: String,
    prerequisite: {pFlag: Boolean, pDetails: String},
    taskStartDate: Date,
    taskEndDate: Date,
    taskStatus: String,
    hourlyRate: String,
    asignee: mongoose.SchemaTypes.ObjectId
})

export default mongoose.model("Task", taskSchema);