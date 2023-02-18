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
}

module.exports = UserRepository;
