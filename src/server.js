import express from 'express';
// import cors from 'cors';
import { join } from 'path';
import { config } from 'dotenv';
import v1Router from './routes';
import './db';

config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors());
// app.options('*',cors());
// const allowCrossDomain = function(req,res,next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   next();  
// }
// app.use(allowCrossDomain);



app.use('/api/v1',v1Router);

if (app.get('env') === 'production') {
  console.log('Production activated');
  const clientDir = join(__dirname, '../client/build');
  app.use(express.static(clientDir));
  app.get('*', (req, res) => res.sendFile(clientDir + '/index.html'));
}

app.listen(port, ()=>{
    console.log(`Server running at port ${port}`);
})
