import {AppDataSource} from "../data-source";
import {Like} from "../model/like";



export class LikeService{
    private likeRepository : any
    constructor() {
            this.likeRepository = AppDataSource.getRepository(Like)
    }
    findAll = async ()=>{
            return await this.likeRepository.find()
    }
    save  = async (like)=>{
        return await this.likeRepository.save(like)
    }
    delete = async (id) => {
        return await this.likeRepository.delete(id)
    }
}
