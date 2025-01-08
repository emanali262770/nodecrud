import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose'
import path from 'path'
import ProductRoutes from './Routes/productRoutes.js';
import cors from 'cors'

dotenv.config();

const app = express();
app.use(cors())
app.use(express.static(path.resolve(process.env.PUBLIC_DIR||'dist')));
// app.use('*',(res,req)=>{
//   // res.sendFile(path.resolve(__dirname,'dist','index.html'));
// })
app.use(express.json());
app.use('/products', ProductRoutes);

async function main() {
  await mongoose.connect(process.env.MONGO_uri)
  console.log('Database connected');
  
  
  
  

  const port =process.env.port
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  })
}

main().catch(err => console.log(err))