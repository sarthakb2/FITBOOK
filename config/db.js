import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectToDatabase = async () => {
  try {
    const dbUri = process.env.DATABASE_URL;
    if (!dbUri) {
      throw new Error('DATABASE_URL is not defined in .env file');
    }

    await mongoose.connect(dbUri);

    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

export default connectToDatabase;
