import {Router} from "express";
import {userRouter} from "./userRouter";
import {categoryRouter} from "./categoryRouter";
import {commentRouter} from "./commentRouter";

export const router = Router();
router.use('/users', userRouter);
router.use('/category',categoryRouter)
router.use('/comment',commentRouter)
router.use('/blogs', blogRouter)