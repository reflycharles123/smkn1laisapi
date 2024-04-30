import mongoose from "mongoose";
// konek
const connectDb = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://smkn1lais:databasesmk!@cluster0.0scz0v5.mongodb.net/smkn1lais?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
export default connectDb;
