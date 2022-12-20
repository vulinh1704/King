export declare class LikeService {
    private likeRepository;
    constructor();
    findAll: () => Promise<any>;
    save: (like: any) => Promise<any>;
    delete: (id: any) => Promise<any>;
}
