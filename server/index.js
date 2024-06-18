import express from "express"; //express ko import kia
import cors from 'cors';
import dotenv from "dotenv";
import bodyParser from 'body-parser';

import Connection from './database/db.js';
import Router from './routes/route.js';

dotenv.config();

const app = express(); //express ko Initialise kia


app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);

const PORT = 8000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.listen(PORT, () => console.log(`server is running at port ${PORT}`));
//express ka server bnana ha listen function ye, ye 2 arguments leta ha pehla port number and second ye leta ha callback function jise agr hm kuch chate ha turant server run hone ke baad

