import {Blog} from "../model/blog";
import {AppDataSource} from "../data-source";
import {Request, Response} from "express";


class BlogService {
    private blogRepository: any;

    constructor() {
        this.blogRepository = AppDataSource.getRepository(Blog);
    }

    findBlogs = async ()=>{
        return await this.blogRepository.find()
    }

    createBlog  = async (blog)=>{
        return await this.blogRepository.save(blog);
    }

    updateBlogs = async (id,blog) =>{
        const query = `UPDATE blog
SET title = '${blog.title}', image = '${blog.image}', status = ${blog.status}, description = '${blog.description}'
    WHERE id = ${id};`
        return await this.blogRepository.query(query)
    }
    deleteBlogs = async (req : Request, res : Response) =>{
        let id = req.params.id
        await  this.blogRepository.delete(id)
    }

}

export  default  new BlogService()

