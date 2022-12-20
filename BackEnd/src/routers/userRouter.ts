import {Router} from "express";
import UserController from "../controller/userController";

export const userRouter = Router();
userRouter.post('/register', UserController.register)
userRouter.get('/',UserController.findU)
userRouter.delete('/:id',UserController.delete)
// userRouter.post('/login', UserController.loginU)