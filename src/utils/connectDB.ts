import mongoose from 'mongoose';
import config from 'config';

const dbUrl = `mongodb+srv://${config.get('dbName')}:${config.get(
  'dbPass'
)}@cluster0.dqogarz.mongodb.net/hackatonF5_db`;

const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl);
    console.log('Database connected...');
  } catch (error: any) {
    console.log(error.message);
    setTimeout(connectDB, 5000);
  }
};

export default connectDB;
