"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogService = void 0;
const typeorm_1 = require("typeorm");
const blog_1 = require("../model/blog");
class BlogService {
    constructor() {
        this.blogRepository = (0, typeorm_1.getConnection)().getRepository(blog_1.Blog);
    }
    findBlogs() {
    }
    saveBlog(blog) {
    }
}
exports.BlogService = BlogService;
//# sourceMappingURL=blogService.js.map