import {Router} from 'express';
import incidentController from '../controllers/incidentController';

const router=Router();

router.get('/get-incident-info/:id',incidentController.getAIncident)
// router.get('/get-buildings-json/:zoneid',buildingController.getBuildingJson)
router.post('/createincident',incidentController.createIncident)
// router.delete('/deletebuilding/:id',buildingController.deleteBuilding)

router.get('/get-incident',incidentController.getIncidentJson)


export default router;