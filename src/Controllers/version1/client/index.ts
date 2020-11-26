import { Router, Request, Response, RequestHandler } from "express";
import InternalErrorException from "../../../utils/Errors/InternalError.Exception";
import ClientService from "../../../Services/Client";
import { ValidationErrorMiddleware } from "../../../Middlewares/ValidationError";

class ClientOne {
    public path: string = "/v1/parse";
    public router: Router = Router();
    private middlewares: RequestHandler[];
    private clientService: ClientService;

    public constructor(middlewares: RequestHandler[] = []) {
        this.middlewares = middlewares;
        this.clientService = new ClientService();
        this.intializeMiddlewares();
        this.intializeRoutes();
    }

    private intializeMiddlewares(): void {
        this.middlewares.forEach((middleware): void => {
            this.router.use(middleware);
        });
    }

    private intializeRoutes(): void {
        this.router.post("/", ValidationErrorMiddleware, this.processClient);
    }

    private processClient = async (request: Request, response: Response): Promise<void> => {
        try {
            const data = await this.clientService.processTypeOne(request.body.data);
            response.json({
                success: true,
                data: data,
            });
        } catch (error) {
            InternalErrorException(response, error);
        }
    };
}

export default ClientOne;
