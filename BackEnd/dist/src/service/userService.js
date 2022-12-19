"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_1 = require("../model/user");
const data_source_1 = require("../data-source");
class UserService {
    constructor() {
        this.findAll = async () => {
            return await this.userRepository.find();
        };
        this.save = async (data) => {
            let registers = await this.userRepository.save(data);
            return registers;
        };
        this.login = async (data) => {
            let login = await this.userRepository.findOne(data);
            return login;
        };
        this.delete = async (id) => {
            const query = `DELETE FROM user WHERE id = ` + id;
            return await this.userRepository.query(query);
        };
        this.userRepository = data_source_1.AppDataSource.getRepository(user_1.User);
    }
}
exports.UserService = UserService;
//# sourceMappingURL=userService.js.map