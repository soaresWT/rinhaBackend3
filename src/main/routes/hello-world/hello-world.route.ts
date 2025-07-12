import Elysia from "elysia";

export const helloWorldRoute = new Elysia().get("/", (req) => {
  return req.status(200, "[SUCCESS] [RUNNING] Hello World!");
});
