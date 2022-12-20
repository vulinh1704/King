"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeService = void 0;
const data_source_1 = require("../data-source");
const like_1 = require("../model/like");
class LikeService {
    constructor() {
        this.findAll = async () => {
            return await this.likeRepository.find();
        };
        this.save = async (like) => {
            return await this.likeRepository.save(like);
        };
        this.delete = async (id) => {
            return await this.likeRepository.delete(id);
        };
        this.likeRepository = data_source_1.AppDataSource.getRepository(like_1.Like);
    }
}
exports.LikeService = LikeService;
//# sourceMappingURL=likeService.js.map