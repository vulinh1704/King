"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogController = void 0;
const blogService_1 = require("../service/blogService");
class BlogController {
    constructor() {
        this.blogService = new blogService_1.BlogService();
    }
    getBlogs() {
    }
}
exports.BlogController = BlogController;
//# sourceMappingURL=blogController.js.map