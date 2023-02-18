const userRepository = require('../user/UserRepository')
class UserService {
    constructor() {
        this.userRepository = new userRepository();
    }
    async getAllUser(request){
        try{
            return await this.userRepository.getAllUserWithPaginate(request);
        }catch(err){
            throw new Error(err.message);
        }
    }
}

module.exports = UserService
