"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogService = void 0;
const blog_1 = require("../model/blog");
const data_source_1 = require("../data-source");
class BlogService {
    constructor() {
        this.find = async () => {
            return await this.blogRepository.find();
        };
        this.create = async (blog) => {
            return await this.blogRepository.save(blog);
        };
        this.update = async (id, blog) => {
            const query = `UPDATE blog
                       SET title       = '${blog.title}',
                           image       = '${blog.image}',
                           status      = ${blog.status},
                           description = '${blog.description}'
                       WHERE id = ${id};`;
            console.log(await this.blogRepository.query(query));
            return await this.blogRepository.query(query);
        };
        this.findByUser = async (id) => {
            const query = `
      select * from blog 
      join user u on u.id = blog.userId where userId = ${id}
      `;
            return await this.blogRepository.query(query);
        };
        this.findByStatus = async (id) => {
            const query = `
            select * from blog where status = ${id}
        `;
            return await this.blogRepository.query(query);
        };
        this.delete = async (req, res) => {
            let id = req.params.id;
            await this.blogRepository.delete(id);
        };
        this.blogRepository = data_source_1.AppDataSource.getRepository(blog_1.Blog);
    }
}
exports.BlogService = BlogService;
//# sourceMappingURL=blogService.js.map