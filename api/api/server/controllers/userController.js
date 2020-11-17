import userService from '../services/userService'
import Util from '../utils/Utils'


const util=new Util();

class userController{
    

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

    static async getAUser(req,res){
        const {id} = req.params
        util.setData(null)

        try{
            const users = await userService.getAUser(id)
            if(users){
                util.setSuccess(200,"got User")
                util.setData(users)
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
    
    static async createUser(req,res){
        util.setData(null)
        const data = req.body
           
        try{
            const createUser = await userService.createUser(data)
            
            if(createUser){
                util.setSuccess(200,"created User")
                util.setData(createUser)
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
export default userController;