import dotenv from "dotenv";
import Server from "./src/models/server.model";

dotenv.config();

const bootstrap = async (): Promise<void> => {
  try {
    const server = new Server();
    await server.initialize();
    server.listen();
  } catch (error) {
    console.error("Error starting the application", error);
    process.exit(1);
  }
};

void bootstrap();
