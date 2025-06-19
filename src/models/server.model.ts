
import  express, { Application } from "express";
import labels from "../labels";
import db_conecction from "../database/config";

class Server {
    private app : Application
    private port : string

    constructor() {
        this.app = express()
        this.port =  process.env.PORT || "3000";
        this.connectDB();
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(labels.LISTEN_SERVER + this.port) ;
        });
    }

    public async connectDB(){
        await db_conecction();

    }

}
export default Server;