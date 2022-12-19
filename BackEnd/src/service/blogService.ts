import {getConnection} from "typeorm";
import {Blog} from "../model/blog";

export class BlogService {
    private blogRepository: any;

    constructor() {
        this.blogRepository = getConnection().getRepository(Blog);
    }

    findBlogs() {

    }

    saveBlog(blog) {

    }
}