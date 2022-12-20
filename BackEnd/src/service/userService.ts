import {User} from "../model/user";
import {AppDataSource} from "../data-source";
import bcrypt from 'bcrypt';

export class UserService {
    private userRepository: any;

    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
    }

    findAll = async () => {
        return await this.userRepository.find()
    }
    save = async (user) => {
        let query = `select *
                     from user
                     where username = '${user.username}'`
        let userFind = await this.userRepository.query(query);
        if (userFind.length != 0) {
            return {
                message: "has the same name"
            }
        } else {
            user.password = await bcrypt.hash(user.password, 10)
            return await this.userRepository.save(user)
        }
    }
    login = async (data) => {
        let login = await this.userRepository.findOne(data)
        return login
    }
    delete = async (id) => {
        const query = `DELETE
                       FROM user
                       WHERE id = ` + id;
        return await this.userRepository.query(query)
    }

}
