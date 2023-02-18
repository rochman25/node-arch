const db = require('../../../models');
const { Op } = require("sequelize");
class UserRepository {
    async getAllUserWithPaginate(payload){
        try{
            const { limit, offset, keyword } = payload
            return await db.User.findAll({
                offset,
                limit,
                where:{
                    first_name:{
                        [Op.like]: `%${keyword}%`
                    }
                }
            });
        }catch(err){
            throw new Error(err.original.message);
        }
    }

    async getUserById(id){
        try{
            return await db.User.findOne({
                where:{
                    id
                }
            });
        }catch(err){
            throw new Error(err.original.message);
        }
    }
}

module.exports = UserRepository;
