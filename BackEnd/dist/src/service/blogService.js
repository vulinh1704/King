"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const blog_1 = require("../model/blog");
const data_source_1 = require("../data-source");
class BlogService {
    constructor() {
        this.findBlogs = async () => {
            return await this.blogRepository.find();
        };
        this.createBlog = async (blog) => {
            return await this.blogRepository.save(blog);
        };
        this.updateBlogs = async (id, blog) => {
            const query = `UPDATE blog
SET title = '${blog.title}', image = '${blog.image}', status = ${blog.status}, description = '${blog.description}'
    WHERE id = ${id};`;
            return await this.blogRepository.query(query);
        };
        this.deleteBlogs = async (req, res) => {
            let id = req.params.id;
            await this.blogRepository.delete(id);
        };
        this.blogRepository = data_source_1.AppDataSource.getRepository(blog_1.Blog);
    }
}
exports.default = new BlogService();
//# sourceMappingURL=blogService.js.map