import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import {config} from 'dotenv';
config ({ path: "./config/.env" });



import Connection from './database/db.js';
import DefaultData from './default.js';
import Router from './routes/route.js';


export const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);

app.use("/api", Router);


const PORT = 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);




app.listen(process.env.PORT,() => console.log(`Server is running successfully on PORT ${process.env.PORT}`));


DefaultData();     


