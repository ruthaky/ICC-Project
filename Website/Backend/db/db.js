import mongoose from 'mongoose';

export const connectToDatabase = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://user:userpassword@cluster0.kojmbxl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connectedd: ${conn.connection.host}`);
    console.log('API URL:', process.env.REACT_APP_NODE_API_URL);

  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
