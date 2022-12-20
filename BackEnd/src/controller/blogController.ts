import {Request, Response} from "express";
import BlogService from "../service/blogService";
import {blogRouter} from "../routers/blogRouter";

class BlogController {


    showAll = async (req : Request, res : Response)=>{
        let blogs = await BlogService.findBlogs()
        return res.status(200).json(blogs)
    }

    createBlog = async (req : Request, res : Response) =>{
        let blog = await BlogService.createBlog(req.body)
        return res.status(200).json(blog)
    }

    editBlogs  = async (req : Request, res : Response) =>{
        await BlogService.updateBlogs(req.params.id, req.body)
        return res.status(200).json({message:'ok'})

    }

    removeBlogs  = async (req : Request, res : Response) => {
         let   blogs =   await BlogService.deleteBlogs(req,res)
        return res.json(blogs)
    }

}
export default new BlogController;


