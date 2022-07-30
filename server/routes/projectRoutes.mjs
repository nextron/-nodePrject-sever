import {Router} from 'express';
import { addProject, getAllProjects } from '../controller/projectController.mjs';

const router = Router();

router.route('/').get(getAllProjects);
router.route('/addProject').post(addProject);

export default router;