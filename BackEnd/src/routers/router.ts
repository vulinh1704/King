import {blogRouter} from "./blogRouter";
import {Router} from "express";
export const router = Router();
router.use('/blogs', blogRouter)

