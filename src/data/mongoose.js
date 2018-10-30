import Mongoose from 'mongoose';
import config from '../config';

Mongoose.Promise = global.Promise;

const connectToDb = async () => {
  try {
    await Mongoose.connect(config.databaseUrl, { useNewUrlParser: true });
    console.info('Connected to mongo!!!');
  } catch (err) {
    console.info('Could not connect to MongoDB');
  }
};

export default connectToDb;
