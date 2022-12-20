"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const likeService_1 = require("../service/likeService");
class LikeController {
    constructor() {
        this.getALl = async (req, res) => {
            let like = await this.likeService.findAll();
            return res.status(200).json(like);
        };
        this.createLike = async (req, res) => {
            let like = await this.likeService.save(req.body);
            return res.status(200).json(like);
        };
        this.deleteLike = async (req, res) => {
            await this.likeService.delete(req.params.id);
            return res.status(200).json({ message: 'perfect' });
        };
        this.likeService = new likeService_1.LikeService();
    }
}
exports.default = new LikeController();
//# sourceMappingURL=likeController.js.map