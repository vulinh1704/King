import {Blog} from "../model/blog";
import {AppDataSource} from "../data-source";
import {Request, Response} from "express";

export class BlogService {
    private blogRepository: any;

    constructor() {
        this.blogRepository = AppDataSource.getRepository(Blog);
    }

    find = async () => {
        return await this.blogRepository.find({
            relations: {
                categories: true,
            }
        })
    }

    create = async (blog) => {
        return await this.blogRepository.save(blog);
    }

    update = async (id, blog) => {
        const query = `UPDATE blog
                       SET title       = '${blog.title}',
                           image       = '${blog.image}',
                           status      = ${blog.status},
                           description = '${blog.description}'
                       WHERE id = ${id};`
        console.log(await this.blogRepository.query(query))
        return await this.blogRepository.query(query)
    }

    findByUser = async (id) =>{
        const query = `
      select * from blog 
      join user u on u.id = blog.userId where userId = ${id}
      `
        return await this.blogRepository.query(query)
    }
    findByStatus = async (id) =>{
        const query = `
            select * from blog where status = ${id}
        `
        return await this.blogRepository.query(query)
    }

    delete = async (req: Request, res: Response) => {
        let id = req.params.id
        await this.blogRepository.delete(id)
    }
    findU = async (id) => {
        let query = `SELECT * FROM blog where userId = ${id}`
        return  await this.blogRepository.query(query)
    }
    showStatus = async (id)=>{
        let query = `SELECT * FROM blog where status = ${id}`
        return await this.blogRepository.query(query)
    }
    showBlog = async (id)=>{
        let query = `select * from blog where blog.id=${id}`
        return await this.blogRepository.query(query)
    }
}


