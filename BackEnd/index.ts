import express from 'express';
import {AppDataSource} from "./src/data-source";

const app = express();
AppDataSource.initialize().then(connection => {
    console.log('Connect Database Success!')
});
app.listen(3000, () => {
    console.log('Server is running !')
});