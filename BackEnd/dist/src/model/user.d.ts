import { Blog } from "./blog";
import { Comment } from "./comment";
export declare class User {
    readonly id: number;
    username: string;
    password: string;
    rePass: string;
    blogs: Blog[];
    comments: Comment[];
}
