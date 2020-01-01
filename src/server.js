import express from 'express';
import cors from 'cors';
import { join } from 'path';
import { config } from 'dotenv';
import v1Router from './routes';
import './db';

config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Default Route
app.get('/', (req, res) =>
  res.status(200).json({
    status: 'Success',
    message: 'Welcome to NOGOG Backend'
  })
);

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
