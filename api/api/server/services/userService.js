import database from '../src/models';

class userService{
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

    static async getAUser(id){
        try{
            const user = database.User.findOne({
                where:{id:Number(id)}
            })
            return user
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

    static async createUser(data){
        try{
            const user = await database.User.create(data)
            return user
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
export default userService;