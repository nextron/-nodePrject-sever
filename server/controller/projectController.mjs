import Project from "../modals/Project.mjs";

const getAllProjects = async(req, res) => {
    try{
        const projects = await Project.find({});
        if(projects){
            res.status(200).json(projects);
        }else{
            res.status(500).json({msg:"Project not Found"});
        }
    }catch(err){
        res.status(500).json({msg:"Project not Found" , err: err});
    }
}

const addProject = async(req,res) => {
    try{
        const project = await Project.create(req.body);
        res.status(200).json(project);
    }catch(err){
        res.status(500).json({msg:"Project not Created" , err: err});
    }
}


 export { addProject, getAllProjects }