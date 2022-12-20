"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const userService_1 = require("../service/userService");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class UserController {
    constructor() {
        this.findU = async (req, res) => {
            let user = await this.userService.findAll();
            return res.status(200).json(user);
        };
        this.register = async (req, res) => {
            let user = req.body;
            user.password = await bcrypt_1.default.hash(user.password, 10);
            let addUser = await this.userService.save(user);
            res.status(200).json(addUser);
        };
        this.loginU = async (req, res) => {
            let user = req.body;
            let userFind = await this.userService.login({ username: user.username });
            if (!userFind) {
                return res.status(200).json({
                    message: "User is not exit"
                });
            }
            else {
                let comparePassword = await bcrypt_1.default.compare(user.password, userFind.password);
                if (!comparePassword) {
                    return res.status(200).json({
                        message: "Pass is wrong"
                    });
                }
                else {
                    let payload = {
                        idUser: userFind._id,
                        username: userFind.username
                    };
                    let secret = 'abc';
                    let token = await jsonwebtoken_1.default.sign(payload, secret, { expressIn: 36000 });
                    return res.status(200).json({ token: token });
                }
            }
        };
        this.delete = async (req, res) => {
            await this.userService.delete(req.params.id);
            return res.status(204).json({ message: 'ok' });
        };
        this.userService = new userService_1.UserService();
    }
}
exports.UserController = UserController;
exports.default = new UserController();
//# sourceMappingURL=userController.js.map