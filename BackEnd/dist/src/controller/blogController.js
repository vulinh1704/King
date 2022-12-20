"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const blogService_1 = __importDefault(require("../service/blogService"));
class BlogController {
    constructor() {
        this.showAll = async (req, res) => {
            let blogs = await blogService_1.default.findBlogs();
            return res.status(200).json(blogs);
        };
        this.createBlog = async (req, res) => {
            let blog = await blogService_1.default.createBlog(req.body);
            return res.status(200).json(blog);
        };
        this.editBlogs = async (req, res) => {
            await blogService_1.default.updateBlogs(req.params.id, req.body);
            return res.status(200).json({ message: 'ok' });
        };
        this.removeBlogs = async (req, res) => {
            let blogs = await blogService_1.default.deleteBlogs(req, res);
            return res.json(blogs);
        };
    }
}
exports.default = new BlogController;
//# sourceMappingURL=blogController.js.map