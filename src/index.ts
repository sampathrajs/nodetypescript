import "./utils/InitializeEnv";

import App from "./App";
import ClientOne from "./Controllers/version1/client";
import ClientTwo from "./Controllers/version2/client";

const applicationBasePath = "/api";

const app = new App({
    controllers: [new ClientOne(), new ClientTwo()],
    basePath: applicationBasePath,
});

app.listen();
