import express from "express";
import AppInterface from "./Interfaces/App";
import ControllerInterface from "./Interfaces/Controller";
import cors from "cors";

class App {
    public app: express.Application;
    public port: number;
    public constructor({ controllers, port, basePath }: AppInterface) {
        this.app = express();
        this.port = port || parseInt(process.env.PORT);
        this.initializeMiddlewares();
        this.initializeControllers(controllers, basePath);
    }

    private initializeMiddlewares(): void {
        //all the middlewares
        this.app.use(cors());
        this.app.use(express.json());
    }

    private initializeControllers(controllers: ControllerInterface[], basePath: string): void {
        controllers.forEach((controller: ControllerInterface): void => {
            this.app.use(basePath + controller.path, controller.router);
        });
    }

    public listen(): void {
        this.app.listen(this.port, (): void => {
            console.log(`App listening on the port ${this.port}`);
        });
    }
}

export default App;
