import Elysia from "elysia";
import { helloWorldRoute } from "./hello-world/hello-world.route";

const routes = new Elysia().use(helloWorldRoute);

export { routes };
