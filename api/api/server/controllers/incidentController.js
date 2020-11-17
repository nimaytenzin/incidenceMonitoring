import incidentService from '../services/incidentService'
import Util from '../utils/Utils'


const util=new Util();

class incidentController{
    

    // static async getBuildingwithBid(req,res){
    //     const {bid} = req.params
    //     util.setData(null)

    //     try{
    //         const buildings = await buildingService.getBuildingWithBid(bid)
    //         if(buildings.length){
    //             util.setSuccess(200,"Got buildings")
    //             util.setData(buildings)
    //             return util.send(res)
    //         }
    //         util.setFailure(200,"No record found")
    //         return util.send(res)
    //     }catch(err){
    //         console.log(err)
    //         util.setError(200,"Error")
    //         return util.send(res)
    //     }
    // }

    static async getAIncident(req,res){
        const {id} = req.params
        util.setData(null)

        try{
            const incidencts = await incidentService.getAIncident(id)
            if(incidencts){
                util.setSuccess(200,"got incident")
                util.setData(incidencts)
                return util.send(res)
            }
            util.setFailure(200,"No record found")
            return util.send(res)
        }catch(err){
            console.log(err)
            util.setError(200,"Error")
            return util.send(res)
        }
    }

    // static async updateBuilding(req,res){
    //     const building_id = req.body.building_id
    //     const data = req.body
    //     util.setData(null)
    //     if(!building_id){
    //         util.setError(400,"Building id is not set")
    //         return util.send(res)
    //     }

    //     try{
    //         const updateBuilding = await buildingService.updateBuilding(building_id,data)
    //         if(updateBuilding[0]==1){
    //             util.setSuccess(200,"updated building")
    //             return util.send(res)
    //         }
    //         util.setFailure(200,"Cannot update")
    //         return util.send(res)
    //     }catch(err){
    //         console.log(err)
    //         util.setError(400,"Error")
    //         return util.send(res)
    //     }
    // }
    
    static async createIncident(req,res){
        util.setData(null)
        const data = req.body
           
        try{
            const createIncident = await incidentService.createIncident(data)
            
            if(createIncident){
                util.setSuccess(200,"created incident")
                util.setData(createIncident)
                return util.send(res)
            }
            util.setFailure(200,"Cannot create")
            return util.send(res)
        }catch(err){
            console.log(err)
            util.setError(200,"Error")
            return util.send(res)
        }
    }


    static async getIncidentJson(req,res){
        util.setData(null)
        
        try{
            const incidents = await incidentService.getAllIncident()
            console.log(incidents.length);
            if(incidents.length > 0){
                const result = incidents.map((row)=>{
                    let geojson = {"type":"Point"}
                    geojson.coordinates = [row.lng,row.lat]
                    return geojson
                })
                return res.json(result)
            }
            return res.json({
                "msg":"error sending json"
            })
        }catch(err){
            return res.json({
                "msg":"error sending json"
            })
        }
    }

    // static async deleteBuilding(req,res){
    //     const {id} = req.params
    //     util.setData(null)

    //     try{
    //         const deleteBuilding = await buildingService.deleteBuilding(id)
    //         if(deleteBuilding){
    //             util.setSuccess(200,"Deleted building")
    //             return util.send(res)
    //         }
    //         util.setFailure(200,"Cannot delete building")
    //         return util.send(res)
    //     }catch(err){
    //         console.log(err)
    //         util.setError(400,"Error")
    //         return util.send(res)
    //     }
    // }

}
export default incidentController;