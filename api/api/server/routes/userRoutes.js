import {Router} from 'express';
import userController from '../controllers/userController';

const router=Router();

router.get('/get-user-info/:id',userController.getAUser)
// router.get('/get-buildings-json/:zoneid',buildingController.getBuildingJson)
router.post('/createuser',userController.createUser)
// router.delete('/deletebuilding/:id',buildingController.deleteBuilding)


export default router;