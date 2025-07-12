import { Elysia } from "elysia";
import { routes } from "./main/routes";

const app = new Elysia();

app.use(routes).listen(3000, (server) => {
  console.log(`Server is running in port: ${server.port}`);
});
