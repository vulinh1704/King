import {BlogService} from "../service/blogService";

export class BlogController {
    private blogService: BlogService;
    constructor() {
        this.blogService = new BlogService();
    }
    getBlogs() {

    }
}