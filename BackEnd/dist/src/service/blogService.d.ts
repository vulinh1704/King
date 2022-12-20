import { Request, Response } from "express";
declare class BlogService {
    private blogRepository;
    constructor();
    findBlogs: () => Promise<any>;
    createBlog: (blog: any) => Promise<any>;
    updateBlogs: (id: any, blog: any) => Promise<any>;
    deleteBlogs: (req: Request, res: Response) => Promise<void>;
}
declare const _default: BlogService;
export default _default;
