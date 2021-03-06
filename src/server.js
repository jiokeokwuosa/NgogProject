import express from 'express';
import cors from 'cors';
import { join } from 'path';
import { config } from 'dotenv';
import v1Router from './routes';
import './db';

config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());




app.use('/api/v1',v1Router);

const clientDir = join(__dirname, '../client/build');
app.use(express.static(clientDir));
app.get('*', (req, res) => res.sendFile(clientDir + '/index.html'));


app.listen(port, ()=>{
    console.log(`Server running at port ${port}`);
})
