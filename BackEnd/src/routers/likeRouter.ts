import {Router} from "express";
import likeController from "../controller/likeController";


export const likeRouter = Router()
likeRouter.post('',likeController.createLike)
likeRouter.get('',likeController.getALl)
likeRouter.delete('/:id',likeController.deleteLike)


