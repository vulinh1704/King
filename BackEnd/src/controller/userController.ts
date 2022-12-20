import {UserService} from "../service/userService";
import {Request, Response} from "express";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import {User} from "../model/user";

export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    findU = async (req: Request, res: Response) => {
        let user = await this.userService.findAll()
        return res.status(200).json(user)
    }
    register = async (req: Request, res: Response) => {
        let user = req.body;
        user.password = await bcrypt.hash(user.password,10)
        let addUser = await this.userService.save(user)
        res.status(200).json(addUser)
    }
    loginU = async (req: Request, res: Response) => {
        let user = req.body
        let userFind = await this.userService.login({username: user.username});
        if (!userFind) {
            return res.status(200).json({
                message: "User is not exit"
            })
        }else {
            let comparePassword = await bcrypt.compare(user.password,userFind.password)
            if (!comparePassword){
                return res.status(200).json({
                    message:"Pass is wrong"
                })
            }else {
             let payload = {
                 idUser:userFind._id,
                 username:userFind.username
             }
             let secret = 'abc'
                let token = await jwt.sign(payload,secret,{expressIn:36000})
                return res.status(200).json({token:token})
            }
        }
    }
    delete = async (req: Request, res: Response) => {
        await this.userService.delete(req.params.id)
        return res.status(204).json({message: 'ok'})
    }
}

export default new UserController()