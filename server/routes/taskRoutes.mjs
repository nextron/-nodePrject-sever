import {Router} from 'express';
import { addTask, updateTask, getTasks } from '../controller/taskController.mjs';

const router = Router();

router.route('/getTasks').post(getTasks);
router.route('/addTask').post(addTask);
router.route('/updateTask').post(updateTask);

export default router;