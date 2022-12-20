"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_1 = require("../model/user");
const data_source_1 = require("../data-source");
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserService {
    constructor() {
        this.findAll = async () => {
            return await this.userRepository.find();
        };
        this.save = async (user) => {
            let query = `select *
                     from user
                     where username = '${user.username}'`;
            let userFind = await this.userRepository.query(query);
            if (userFind.length != 0) {
                return {
                    message: "has the same name"
                };
            }
            else {
                user.password = await bcrypt_1.default.hash(user.password, 10);
                return await this.userRepository.save(user);
            }
        };
        this.login = async (data) => {
            let login = await this.userRepository.findOne(data);
            return login;
        };
        this.delete = async (id) => {
            const query = `DELETE
                       FROM user
                       WHERE id = ` + id;
            return await this.userRepository.query(query);
        };
        this.userRepository = data_source_1.AppDataSource.getRepository(user_1.User);
    }
}
exports.UserService = UserService;
//# sourceMappingURL=userService.js.map