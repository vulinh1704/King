import {Router} from "express";
import {blogRouter} from "./blogRouter";

const router = Router();
router.use('/blogs', blogRouter);