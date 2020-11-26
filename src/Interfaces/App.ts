import Controller from "./Controller";

interface AppInterface {
    controllers: Controller[];
    port?: number;
    basePath?: string;
}

export default AppInterface;
