import database from '../src/models';

class incidentService{
    // static async getBuildingWithBid(bid){
    //     try{
    //         const buildings = database.Building.findAll({
    //             where:{structure_id: Number(bid)}
    //         })
    //         return buildings
    //     }catch(err){
    //         throw err
    //     }
    // }

    static async getAIncident(id){
        try{
            const incident = database.Incident.findOne({
                where:{id:Number(id)}
            })
            return incident
        }catch(err){
            throw err
        }
    }

    static async getAllIncident(){
        try{
            const incident = database.Incident.findAll()
            return incident
        }catch(err){
            throw err
        }
    }

    

    // static async updateBuilding(building_id,data){
    //     try{
    //         const building = database.Building.findOne({
    //             where:{id:Number(building_id)}
    //         })
    //         if(building){
    //             const updatedBuilding = await database.Building.update(data,{
    //                 where: {id: Number(building_id)}
    //             })
    //             return updatedBuilding
    //         }
    //         return null
    //     }catch(err){
    //         throw err
    //     }
    // }

    static async createIncident(data){
        try{
            const incident = await database.Incident.create(data)
            return incident
        }catch(error){
            throw error
        }
    }

    // static async deleteBuilding(id){
    //     try{
    //         const toDelete=await database.Building.findOne({
    //             where:{id:Number(id)}
    //         })

    //         if(toDelete){
    //             const deletedItem=await database.Building.destroy({
    //                 where:{id:Number(id)}
    //             })
    //             return deletedItem
    //         }
    //         return null
    //     }catch(error){
    //         throw error
    //     }
    // }
}
export default incidentService;