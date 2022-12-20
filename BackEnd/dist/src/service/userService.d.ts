export declare class UserService {
    private userRepository;
    constructor();
    findAll: () => Promise<void>;
    save: (user: any) => Promise<any>;
    login: (username: any) => Promise<any>;
    delete: (id: any) => Promise<any>;
}
