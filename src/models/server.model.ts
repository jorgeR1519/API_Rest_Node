import express, { Application } from "express";
import { API_PREFIX, DEFAULT_PORT } from "../config/constants";
import dbConnection from "../database/config";
import { errorHandler, notFoundHandler } from "../middlewares/error.middleware";
import routes from "../routes";
import labels from "../labels";

class Server {
  private app: Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || DEFAULT_PORT;
    this.middlewares();
    this.routes();
    this.errorHandling();
  }

  public async initialize(): Promise<void> {
    await this.connectDB();
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(labels.LISTEN_SERVER + this.port);
    });
  }

  private middlewares(): void {
    this.app.use(express.json());
  }

  private routes(): void {
    this.app.use(API_PREFIX, routes);
  }

  private errorHandling(): void {
    this.app.use(notFoundHandler);
    this.app.use(errorHandler);
  }

  private async connectDB(): Promise<void> {
    await dbConnection();
  }
}

export default Server;
