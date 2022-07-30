import Task from "../modals/Task.mjs";
import Project from "../modals/Project.mjs";

const getTasks = async(req, res) => {
    try{    
        const project = await Project.findOne({_id: req.body.projectId});
        if(project.tasks.length == 0){
            res.status(200).json({msg:"No Task Found"});
        }else{
            const tasks =  await Task.find({});
            let projectTasks = [];
            let pTask = project.tasks;
            for(let i = 0; i < pTask.length; i++){
                for(let j = 0; j < tasks.length; j++){
                    if(tasks[j]._id == pTask[i]){
                        projectTasks.push(tasks[i]);
                    }
                }
            }
            res.status(200).json(projectTasks);
            //res.status(200).json(project.tasks);
        }      
    }catch(err){
        res.status(500).json({msg:"No Task Found" , err: err});
    }
}

const addTask = async(req,res) => {
    try{
        //console.log(req.body.task);
        const task = await Task.create(req.body.task);
        // addTaskToProject(req.body.projectId, task._id);
        // const filter = { _id: req.body.projectId };
        const project = await Project.findOne({_id: req.body.projectId});
        //console.log(project);
        project.tasks.push(task._id);
        project.save();
        res.status(200).json(project);
    }catch(err){
        res.status(500).json({msg:"Task not Created" , err: err});
    }
}

const updateTask = (req, res) => {
    res.send("update Task Route");
 }

 export { addTask, updateTask, getTasks }