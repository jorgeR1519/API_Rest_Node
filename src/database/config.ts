import mongoose from "mongoose";

const dbConnection = async (): Promise<void> => {
  const databaseUrl = process.env.URL_DATABASE || process.env.URl_DATABASE;

  if (!databaseUrl) {
    throw new Error("Database URL is not configured");
  }

  try {
    await mongoose.connect(databaseUrl);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed", error);
    throw new Error("Error al conectar a la base de datos");
  }
};

export default dbConnection;
