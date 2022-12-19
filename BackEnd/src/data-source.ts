import {DataSource} from "typeorm";
import "reflect-metadata";
export const AppDataSource = new DataSource({
    type: "mysql",

    host: "localhost",

    port: 3306,

    username: "root",

    password: "123456",

    database: "king",

    synchronize: true,

    entities: ["dist/src/model/*.js"]

})
