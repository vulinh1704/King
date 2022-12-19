import { Request, Response } from "express";
export declare class UserController {
    private userService;
    constructor();
    findU: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    register: (req: Request, res: Response) => Promise<void>;
    loginU: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    delete: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: UserController;
export default _default;
