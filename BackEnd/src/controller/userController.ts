import {UserService} from "../service/userService";
import {Request, Response} from "express";

export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    getAll = async (req: Request, res: Response) => {
        let user = await this.userService.findAll()
        return res.status(200).json(user)
    }

    register = async (req: Request, res: Response) => {
        let userAdd = await this.userService.save(req.body)
        return res.status(201).json(userAdd)
    }

    login = async (req: Request, res: Response) => {
        let user = await this.userService.login(req.body);
        return res.status(200).json(user);
    }

    delete = async (req: Request, res: Response) => {
        await this.userService.delete(req.params.id)
        return res.status(204).json({message: 'ok'})
    }
}

export default new UserController()