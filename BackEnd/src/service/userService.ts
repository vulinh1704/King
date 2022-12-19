
import {User} from "../model/user";
import {AppDataSource} from "../data-source";

export class UserService {
    private userRepository: any;

    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
    }
    findAll = async () => {
        return await this.userRepository.find()
    }
    save = async (data) => {
        let registers = await this.userRepository.save(data)
        return registers
    }
    login = async (data)=>{
        let login = await this.userRepository.findOne(data)
        return login
    }
    delete = async (id)=>{
      const query = `DELETE FROM user WHERE id = ` + id ;
      return await this.userRepository.query(query)
    }





}
