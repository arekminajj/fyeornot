import { Router } from "./deps.ts";

const router = new Router();

router
  .get("/", (ctx: any) => {
    ctx.response.body = "main get page 1";
    console.log("hello");
  })

export default router;
