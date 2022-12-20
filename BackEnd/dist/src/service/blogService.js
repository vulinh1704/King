"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogService = void 0;
const blog_1 = require("../model/blog");
const data_source_1 = require("../data-source");
class BlogService {
    constructor() {
        this.find = async () => {
            return await this.blogRepository.find({
                relation: {
                    category: true
                }
            });
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
            return await this.blogRepository.query(query);
        };
        this.delete = async (req, res) => {
            let id = req.params.id;
            await this.blogRepository.delete(id);
        };
        this.findU = async (id) => {
            let query = `SELECT * FROM blog where userId = ${id}`;
            return await this.blogRepository.query(query);
        };
        this.showStatus = async (id) => {
            let query = `SELECT * FROM blog where status = ${id}`;
            return await this.blogRepository.query(query);
        };
        this.showBlog = async (id) => {
            let query = `select * from blog where blog.id=${id}`;
            return await this.blogRepository.query(query);
        };
        this.blogRepository = data_source_1.AppDataSource.getRepository(blog_1.Blog);
    }
}
exports.BlogService = BlogService;
//# sourceMappingURL=blogService.js.map